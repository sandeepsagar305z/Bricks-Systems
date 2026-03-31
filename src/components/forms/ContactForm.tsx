"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactForm as ContactFormData } from "@/lib/services/contact.validation";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

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
      <div className="space-y-5">
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
      </div>
      {status === "error" && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30">
          <AlertCircle size={18} className="text-red-400 flex-shrink-0" />
          <p className="text-sm text-red-300">{errorMsg}</p>
        </div>
      )}
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
