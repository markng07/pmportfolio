import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // Here you would typically send an email using a service like Nodemailer
      // For now, we'll just log the data and return success
      console.log("Contact form submission:", validatedData);
      
      // TODO: Implement actual email sending
      // Example:
      // await sendEmail({
      //   to: "nguyeduc@iu.edu",
      //   subject: `Portfolio Contact: ${validatedData.subject}`,
      //   html: `
      //     <h3>New message from ${validatedData.name}</h3>
      //     <p><strong>Email:</strong> ${validatedData.email}</p>
      //     <p><strong>Subject:</strong> ${validatedData.subject}</p>
      //     <p><strong>Message:</strong></p>
      //     <p>${validatedData.message}</p>
      //   `
      // });
      
      res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error("Contact form error:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      res.status(500).json({ 
        success: false, 
        message: "Failed to send message" 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    // TODO: Implement resume download functionality
    // This would typically serve a PDF file
    res.json({ message: "Resume download functionality to be implemented" });
  });

  const httpServer = createServer(app);
  return httpServer;
}
