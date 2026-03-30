import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[+\d\s\-()]{7,20}$/, "Please enter a valid phone number").optional().or(z.literal("")),
  orgType: z.enum(["small-business", "medium-business", "education", "other"], {
    errorMap: () => ({ message: "Please select your organisation type" }),
  }),
  projectType: z.enum(["web-design", "web-development", "ecommerce", "digital-marketing", "school-portal", "other"], {
    errorMap: () => ({ message: "Please select a project type" }),
  }),
  budget: z.enum(["under-15k", "15k-50k", "50k-150k", "150k-plus", "not-sure"]).optional(),
  message: z.string().min(20, "Please describe your project in at least 20 characters").max(2000),
});

export type ContactFormData = z.infer<typeof contactSchema>;
