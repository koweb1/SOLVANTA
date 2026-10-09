import Container from "@/components/ui/Container";
import SectionHead from "@/components/ui/SectionHead";

const tiers = [
  {
    name: "Essential",
    audience: "For apartments and smaller homes.",
    runs: [
      "Lights",
      "Fans",
      "TV",
      "Wi-Fi",
      "Fridge",
      "Phone and laptop charging",
    ],
    specs: [
      { label: "Solar panels", value: "4 to 6" },
      { label: "Inverter", value: "3 to 5 kVA" },
      { label: "Battery", value: "5 kWh" },
    ],
  },
  {
    name: "Comfort",
    audience: "For family homes.",
    runs: [
      "Everything in Essential",
      "Freezer",
      "Washing machine",
      "Water pump",
      "One air conditioner",
    ],
    specs: [
      { label: "Solar panels", value: "8 to 12" },
      { label: "Inverter", value: "5 to 8 kVA" },
      { label: "Battery", value: "10 kWh" },
    ],
  },
  {
    name: "Whole-home",
    audience: "For large homes and heavy daily use.",
    runs: [
      "Everything in Comfort",
      "Several air conditioners",
      "Kitchen appliances",
      "Home office or workshop",
    ],
    specs: [
      { label: "Solar panels", value: "16 to 24" },
      { label: "Inverter", value: "10 to 15 kVA" },
      { label: "Battery", value: "15 to 20 kWh" },
    ],
  },
];

export default function ResidentialSizes() {
  return (
    <section
      id="sizes"
      className="bg-ivory py-[clamp(72px,10vw,132px)] text-ink"
    >
      <Container>
        <SectionHead
          title="Pick a system that fits your home"
          description="Sizing depends on what you run. These three starting points cover most homes, and we adjust them after a site assessment."
        />

        <div className="border-t border-line-light">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className="grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start gap-[clamp(24px,5vw,80px)] border-b border-line-light py-11 max-[980px]:grid-cols-1 max-[980px]:gap-7"
            >
              <div>
                <h3 className="mb-1.5 text-[clamp(1.5rem,2.2vw,2rem)]">
                  {tier.name}
                </h3>
                <p className="mb-5 text-steel">{tier.audience}</p>
                <ul
                  aria-label={`What the ${tier.name} system runs`}
                  className="flex flex-wrap gap-2"
                >
                  {tier.runs.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line-light px-3.5 py-1.5 text-[.88rem]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <dl className="grid grid-cols-3 gap-5 max-[560px]:grid-cols-1 max-[560px]:gap-4">
                {tier.specs.map((spec) => (
                  <div key={spec.label} className="border-l-2 border-gold pl-4">
                    <dt className="text-[.88rem] text-steel">{spec.label}</dt>
                    <dd className="mt-1 font-head text-[1.35rem] leading-[1.25] font-semibold">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <p className="mt-7 text-[.92rem] text-steel">
          Panel counts and sizes are indicative. We confirm the final system
          after a free site assessment.
        </p>
      </Container>
    </section>
  );
}
