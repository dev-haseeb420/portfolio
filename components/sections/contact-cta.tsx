import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { contactCta, profile } from "@/data/portfolio";
import { Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";

export function ContactCta() {
  return (
    <section id="contact" className="bg-grid relative overflow-hidden py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[320px] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,var(--accent)_0%,transparent_70%)] opacity-[0.08]"
        aria-hidden="true"
      />
      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <h2 className="text-foreground max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {contactCta.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-muted mt-4 max-w-md text-base">{contactCta.body}</p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href={`mailto:${profile.email}`} variant="primary">
              <Mail className="size-4" aria-hidden="true" />
              Email Me
            </Button>
            <Button
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <LinkedinIcon className="size-4" aria-hidden="true" />
              LinkedIn
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
