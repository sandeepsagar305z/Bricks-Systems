import { NextRequest } from "next/server";
import { contactSchema } from "@/lib/services/contact.validation";
import { EmailService } from "@/lib/services/email.service";

// Helper for error responses
function createApiError(message: string, status = 500) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

// Helper for success responses
function createApiSuccess(data: any, status = 200) {
  return new Response(JSON.stringify({ success: true, ...data }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

// Check if email service is configured
function validateEmailService() {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.SMTP_FROM_EMAIL || !process.env.SMTP_TO_EMAIL) {
    return createApiError("SMTP credentials are missing. Check your .env.local and restart the server.", 500);
  }
  return null;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request data
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return createApiError("Invalid form data", 400);
    }

    const contactData = validationResult.data;

    // Check if email service is configured
    const emailValidationError = validateEmailService();
    if (emailValidationError) {
      return emailValidationError;
    }

    // Generate email content using the email service
    const emailService = EmailService.getInstance();
    const adminEmailContent = emailService.generateAdminEmailContent(contactData);
    const userEmailContent = emailService.generateUserEmailContent(contactData);

    // Send both emails with fallback
    try {
      await emailService.sendEmails(adminEmailContent, userEmailContent);
    } catch (emailError) {
      console.error("Failed to send emails:", emailError);
      return createApiError("Failed to send emails", 500);
    }

    return createApiSuccess({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("API error:", error);
    return createApiError("Internal server error", 500);
  }
}
