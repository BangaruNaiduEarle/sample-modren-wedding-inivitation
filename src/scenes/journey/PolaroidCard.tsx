"use client";

import { motion } from "framer-motion";

import { StoryImage } from "@/components/media";
import { colors } from "@/styles/theme";

import type { PolaroidCardProps } from "./journey.types";

export function PolaroidCard({
  memory,
  index,
  isActive,
  variant = "mobile",
}: PolaroidCardProps) {
  const isMobile = variant === "mobile";

  return (
    <motion.article
      data-cursor="card"
      style={{
        marginTop: isMobile ? 0 : memory.offsetY,
      }}
      initial={{ opacity: 1, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      animate={{
        scale: isMobile ? (isActive ? 1 : 0.96) : 1,
        rotate: isMobile
          ? isActive
            ? 0
            : memory.rotate * 0.2
          : memory.rotate,
      }}
      whileHover={
        !isMobile
          ? {
              y: -8,
              rotate: memory.rotate + (memory.rotate > 0 ? 1.5 : -1.5),
              transition: { type: "spring", stiffness: 320, damping: 24 },
            }
          : undefined
      }
    >
      <div
        className="relative rounded-theme-lg p-4 pb-8 sm:p-5 sm:pb-10"
        style={{
          backgroundColor: colors.ivory,
          boxShadow: isActive
            ? `0 8px 32px color-mix(in srgb, ${colors.gold} 22%, transparent), 0 16px 48px color-mix(in srgb, ${colors.navy} 8%, transparent)`
            : `0 4px 12px color-mix(in srgb, ${colors.navy} 6%, transparent), 0 12px 36px color-mix(in srgb, ${colors.navy} 8%, transparent)`,
          border: `1.5px solid color-mix(in srgb, ${colors.gold} ${isActive ? 45 : 22}%, transparent)`,
        }}
      >
        <div
          className="absolute -top-2.5 left-1/2 h-6 w-16 -translate-x-1/2 opacity-70"
          style={{
            background: `color-mix(in srgb, ${colors.champagne} 90%, transparent)`,
            transform: `translateX(-50%) rotate(${memory.rotate > 0 ? -2 : 2}deg)`,
          }}
          aria-hidden="true"
        />

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-theme-sm">
          <StoryImage
            illustrationId={memory.illustration}
            priority={index === 0}
          />
        </div>

        <div className="mt-5 space-y-2 px-1 sm:mt-6 sm:space-y-2.5">
          <h3 className="font-heading text-xl leading-tight text-maroon sm:text-2xl">
            {memory.title}
          </h3>
          <p className="font-section text-[11px] uppercase tracking-[0.22em] text-muted">
            {memory.date}
          </p>
          <p className="font-body text-base leading-relaxed text-navy sm:text-lg">
            {memory.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
