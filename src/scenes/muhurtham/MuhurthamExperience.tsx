"use client";

import { motion } from "framer-motion";
import { colors } from "@/styles/theme";
import { MUHURTHAM } from "./muhurtham.config";

export function MuhurthamExperience() {
return ( <section
   id="muhurtham"
   className="relative min-h-dvh snap-start overflow-hidden"
 >
{/* Background */}
<div
className="absolute inset-0"
style={{
background: `             radial-gradient(circle at center,
            color-mix(in srgb, ${colors.peach} 18%, transparent) 0%,
            transparent 65%),
            ${colors.ivory}
          `,
}}
/>


  {/* Mandala Glow */}
  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      background:
        "radial-gradient(circle at center, rgba(212,175,55,.15), transparent 70%)",
    }}
  />

  <div className="relative z-10 flex min-h-dvh items-center justify-center px-6 py-20">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="glass shadow-medium rounded-theme max-w-xl px-8 py-14 text-center"
    >
      <div className="mb-5 text-3xl">
        🌸
      </div>

      <p className="font-heading text-[11px] uppercase tracking-[0.28em] text-muted">
        Sacred Union
      </p>

      <h2 className="font-script mt-3 text-[clamp(2.5rem,9vw,4rem)] text-maroon">
        {MUHURTHAM.title}
      </h2>

      <div className="mt-8 space-y-3">
        <p className="font-body text-lg text-foreground">
          {MUHURTHAM.day}
        </p>

        <p className="font-heading text-2xl text-accent">
          {MUHURTHAM.date}
        </p>

        <div className="text-5xl">🕉️</div>

        <p className="font-script text-3xl text-maroon">
          {MUHURTHAM.time}
        </p>
      </div>

      <div className="mt-10">
        <div className="mx-auto mb-5 h-px w-24 bg-accent/40" />

        <p className="font-heading text-sm uppercase tracking-[0.18em] text-muted">
          Venue
        </p>

        <p className="mt-3 font-body text-base leading-relaxed text-foreground">
          {MUHURTHAM.venue}
        </p>
      </div>

      <div className="mt-10">
        <p className="font-script text-xl text-maroon">
          ✨ Seeking your blessings and presence ✨
        </p>
      </div>

      <p className="mt-8 font-body text-sm leading-relaxed text-muted">
        {MUHURTHAM.quote}
      </p>
    </motion.div>
  </div>
</section>

);
}
