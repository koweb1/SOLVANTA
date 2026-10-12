import type { Metadata } from "next";
import Credentials from "@/components/about/Credentials";
import Hero from "@/components/about/Hero";
import Standards from "@/components/about/Standards";
import Story from "@/components/about/Story";
import Team from "@/components/about/Team";
import WhatWeDo from "@/components/about/WhatWeDo";
import FinalCta from "@/components/sections/FinalCta";
import { siteConfig } from "@/lib/seo";

const title = "About Solvanta";
const description =
  "Solvanta designs and installs solar and battery systems for homes and businesses. Meet the team and the standards we work to.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${title} | ${siteConfig.name}`,
    description,
    url: "/about",
    images: [{ url: siteConfig.ogImage, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteConfig.name}`,
    description,
    images: [siteConfig.ogImage],
  },
};

export default function AboutPage() {
  return (
    <main id="top">
      <Hero />
      <Story />
      <WhatWeDo />
      <Standards />
      <Team />
      <Credentials />
      <FinalCta
        title="Let's talk about your power"
        description="Tell us about your home or business. We will recommend a system and send you a clear quote."
      />
    </main>
  );
}
