import type { Metadata } from "next";
import Difference from "@/components/commercial/Difference";
import Faq from "@/components/commercial/Faq";
import Hero from "@/components/commercial/Hero";
import Monitoring from "@/components/commercial/Monitoring";
import Process from "@/components/commercial/Process";
import Projects from "@/components/commercial/Projects";
import Savings from "@/components/commercial/Savings";
import Sectors from "@/components/commercial/Sectors";
import Sizes from "@/components/commercial/Sizes";
import Storage from "@/components/commercial/Storage";
import System from "@/components/commercial/System";
import FinalCta from "@/components/sections/FinalCta";
import { siteConfig } from "@/lib/seo";

const title = "Commercial Solar and Storage Systems";
const description =
  "Engineered solar, battery storage, and generator integration for offices, factories, schools, hospitals, and farms.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/commercial" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${title} | ${siteConfig.name}`,
    description,
    url: "/commercial",
    images: [{ url: siteConfig.ogImage, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteConfig.name}`,
    description,
    images: [siteConfig.ogImage],
  },
};

export default function CommercialPage() {
  return (
    <main id="top">
      <Hero />
      <Difference />
      <Sectors />
      <Savings />
      <System />
      <Sizes />
      <Storage />
      <Process />
      <Monitoring />
      <Projects />
      <Faq />
      <FinalCta
        title="Ready to cut your energy costs?"
        description="Tell us about your site and your monthly energy spend. We will arrange a site survey and send you a design and savings report."
        primaryLabel="Request a Site Survey"
      />
    </main>
  );
}
