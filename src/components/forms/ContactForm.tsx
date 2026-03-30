"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/validations";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const orgOptions = [
  { value: "small-business",  label: "Small Business" },
  { value: "medium-business", label: "Medium Business / Enterprise" },
  { value: "education",       label: "School / Education Institute" },
  { value: "other",           label: "Other" },
];

const projectOptions = [
  { value: "web-design",         label: "Web Design" },
  { value: "web-development",    label: "Web Development / App" },
  { value: "ecommerce",          label: "eCommerce Store" },
  { value: "digital-marketing",  label: "Digital Marketing / SEO" },
  { value: "school-portal",      label: "School / Education Portal" },
  { value: "other",              label: "Other / Not Sure" },
];

const budgetOptions = [
  { value: "under-15k",   label: "Under ₹15,000" },
  { value: "15k-50k",     label: "₹15,000 – ₹50,000" },
  { value: "50k-150k",    label: "₹50,000 – ₹1,50,000" },
  { value: "150k-plus",   label: "₹1,50,000+" },
  { value: "not-sure",    label: "Not sure yet" },
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to send");
      setStatus("success");
      reset();
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="glass-card p-10 text-center border-emerald-500/30">
        <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={36} className="text-emerald-400" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-white mb-3">Message Sent!</h3>
        <p className="text-dark-200 mb-6">Thank you for reaching out. We&apos;ll review your enquiry and get back to you within 1 business day.</p>
        <button onClick={() => setStatus("idle")} className="btn-secondary text-sm">
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 space-y-5">
      <h2 className="font-heading text-2xl font-bold text-white mb-6">Send Us a Message</h2>

      {/* Name & Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="form-label">Full Name *</label>
          <input id="name" {...register("name")} placeholder="Your name" className="form-input" />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="form-label">Email Address *</label>
          <input id="email" type="email" {...register("email")} placeholder="you@example.com" className="form-input" />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      {/* Phone & Org Type */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input id="phone" type="tel" {...register("phone")} placeholder="+91 98765 43210" className="form-input" />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="orgType" className="form-label">Organisation Type *</label>
          <select id="orgType" {...register("orgType")} className="form-input">
            <option value="">Select type...</option>
            {orgOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          {errors.orgType && <p className="text-red-400 text-xs mt-1">{errors.orgType.message}</p>}
        </div>
      </div>

      {/* Project Type & Budget */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="projectType" className="form-label">Project Type *</label>
          <select id="projectType" {...register("projectType")} className="form-input">
            <option value="">Select project...</option>
            {projectOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          {errors.projectType && <p className="text-red-400 text-xs mt-1">{errors.projectType.message}</p>}
        </div>
        <div>
          <label htmlFor="budget" className="form-label">Budget Range</label>
          <select id="budget" {...register("budget")} className="form-input">
            <option value="">Select budget...</option>
            {budgetOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="form-label">Tell Us About Your Project *</label>
        <textarea
          id="message"
          {...register("message")}
          rows={5}
          placeholder="Describe what you need, your goals, any specific requirements..."
          className="form-input resize-none"
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
      </div>

      {/* Error */}
      {status === "error" && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30">
          <AlertCircle size={18} className="text-red-400 flex-shrink-0" />
          <p className="text-sm text-red-300">{errorMsg}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        id="contact-submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <><Loader2 size={18} className="animate-spin" /> Sending...</>
        ) : (
          <><Send size={18} /> Send Message</>
        )}
      </button>

      <p className="text-xs text-dark-300 text-center">
        We respond within 1 business day. No spam, ever.
      </p>
    </form>
  );
}
