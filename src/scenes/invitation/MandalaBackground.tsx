"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function MandalaBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Soft center glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(212,175,55,0.08) 0%, rgba(255,248,240,0) 60%)",
        }}
      />

      {/* Large Mandala */}
      <motion.div
  className="absolute inset-0 flex items-center justify-center"
  animate={{ rotate: 360 }}
  transition={{
    duration: 240,
    ease: "linear",
    repeat: Infinity,
  }}
>
  <Image
    src="/images/illustrations/mandala.jpg"
    alt=""
    width={1400}
    height={1400}
    className="w-auto h-[90vh] object-contain opacity-[0.02] blur-[2px]"
    priority
  />
</motion.div>

      {/* Secondary Mandala */}
      <motion.div
  className="absolute inset-0 flex items-center justify-center"
  animate={{ rotate: -360 }}
  transition={{
    duration: 180,
    ease: "linear",
    repeat: Infinity,
  }}
>
  <Image
    src="/images/illustrations/mandala.jpg"
    alt=""
    width={1000}
    height={1000}
    className="w-auto h-[70vh] object-contain opacity-[0.04] blur-[1px]"
  />
</motion.div>

      {/* Center Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-3xl
        "
        style={{
          background:
            "radial-gradient(circle, rgba(250,214,196,0.25) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}