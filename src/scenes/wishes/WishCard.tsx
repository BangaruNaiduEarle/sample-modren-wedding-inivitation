"use client";

import { motion } from "framer-motion";

import { colors } from "@/styles/theme";

import { DEFAULT_PAPER_STYLE } from "./wishes.types";
import type { WishCardProps } from "./wishes.types";
import {
  goldBorderStyle,
  paperBackground,
  wishCardShadow,
} from "./wishes.utils";

export function WishCard({ wish, index }: WishCardProps) {
  const { borderWidth } = DEFAULT_PAPER_STYLE;

  return (
    <motion.article
      data-cursor="card"
      className="relative mx-auto w-full max-w-md"
      style={{
        marginLeft: wish.offsetX,
        zIndex: index + 1,
        marginTop: index > 0 ? -20 : 0,
      }}
      initial={{ opacity: 0, y: 50, rotate: wish.rotate - 5, scale: 0.95 }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: wish.rotate,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -30px 0px" }}
      transition={{
        duration: 0.85,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: wish.floatDuration,
          delay: wish.floatDelay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          y: -12,
          rotate: wish.rotate * 0.5,
          transition: { type: "spring", stiffness: 300, damping: 22 },
        }}
      >
        <div
          className="relative overflow-hidden rounded-theme-sm p-6 sm:p-7"
          style={{
            background: paperBackground(),
            border: goldBorderStyle(borderWidth),
            boxShadow: wishCardShadow(),
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `radial-gradient(${colors.navy} 0.5px, transparent 0.5px)`,
              backgroundSize: "18px 18px",
            }}
            aria-hidden="true"
          />

          <div
            className="absolute right-0 top-0 h-8 w-8"
            style={{
              background: `linear-gradient(135deg, color-mix(in srgb, ${colors.peach} 60%, transparent) 50%, color-mix(in srgb, ${colors.gold} 20%, transparent) 50%)`,
            }}
            aria-hidden="true"
          />

          <header className="relative mb-4 border-b pb-3" style={{ borderColor: `color-mix(in srgb, ${colors.gold} 25%, transparent)` }}>
            <p className="font-heading text-lg leading-tight text-maroon sm:text-xl">
              {wish.guestName}
            </p>
            <p className="font-body mt-1 text-[11px] uppercase tracking-[0.22em] text-muted">
              {wish.relation}
            </p>
          </header>

          <blockquote className="relative">
            <p className="font-body text-[15px] italic leading-[1.75] text-foreground sm:text-base">
              &ldquo;{wish.message}&rdquo;
            </p>
          </blockquote>

          <footer className="relative mt-5 text-right">
            <p className="font-script text-xl text-accent sm:text-2xl">with love</p>
          </footer>
        </div>
      </motion.div>
    </motion.article>
  );
}
