"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import { StoryImage } from "@/components/media";
import { colors } from "@/styles/theme";

import { MEMORY_ASPECT_CLASS } from "./memories.types";
import type { MemoryPhotoCardProps } from "./memories.types";
import { memoryPhotoGradient, polaroidShadow } from "./memories.utils";

export function MemoryPhotoCard({ memory, index }: MemoryPhotoCardProps) {
  const aspectClass = MEMORY_ASPECT_CLASS[memory.aspect];

  return (
    <motion.article
      data-cursor="card"
      className="mb-4 break-inside-avoid sm:mb-5"
      style={{ rotate: `${memory.rotate}deg` }}
      initial={{ opacity: 0, y: 40, scale: 0.94, rotate: memory.rotate - 4 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: memory.rotate,
      }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
      transition={{
        duration: 0.7,
        delay: (index % 4) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -10,
        rotate: memory.rotate * 0.4,
        transition: { type: "spring", stiffness: 320, damping: 22 },
      }}
    >
      <motion.div
        className="rounded-theme-lg relative overflow-hidden p-2.5 pb-5 sm:p-3 sm:pb-6"
        style={{
          backgroundColor: colors.ivory,
          boxShadow: polaroidShadow(),
        }}
        whileHover={{
          boxShadow: polaroidShadow(true),
        }}
      >
        <div
          className={`relative w-full overflow-hidden rounded-theme-md ${aspectClass}`}
          style={{ background: memoryPhotoGradient(memory.gradient) }}
        >
          <StoryImage
            illustrationId={memory.illustration}
            priority={index < 2}
          />

          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `linear-gradient(to top, color-mix(in srgb, ${colors.navy} 18%, transparent) 0%, transparent 45%)`,
            }}
            aria-hidden="true"
          />

          <motion.div
            className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full px-2.5 py-1"
            style={{
              background: `color-mix(in srgb, ${colors.navy} 55%, transparent)`,
              backdropFilter: "blur(8px)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.05 }}
          >
            <Heart size={12} fill={colors.maroon} stroke={colors.gold} strokeWidth={1.5} />
            <span className="font-body text-[11px] tabular-nums text-ivory">
              {memory.likes}
            </span>
          </motion.div>
        </div>

        <p className="font-script mt-3 px-1 text-center text-lg leading-tight text-maroon sm:text-xl">
          {memory.caption}
        </p>
      </motion.div>
    </motion.article>
  );
}
