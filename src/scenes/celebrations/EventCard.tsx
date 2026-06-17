"use client";

import { motion } from "framer-motion";

import { StoryImage } from "@/components/media";
import { colors } from "@/styles/theme";

import { CARD_HEIGHT_CLASS, CARD_WIDTH_CLASS } from "./celebrations.config";
import {
  accentColorToken,
  gradientForEvent,
  overlayGradient,
  shimmerGradient,
} from "./celebrations.utils";
import type { EventCardProps } from "./celebrations.types";

function EventPattern({ accent }: { readonly accent: EventCardProps["event"]["accent"] }) {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div
        className="absolute -right-8 -top-8 h-48 w-48 rounded-full opacity-20"
        style={{ backgroundColor: accentColorToken(accent) }}
      />
      <div
        className="absolute -bottom-12 -left-6 h-56 w-56 rounded-full opacity-10"
        style={{ backgroundColor: colors.ivory }}
      />
      <svg
        viewBox="0 0 200 200"
        className="absolute right-4 top-1/2 h-32 w-32 -translate-y-1/2 opacity-[0.08]"
        aria-hidden="true"
      >
        {Array.from({ length: 8 }, (_, index) => {
          const angle = (Math.PI / 4) * index;
          return (
            <line
              key={index}
              x1={100}
              y1={100}
              x2={100 + Math.cos(angle) * 90}
              y2={100 + Math.sin(angle) * 90}
              stroke={accentColorToken(accent)}
              strokeWidth="0.8"
            />
          );
        })}
        <circle
          cx="100"
          cy="100"
          r="40"
          fill="none"
          stroke={accentColorToken(accent)}
          strokeWidth="0.6"
        />
      </svg>
    </div>
  );
}

export function EventCard({ event, index, isActive }: EventCardProps) {
  const highlighted = isActive;

  return (
    <motion.article
      data-cursor="card"
      data-event-card
      className={`${CARD_WIDTH_CLASS} ${CARD_HEIGHT_CLASS} relative shrink-0 snap-center overflow-hidden rounded-theme-xl`}
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      animate={{
        scale: highlighted ? 1.02 : 0.97,
      }}
      whileHover={{
        scale: 1.03,
        transition: { type: "spring", stiffness: 340, damping: 26 },
      }}
      style={{
        zIndex: highlighted ? 10 : index + 1,
      }}
    >
      <div
        className="absolute inset-0"
        style={{ background: gradientForEvent(event.gradient) }}
      />

      <div className="absolute inset-0">
        <StoryImage
          illustrationId={event.illustration}
          priority={index === 0}
          className="scale-105"
        />
      </div>

      <EventPattern accent={event.accent} />

      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: shimmerGradient(event.accent) }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0"
        style={{ background: overlayGradient() }}
      />

      <div
        className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-40"
        style={{ background: gradientForEvent(event.gradient) }}
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
        <motion.p
          animate={{ opacity: highlighted ? 1 : 0.75 }}
          className="font-heading text-[11px] uppercase tracking-[0.28em]"
          style={{ color: accentColorToken(event.accent) }}
        >
          {event.date} · {event.time}
        </motion.p>

        <h3 className="font-heading mt-2 text-[clamp(2rem,8vw,2.75rem)] leading-none tracking-wide text-ivory">
          {event.title}
        </h3>

        <p className="font-body mt-2 text-base leading-relaxed text-peach sm:text-lg">
          {event.subtitle}
        </p>

        <p className="font-body mt-4 text-sm tracking-wide text-ivory opacity-80">
          {event.venue}
        </p>

        {highlighted ? (
          <motion.div
            layoutId="event-focus-ring"
            className="pointer-events-none absolute inset-0 rounded-theme-xl"
            style={{
              boxShadow: `0 0 0 2px ${accentColorToken(event.accent)}, 0 0 40px color-mix(in srgb, ${accentColorToken(event.accent)} 35%, transparent), inset 0 0 0 1px color-mix(in srgb, ${colors.ivory} 15%, transparent)`,
            }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
          />
        ) : null}
      </div>
    </motion.article>
  );
}
