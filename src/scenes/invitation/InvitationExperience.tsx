"use client";

import { motion, type Variants } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

import { colors } from "@/styles/theme";

import {
  COUNTDOWN_LABELS,
  INVITATION_CONFIG,
} from "./invitation.config";
import { AmbientLayer } from "./AmbientLayer";
import { MandalaBackground } from "./MandalaBackground";
import type { CountdownValues } from "./invitation.types";
import {
  computeCountdown,
  padCountdownUnit,
  scrollToSection,
} from "./invitation.utils";

const revealContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.5,
    },
  },
} as const;

const revealItem: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
  },
};

function CountdownPlaceholder() {
  return (
    <div
      className="flex items-center justify-center gap-2 sm:gap-3"
      aria-hidden="true"
    >
      {COUNTDOWN_LABELS.map((label) => (
        <div key={label} className="flex flex-col items-center">
          <span className="font-heading text-xl tabular-nums text-accent opacity-40 sm:text-2xl">
            00
          </span>
          <span className="font-body text-[10px] uppercase tracking-[0.18em] text-muted">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

function CountdownDisplay({ countdown }: { readonly countdown: CountdownValues }) {
  const values = [
    countdown.days,
    countdown.hours,
    countdown.minutes,
    countdown.seconds,
  ];

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      {values.map((value, index) => (
        <div key={COUNTDOWN_LABELS[index]} className="flex flex-col items-center">
          <span className="font-heading text-xl tabular-nums text-accent sm:text-2xl">
            {padCountdownUnit(value)}
          </span>
          <span className="font-body text-[10px] uppercase tracking-[0.18em] text-muted">
            {COUNTDOWN_LABELS[index]}
          </span>
        </div>
      ))}
    </div>
  );
}

export function InvitationExperience() {
  const [countdown, setCountdown] = useState<CountdownValues | null>(null);

  useEffect(() => {
    const tick = (): void => {
      setCountdown(computeCountdown(INVITATION_CONFIG.weddingDateIso));
    };

    tick();
    const intervalId = window.setInterval(tick, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const handleExplore = (): void => {
    scrollToSection(INVITATION_CONFIG.exploreTargetId);
  };

  return (
    <section
      id="heart"
      aria-label="Invitation Experience"
      className="relative h-dvh w-full snap-start overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 40%, color-mix(in srgb, ${colors.peach} 35%, transparent) 0%, ${colors.ivory} 55%, ${colors.ivory} 100%)`,
        }}
      />

      <MandalaBackground />
      <AmbientLayer />

      <motion.div
        variants={revealContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 pb-28 pt-16 text-center sm:px-10"
      >
        <motion.p
          variants={revealItem}
          className="font-heading mb-6 text-[11px] uppercase tracking-[0.32em] text-muted sm:text-xs"
        >
          With joyful hearts we invite you
        </motion.p>

        <motion.h1
          variants={revealItem}
          className="font-script text-[clamp(3rem,14vw,5.5rem)] leading-none text-maroon"
        >
          {INVITATION_CONFIG.groomName}
        </motion.h1>

        <motion.div variants={revealItem} className="my-3 sm:my-4">
          <motion.span
            animate={{ scale: [1, 1.12, 1] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-flex"
          >
            <Heart
              size={28}
              className="text-accent drop-shadow-[0_0_16px_var(--color-gold)]"
              fill={colors.maroon}
              stroke={colors.gold}
              strokeWidth={1.5}
            />
          </motion.span>
        </motion.div>

        <motion.h2
          variants={revealItem}
          className="font-heading text-[clamp(2rem,10vw,3.75rem)] leading-tight tracking-wide text-navy"
        >
          {INVITATION_CONFIG.brideName}
        </motion.h2>

        <motion.div
          variants={revealItem}
          className="mt-8 flex flex-col items-center gap-5 sm:mt-10"
        >
          <p className="font-body text-base tracking-wide text-foreground sm:text-lg">
            {INVITATION_CONFIG.weddingDateDisplay}
          </p>

          {countdown === null ? (
            <CountdownPlaceholder />
          ) : countdown.isComplete ? (
            <p className="font-script text-2xl text-accent">The day is here</p>
          ) : (
            <CountdownDisplay countdown={countdown} />
          )}
        </motion.div>

        <motion.div variants={revealItem} className="mt-10 sm:mt-12">
          <motion.button
            type="button"
            data-cursor="button"
            onClick={handleExplore}
            className="glass shadow-soft rounded-full px-8 py-3.5 font-heading text-sm uppercase tracking-[0.22em] text-maroon outline-none focus-visible:ring-2 focus-visible:ring-accent"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
          >
            Explore Our Journey
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
