// src/components/Modal.tsx
"use client";

import React, { ReactNode, useEffect } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
  title?: string;
  size?: "sm" | "md" | "lg" | "full";
  showClose?: boolean;
};

export default function Modal({
  open,
  onClose,
  children,
  title,
  size = "md",
  showClose = true,
}: ModalProps) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  const sizeClass =
    size === "sm"
      ? "max-w-md"
      : size === "lg"
      ? "max-w-4xl"
      : size === "full"
      ? "w-full h-full"
      : "max-w-2xl";

  return (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={`relative ${sizeClass} mx-auto rounded-lg bg-white dark:bg-black text-black dark:text-white shadow-lg overflow-hidden`}
        style={{ zIndex: 60 }}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b dark:border-neutral-800">
          <div className="text-lg font-semibold">{title}</div>
          {showClose && (
            <button
              onClick={onClose}
              aria-label="Close"
              className="ml-2 rounded p-1 hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              ✕
            </button>
          )}
        </div>

        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
