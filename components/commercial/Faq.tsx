import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";

const faqs = [
  {
    question: "Will installation stop our operations?",
    answer:
      "We plan the work in phases around your operating hours. Most of it happens on the roof or in a separate plant area, and we schedule any power cut-overs with your team in advance.",
  },
  {
    question: "How do you calculate payback?",
    answer:
      "We model your current energy costs, your load profile, and the expected system output. The ROI report shows the savings and the payback period before you commit.",
  },
  {
    question: "Can solar work with our generator?",
    answer:
      "Yes. The energy controller treats the generator as a backup source, so it runs only when solar and battery cannot cover demand.",
  },
  {
    question: "Will our roof support the panels?",
    answer:
      "We check roof strength, age, and layout during the site survey. If the roof is not suitable, we can design a ground-mounted or carport system instead.",
  },
  {
    question: "Does a commercial system need a battery?",
    answer:
      "Not always. Grid-tied solar cuts your daytime bills. Add a battery if outages cost you production, or if you want to use the generator less at night.",
  },
  {
    question: "Who maintains the system?",
    answer:
      "We offer maintenance plans with scheduled inspections, panel cleaning, and performance checks. The monitoring dashboard flags problems early.",
  },
  {
    question: "Do you handle approvals?",
    answer:
      "We prepare the documents your site needs and guide you through the approval process.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Faq() {
  return (
    <section id="faq" className="bg-navy py-[clamp(72px,10vw,132px)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Container>
        <Reveal>
          <SectionHead tone="dark" title="Questions business owners ask" />
        </Reveal>

        <Reveal
          stagger={0.07}
          className="max-w-[860px] border-t border-line-dark"
        >
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-line-dark"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-head text-[1.1rem] font-medium after:text-[1.7rem] after:leading-none after:text-gold after:transition-transform after:duration-[250ms] after:content-['+'] group-open:after:rotate-45 motion-reduce:after:transition-none [&::-webkit-details-marker]:hidden">
                {faq.question}
              </summary>
              <p className="max-w-[64ch] pb-[26px] text-silver">{faq.answer}</p>
            </details>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
