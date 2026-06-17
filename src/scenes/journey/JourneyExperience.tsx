"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import { colors } from "@/styles/theme";

import { PolaroidCard } from "./PolaroidCard";
import { ScrapbookDoodles } from "./ScrapbookDoodles";
import { JOURNEY_MEMORIES } from "./journey.config";

export function JourneyExperience() {
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

    const cards = container.querySelectorAll<HTMLElement>("[data-polaroid-card]");

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
      id="story"
      aria-label="Our Journey"
      className="relative min-h-dvh snap-start overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, color-mix(in srgb, ${colors.peach} 30%, transparent) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, color-mix(in srgb, ${colors.gold} 12%, transparent) 0%, transparent 45%),
            ${colors.ivory}
          `,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 28px,
            color-mix(in srgb, ${colors.navy} 15%, transparent) 28px,
            color-mix(in srgb, ${colors.navy} 15%, transparent) 29px
          )`,
        }}
        aria-hidden="true"
      />

      <ScrapbookDoodles />

      <div className="relative z-10 flex h-full min-h-dvh flex-col">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="px-6 pt-14 sm:pt-16"
        >
          <p className="font-heading text-[11px] uppercase tracking-[0.28em] text-muted">
            Scene II
          </p>
          <h2 className="font-script mt-1 text-[clamp(2.25rem,10vw,3.5rem)] leading-none text-maroon">
          From First Hello To Forever
          </h2>
        </motion.header>

        <div
          className="mt-5 flex gap-1 px-6 sm:mt-6"
          role="tablist"
          aria-label="Story progress"
        >
          {JOURNEY_MEMORIES.map((memory, index) => (
            <motion.div
              key={memory.id}
              role="tab"
              aria-selected={activeIndex === index}
              className="h-0.5 flex-1 overflow-hidden rounded-full"
              style={{
                backgroundColor: `color-mix(in srgb, ${colors.gold} 22%, transparent)`,
              }}
            >
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: index <= activeIndex ? 1 : 0 }}
                style={{ transformOrigin: "left center" }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          ))}
        </div>

        <div
          ref={scrollRef}
          onScroll={updateActiveIndex}
          className="mt-8 flex flex-1 items-center gap-0 overflow-x-auto overflow-y-visible px-[11vw] pb-36 pt-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] sm:px-16 sm:pb-40 [&::-webkit-scrollbar]:hidden"
        >
          {JOURNEY_MEMORIES.map((memory, index) => (
            <div key={memory.id} data-polaroid-card>
              <PolaroidCard
                memory={memory}
                index={index}
                isActive={activeIndex === index}
              />
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="pointer-events-none absolute bottom-28 left-0 right-0 text-center font-script text-sm text-muted md:hidden sm:bottom-32"
        >
          swipe to turn the page →
        </motion.p>
      </div>
    </section>
  );
}
