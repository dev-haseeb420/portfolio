import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've built and operated infrastructure"
            description="Seven years across healthcare, enterprise and startup environments — always centered on secure, automated cloud platforms."
          />
        </Reveal>

        <ol className="border-border relative mt-14 space-y-12 border-l pl-8 sm:pl-10">
          {experience.map((role, index) => (
            <li key={role.company} className="relative">
              <span
                className="border-background bg-accent absolute top-1.5 -left-[calc(2rem+5px)] size-2.5 rounded-full border-2 sm:-left-[calc(2.5rem+5px)]"
                aria-hidden="true"
              />
              <Reveal delay={index * 0.08}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-foreground text-lg font-semibold">
                    {role.role} <span className="text-muted font-normal">· {role.company}</span>
                  </h3>
                  <p className="text-accent font-mono text-xs tracking-wide">{role.period}</p>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {role.highlights.map((highlight) => (
                    <li key={highlight} className="text-muted flex gap-3 text-sm leading-relaxed">
                      <span
                        className="bg-muted/60 mt-2 size-1 shrink-0 rounded-full"
                        aria-hidden="true"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
