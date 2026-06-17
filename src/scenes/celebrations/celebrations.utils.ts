import { colors } from "@/styles/theme";
import type { ThemeColor } from "@/styles/theme";

import type { CelebrationGradient } from "./celebrations.types";

export function gradientForEvent(gradient: CelebrationGradient): string {
  const from = colors[gradient.from];
  const via = colors[gradient.via];
  const to = colors[gradient.to];

  return `linear-gradient(145deg, color-mix(in srgb, ${from} 85%, ${colors.navy}) 0%, color-mix(in srgb, ${via} 70%, ${colors.navy}) 48%, color-mix(in srgb, ${to} 90%, ${colors.navy}) 100%)`;
}

export function overlayGradient(): string {
  return `linear-gradient(to top, color-mix(in srgb, ${colors.navy} 92%, transparent) 0%, color-mix(in srgb, ${colors.navy} 45%, transparent) 42%, transparent 100%)`;
}

export function accentColorToken(accent: ThemeColor): string {
  return colors[accent];
}

export function shimmerGradient(accent: ThemeColor): string {
  return `linear-gradient(105deg, transparent 40%, color-mix(in srgb, ${colors[accent]} 18%, transparent) 50%, transparent 60%)`;
}
