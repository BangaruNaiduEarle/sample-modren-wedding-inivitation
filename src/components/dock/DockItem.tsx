"use client";

import { motion } from "framer-motion";

import { colors, semanticColors } from "@/styles/theme";

import { DEFAULT_DOCK_ITEM_MOTION } from "./dock.types";
import type { DockItemProps } from "./dock.types";

const motionConfig = DEFAULT_DOCK_ITEM_MOTION;

export function DockItem({
  item,
  isActive,
  variant,
  onSelect,
}: DockItemProps) {
  const Icon = item.icon;
  const isDesktop = variant === "desktop";

  const handleClick = (): void => {
    onSelect(item);
  };

  if (isDesktop) {
    return (
      <motion.button
        type="button"
        aria-label={item.label}
        aria-current={isActive ? "page" : undefined}
        data-cursor="button"
        onClick={handleClick}
        className="relative flex size-11 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-accent"
        whileHover={{
          scale: motionConfig.hoverScale,
          y: motionConfig.hoverLift,
        }}
        whileTap={{ scale: motionConfig.tapScale }}
        transition={{
          type: "spring",
          stiffness: motionConfig.springStiffness,
          damping: motionConfig.springDamping,
        }}
      >
        {isActive ? (
          <motion.span
            layoutId="dock-active-glow"
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle, color-mix(in srgb, ${colors.gold} 32%, transparent) 0%, transparent 70%)`,
              boxShadow: `0 0 20px color-mix(in srgb, ${colors.gold} 40%, transparent)`,
            }}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          />
        ) : null}

        <motion.span
          animate={{
            color: isActive ? colors.gold : colors.navy,
          }}
          transition={{ duration: 0.25 }}
          className="relative z-10"
        >
          <Icon
            size={22}
            strokeWidth={isActive ? 2.25 : 1.75}
            fill={isActive ? colors.maroon : "none"}
          />
        </motion.span>
      </motion.button>
    );
  }

  return (
    <motion.button
      type="button"
      aria-label={item.label}
      aria-current={isActive ? "page" : undefined}
      onClick={handleClick}
      className="relative flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 px-1 pt-2 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
      whileTap={{ scale: motionConfig.tapScale }}
      transition={{
        type: "spring",
        stiffness: motionConfig.springStiffness,
        damping: motionConfig.springDamping,
      }}
    >
      {isActive ? (
        <motion.span
          layoutId="dock-mobile-indicator"
          className="absolute top-1 h-0.5 w-5 rounded-full bg-accent"
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 32,
          }}
        />
      ) : null}

      <motion.span
        animate={{
          scale: isActive ? 1.08 : 1,
          color: isActive ? colors.gold : semanticColors.muted,
        }}
        transition={{
          type: "spring",
          stiffness: 360,
          damping: 26,
        }}
        className="relative z-10"
      >
        <Icon
          size={21}
          strokeWidth={isActive ? 2.25 : 1.85}
          fill={isActive ? colors.maroon : "none"}
        />
      </motion.span>

      <motion.span
        animate={{
          color: isActive ? colors.maroon : semanticColors.muted,
          opacity: isActive ? 1 : 0.82,
        }}
        transition={{ duration: 0.2 }}
        className="relative z-10 max-w-full truncate font-body text-[10px] leading-none tracking-wide"
      >
        {item.label}
      </motion.span>
    </motion.button>
  );
}
