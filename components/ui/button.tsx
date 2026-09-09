import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-accent text-accent-foreground hover:opacity-90 border border-accent",
  secondary:
    "bg-transparent text-foreground border border-border hover:border-accent hover:text-accent",
  ghost: "bg-transparent text-foreground/80 hover:text-accent border border-transparent",
};

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium",
        "transition-all duration-200 active:scale-[0.97]",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
