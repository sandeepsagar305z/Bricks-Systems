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
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
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
      text: `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || "-"}\nService: ${data.service}\nMessage: ${data.message}`,
      html: `<p><b>Name:</b> ${data.name}</p><p><b>Email:</b> ${data.email}</p><p><b>Company:</b> ${data.company || "-"}</p><p><b>Service:</b> ${data.service}</p><p><b>Message:</b> ${data.message}</p>`
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
    // Send admin notification
    await this.transporter.sendMail(adminMail);
    // Send user confirmation
    await this.transporter.sendMail(userMail);
  }
}
