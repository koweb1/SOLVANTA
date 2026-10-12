import Container from "@/components/ui/Container";

export default function PageHead() {
  return (
    <section
      aria-label="Get a quote"
      className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#16233F_0%,var(--color-navy)_70%)] pt-[clamp(130px,16vw,180px)] pb-[clamp(56px,7vw,88px)]"
    >
      <svg
        viewBox="0 0 300 140"
        aria-hidden="true"
        className="absolute top-1/2 right-[-6%] -z-10 w-[min(60vw,760px)] -translate-y-1/2 opacity-[.12]"
        fill="none"
        strokeWidth={26}
        strokeLinecap="round"
      >
        <path
          d="M150,70 C110,20 30,20 30,70 C30,120 110,120 150,70"
          stroke="#8FA0BC"
        />
        <path
          d="M150,70 C190,20 270,20 270,70 C270,120 190,120 150,70"
          stroke="#F2A93D"
        />
      </svg>

      <Container className="max-[820px]:[--rise-y:24px]">
        <h1 className="max-w-[16ch] animate-rise text-[clamp(2.4rem,5vw,4.2rem)] tracking-[-.03em] [--delay:.15s] motion-reduce:animate-none">
          Get your free quote
        </h1>
        <p className="mt-5 max-w-[46ch] animate-rise text-[1.15rem] text-silver [--delay:.3s] motion-reduce:animate-none">
          Tell us about your property and how you use power. We will recommend a
          system and send you a clear quote.
        </p>
      </Container>
    </section>
  );
}
