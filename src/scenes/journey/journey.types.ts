import type { IllustrationId } from "@/content/illustrations";

export interface JourneyMemory {
  readonly id: string;
  readonly title: string;
  readonly date: string;
  readonly description: string;
  readonly illustration: IllustrationId;
  readonly rotate: number;
  readonly offsetY: number;
}

export interface ScrapbookDoodle {
  readonly id: number;
  readonly type: "heart" | "star" | "swirl" | "sparkle";
  readonly x: string;
  readonly y: string;
  readonly rotate: number;
  readonly scale: number;
}

export interface PolaroidCardProps {
  readonly memory: JourneyMemory;
  readonly index: number;
  readonly isActive: boolean;
}
