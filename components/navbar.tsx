"use client";

import { navLinks, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={cn(
          "border-border bg-surface/80 flex w-full max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 backdrop-blur-md transition-shadow",
          scrolled && "shadow-[0_4px_24px_-8px_rgba(0,0,0,0.15)]",
        )}
      >
        <a
          href="#home"
          className="text-foreground flex items-center gap-2 rounded-full px-2 py-1 text-sm font-semibold tracking-tight"
        >
          <span className="bg-accent text-accent-foreground flex size-7 items-center justify-center rounded-full font-mono text-xs">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-muted hover:text-foreground rounded-full px-3.5 py-1.5 text-sm transition-colors",
                activeHash === link.href && "bg-surface-muted text-foreground",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Muhammad Haseeb on LinkedIn"
            className="border-border text-foreground/80 hover:border-accent hover:text-accent hidden size-9 items-center justify-center rounded-full border transition-colors sm:inline-flex"
          >
            <LinkedinIcon className="size-4" aria-hidden="true" />
          </a>
          <a
            href={profile.resumeHref}
            download={profile.resumeFileName}
            className="border-border text-foreground/80 hover:border-accent hover:text-accent hidden items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm transition-colors sm:inline-flex"
          >
            <Download className="size-3.5" aria-hidden="true" />
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="border-border text-foreground/80 inline-flex size-9 items-center justify-center rounded-full border md:hidden"
          >
            {menuOpen ? (
              <X className="size-4" aria-hidden="true" />
            ) : (
              <Menu className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="border-border bg-surface absolute inset-x-4 top-[calc(100%+0.5rem)] flex flex-col gap-1 rounded-2xl border p-3 shadow-xl md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "text-muted hover:bg-surface-muted hover:text-foreground rounded-xl px-4 py-2.5 text-sm transition-colors",
                  activeHash === link.href && "bg-surface-muted text-foreground",
                )}
              >
                {link.label}
              </a>
            ))}
            <div className="border-border mt-1 flex items-center gap-2 border-t pt-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border text-foreground/80 inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border px-3 py-2 text-sm"
              >
                <LinkedinIcon className="size-4" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={profile.resumeHref}
                download={profile.resumeFileName}
                className="border-border text-foreground/80 inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border px-3 py-2 text-sm"
              >
                <Download className="size-4" aria-hidden="true" />
                Resume
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
