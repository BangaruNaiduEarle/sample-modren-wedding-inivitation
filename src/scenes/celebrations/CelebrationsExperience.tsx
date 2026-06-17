"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import { colors } from "@/styles/theme";

import { EventCard } from "./EventCard";
import {
  AMBIENT_PATTERNS,
  CELEBRATION_EVENTS,
} from "./celebrations.config";
import { accentColorToken } from "./celebrations.utils";

export function CelebrationsExperience() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback((): void => {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    const cards = container.querySelectorAll<HTMLElement>("[data-event-card]");

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    updateActiveIndex();
  }, [updateActiveIndex]);

  return (
    <section
      id="events"
      aria-label="Celebrations"
      className="relative min-h-dvh snap-start overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, color-mix(in srgb, ${colors.maroon} 35%, ${colors.navy}) 0%, ${colors.navy} 55%, color-mix(in srgb, ${colors.navy} 95%, black) 100%)`,
        }}
      />

      {AMBIENT_PATTERNS.map((pattern) => (
        <div
          key={pattern.id}
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full"
          style={{
            left: pattern.x,
            top: pattern.y,
            width: pattern.size,
            height: pattern.size,
            opacity: pattern.opacity,
            background: `radial-gradient(circle, ${colors.gold} 0%, transparent 70%)`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      <div className="relative z-10 flex min-h-dvh flex-col">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="px-6 pt-14 sm:pt-16"
        >
          <p className="font-heading text-[11px] uppercase tracking-[0.28em] text-gold opacity-80">
            Scene III
          </p>
          <h2 className="font-script mt-1 text-[clamp(2.25rem,10vw,3.5rem)] leading-none text-ivory">
            Celebrations
          </h2>
          <p className="font-body mt-3 max-w-sm text-sm leading-relaxed text-peach opacity-90 sm:text-base">
            Four luminous evenings woven into one grand celebration.
          </p>
        </motion.header>

        <div className="mt-6 flex items-center gap-2 px-6">
          {CELEBRATION_EVENTS.map((event, index) => (
            <button
              key={event.id}
              type="button"
              aria-label={`Go to ${event.title}`}
              data-cursor="button"
              onClick={() => {
                const container = scrollRef.current;
                const card = container?.querySelectorAll<HTMLElement>(
                  "[data-event-card]",
                )[index];

                card?.scrollIntoView({
                  behavior: "smooth",
                  inline: "center",
                  block: "nearest",
                });
              }}
              className="group flex flex-col items-center gap-1.5 outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span
                className="h-1 w-8 rounded-full transition-all duration-300 group-hover:w-10"
                style={{
                  backgroundColor:
                    activeIndex === index
                      ? accentColorToken(event.accent)
                      : `color-mix(in srgb, ${colors.ivory} 25%, transparent)`,
                }}
              />
              <span
                className="font-body text-[10px] uppercase tracking-[0.16em] transition-colors duration-300"
                style={{
                  color:
                    activeIndex === index
                      ? accentColorToken(event.accent)
                      : `color-mix(in srgb, ${colors.peach} 70%, transparent)`,
                }}
              >
                {event.title}
              </span>
            </button>
          ))}
        </div>

        <div
          ref={scrollRef}
          onScroll={updateActiveIndex}
          className="mt-8 flex flex-1 items-center gap-5 overflow-x-auto overflow-y-visible px-[6vw] pb-36 pt-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-6 sm:px-12 sm:pb-40 [&::-webkit-scrollbar]:hidden"
        >
          {CELEBRATION_EVENTS.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              index={index}
              isActive={activeIndex === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
