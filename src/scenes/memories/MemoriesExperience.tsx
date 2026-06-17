"use client";

import { motion } from "framer-motion";

import { colors } from "@/styles/theme";

import { MASONRY_COLUMN_CLASS, MEMORY_ITEMS } from "./memories.config";
import { MemoryPhotoCard } from "./MemoryPhotoCard";

export function MemoriesExperience() {
  return (
    <section
      id="gallery"
      aria-label="Memories"
      className="relative min-h-dvh snap-start overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 15% 20%, color-mix(in srgb, ${colors.peach} 35%, transparent) 0%, transparent 45%),
            radial-gradient(circle at 85% 75%, color-mix(in srgb, ${colors.gold} 15%, transparent) 0%, transparent 40%),
            ${colors.ivory}
          `,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(${colors.navy} 0.5px, transparent 0.5px)`,
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 px-5 pb-36 pt-14 sm:px-8 sm:pb-40 sm:pt-16">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-10"
        >
          <p className="font-heading text-[11px] uppercase tracking-[0.28em] text-muted">
            Scene IV
          </p>
          <h2 className="font-script mt-1 text-[clamp(2.25rem,10vw,3.5rem)] leading-none text-maroon">
            Memories
          </h2>
          <p className="font-body mt-3 max-w-md text-sm leading-relaxed text-foreground sm:text-base">
            A living album — moments pinned with love, light, and laughter.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={MASONRY_COLUMN_CLASS}
        >
          {MEMORY_ITEMS.map((memory, index) => (
            <MemoryPhotoCard key={memory.id} memory={memory} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
