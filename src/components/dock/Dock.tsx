"use client";

import { motion } from "framer-motion";
import { useCallback, useState } from "react";

import { DOCK_NAV_ITEMS } from "./dock.config";
import { DockItem } from "./DockItem";
import { DEFAULT_DOCK_LAYOUT } from "./dock.types";
import type { DockItemId, DockNavItem, DockProps } from "./dock.types";

export function Dock({
  activeId: controlledActiveId,
  defaultActiveId = "heart",
  onNavigate,
}: DockProps) {
  const [internalActiveId, setInternalActiveId] =
    useState<DockItemId>(defaultActiveId);

  const activeId = controlledActiveId ?? internalActiveId;

  const handleSelect = useCallback(
    (item: DockNavItem): void => {
      if (controlledActiveId === undefined) {
        setInternalActiveId(item.id);
      }

      onNavigate?.(item);

      const target = document.querySelector(item.href);

      if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [controlledActiveId, onNavigate],
  );

  return (
    <>
      <motion.nav
        aria-label="Experience navigation"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 320,
          damping: 32,
          delay: 0.15,
        }}
        style={{ bottom: DEFAULT_DOCK_LAYOUT.desktopBottomOffset }}
        className="pointer-events-auto fixed left-1/2 z-50 hidden -translate-x-1/2 md:block"
      >
        <div className="glass shadow-soft flex items-center gap-0.5 rounded-full px-2.5 py-2">
          {DOCK_NAV_ITEMS.map((item) => (
            <DockItem
              key={item.id}
              item={item}
              isActive={activeId === item.id}
              variant="desktop"
              onSelect={handleSelect}
            />
          ))}
        </div>
      </motion.nav>

      <motion.nav
        aria-label="Experience navigation"
        initial={{ y: 48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 340,
          damping: 34,
          delay: 0.1,
        }}
        className={`pointer-events-auto fixed inset-x-0 bottom-0 z-50 md:hidden ${DEFAULT_DOCK_LAYOUT.mobileSafeAreaClass}`}
      >
        <div
          className="border-t shadow-soft pt-1"
          style={{
            background: "color-mix(in srgb, var(--color-ivory) 82%, transparent)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderColor: "color-mix(in srgb, var(--color-gold) 18%, transparent)",
          }}
        >
          <div className="mx-auto flex max-w-lg items-stretch justify-around px-1">
            {DOCK_NAV_ITEMS.map((item) => (
              <DockItem
                key={item.id}
                item={item}
                isActive={activeId === item.id}
                variant="mobile"
                onSelect={handleSelect}
              />
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
}
