import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section
      aria-label="Commercial solar"
      className="relative isolate flex min-h-[78svh] items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-20 overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src="/images/com.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="animate-hero-zoom object-cover object-[50%_45%] motion-reduce:animate-none"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,20,38,.62)_0%,rgba(11,20,38,.5)_45%,rgba(11,20,38,.62)_100%)]"
      />

      <Container className="flex flex-col items-center pt-[110px] pb-[90px] text-center max-[820px]:[--rise-y:24px]">
        <h1 className="max-w-[24ch] animate-rise text-balance text-[clamp(2.6rem,6vw,5.2rem)] leading-[1.05] font-semibold tracking-[-.03em] [--delay:.3s] [text-shadow:0_2px_24px_rgba(11,20,38,.45)] motion-reduce:animate-none">
          Solar and storage engineered for your business
        </h1>
        <p className="mx-auto mt-6 max-w-[48ch] animate-rise text-balance text-[clamp(1.05rem,1.6vw,1.35rem)] text-ivory/92 [--delay:.45s] motion-reduce:animate-none">
          Cut energy costs and keep operations running, with systems designed
          around your site and your load.
        </p>
        <div className="mt-10 flex animate-rise justify-center [--delay:.6s] motion-reduce:animate-none">
          <Button href="/contact" size="lg">
            Get a Commercial Quote
          </Button>
        </div>
      </Container>
    </section>
  );
}
