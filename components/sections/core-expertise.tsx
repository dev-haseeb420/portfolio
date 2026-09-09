import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { coreExpertise } from "@/data/portfolio";

export function CoreExpertise() {
  return (
    <section id="expertise" className="border-border bg-surface-muted border-y py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Core Expertise"
            title="Specialized across the modern cloud-native stack"
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <ul
            className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2"
            aria-label="Areas of technical expertise"
          >
            {coreExpertise.map((item) => (
              <li key={item}>
                <Badge>{item}</Badge>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
