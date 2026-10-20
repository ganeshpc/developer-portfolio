"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";

const options = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    function onPointer(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = options.find((option) => option.value === theme) ?? options[2];
  const Icon = current.icon;

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full text-text transition-colors duration-200 hover:bg-surface-secondary"
        aria-label={
          mounted ? `Theme: ${current.label}. Change theme.` : "Change theme"
        }
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        {mounted ? (
          <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
        ) : (
          <span className="h-[18px] w-[18px]" />
        )}
      </button>
      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-label="Theme"
          className="absolute right-0 z-50 mt-2 w-40 rounded-2xl border border-border bg-surface p-1 shadow-[0_8px_30px_rgba(15,23,42,0.08)]"
        >
          {options.map((option) => {
            const OptionIcon = option.icon;
            const selected = theme === option.value;
            return (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                className={`flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm ${
                  selected ? "text-accent" : "text-text"
                } hover:bg-surface-secondary`}
                onClick={() => {
                  setTheme(option.value);
                  setOpen(false);
                }}
              >
                <OptionIcon className="h-4 w-4" strokeWidth={1.5} />
                {option.label}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
