import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import OurPromise from "@/components/home/OurPromise";
import CaseStudies from "@/components/home/CaseStudies";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <OurPromise />
      <CaseStudies />
      <ContactSection />
    </>
  );
}
