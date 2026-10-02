export const APPEARANCE_KEY = "spine-appearance";

export type Appearance = "auto" | "light" | "dark";

export function readAppearance(): Appearance {
  if (typeof window === "undefined") return "auto";
  try {
    const stored = window.localStorage.getItem(APPEARANCE_KEY);
    if (stored === "light" || stored === "dark" || stored === "auto") return stored;
  } catch {
    /* private mode */
  }
  return "auto";
}

export function systemIsDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function resolveTheme(appearance: Appearance): "light" | "dark" {
  if (appearance === "dark") return "dark";
  if (appearance === "light") return "light";
  return systemIsDark() ? "dark" : "light";
}

export function applyAppearance(appearance: Appearance) {
  const theme = resolveTheme(appearance);
  const root = document.documentElement;
  root.dataset.appearance = appearance;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  root.classList.toggle("dark", theme === "dark");
}

export function storeAppearance(appearance: Appearance) {
  try {
    window.localStorage.setItem(APPEARANCE_KEY, appearance);
  } catch {
    /* private mode */
  }
  applyAppearance(appearance);
}

/** Runs before paint. Keep in sync with applyAppearance. */
export const APPEARANCE_BOOT_SCRIPT = `(function(){try{var k="spine-appearance";var p=localStorage.getItem(k);if(p!=="light"&&p!=="dark"&&p!=="auto")p="auto";var dark=p==="dark"||(p==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches);var r=document.documentElement;r.dataset.appearance=p;r.dataset.theme=dark?"dark":"light";r.style.colorScheme=dark?"dark":"light";r.classList.toggle("dark",dark);}catch(e){}})();`;
