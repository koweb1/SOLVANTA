import Avatar from "@/components/ui/Avatar";
import Container from "@/components/ui/Container";
import SectionHead from "@/components/ui/SectionHead";

const testimonials = [
  {
    name: "Adaeze Okonkwo",
    role: "Homeowner",
    image: "/images/clients/client-1.jpg",
    quote:
      "Our generator bill was the biggest line in the household budget. Since the install I barely think about it, and the lights stayed on through the last outage.",
  },
  {
    name: "Tunde Bakare",
    role: "Operations manager, bakery",
    image: "/images/clients/client-2.jpg",
    quote:
      "We used to lose a production day every time the grid dropped. Now the ovens keep running, and the team told us what to expect from the quote right through to commissioning.",
  },
  {
    name: "Funmilayo Adeyemi",
    role: "Homeowner and consultant",
    image: "/images/clients/client-3.jpg",
    quote:
      "They explained the sizing in plain terms, and the final invoice matched the quote. No surprises, which is rare. I work from home and the power is steady now.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-ivory py-[clamp(72px,10vw,132px)] text-ink"
    >
      <Container>
        <SectionHead
          title="What our customers say"
          description="Homes and businesses that stopped planning their day around the grid."
        />

        <div className="grid grid-cols-3 gap-[clamp(20px,3vw,36px)] max-[980px]:-mx-[var(--gutter)] max-[980px]:flex max-[980px]:snap-x max-[980px]:snap-mandatory max-[980px]:gap-4 max-[980px]:overflow-x-auto max-[980px]:px-[var(--gutter)] max-[980px]:pb-2 max-[980px]:[scroll-padding-inline:var(--gutter)] max-[980px]:[scrollbar-width:none] max-[980px]:[&::-webkit-scrollbar]:hidden">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-[10px] border border-line-light bg-white p-[clamp(24px,3vw,36px)] transition-transform duration-300 hover:-translate-y-1 max-[980px]:w-[85%] max-[980px]:shrink-0 max-[980px]:snap-start max-[980px]:hover:translate-y-0 motion-reduce:transition-none"
            >
              <svg
                viewBox="0 0 32 24"
                aria-hidden="true"
                className="mb-6 h-7 w-9 text-gold"
                fill="currentColor"
              >
                <path d="M0 24V14.4C0 6.2 4.6 1.1 12 0l1.2 3.6C9.4 4.8 7.4 7.2 7.2 10.4H13V24H0zm19 0V14.4C19 6.2 23.6 1.1 31 0l1.2 3.6c-3.8 1.2-5.8 3.6-6 6.8H32V24H19z" />
              </svg>

              <blockquote className="flex-1">
                <p className="font-head text-[1.1rem] leading-[1.55] font-medium tracking-[-.01em] text-ink">
                  {item.quote}
                </p>
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-4 border-t border-line-light pt-6">
                <Avatar src={item.image} name={item.name} />
                <div>
                  <span className="block font-head text-base font-semibold text-ink">
                    {item.name}
                  </span>
                  <span className="block text-[.9rem] text-steel">
                    {item.role}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
