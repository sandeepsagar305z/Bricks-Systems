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
    console.log("Contact form received:", JSON.stringify(body, null, 2));

    // Validate the request data
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      console.error("Validation failed:", validationResult.error.errors);
      return createApiError("Invalid form data: " + JSON.stringify(validationResult.error.errors), 400);
    }

    const contactData = validationResult.data;
    console.log("Validation passed, contact data:", contactData);

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
