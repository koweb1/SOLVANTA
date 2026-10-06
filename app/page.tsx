import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Solutions from "@/components/sections/Solutions";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyChoose from "@/components/sections/WhyChoose";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import FinalCta from "@/components/sections/FinalCta";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Solvanta Energy Systems | Home" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main id="top">
      <Hero />
      <TrustStrip />
      <Solutions />
      <HowItWorks />
      <WhyChoose />
      <Projects />
      <Testimonials />
      <FinalCta />
    </main>
  );
}
