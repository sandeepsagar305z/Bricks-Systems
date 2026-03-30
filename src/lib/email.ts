import nodemailer from "nodemailer";

interface EmailPayload {
  name: string;
  email: string;
  phone?: string;
  orgType: string;
  projectType: string;
  budget?: string;
  message: string;
}

function formatLabel(val: string): string {
  return val
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function sendContactEmail(data: EmailPayload): Promise<void> {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const htmlBody = `
    <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #10101a; color: #f0f0ff; border-radius: 16px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #6C63FF, #00D4FF); padding: 28px 32px;">
        <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: white;">New Project Enquiry</h1>
        <p style="margin: 4px 0 0; color: rgba(255,255,255,0.8); font-size: 14px;">Bricks &amp; Systems — Contact Form</p>
      </div>
      <div style="padding: 32px;">
        <table style="width: 100%; border-collapse: collapse;">
          ${[
            ["Name", data.name],
            ["Email", `<a href="mailto:${data.email}" style="color: #6C63FF;">${data.email}</a>`],
            ["Phone", data.phone || "Not provided"],
            ["Organisation Type", formatLabel(data.orgType)],
            ["Project Type", formatLabel(data.projectType)],
            ["Budget Range", data.budget ? formatLabel(data.budget) : "Not specified"],
          ]
            .map(
              ([label, value]) => `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #a0a0c0; font-size: 13px; width: 40%; font-weight: 600;">${label}</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 14px;">${value}</td>
            </tr>`
            )
            .join("")}
        </table>
        <div style="margin-top: 24px; padding: 20px; background: rgba(108,99,255,0.08); border: 1px solid rgba(108,99,255,0.2); border-radius: 12px;">
          <p style="margin: 0 0 8px; color: #a0a0c0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Message</p>
          <p style="margin: 0; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${data.message}</p>
        </div>
        <div style="margin-top: 24px; text-align: center;">
          <a href="mailto:${data.email}" style="display: inline-block; padding: 12px 28px; background: linear-gradient(135deg, #6C63FF, #00D4FF); color: white; text-decoration: none; border-radius: 50px; font-weight: 700; font-size: 14px;">Reply to ${data.name}</a>
        </div>
      </div>
      <div style="padding: 20px 32px; background: rgba(255,255,255,0.03); text-align: center; font-size: 12px; color: #505070;">
        Bricks &amp; Systems | hello@bricksandsystems.com
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Bricks & Systems Website" <${process.env.GMAIL_USER}>`,
    to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER,
    replyTo: data.email,
    subject: `New Enquiry from ${data.name} — ${formatLabel(data.projectType)}`,
    html: htmlBody,
  });
}
