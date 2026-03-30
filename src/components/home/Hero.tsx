import Link from "next/link";
import { 
  ArrowRight, 
  Briefcase, 
  LineChart, 
  PieChart, 
  Users, 
  Target, 
  Building, 
  Lightbulb, 
  TrendingUp, 
  Globe,
  GraduationCap,
  Utensils,
  Home,
  Landmark,
  Store,
  BookOpen
} from "lucide-react";

const floatingIcons = [
  { Icon: Briefcase, top: '80%', left: '10%', size: 48, className: 'absolute opacity-0 animate-float-1 text-brand-navy', delay: '0s' },
  { Icon: LineChart, top: '70%', left: '85%', size: 64, className: 'absolute opacity-0 animate-float-2 text-brand-rust', delay: '2s' },
  { Icon: Users, top: '90%', left: '40%', size: 56, className: 'absolute opacity-0 animate-float-3 text-brand-navy', delay: '5s' },
  { Icon: Target, top: '85%', left: '70%', size: 40, className: 'absolute opacity-0 animate-float-1 text-brand-amber', delay: '7s' },
  { Icon: Building, top: '60%', left: '20%', size: 72, className: 'absolute opacity-0 animate-float-2 text-gray-400', delay: '1s' },
  { Icon: Lightbulb, top: '95%', left: '60%', size: 48, className: 'absolute opacity-0 animate-float-3 text-brand-rust', delay: '4s' },
  { Icon: TrendingUp, top: '75%', left: '30%', size: 56, className: 'absolute opacity-0 animate-float-1 text-brand-navy', delay: '6s' },
  { Icon: Globe, top: '65%', left: '50%', size: 64, className: 'absolute opacity-0 animate-float-2 text-brand-amber', delay: '3s' },
  { Icon: PieChart, top: '85%', left: '90%', size: 48, className: 'absolute opacity-0 animate-float-3 text-brand-navy', delay: '8s' },
  { Icon: GraduationCap, top: '68%', left: '5%', size: 56, className: 'absolute opacity-0 animate-float-3 text-brand-navy', delay: '1.5s' },
  { Icon: Utensils, top: '78%', left: '25%', size: 48, className: 'absolute opacity-0 animate-float-1 text-brand-amber', delay: '4.5s' },
  { Icon: Home, top: '88%', left: '55%', size: 64, className: 'absolute opacity-0 animate-float-2 text-brand-rust', delay: '7.5s' },
  { Icon: Landmark, top: '92%', left: '80%', size: 56, className: 'absolute opacity-0 animate-float-3 text-brand-navy', delay: '3.5s' },
  { Icon: Store, top: '58%', left: '38%', size: 40, className: 'absolute opacity-0 animate-float-1 text-gray-400', delay: '5.5s' },
  { Icon: BookOpen, top: '98%', left: '15%', size: 50, className: 'absolute opacity-0 animate-float-2 text-brand-navy', delay: '8.5s' },
];

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#d0d8e2]">
      {/* Floating Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {floatingIcons.map((item, i) => (
          <div 
            key={i}
            className={item.className}
            style={{ 
              top: item.top, 
              left: item.left, 
              animationDelay: item.delay,
            }}
          >
            <item.Icon size={item.size} strokeWidth={1} />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-brand-navy leading-[1.1] tracking-tight mb-8">
            Digital solutions. <br/>
            Engineered for <span className="text-brand-rust">growth.</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-gray mb-12 max-w-2xl font-medium leading-relaxed">
            We build robust websites, eCommerce platforms, and educational portals for businesses serious about scaling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contact" className="btn-primary group text-lg px-8 py-4">
              Schedule a Consultation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#services" className="btn-secondary text-lg px-8 py-4">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Minimalist Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white opacity-40 skew-x-12 -translate-x-32 hidden lg:block pointer-events-none z-0" />
      <div className="absolute top-1/2 right-0 w-[40vw] h-[60vh] -translate-y-1/2 translate-x-1/4 rounded-full border-[40px] border-brand-light/50 hidden lg:block pointer-events-none z-0" />
      <div className="absolute bottom-10 right-20 w-3 h-3 rounded-full bg-brand-amber animate-pulse pointer-events-none z-0" />
      <div className="absolute top-40 right-40 w-2 h-2 rounded-full bg-brand-rust pointer-events-none z-0" />
    </section>
  );
}
