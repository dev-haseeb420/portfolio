/**
 * Joins conditional class name fragments together, skipping falsy values.
 * A minimal stand-in for `clsx` to avoid an extra dependency.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
