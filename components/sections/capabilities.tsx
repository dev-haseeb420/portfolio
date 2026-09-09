import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { capabilities } from "@/data/portfolio";

export function Capabilities() {
  return (
    <section id="capabilities" className="border-border bg-surface-muted border-t py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Engineering Focus"
            title="Capabilities I bring to a platform team"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={(index % 3) * 0.08}>
              <div className="border-border bg-surface h-full rounded-2xl border p-6 transition-transform duration-200 hover:-translate-y-1">
                <span className="bg-accent/10 text-accent flex size-10 items-center justify-center rounded-xl">
                  <capability.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-foreground mt-4 font-medium">{capability.title}</h3>
                <p className="text-muted mt-2 text-sm leading-relaxed">{capability.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
