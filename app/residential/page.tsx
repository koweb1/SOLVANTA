import type { Metadata } from "next";
import FinalCta from "@/components/sections/FinalCta";
import ResidentialBatteries from "@/components/sections/ResidentialBatteries";
import ResidentialBenefits from "@/components/sections/ResidentialBenefits";
import ResidentialFaq from "@/components/sections/ResidentialFaq";
import ResidentialHero from "@/components/sections/ResidentialHero";
import ResidentialInstallation from "@/components/sections/ResidentialInstallation";
import ResidentialProjects from "@/components/sections/ResidentialProjects";
import ResidentialSizes from "@/components/sections/ResidentialSizes";
import ResidentialSystem from "@/components/sections/ResidentialSystem";
import { siteConfig } from "@/lib/seo";

const title = "Residential Solar and Battery Systems";
const description =
  "Solar panels, inverter, and battery storage designed and installed for your home.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/residential" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${title} | ${siteConfig.name}`,
    description,
    url: "/residential",
    images: [{ url: siteConfig.ogImage, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteConfig.name}`,
    description,
    images: [siteConfig.ogImage],
  },
};

export default function ResidentialPage() {
  return (
    <main id="top">
      <ResidentialHero />
      <ResidentialBenefits />
      <ResidentialSystem />
      <ResidentialSizes />
      <ResidentialBatteries />
      <ResidentialInstallation />
      <ResidentialProjects />
      <ResidentialFaq />
      <FinalCta
        title="Ready to power your home?"
        description="Tell us about your home and your electricity bill. We will recommend a system and send you a clear quote."
      />
    </main>
  );
}
