export type IllustrationId =
  | "family-meeting"
  | "family-gathering"
  | "wedding-arch"
  | "sacred-fire"
  | "cake-cutting";

export interface IllustrationAsset {
  readonly id: IllustrationId;
  readonly src: string;
  readonly alt: string;
}

export const ILLUSTRATIONS: Record<IllustrationId, IllustrationAsset> = {
  "family-meeting": {
    id: "family-meeting",
    src: "/images/illustrations/family-meeting.png",
    alt: "Rohith and Madhavi with family elders in a warm blessing ceremony",
  },
  "family-gathering": {
    id: "family-gathering",
    src: "/images/illustrations/family-gathering.png",
    alt: "Joyful Indian family gathering with traditional sweets and marigold decor",
  },
  "wedding-arch": {
    id: "wedding-arch",
    src: "/images/illustrations/wedding-arch.png",
    alt: "Bride and groom under a golden wedding arch surrounded by family",
  },
  "sacred-fire": {
    id: "sacred-fire",
    src: "/images/illustrations/sacred-fire.png",
    alt: "Traditional mandap wedding ceremony with sacred fire",
  },
  "cake-cutting": {
    id: "cake-cutting",
    src: "/images/illustrations/cake-cutting.png",
    alt: "Bride and groom cutting their wedding cake with family cheering",
  },
} as const;

export function getIllustration(id: IllustrationId): IllustrationAsset {
  return ILLUSTRATIONS[id];
}
