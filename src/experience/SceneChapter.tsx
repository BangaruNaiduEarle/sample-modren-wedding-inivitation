"use client";

import { motion } from "framer-motion";

import type { SceneChapterProps } from "./experience.types";

export function SceneChapter({ chapterIndex, children }: SceneChapterProps) {
  return (
    <motion.div
      data-scene-chapter={chapterIndex}
      initial={{ opacity: 0.92, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.25, margin: "-5% 0px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}
