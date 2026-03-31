import nodemailer from "nodemailer";
import type { ContactForm } from "./contact.validation";

export class EmailService {
  private static instance: EmailService;
  private transporter: nodemailer.Transporter;
  private from: string;
  private to: string;

  private constructor() {
    this.from = process.env.SMTP_FROM_EMAIL!;
    this.to = process.env.SMTP_TO_EMAIL!;
    const port = Number(process.env.SMTP_PORT) || 587;
    const secure = port === 465; // Use SSL for 465, STARTTLS for 587
    
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  public static getInstance() {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  public generateAdminEmailContent(data: ContactForm) {
    return {
      from: this.from,
      to: this.to,
      subject: `New Contact Form Submission from ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Message:</b></p>
        <p>${data.message.replace(/\n/g, "<br/>")}</p>
      `
    };
  }

  public generateUserEmailContent(data: ContactForm) {
    return {
      from: this.from,
      to: data.email,
      subject: "Thank you for contacting Bricks Systems!",
      text: `Hi ${data.name},\n\nThank you for reaching out to Bricks Systems. We have received your message and will get back to you soon.\n\nBest regards,\nBricks Systems Team`,
      html: `<p>Hi ${data.name},</p><p>Thank you for reaching out to Bricks Systems. We have received your message and will get back to you soon.</p><p>Best regards,<br/>Bricks Systems Team</p>`
    };
  }

  public async sendEmails(adminMail: any, userMail: any) {
    try {
      // Send admin notification
      console.log("Sending admin email to:", adminMail.to);
      await this.transporter.sendMail(adminMail);
      console.log("Admin email sent successfully");
      
      // Send user confirmation
      console.log("Sending user email to:", userMail.to);
      await this.transporter.sendMail(userMail);
      console.log("User email sent successfully");
    } catch (error) {
      console.error("SMTP Error Details:", {
        message: error instanceof Error ? error.message : String(error),
        code: error instanceof Error && 'code' in error ? (error as any).code : undefined,
      });
      throw error;
    }
  }
}
