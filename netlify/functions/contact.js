import nodemailer from 'nodemailer';

export const handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    const { firstName, lastName, email, subject, message } = JSON.parse(event.body);

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          success: false, 
          message: 'All fields are required' 
        })
      };
    }

    // Create transporter for sending emails
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // Email to Alex McDonald
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'alexjmcdonald1@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>From:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    // Auto-reply to sender
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for your message - Alex McDonald',
      html: `
        <h3>Thank you for reaching out!</h3>
        <p>Hi ${firstName},</p>
        <p>Thank you for your message. I have received your inquiry and will get back to you within 24-48 hours.</p>
        <p>Best regards,<br>Alex McDonald<br>Strategic Communications & Marketing Professional</p>
      `
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({
        success: true,
        message: "Thank you for your message! I will get back to you within 24-48 hours."
      })
    };
  } catch (error) {
    console.error('Contact form error:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({
        success: false,
        message: "Sorry, there was an error sending your message. Please try again or contact me directly at alexjmcdonald1@gmail.com."
      })
    };
  }
};