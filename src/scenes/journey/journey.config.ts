import type { JourneyMemory, ScrapbookDoodle } from "./journey.types";

export const JOURNEY_MEMORIES: readonly JourneyMemory[] = [
  {
    id: "destiny",
    title: "Destined Hearts",
    date: "March 2019",
    description:
      "What began with a simple glance slowly blossomed into a bond written by destiny.",
    illustration: "family-meeting",
    rotate: -4,
    offsetY: 8,
  },
  {
    id: "memories",
    title: "Moments & Memories",
    date: "August 2020",
    description:
      "Endless conversations, shared dreams, and countless smiles made every day special.",
    illustration: "family-gathering",
    rotate: 3,
    offsetY: -6,
  },
  {
    id: "promise",
    title: "A Promise Forever",
    date: "July 2024",
    description:
      "With love in our hearts and blessings all around, forever became our promise.",
    illustration: "wedding-arch",
    rotate: -2.5,
    offsetY: 10,
  },
  {
    id: "families",
    title: "Two Families, One Celebration",
    date: "January 2025",
    description:
      "Amid marigolds and laughter, two families came together as one.",
    illustration: "family-meeting",
    rotate: 4,
    offsetY: -4,
  },
  {
    id: "wedding",
    title: "The Beginning of Forever",
    date: "December 2026",
    description:
      "Surrounded by love and blessings, our beautiful journey continues as husband and wife.",
    illustration: "sacred-fire",
    rotate: -3,
    offsetY: 6,
  },
] as const;

export const SCRAPBOOK_DOODLES: readonly ScrapbookDoodle[] = [
  { id: 0, type: "heart", x: "8%", y: "18%", rotate: -12, scale: 0.9 },
  { id: 1, type: "star", x: "92%", y: "22%", rotate: 18, scale: 1 },
  { id: 2, type: "swirl", x: "6%", y: "68%", rotate: 8, scale: 0.85 },
  { id: 3, type: "heart", x: "88%", y: "62%", rotate: 22, scale: 1.1 },
  { id: 4, type: "sparkle", x: "14%", y: "42%", rotate: -6, scale: 0.75 },
  { id: 5, type: "sparkle", x: "84%", y: "44%", rotate: 14, scale: 0.8 },
  { id: 6, type: "heart", x: "48%", y: "12%", rotate: 0, scale: 0.7 },
] as const;

export const POLAROID_OVERLAP = "";

export const CARD_WIDTH_CLASS = "w-[82vw] max-w-[360px]";

export const DESKTOP_CARD_WIDTH_CLASS = "w-full max-w-[520px]";

export const MOBILE_CAROUSEL_GAP = "gap-5";
