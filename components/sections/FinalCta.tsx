import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

type FinalCtaProps = {
  title?: string;
  description?: string;
};

export default function FinalCta({
  title = "Ready to power your future?",
  description = "Tell us about your property and your electricity bill. We will come back with a clear plan and a quote.",
}: FinalCtaProps) {
  return (
    <section
      id="quote"
      className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#16233F_0%,var(--color-navy)_70%)] py-[clamp(72px,10vw,132px)] text-left"
    >
      <svg
        viewBox="0 0 300 140"
        aria-hidden="true"
        className="absolute top-1/2 right-[-6%] -z-10 w-[min(60vw,760px)] -translate-y-1/2 opacity-[.14]"
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

      <Container>
        <Reveal stagger={0.14}>
          <h2 className="max-w-[16ch] text-[clamp(2.2rem,4.6vw,3.8rem)]">
            {title}
          </h2>
          <p className="mt-5 text-[1.1rem] text-silver">{description}</p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <Button href="/contact" className="max-[560px]:flex-[1_1_100%]">
              Get a Free Quote
            </Button>
            <Button
              href="https://wa.me/0000000000"
              variant="ghost"
              className="max-[560px]:flex-[1_1_100%]"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
