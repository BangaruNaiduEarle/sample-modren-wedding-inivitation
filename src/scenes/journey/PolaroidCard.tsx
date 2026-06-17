"use client";

import { motion } from "framer-motion";

import { StoryImage } from "@/components/media";
import { colors } from "@/styles/theme";

import { CARD_WIDTH_CLASS, POLAROID_OVERLAP } from "./journey.config";
import type { PolaroidCardProps } from "./journey.types";

export function PolaroidCard({ memory, index, isActive }: PolaroidCardProps) {
  return (
    <motion.article
      data-cursor="card"
      className={`${CARD_WIDTH_CLASS} shrink-0 snap-center ${index > 0 ? POLAROID_OVERLAP : ""}`}
      style={{
        zIndex: index + 1,
        marginTop: memory.offsetY,
      }}
      initial={{ opacity: 0, y: 48, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4, margin: "-10%" }}
      transition={{
        duration: 0.75,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      animate={{
        scale: isActive ? 1.03 : 1,
        rotate: isActive ? memory.rotate * 0.5 : memory.rotate,
      }}
      whileHover={{
        y: -8,
        rotate: memory.rotate + (memory.rotate > 0 ? 1.5 : -1.5),
        transition: { type: "spring", stiffness: 320, damping: 24 },
      }}
    >
      <div
        className="shadow-medium rounded-theme-sm relative p-3 pb-6 sm:p-3.5 sm:pb-7"
        style={{
          backgroundColor: colors.ivory,
          boxShadow: `0 4px 6px color-mix(in srgb, ${colors.navy} 6%, transparent), 0 16px 40px color-mix(in srgb, ${colors.navy} 10%, transparent)`,
        }}
      >
        <div
          className="absolute -top-2 left-1/2 h-5 w-14 -translate-x-1/2 opacity-50"
          style={{
            background: `color-mix(in srgb, ${colors.peach} 70%, transparent)`,
            transform: `translateX(-50%) rotate(${memory.rotate > 0 ? -2 : 2}deg)`,
          }}
          aria-hidden="true"
        />

        <div className="relative aspect-[4/3.5] w-full overflow-hidden rounded-sm">
          <StoryImage
            illustrationId={memory.illustration}
            priority={index === 0}
          />
        </div>

        <div className="mt-4 space-y-1.5 px-0.5 sm:mt-5">
          <h3 className="font-heading text-lg leading-tight text-maroon sm:text-xl">
            {memory.title}
          </h3>
          <p className="font-body text-[11px] uppercase tracking-[0.2em] text-muted">
            {memory.date}
          </p>
          <p className="font-body text-sm leading-relaxed text-foreground sm:text-[15px]">
            {memory.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
