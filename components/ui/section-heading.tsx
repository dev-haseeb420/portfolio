import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p className="text-accent font-mono text-xs font-medium tracking-[0.2em] uppercase">
        {eyebrow}
      </p>
      <h2 className="text-foreground mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="text-muted mt-4 text-base leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}
