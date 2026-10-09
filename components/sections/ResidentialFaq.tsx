import Container from "@/components/ui/Container";
import SectionHead from "@/components/ui/SectionHead";

const faqs = [
  {
    question: "Do I need a battery with solar?",
    answer:
      "No. Panels alone cut your bill during the day. A battery stores the extra for the evening and night and keeps your essentials on during outages. If your power supply is unreliable, a battery is what keeps the lights on after sunset.",
  },
  {
    question: "How long will a battery power my home?",
    answer:
      "It depends on the battery size and what you run. A battery that only backs up lights, fans, a TV, Wi-Fi, and a fridge lasts far longer than one that also runs air conditioners. We size it to your real load during the site assessment.",
  },
  {
    question: "Can solar run my air conditioner?",
    answer:
      "Yes, if the system is sized for it. Air conditioners are among the heaviest loads in a home, so tell us which ones you run and how often, and we will design around them.",
  },
  {
    question: "Can I add a battery later?",
    answer:
      "Often, yes, if your inverter supports it. We recommend choosing a battery-ready inverter from the start, so adding storage later is simple.",
  },
  {
    question: "Will it work on my roof?",
    answer:
      "We install on most pitched and flat roofs. During the site assessment we check the roof structure, direction, and shade before we recommend a layout.",
  },
  {
    question: "What happens on cloudy or rainy days?",
    answer:
      "Panels produce less, but the system keeps working. Your battery and the grid fill the gap, so your power stays on.",
  },
  {
    question: "What maintenance does a solar system need?",
    answer:
      "Very little. Panels need an occasional clean, and the monitoring app alerts you if something looks wrong. Our team is available if you need a check-up.",
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

export default function ResidentialFaq() {
  return (
    <section id="faq" className="bg-ivory py-[clamp(72px,10vw,132px)] text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Container>
        <SectionHead title="Questions homeowners ask" />

        <div className="max-w-[860px] border-t border-line-light">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-line-light"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-head text-[1.1rem] font-medium after:text-[1.7rem] after:leading-none after:text-gold-deep after:transition-transform after:duration-[250ms] after:content-['+'] group-open:after:rotate-45 motion-reduce:after:transition-none [&::-webkit-details-marker]:hidden">
                {faq.question}
              </summary>
              <p className="max-w-[64ch] pb-[26px] text-steel">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
