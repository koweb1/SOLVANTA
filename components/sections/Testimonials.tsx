import Container from "@/components/ui/Container";
import SectionHead from "@/components/ui/SectionHead";

const quotes = [
  { role: "Homeowner, Location" },
  { role: "Business owner, Location" },
  { role: "Homeowner, Location" },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-ivory py-[clamp(72px,10vw,132px)] text-ink"
    >
      <Container>
        <SectionHead title="What our customers say" />
        <div className="grid grid-cols-3 gap-[clamp(24px,4vw,56px)] max-[980px]:grid-cols-1">
          {quotes.map((quote, i) => (
            <blockquote key={i} className="border-t-2 border-ink pt-[26px]">
              <p className="font-head text-[1.15rem] leading-normal font-medium tracking-[-.01em] text-ink">
                Client quote goes here. One or two sentences about the result,
                the team, or the experience.
              </p>
              <footer className="mt-[22px] text-[.92rem] text-steel">
                <b className="block font-semibold text-ink">Client name</b>
                {quote.role}
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-10 inline-block rounded-[6px] border border-dashed border-line-light px-3.5 py-2.5 text-[.85rem] text-steel">
          Placeholder content. Replace with real client feedback before launch.
        </p>
      </Container>
    </section>
  );
}
