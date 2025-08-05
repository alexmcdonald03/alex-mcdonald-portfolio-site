import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { contactFormSchema, type ContactForm, type ContactSubmissionResult } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json() as Promise<ContactSubmissionResult>;
    },
    onSuccess: (result) => {
      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: result.message,
        });
        form.reset();
      } else {
        toast({
          title: "Error sending message",
          description: result.message,
          variant: "destructive",
        });
      }
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly at alexjmcdonald1@gmail.com",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactForm) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "Alexjmcdonald1@gmail.com",
      href: "mailto:Alexjmcdonald1@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone", 
      value: "+1-613-863-1662",
      href: "tel:+16138631662"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-redbull mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm excited to connect with forward-thinking teams looking to leverage fresh, strategic communication and marketing talent. If you're interested in discussing opportunities or collaborations, please reach out!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="flex items-center space-x-4" data-testid={`contact-info-${index}`}>
                  <div className="w-12 h-12 bg-redbull rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <a 
                      href={info.href} 
                      className="text-gray-300 hover:text-white transition-colors"
                      data-testid={`contact-link-${index}`}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6">Send Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">First Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Your first name"
                            className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[hsl(0,77%,47%)]"
                            data-testid="input-firstName"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Last Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Your last name"
                            className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[hsl(0,77%,47%)]"
                            data-testid="input-lastName"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="your.email@example.com"
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[hsl(0,77%,47%)]"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Subject</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Message subject"
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[hsl(0,77%,47%)]"
                          data-testid="input-subject"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={4}
                          placeholder="Your message..."
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[hsl(0,77%,47%)] resize-none"
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-redbull hover:bg-redbull-dark text-white py-3 px-6"
                  data-testid="button-send-message"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
