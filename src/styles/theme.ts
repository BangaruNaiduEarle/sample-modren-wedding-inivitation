/**
 * Wedding design system — single source of truth for token values.
 * Raw values inject CSS custom properties; `colors` / `fonts` expose var() refs for TS/JS.
 */

export const colorValues = {
  ivory: "#FFF8F0",
  gold: "#D4AF37",
  maroon: "#7B1E3A",
  peach: "#FAD6C4",
  green: "#4F6F52",
  navy: "#1D2635",
} as const;

export type ThemeColor = keyof typeof colorValues;

export const colors = {
  ivory: "var(--color-ivory)",
  gold: "var(--color-gold)",
  maroon: "var(--color-maroon)",
  peach: "var(--color-peach)",
  green: "var(--color-green)",
  navy: "var(--color-navy)",
} as const satisfies Record<ThemeColor, string>;

export const semanticColors = {
  background: colors.ivory,
  surface: colors.peach,
  foreground: colors.navy,
  muted: colors.green,
  accent: colors.gold,
  accentAlt: colors.maroon,
  highlight: colors.peach,
} as const;

export type SemanticColor = keyof typeof semanticColors;

export const fontFamily = {
  script: "var(--font-script)",
  heading: "var(--font-heading)",
  body: "var(--font-body)",
} as const;

export type FontFamily = keyof typeof fontFamily;

export const radiusValues = {
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.5rem",
  "2xl": "2rem",
  full: "9999px",
} as const;

export type ThemeRadius = keyof typeof radiusValues;

export const radii = {
  sm: "var(--radius-sm)",
  md: "var(--radius-md)",
  lg: "var(--radius-lg)",
  xl: "var(--radius-xl)",
  "2xl": "var(--radius-2xl)",
  full: "var(--radius-full)",
} as const satisfies Record<ThemeRadius, string>;

export const shadowValues = {
  soft: "0 4px 24px color-mix(in srgb, var(--color-navy) 8%, transparent)",
  medium:
    "0 8px 32px color-mix(in srgb, var(--color-navy) 12%, transparent)",
  elevated:
    "0 16px 48px color-mix(in srgb, var(--color-maroon) 10%, transparent)",
  glow: "0 0 32px color-mix(in srgb, var(--color-gold) 28%, transparent)",
} as const;

export type ThemeShadow = keyof typeof shadowValues;

export const shadows = {
  soft: "var(--shadow-soft)",
  medium: "var(--shadow-medium)",
  elevated: "var(--shadow-elevated)",
  glow: "var(--shadow-glow)",
} as const satisfies Record<ThemeShadow, string>;

export const glassValues = {
  bg: "color-mix(in srgb, var(--color-ivory) 72%, transparent)",
  border: "color-mix(in srgb, var(--color-gold) 24%, transparent)",
  blur: "16px",
} as const;

export const glass = {
  bg: "var(--glass-bg)",
  border: "var(--glass-border)",
  blur: "var(--glass-blur)",
} as const;

export const motionValues = {
  easeOutExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
  easeInOutSoft: "cubic-bezier(0.45, 0, 0.55, 1)",
  durationFast: "200ms",
  durationBase: "400ms",
  durationSlow: "700ms",
} as const;

export const motion = {
  easeOutExpo: "var(--ease-out-expo)",
  easeInOutSoft: "var(--ease-in-out-soft)",
  durationFast: "var(--duration-fast)",
  durationBase: "var(--duration-base)",
  durationSlow: "var(--duration-slow)",
} as const;

/** Maps palette tokens to `--color-*` custom properties for injection on `:root`. */
function paletteCssVariables(): Record<string, string> {
  return Object.fromEntries(
    Object.entries(colorValues).map(([name, value]) => [
      `--color-${name}`,
      value,
    ]),
  );
}

/** Maps semantic tokens to `--color-*` custom properties. */
function semanticCssVariables(): Record<string, string> {
  const semanticToPalette: Record<SemanticColor, ThemeColor> = {
    background: "ivory",
    surface: "peach",
    foreground: "navy",
    muted: "green",
    accent: "gold",
    accentAlt: "maroon",
    highlight: "peach",
  };

  return Object.fromEntries(
    Object.entries(semanticToPalette).map(([semantic, palette]) => [
      `--color-${semantic}`,
      colorValues[palette],
    ]),
  );
}

/** Full set of CSS custom properties applied to the document root. */
export const rootCssVariables: Record<string, string> = {
  ...paletteCssVariables(),
  ...semanticCssVariables(),
  ...Object.fromEntries(
    Object.entries(radiusValues).map(([name, value]) => [
      `--radius-${name}`,
      value,
    ]),
  ),
  ...Object.fromEntries(
    Object.entries(shadowValues).map(([name, value]) => [
      `--shadow-${name}`,
      value,
    ]),
  ),
  "--glass-bg": glassValues.bg,
  "--glass-border": glassValues.border,
  "--glass-blur": glassValues.blur,
  "--ease-out-expo": motionValues.easeOutExpo,
  "--ease-in-out-soft": motionValues.easeInOutSoft,
  "--duration-fast": motionValues.durationFast,
  "--duration-base": motionValues.durationBase,
  "--duration-slow": motionValues.durationSlow,
};

export function varColor(name: ThemeColor | SemanticColor): string {
  return `var(--color-${name})`;
}

export const theme = {
  colors,
  colorValues,
  semanticColors,
  fontFamily,
  radii,
  radiusValues,
  shadows,
  shadowValues,
  glass,
  glassValues,
  motion,
  motionValues,
  rootCssVariables,
  varColor,
} as const;

export type Theme = typeof theme;
