"use client";

import { Activity, Cloud, Container, FileCode2, GitBranch, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const nodes = [
  { Icon: Cloud, angle: -90, label: "Cloud" },
  { Icon: FileCode2, angle: -30, label: "IaC" },
  { Icon: GitBranch, angle: 30, label: "CI/CD" },
  { Icon: Container, angle: 90, label: "Containers" },
  { Icon: Activity, angle: 150, label: "Observability" },
  { Icon: ShieldCheck, angle: 210, label: "Security" },
];

const RADIUS = 42;
const CENTER = 50;

function point(angleDeg: number) {
  const angle = (angleDeg * Math.PI) / 180;
  return {
    x: CENTER + RADIUS * Math.cos(angle),
    y: CENTER + RADIUS * Math.sin(angle),
  };
}

/** Abstract, animated infrastructure topology — a central platform hub connected to the core toolchain. */
export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-sm"
      role="img"
      aria-label="Diagram of a central cloud platform connected to infrastructure as code, CI/CD, containers, observability and security"
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        {nodes.map(({ angle, label }) => {
          const { x, y } = point(angle);
          return (
            <line
              key={label}
              x1={CENTER}
              y1={CENTER}
              x2={x}
              y2={y}
              stroke="var(--border)"
              strokeWidth={0.5}
            />
          );
        })}

        {!reduceMotion &&
          nodes.map(({ angle, label }, i) => {
            const { x, y } = point(angle);
            return (
              <motion.circle
                key={label}
                r={0.9}
                fill="var(--accent)"
                initial={{ cx: CENTER, cy: CENTER, opacity: 0 }}
                animate={{ cx: [CENTER, x], cy: [CENTER, y], opacity: [0, 1, 0] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              />
            );
          })}
      </svg>

      {nodes.map(({ Icon, angle, label }, i) => {
        const { x, y } = point(angle);
        return (
          <motion.div
            key={label}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.85 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: [0, -4, 0] }}
            transition={{
              opacity: { duration: 0.4, delay: 0.3 + i * 0.08 },
              scale: { duration: 0.4, delay: 0.3 + i * 0.08 },
              y: { duration: 3.2 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <span className="border-border bg-surface text-accent flex size-11 items-center justify-center rounded-2xl border shadow-sm">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span className="text-muted font-mono text-[10px]">{label}</span>
          </motion.div>
        );
      })}

      <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        {!reduceMotion && (
          <motion.span
            className="bg-accent/25 absolute size-16 rounded-full"
            animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        <span className="border-accent/40 bg-accent/10 text-accent relative flex size-16 items-center justify-center rounded-full border font-mono text-sm font-semibold">
          MH
        </span>
      </div>
    </div>
  );
}
