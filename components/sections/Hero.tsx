import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative isolate flex min-h-svh items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/poster.jpg"
          className="h-full w-full object-cover object-[50%_38%]"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,20,38,.62)_0%,rgba(11,20,38,.5)_45%,rgba(11,20,38,.62)_100%)]"
      />

      <Container className="flex flex-col items-center pt-[110px] pb-[90px] text-center">
        <h1 className="max-w-[24ch] text-balance text-[clamp(2.6rem,6vw,5.2rem)] leading-[1.05] font-semibold tracking-[-.03em] [text-shadow:0_2px_24px_rgba(11,20,38,.45)]">
          Power that pays you back
        </h1>
        <p className="mx-auto mt-6 max-w-[48ch] text-balance text-[clamp(1.05rem,1.6vw,1.35rem)] text-ivory/92">
          Reliable solar systems, lower energy costs, and lasting value.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="/contact" size="lg">
            Get a Quote
          </Button>
        </div>
      </Container>
    </section>
  );
}
