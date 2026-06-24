import { galleryImages } from "./galleryImages";
import type { MemoryAspect, MemoryGradient, MemoryItem } from "./memories.types";

const layoutPresets: {
  readonly aspect: MemoryAspect;
  readonly rotate: number;
  readonly gradient: MemoryGradient;
}[] = [
  { aspect: "tall", rotate: -2.5, gradient: { from: "gold", to: "peach", accent: "maroon" } },
  { aspect: "square", rotate: 1.8, gradient: { from: "green", to: "maroon", accent: "gold" } },
  { aspect: "landscape", rotate: -1.2, gradient: { from: "maroon", to: "navy", accent: "gold" } },
  { aspect: "portrait", rotate: 2.4, gradient: { from: "peach", to: "gold", accent: "maroon" } },
  { aspect: "square", rotate: -1.6, gradient: { from: "ivory", to: "green", accent: "gold" } },
  { aspect: "tall", rotate: 1.4, gradient: { from: "maroon", to: "gold", accent: "ivory" } },
  { aspect: "landscape", rotate: -2, gradient: { from: "peach", to: "maroon", accent: "gold" } },
  { aspect: "portrait", rotate: 1.1, gradient: { from: "navy", to: "maroon", accent: "peach" } },
  { aspect: "square", rotate: -0.8, gradient: { from: "gold", to: "green", accent: "maroon" } },
  { aspect: "portrait", rotate: 2, gradient: { from: "maroon", to: "peach", accent: "gold" } },
];

export const MEMORY_ITEMS: readonly MemoryItem[] = galleryImages.map((src, index) => {
  const preset = layoutPresets[index % layoutPresets.length]!;
  const filename = src.split("/").pop()?.replace(/\.[^.]+$/, "") ?? `photo-${index}`;

  return {
    id: filename,
    src,
    aspect: preset.aspect,
    rotate: preset.rotate,
    gradient: preset.gradient,
  };
});

export const MASONRY_COLUMN_CLASS =
  "columns-2 gap-4 sm:columns-3 sm:gap-5 lg:columns-3 xl:columns-4";
