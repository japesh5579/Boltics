"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

export type SpecRow = Record<string, string>;

export default function SpecModal({
  title,
  columns,
  rows,
  onClose,
}: {
  title: string;
  columns: string[];
  rows: SpecRow[];
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-5"
      onClick={onClose}
    >
      <div
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-md bg-white p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-orange-dark">
              Specifications
            </p>
            <h3 className="mt-1 font-display text-xl font-semibold uppercase text-ink">{title}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition-colors hover:border-orange hover:text-orange"
          >
            <X size={16} />
          </button>
        </div>

        <div className="relative mt-6">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-ink/15 text-left">
                  {columns.map((col) => (
                    <th key={col} className="whitespace-nowrap py-2 pr-4 font-display text-xs font-semibold uppercase tracking-wide text-ink/60">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-b border-ink/10">
                    {columns.map((col) => (
                      <td key={col} className="whitespace-nowrap py-2.5 pr-4 text-ink/80">
                        {row[col]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent sm:hidden" />
        </div>

        <p className="mt-2 text-xs text-ink/40 sm:hidden">Swipe table to see more &rarr;</p>
        <p className="mt-4 text-xs text-ink/40">* Dimensions and weight are given approximately.</p>
      </div>
    </div>
  );
}
