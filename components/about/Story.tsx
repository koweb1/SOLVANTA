import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Sequence from "@/components/ui/Sequence";

export default function Story() {
  return (
    <section
      id="story"
      className="bg-ivory py-[clamp(72px,10vw,132px)] text-ink"
    >
      <Container>
        <div className="grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start gap-[clamp(32px,7vw,110px)] max-[980px]:grid-cols-1">
          <Reveal variant="left">
            <h2>Who we are</h2>
          </Reveal>

          <Reveal
            stagger={0.15}
            className="text-[1.08rem] text-steel [&>p+p]:mt-5"
          >
            <p>
              Solvanta provides premium solar and energy systems for homes and
              businesses. Our solutions ensure uninterrupted power, greater
              independence, and a more sustainable future.
            </p>
            <p>
              We focus on one thing: installing solar panels, inverters, and
              batteries properly. Every project starts with understanding how
              you use power, and ends with a system that is tested, explained,
              and supported.
            </p>
          </Reveal>
        </div>

        {/* The loop is drawn in, then the line rises beside it. */}
        <Sequence className="mt-[clamp(48px,6vw,80px)] flex items-center gap-[clamp(20px,4vw,48px)] border-t border-line-light pt-[clamp(32px,4vw,48px)] max-[560px]:flex-col max-[560px]:items-start">
          <svg
            data-seq="line"
            data-seq-dur="1"
            viewBox="0 0 300 140"
            aria-hidden="true"
            className="h-auto w-[clamp(90px,12vw,150px)] flex-none"
          >
            <path
              d="M150,70 C110,20 30,20 30,70 C30,120 110,120 150,70"
              stroke="#3E4C63"
              strokeWidth={30}
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M150,70 C190,20 270,20 270,70 C270,120 190,120 150,70"
              stroke="#EF9E30"
              strokeWidth={30}
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <p
            data-seq="text"
            data-seq-pos="0.5"
            className="max-w-[22ch] font-head text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.2] font-medium tracking-[-.02em] text-ink"
          >
            Continuous energy. A brighter tomorrow.
          </p>
        </Sequence>
      </Container>
    </section>
  );
}
