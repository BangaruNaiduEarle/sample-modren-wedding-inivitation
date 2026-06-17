"use client";

import { motion } from "framer-motion";

import { colors } from "@/styles/theme";
import { formatSvgCoord } from "@/utils/svgCoords";

import {
  AMBIENT_PARTICLES,
  FLOATING_PETALS,
  MARIGOLD_PLACEMENTS,
} from "./invitation.config";

function Marigold({ scale }: { readonly scale: number }) {
  return (
    <svg
      viewBox="0 0 80 80"
      width={80 * scale}
      height={80 * scale}
      aria-hidden="true"
      className="overflow-visible"
    >
      {Array.from({ length: 12 }, (_, index) => {
        const angle = (Math.PI / 6) * index;
        const cx = 40 + Math.cos(angle) * 22;
        const cy = 40 + Math.sin(angle) * 22;

        return (
          <ellipse
            key={index}
            cx={formatSvgCoord(cx)}
            cy={formatSvgCoord(cy)}
            rx="9"
            ry="16"
            fill={colors.gold}
            opacity="0.55"
            transform={`rotate(${formatSvgCoord((angle * 180) / Math.PI)} ${formatSvgCoord(cx)} ${formatSvgCoord(cy)})`}
          />
        );
      })}
      <circle cx="40" cy="40" r="14" fill={colors.maroon} opacity="0.45" />
      <circle cx="40" cy="40" r="8" fill={colors.peach} opacity="0.75" />
    </svg>
  );
}

function PetalShape({ size }: { readonly size: number }) {
  return (
    <svg
      viewBox="0 0 24 32"
      width={size}
      height={size * 1.3}
      aria-hidden="true"
    >
      <path
        d="M12 2C8 10 4 18 12 30C20 18 16 10 12 2Z"
        fill={colors.peach}
        opacity="0.22"
      />
    </svg>
  );
}

export function AmbientLayer() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {/* Center glow */}
<div
  className="
    absolute
    left-1/2
    top-1/2
    h-[700px]
    w-[700px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    blur-3xl
    opacity-40
  "
  style={{
    background:
      "radial-gradient(circle, rgba(250,214,196,0.28) 0%, transparent 70%)",
  }}
/>
      {AMBIENT_PARTICLES.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: colors.gold,
            filter: "blur(1px)",
            boxShadow: `0 0 10px ${colors.gold}`,
          }}
          animate={{
            y: [0, -12, 0],
            scale: [1, 1.4, 1],
            opacity: [0.08, 0.3, 0.08],
          }}
          transition={{
            duration: particle.duration + 3,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {MARIGOLD_PLACEMENTS.map((marigold) => (
        <motion.div
          key={marigold.id}
          className="absolute opacity-70"
          style={{
            left: marigold.x,
            top: marigold.y,
          }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{
            opacity: 0.7,
            scale: marigold.scale,
            rotate: marigold.rotation,
          }}
          transition={{
            duration: 1.2,
            delay: marigold.delay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 5 + marigold.id,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Marigold scale={1} />
          </motion.div>
        </motion.div>
      ))}

      {FLOATING_PETALS.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: `${petal.startY}%`,
          }}
          animate={{
            y: ["0%", "-105vh"],
            x: [0, petal.id % 2 === 0 ? 24 : -24, 0],
            rotate: [petal.rotation, petal.rotation + 120],
            opacity: [0, 0.18, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <PetalShape size={petal.size} />
        </motion.div>
      ))}
    </div>
  );
}
