import { Monitor, ShoppingCart, GraduationCap } from "lucide-react";

const services = [
	{
		title: "Web Design & Development",
		desc: "We build custom, high-performance web applications tailored to your business operations. Our sites are engineered for speed, security, and scalability.",
		link: "Read More >>>",
		bg: "bg-brand-rust",
		icon: Monitor,
	},
	{
		title: "eCommerce Solutions",
		desc: "Start selling online with confidence. We build beautiful, high-converting online stores that make it easy for your customers to browse, buy, and return.",
		link: "Read More >>>",
		bg: "bg-brand-amber",
		icon: ShoppingCart,
	},
	{
		title: "Education Portals",
		desc: "Deploy robust management systems for schools and institutes. Simplify admissions, parent communications, and operational workflows.",
		link: "Read More >>>",
		bg: "bg-brand-navy",
		icon: GraduationCap,
	},
];

export default function Services() {
	return (
		<section id="services" className="py-24 bg-white border-y border-brand-border">
			<div className="max-w-7xl mx-auto px-6">
				<div className="mb-16">
					<h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-brand-navy">
						Core Capabilities
					</h2>
					<p className="text-xl text-brand-gray max-w-3xl">
						We don&apos;t just build websites; we build digital storefronts that
						attract customers, drive sales, and grow your local business.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<div
							key={index}
							className="clean-card group flex flex-col h-full hover:shadow-lg hover:-translate-y-1 overflow-hidden"
						>
							{/* Colored Header Block */}
							<div
								className={`${service.bg} p-8 text-white relative h-40 flex items-end`}
							>
								<div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
									<service.icon size={64} />
								</div>
								<h3 className="font-heading text-2xl font-bold tracking-tight text-white relative z-10">
									{service.title}
								</h3>
							</div>

							{/* Content Block */}
							<div className="p-8 flex-1 flex flex-col bg-brand-light/30">
								<p className="text-brand-gray leading-relaxed mb-8 flex-1">
									{service.desc}
								</p>
								<button className="text-brand-navy font-bold text-sm tracking-widest text-left hover:text-brand-rust transition-colors uppercase">
									{service.link}
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
