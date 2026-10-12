import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const values = [
  {
    title: "Premium",
    text: "Quality components, clean workmanship, and attention to detail on every job.",
  },
  {
    title: "Reliable",
    text: "Systems built to keep running when the grid does not, and a team that answers when you call.",
  },
  {
    title: "Innovative",
    text: "Modern solar, storage, and monitoring technology, chosen because it works better for you.",
  },
  {
    title: "Sustainable",
    text: "Clean energy that lowers your costs and your footprint, for years to come.",
  },
];

export default function Standards() {
  return (
    <section
      id="standards"
      className="bg-ivory py-[clamp(72px,10vw,132px)] text-ink"
    >
      <Container className="grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start gap-[clamp(40px,7vw,110px)] max-[980px]:grid-cols-1">
        <Reveal
          variant="left"
          className="sticky top-[120px] max-[980px]:static"
        >
          <svg
            viewBox="0 0 300 140"
            aria-hidden="true"
            className="mb-7 h-auto w-[min(100%,340px)]"
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
          <h2>The standards we hold ourselves to</h2>
          <p className="mt-[22px] text-steel">
            Our mark is an infinity loop: energy that does not stop. These four
            words describe how we work.
          </p>
        </Reveal>

        <Reveal as="ul" stagger={0.12} className="border-t border-line-light">
          {values.map((value) => (
            <li
              key={value.title}
              className="grid grid-cols-[minmax(0,3fr)_minmax(0,7fr)] items-baseline gap-6 border-b border-line-light py-7 max-[980px]:grid-cols-1 max-[980px]:gap-1.5"
            >
              <h3 className="text-[1.4rem]">{value.title}</h3>
              <p className="text-steel">{value.text}</p>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
