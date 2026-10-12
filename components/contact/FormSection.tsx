import Container from "@/components/ui/Container";
import QuoteForm from "@/components/contact/QuoteForm";
import Sidebar from "@/components/contact/Sidebar";

export default function FormSection() {
  return (
    <section
      id="form-section"
      className="bg-ivory py-[clamp(72px,10vw,132px)] text-ink"
    >
      <Container className="grid grid-cols-[minmax(0,7fr)_minmax(0,4fr)] items-start gap-[clamp(32px,6vw,96px)] max-[980px]:grid-cols-1 max-[820px]:[--rise-y:24px]">
        <div className="animate-rise [--delay:.2s] motion-reduce:animate-none">
          <QuoteForm />
        </div>
        <Sidebar />
      </Container>
    </section>
  );
}
