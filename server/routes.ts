import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactFormSchema, type ContactSubmissionResult } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // Create transporter for sending emails
      const transporter = nodemailer.createTransporter({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER || 'alexjmcdonald1@gmail.com',
          pass: process.env.EMAIL_PASSWORD || 'default_password'
        }
      });

      // Email to Alex McDonald
      const mailOptions = {
        from: process.env.EMAIL_USER || 'alexjmcdonald1@gmail.com',
        to: 'alexjmcdonald1@gmail.com',
        subject: `Portfolio Contact: ${validatedData.subject}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>From:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        `
      };

      // Auto-reply to sender
      const autoReplyOptions = {
        from: process.env.EMAIL_USER || 'alexjmcdonald1@gmail.com',
        to: validatedData.email,
        subject: 'Thank you for your message - Alex McDonald',
        html: `
          <h3>Thank you for reaching out!</h3>
          <p>Hi ${validatedData.firstName},</p>
          <p>Thank you for your message. I have received your inquiry and will get back to you within 24-48 hours.</p>
          <p>Best regards,<br>Alex McDonald<br>Strategic Communications & Marketing Professional</p>
        `
      };

      await transporter.sendMail(mailOptions);
      await transporter.sendMail(autoReplyOptions);

      const result: ContactSubmissionResult = {
        success: true,
        message: "Thank you for your message! I will get back to you within 24-48 hours."
      };

      res.json(result);
    } catch (error) {
      console.error('Contact form error:', error);
      
      const result: ContactSubmissionResult = {
        success: false,
        message: "Sorry, there was an error sending your message. Please try again or contact me directly at alexjmcdonald1@gmail.com."
      };

      res.status(500).json(result);
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
