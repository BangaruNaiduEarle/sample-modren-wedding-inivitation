import type { IllustrationId } from "@/content/illustrations";

import type { ThemeColor } from "@/styles/theme";

export type MemoryAspect = "portrait" | "landscape" | "square" | "tall";

export interface MemoryGradient {
  readonly from: ThemeColor;
  readonly to: ThemeColor;
  readonly accent: ThemeColor;
}

export interface MemoryItem {
  readonly id: string;
  readonly caption: string;
  readonly aspect: MemoryAspect;
  readonly rotate: number;
  readonly gradient: MemoryGradient;
  readonly likes: number;
  readonly illustration: IllustrationId;
}

export interface MemoryPhotoCardProps {
  readonly memory: MemoryItem;
  readonly index: number;
  readonly onOpen: (memory: MemoryItem) => void;
}

export const MEMORY_ASPECT_CLASS: Record<MemoryAspect, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  tall: "aspect-[2/3] min-h-[280px]",
} as const;
