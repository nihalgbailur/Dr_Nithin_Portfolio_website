import type { RefObject } from "react";
import type { WhatsappOption } from "../lib/content-data";
import { WhatsappIcon } from "./icon-library";

type WhatsappWidgetProps = {
  tr: (key: string) => string;
  options: WhatsappOption[];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  onSelect: (key: string) => void;
  widgetRef: RefObject<HTMLDivElement>;
};

export default function WhatsappWidget({
  tr,
  options,
  open,
  onToggle,
  onClose,
  onSelect,
  widgetRef,
}: WhatsappWidgetProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50" ref={widgetRef}>
      <button
        type="button"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_32px_rgba(37,211,102,0.35)] transition hover:-translate-y-1"
        aria-label={tr("whatsapp_label")}
        aria-expanded={open}
        onClick={onToggle}
      >
        <WhatsappIcon className="h-6 w-6" />
      </button>
      {open && (
        <div
          className="glass absolute bottom-16 right-0 w-64 rounded-2xl p-4"
          role="dialog"
          aria-label={tr("whatsapp_quick_title")}
        >
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-500)]">
              {tr("whatsapp_quick_title")}
            </p>
            <button
              type="button"
              className="text-lg text-[color:var(--ink-500)]"
              aria-label="Close"
              onClick={onClose}
            >
              ×
            </button>
          </div>
          <div className="mt-3 grid gap-2">
            {options.map((option) => (
              <button
                key={option.key}
                type="button"
                className="rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 px-3 py-2 text-left text-xs font-semibold text-[#1B7B47] transition hover:bg-[#25D366]/20"
                onClick={() => onSelect(option.key)}
              >
                {tr(option.labelKey)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
