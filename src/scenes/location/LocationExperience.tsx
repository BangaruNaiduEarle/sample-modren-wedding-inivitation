"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

import { colors } from "@/styles/theme";

import { LOCATION_CONFIG, LOCATION_DETAILS } from "./location.config";

export function LocationExperience() {
  return (
    <section
      id="location"
      aria-label="Venue Location"
      className="relative flex min-h-dvh snap-start flex-col items-center justify-center overflow-hidden px-6 pb-36 pt-20"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 100%, color-mix(in srgb, ${colors.maroon} 30%, ${colors.navy}) 0%, ${colors.navy} 50%),
            ${colors.navy}
          `,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="mb-8 text-center">
          <p className="font-heading text-[11px] uppercase tracking-[0.28em] text-gold opacity-80">
            Scene VI · The Final Chapter
          </p>
          <h2 className="font-script mt-2 text-[clamp(2.5rem,11vw,4rem)] leading-none text-ivory">
            Find Us
          </h2>
        </div>

        <div
          className="glass shadow-elevated overflow-hidden rounded-theme-xl"
          style={{
            borderColor: `color-mix(in srgb, ${colors.gold} 35%, transparent)`,
          }}
        >
          <div
            className="relative flex aspect-[16/10] items-center justify-center"
            style={{
              background: `linear-gradient(145deg, color-mix(in srgb, ${colors.maroon} 50%, ${colors.navy}) 0%, color-mix(in srgb, ${colors.gold} 25%, ${colors.navy}) 100%)`,
            }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <MapPin
                size={48}
                stroke={colors.gold}
                fill={colors.maroon}
                strokeWidth={1.5}
                className="drop-shadow-[0_0_24px_var(--color-gold)]"
              />
            </motion.div>

            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: `radial-gradient(circle at 50% 60%, color-mix(in srgb, ${colors.gold} 40%, transparent) 0%, transparent 60%)`,
              }}
              aria-hidden="true"
            />
          </div>

          <div className="space-y-5 p-6 sm:p-7">
            <div>
              <h3 className="font-heading text-xl text-ivory sm:text-2xl">
                {LOCATION_CONFIG.venueName}
              </h3>
              <p className="font-body mt-1 text-peach">
                {LOCATION_CONFIG.address}, {LOCATION_CONFIG.city}
              </p>
            </div>

            <ul className="space-y-3 border-t pt-4" style={{ borderColor: `color-mix(in srgb, ${colors.gold} 20%, transparent)` }}>
              {LOCATION_DETAILS.map((detail) => (
                <li key={detail.label} className="flex flex-col gap-0.5">
                  <span className="font-heading text-[10px] uppercase tracking-[0.2em] text-gold">
                    {detail.label}
                  </span>
                  <span className="font-body text-sm text-ivory opacity-90">
                    {detail.value}
                  </span>
                </li>
              ))}
            </ul>

            <motion.a
              href={LOCATION_CONFIG.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="button"
              className="flex w-full items-center justify-center gap-2 rounded-full py-3.5 font-heading text-sm uppercase tracking-[0.18em] text-maroon outline-none focus-visible:ring-2 focus-visible:ring-accent"
              style={{
                background: `color-mix(in srgb, ${colors.ivory} 92%, transparent)`,
              }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
            >
              <Navigation size={16} stroke={colors.maroon} />
              Get Directions
            </motion.a>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-script mt-10 text-center text-2xl text-peach"
        >
          We cannot wait to celebrate with you
        </motion.p>
      </motion.div>
    </section>
  );
}
