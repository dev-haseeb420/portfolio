import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { summary } from "@/data/portfolio";

export function Summary() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Professional summary"
            description="A platform-minded engineer bridging infrastructure, automation and security."
          />
        </Reveal>

        <div className="space-y-8">
          <Reveal>
            <div className="space-y-4">
              {summary.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-muted text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {summary.highlights.map((item) => (
                <div key={item.label} className="border-border bg-surface rounded-2xl border p-4">
                  <dt className="text-accent font-mono text-base font-semibold">{item.label}</dt>
                  <dd className="text-muted mt-1 text-xs">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
