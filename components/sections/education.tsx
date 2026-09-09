import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Education" title="Academic background" />
        </Reveal>

        <div className="mt-10 max-w-2xl space-y-4">
          {education.map((entry) => (
            <Reveal key={entry.institution}>
              <div className="border-border bg-surface flex items-start gap-4 rounded-2xl border p-6">
                <span className="bg-surface-muted text-accent flex size-10 shrink-0 items-center justify-center rounded-xl">
                  <GraduationCap className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-foreground font-medium">{entry.institution}</h3>
                  <p className="text-muted mt-1 text-sm">{entry.credential}</p>
                  <p className="text-accent mt-1 font-mono text-xs">
                    {entry.period}
                    {entry.location ? ` · ${entry.location}` : ""}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
