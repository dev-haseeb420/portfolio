import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Technology stack"
            description="Organized by discipline — from cloud platforms and orchestration to security and operations."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={(index % 3) * 0.06}>
              <div className="border-border bg-surface hover:border-accent/50 h-full rounded-2xl border p-6 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="bg-surface-muted text-accent flex size-9 items-center justify-center rounded-xl">
                    <group.icon className="size-4" aria-hidden="true" />
                  </span>
                  <h3 className="text-foreground font-medium">{group.title}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="bg-surface-muted text-muted rounded-md px-2 py-1 text-xs"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
