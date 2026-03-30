import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CaseStudies() {
  return (
    <section id="cases" className="py-24 bg-[#d0d8e2] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 tracking-tight text-brand-navy">Insights & Case Studies</h2>
        
        <div className="clean-card overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
          <div className="md:w-1/2 bg-brand-navy relative min-h-[300px] overflow-hidden">
            {/* Minimal abstract representation of code/data */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] [background-size:20px_20px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-brand-amber/30" />
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-brand-rust -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          </div>
          
          <div className="md:w-1/2 p-10 lg:p-14 bg-white flex flex-col justify-center">
            <h3 className="font-heading text-3xl font-bold text-brand-navy tracking-tight mb-4 leading-snug">
              Building a High-Performance eCommerce Platform for a Local Retailer
            </h3>
            <p className="text-brand-gray text-lg mb-8 leading-relaxed">
              A neighbourhood boutique was relying on foot traffic and WhatsApp messages for sales. We deployed a custom eCommerce Shopify storefront, resulting in a 300% increase in online sales and automated inventory management within 2 months.
            </p>
            <div>
              <Link href="#contact" className="btn-primary">
                View Full Case Study <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
