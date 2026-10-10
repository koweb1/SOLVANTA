import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Parallax from "@/components/ui/Parallax";
import Reveal from "@/components/ui/Reveal";

export default function ResidentialHero() {
  return (
    <section
      aria-label="Residential solar"
      className="relative isolate flex min-h-[78svh] items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        <Parallax introZoom={1.12}>
          <Image
            src="/images/res.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </Parallax>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,20,38,.62)_0%,rgba(11,20,38,.5)_45%,rgba(11,20,38,.62)_100%)]"
      />

      <Container className="flex flex-col items-center pt-[110px] pb-[90px] text-center">
        <Reveal
          stagger={0.15}
          delay={0.3}
          className="flex flex-col items-center"
        >
          <h1 className="max-w-[24ch] text-balance text-[clamp(2.6rem,6vw,5.2rem)] leading-[1.05] font-semibold tracking-[-.03em] [text-shadow:0_2px_24px_rgba(11,20,38,.45)]">
            Solar and battery power for your home
          </h1>
          <p className="mx-auto mt-6 max-w-[48ch] text-balance text-[clamp(1.05rem,1.6vw,1.35rem)] text-ivory/92">
            Panels, inverter, and battery storage, designed and installed as one
            system.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="/contact" size="lg">
              Get a Quote
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
