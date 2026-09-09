import { Container } from "@/components/ui/container";
import { navLinks, profile } from "@/data/portfolio";
import { Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border border-t">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-foreground font-semibold">{profile.name}</p>
          <p className="text-muted mt-1 text-sm">
            {profile.role} · {profile.location}
          </p>
        </div>

        <nav aria-label="Footer" className="text-muted flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-accent transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Muhammad Haseeb on LinkedIn"
            className="border-border text-foreground/80 hover:border-accent hover:text-accent inline-flex size-9 items-center justify-center rounded-full border transition-colors"
          >
            <LinkedinIcon className="size-4" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label={`Email ${profile.name}`}
            className="border-border text-foreground/80 hover:border-accent hover:text-accent inline-flex size-9 items-center justify-center rounded-full border transition-colors"
          >
            <Mail className="size-4" aria-hidden="true" />
          </a>
        </div>
      </Container>
      <Container className="pb-8">
        <p className="text-muted text-xs">
          © {year} {profile.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
