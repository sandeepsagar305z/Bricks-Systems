import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white w-full border-t-[4px] border-brand-rust pt-12">
      <div className="max-w-7xl mx-auto px-6 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="inline-block mb-4">
            <span className="font-heading font-bold text-xl tracking-tight text-white">
              Bricks &<br/>Systems
            </span>
          </Link>
          <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
            Technical expertise meets operational excellence. High-performing digital solutions for businesses ready to scale.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-base mb-4 tracking-tight">Quick Links</h4>
          <ul className="space-y-2 text-sm font-medium text-gray-300">
            <li><Link href="#services" className="hover:text-brand-amber transition-colors">Our Services</Link></li>
            <li><Link href="#promise" className="hover:text-brand-amber transition-colors">Our Promise</Link></li>
            <li><Link href="#cases" className="hover:text-brand-amber transition-colors">Insights & Case Studies</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-2">
          <h4 className="font-bold text-base mb-4 tracking-tight">Contact Us</h4>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-gray-400 mb-2 uppercase text-xs tracking-wider font-semibold">Address</p>
              <p className="text-gray-200">
                123 Business Avenue<br />
                Suite 400<br />
                Your City, 12345
              </p>
            </div>
            <div>
              <p className="text-gray-400 mb-2 uppercase text-xs tracking-wider font-semibold">Reach Out</p>
              <a href="mailto:hello@bricksandsystems.com" className="text-brand-amber hover:text-white transition-colors block mb-2 font-medium">
                hello@bricksandsystems.com
              </a>
              <a href="tel:+919999999999" className="text-gray-200 hover:text-white transition-colors block">
                +91 (999) 999-9999
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bricks & Systems. All rights reserved.</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
