import { colors } from "@/styles/theme";

export function paperBackground(): string {
  return `
    linear-gradient(180deg, color-mix(in srgb, ${colors.ivory} 96%, ${colors.peach}) 0%, ${colors.ivory} 100%),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 27px,
      color-mix(in srgb, ${colors.gold} 8%, transparent) 27px,
      color-mix(in srgb, ${colors.gold} 8%, transparent) 28px
    )
  `;
}

export function paperTextureOverlay(): string {
  return `radial-gradient(${colors.navy} 0.4px, transparent 0.4px)`;
}

export function goldBorderStyle(width: number): string {
  return `${width}px solid color-mix(in srgb, ${colors.gold} 75%, ${colors.maroon})`;
}

export function wishCardShadow(): string {
  return `0 2px 12px color-mix(in srgb, ${colors.navy} 8%, transparent), 0 16px 40px color-mix(in srgb, ${colors.maroon} 6%, transparent)`;
}

export function sceneWarmBackground(): string {
  return `
    radial-gradient(ellipse at 30% 20%, color-mix(in srgb, ${colors.peach} 45%, transparent) 0%, transparent 55%),
    radial-gradient(ellipse at 75% 80%, color-mix(in srgb, ${colors.gold} 12%, transparent) 0%, transparent 50%),
    ${colors.ivory}
  `;
}
