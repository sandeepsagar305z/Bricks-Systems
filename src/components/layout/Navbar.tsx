"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { name: "Our Services", href: "#services" },
  { name: "Our Promise", href: "#promise" },
  { name: "Insights & Case Studies", href: "#cases" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-nav py-3" : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 relative z-50">
          <div className="w-10 h-10 border-2 border-brand-navy flex items-center justify-center transform rotate-45 group hover:rotate-90 transition-transform duration-500">
            <span className="font-heading font-black text-brand-navy -rotate-45 text-lg">B</span>
          </div>
          <div>
            <span className="font-heading font-bold text-xl text-brand-navy leading-none block tracking-tight">
              Bricks &<br/>Systems
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-brand-navy hover:text-brand-rust transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <Link href="#contact" className="btn-primary text-sm group">
            Contact Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-brand-navy z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 flex flex-col pt-24 px-6 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 text-xl font-heading font-semibold text-brand-navy">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-gray-100 pb-4"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 flex items-center justify-between bg-brand-navy text-white px-6 py-4"
          >
            Contact Us <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}
