"use client";

import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-brand-light relative z-10 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy mb-4">
            Let&apos;s get connected.
          </h2>
          <p className="text-lg text-brand-gray">
            Whether you have a confirmed project scope or just an idea, drop us a line below.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Left Side: Information Panel (Aligned with CTA Form) */}
          <div className="lg:col-span-2 order-last lg:order-first">
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-brand-border h-full flex flex-col justify-center space-y-10">
              
              {/* Email */}
              <a href="mailto:hello@bricksandsystems.com" className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-brand-navy/10 flex flex-shrink-0 items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-gray uppercase tracking-widest mb-1.5 pt-1">Email Us</p>
                  <p className="font-semibold text-brand-navy text-sm break-all group-hover:text-brand-rust transition-colors">hello@bricksandsystems.com</p>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+919999999999" className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-brand-rust/10 flex flex-shrink-0 items-center justify-center text-brand-rust group-hover:bg-brand-rust group-hover:text-white transition-colors duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-gray uppercase tracking-widest mb-1.5 pt-1">Direct Line</p>
                  <p className="font-semibold text-brand-navy text-sm break-all">+91 99999 99999</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-brand-amber/10 flex flex-shrink-0 items-center justify-center text-brand-amber group-hover:bg-brand-amber group-hover:text-white transition-colors duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-gray uppercase tracking-widest mb-1.5 pt-1">Location</p>
                  <p className="font-semibold text-brand-navy text-sm leading-snug">Local Neighbourhood<br/>Your City, 12345</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-brand-gray/10 flex flex-shrink-0 items-center justify-center text-brand-gray group-hover:bg-brand-gray group-hover:text-white transition-colors duration-300">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-gray uppercase tracking-widest mb-1.5 pt-1">Business Hours</p>
                  <p className="font-semibold text-brand-navy text-sm leading-snug">Mon-Fri: 9am-6pm<br/>Weekend: By Appointment</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Clean Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-brand-border">
              {status === "success" ? (
                <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center min-h-[400px] flex flex-col items-center justify-center animate-pulse">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h4 className="text-2xl font-bold text-green-900 mb-2">Inquiry Received</h4>
                  <p className="text-green-700">Thank you for reaching out. We will review your message and reply shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">First Name</label>
                      <input required type="text" className="w-full bg-brand-light/50 border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:bg-white transition-all text-sm placeholder:text-gray-400" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">Last Name</label>
                      <input required type="text" className="w-full bg-brand-light/50 border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:bg-white transition-all text-sm placeholder:text-gray-400" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">Email Address</label>
                    <input required type="email" className="w-full bg-brand-light/50 border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:bg-white transition-all text-sm placeholder:text-gray-400" placeholder="john@company.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">Project Details</label>
                    <textarea required rows={4} className="w-full bg-brand-light/50 border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:bg-white transition-all text-sm resize-none placeholder:text-gray-400" placeholder="Tell us about your timeline and feature requirements..." />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="bg-brand-navy text-white hover:bg-brand-amber mt-2 px-8 py-4 rounded-xl font-bold w-full transition-colors flex justify-center items-center gap-2 disabled:opacity-50"
                  >
                    {status === "loading" ? "Submitting..." : (
                      <>Send Message <ArrowRight size={18} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
