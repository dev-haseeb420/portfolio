import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

export function Badge({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "border-border bg-surface text-muted inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs",
        className,
      )}
      {...props}
    />
  );
}
