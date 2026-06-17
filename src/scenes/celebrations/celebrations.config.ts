import type { CelebrationEvent, CelebrationPattern } from "./celebrations.types";

export const CELEBRATION_EVENTS: readonly CelebrationEvent[] = [
  {
    id: "haldi",
    title: "Haldi",
    subtitle: "Golden blessings & turmeric warmth",
    date: "December 13, 2026",
    time: "10:00 AM",
    venue: "Garden Courtyard",
    gradient: { from: "gold", via: "peach", to: "maroon" },
    accent: "gold",
    illustration: "family-meeting",
  },
  {
    id: "mehendi",
    title: "Mehendi",
    subtitle: "Henna, laughter & sisterhood",
    date: "December 13, 2026",
    time: "4:00 PM",
    venue: "Terrace Pavilion",
    gradient: { from: "green", via: "maroon", to: "navy" },
    accent: "green",
    illustration: "family-gathering",
  },
  {
    id: "sangeet",
    title: "Sangeet",
    subtitle: "Music, dance & celebration",
    date: "December 14, 2026",
    time: "7:00 PM",
    venue: "Grand Ballroom",
    gradient: { from: "maroon", via: "navy", to: "gold" },
    accent: "gold",
    illustration: "cake-cutting",
  },
  {
    id: "wedding",
    title: "Wedding",
    subtitle: "Two souls, one sacred vow",
    date: "December 15, 2026",
    time: "9:00 AM",
    venue: "Temple Mandap",
    gradient: { from: "maroon", via: "gold", to: "navy" },
    accent: "maroon",
    illustration: "sacred-fire",
  },
] as const;

export const CARD_WIDTH_CLASS = "w-[88vw] max-w-[420px] sm:w-[72vw] sm:max-w-[480px]";

export const CARD_HEIGHT_CLASS = "h-[58vh] min-h-[420px] max-h-[560px] sm:h-[62vh]";

export const AMBIENT_PATTERNS: readonly CelebrationPattern[] = [
  { id: 0, x: "10%", y: "15%", size: 280, opacity: 0.06 },
  { id: 1, x: "85%", y: "25%", size: 220, opacity: 0.05 },
  { id: 2, x: "70%", y: "75%", size: 320, opacity: 0.04 },
  { id: 3, x: "20%", y: "80%", size: 180, opacity: 0.05 },
] as const;
