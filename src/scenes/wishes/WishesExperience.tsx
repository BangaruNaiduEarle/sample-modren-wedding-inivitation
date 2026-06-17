"use client";

import { motion } from "framer-motion";

import { colors } from "@/styles/theme";

import { WishCard } from "./WishCard";
import { WEDDING_WISHES } from "./wishes.config";
import { paperTextureOverlay, sceneWarmBackground } from "./wishes.utils";

export function WishesExperience() {
  return (
    <section
      id="blessings"
      aria-label="Wedding Wishes"
      className="relative min-h-dvh snap-start overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{ background: sceneWarmBackground() }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: paperTextureOverlay(),
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 3px,
            color-mix(in srgb, ${colors.peach} 40%, transparent) 3px,
            color-mix(in srgb, ${colors.peach} 40%, transparent) 4px
          )`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 px-5 pb-36 pt-14 sm:px-8 sm:pb-40 sm:pt-16">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 text-center sm:mb-12"
        >
          <p className="font-heading text-[11px] uppercase tracking-[0.28em] text-muted">
            Scene V
          </p>
          <h2 className="font-script mt-1 text-[clamp(2.25rem,10vw,3.75rem)] leading-none text-maroon">
            Wedding Wishes
          </h2>
          <p className="font-body mx-auto mt-4 max-w-sm text-sm leading-relaxed text-foreground sm:text-base">
            Letters from the heart — folded with care, kept forever.
          </p>
        </motion.header>

        <div className="relative mx-auto flex max-w-lg flex-col">
          {WEDDING_WISHES.map((wish, index) => (
            <WishCard key={wish.id} wish={wish} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 flex justify-center sm:mt-14"
        >
          <motion.button
            type="button"
            data-cursor="button"
            className="glass shadow-soft rounded-full border px-8 py-3.5 font-heading text-sm uppercase tracking-[0.2em] text-maroon outline-none focus-visible:ring-2 focus-visible:ring-accent"
            style={{
              borderColor: `color-mix(in srgb, ${colors.gold} 45%, transparent)`,
            }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
          >
            Leave a Wish
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
