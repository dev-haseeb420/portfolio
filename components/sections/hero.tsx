import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { HeroVisual } from "@/components/hero-visual";
import { heroCopy, heroTech, profile } from "@/data/portfolio";
import { Download, Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";

export function Hero() {
  return (
    <section id="home" className="bg-grid relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_65%)] opacity-[0.08]"
        aria-hidden="true"
      />
      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <p className="text-accent font-mono text-sm font-medium tracking-[0.2em] uppercase">
              {profile.role} · {profile.subRole}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-foreground mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="text-muted mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
              {heroCopy}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Core technologies">
              {heroTech.map((tech) => (
                <li
                  key={tech}
                  className="border-border bg-surface text-muted rounded-full border px-3 py-1 font-mono text-xs"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="#experience" variant="primary">
                View Experience
              </Button>
              <Button
                href={profile.resumeHref}
                download={profile.resumeFileName}
                variant="secondary"
              >
                <Download className="size-4" aria-hidden="true" />
                Download Resume
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="text-muted mt-8 flex items-center gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Muhammad Haseeb on LinkedIn"
                className="border-border hover:border-accent hover:text-accent inline-flex size-10 items-center justify-center rounded-full border transition-colors"
              >
                <LinkedinIcon className="size-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label={`Email ${profile.name}`}
                className="border-border hover:border-accent hover:text-accent inline-flex size-10 items-center justify-center rounded-full border transition-colors"
              >
                <Mail className="size-4" aria-hidden="true" />
              </a>
              <span className="text-sm">{profile.location}</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <HeroVisual />
        </Reveal>
      </Container>
    </section>
  );
}
