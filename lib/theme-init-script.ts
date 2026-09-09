/**
 * Applies the persisted (or system) theme before hydration to prevent a
 * flash of the wrong theme, then arms CSS transitions a frame later so the
 * very first paint never animates. Rendered via `next/script` with the
 * `beforeInteractive` strategy directly in the root layout.
 */
export const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var isDark = stored ? stored === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", isDark);
  } catch (e) {}

  var arm = function () {
    document.documentElement.classList.add("theme-ready");
  };
  if ("requestAnimationFrame" in window) {
    requestAnimationFrame(function () {
      requestAnimationFrame(arm);
    });
  } else {
    setTimeout(arm, 0);
  }
})();
`;
