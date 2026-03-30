import { Crosshair, Settings, TrendingUp, ShieldCheck } from "lucide-react";

export default function OurPromise() {
  const promises = [
    { num: "01", title: "Local First Strategy", desc: "We are neighbourhood tech partners. We understand local businesses and engineer platforms that resonate with your specific community.", icon: Crosshair },
    { num: "02", title: "Results & ROI Driven", desc: "Your website is an active investment. We measure our success solely by how much growth, efficiency, and revenue we drive for you.", icon: TrendingUp },
    { num: "03", title: "Enterprise Tech Stack", desc: "We don't use clunky page builders. Your system is built on React & Next.js to ensure blinding speed and future-proof scaling.", icon: Settings },
    { num: "04", title: "Absolute Transparency", desc: "No hidden fees, no surprise invoices, and no moving deadlines. We deliver exactly what we promise, on time, within budget.", icon: ShieldCheck },
  ];

  return (
    <section id="promise" className="py-24 bg-white relative z-10 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:flex gap-16 xl:gap-24 items-start">
        
        {/* Left Typography Block */}
        <div className="lg:w-1/3 mb-16 lg:mb-0 lg:sticky lg:top-32">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-light text-brand-amber mb-6">
            <ShieldCheck size={24} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-brand-navy leading-tight mb-6">
            The standard <br className="hidden lg:block"/> we swear by.
          </h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We deliver professional, custom web development done by local experts, backed by clear communication right from kickoff.
          </p>
        </div>

        {/* Right Minimalist List Rows */}
        <div className="lg:w-2/3 border-t border-brand-border">
          {promises.map((item, i) => (
            <div 
              key={i} 
              className="group py-8 lg:py-10 border-b border-brand-border flex flex-col md:flex-row md:items-center gap-6 md:gap-10 transition-colors duration-300 hover:bg-brand-light/50"
            >
              {/* Number Signature */}
              <div className="hidden md:block text-5xl font-heading font-black text-brand-border group-hover:text-brand-rust/30 transition-colors duration-500">
                {item.num}
              </div>
              
              {/* Icon & Title */}
              <div className="md:w-1/3">
                <div className="flex items-center gap-4 mb-2">
                  <span className="md:hidden text-lg font-bold text-brand-rust">{item.num}</span>
                  <h3 className="font-heading font-bold text-xl text-brand-navy tracking-tight">{item.title}</h3>
                </div>
              </div>
              
              {/* Description */}
              <div className="md:w-2/3">
                <p className="text-base text-brand-gray leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
