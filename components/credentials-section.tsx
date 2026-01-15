import type { AffiliationItem, TimelineItem } from "../lib/content-data";
import Container from "./container";

type CredentialsSectionProps = {
  timeline: TimelineItem[];
  affiliations: AffiliationItem[];
  tr: (key: string) => string;
};

export default function CredentialsSection({
  timeline,
  affiliations,
  tr,
}: CredentialsSectionProps) {
  return (
    <section id="credentials" className="relative py-20">
      <Container>
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--teal-600)]">
              {tr("credentials_label")}
            </p>
            <h2 className="font-display text-3xl font-semibold text-[color:var(--ink-900)] md:text-4xl">
              {tr("credentials_title")}
            </h2>
            <p className="max-w-2xl text-base text-[color:var(--ink-700)]">
              {tr("credentials_body")}
            </p>
          </div>

          <div className="mt-8">
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-500)]">
              {tr("credentials_timeline_title")}
            </p>
            <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-start md:justify-between md:gap-0">
              <div className="absolute top-3 left-4 right-4 hidden h-[3px] rounded-full bg-gradient-to-r from-teal-600/30 via-teal-500 to-teal-600/30 md:block" />

              {timeline.map((node) => (
                <div
                  key={node.year}
                  className="group relative z-10 flex items-center gap-4 md:flex-col md:items-center md:gap-2 md:text-center"
                >
                  <span className="absolute -top-5 left-1/2 hidden -translate-x-1/2 text-[10px] font-semibold text-[color:var(--teal-600)] md:block">
                    {node.year}
                  </span>
                  <div
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-[3px] border-teal-500 transition group-hover:scale-125 md:h-7 md:w-7 ${
                      node.active
                        ? "bg-teal-500 shadow-[0_0_0_6px_rgba(13,148,136,0.2)]"
                        : "bg-white/10 group-hover:bg-teal-500 group-hover:shadow-[0_0_0_6px_rgba(45,212,191,0.2)]"
                    }`}
                  />
                  <div className="md:mt-3">
                    <p className="text-sm font-semibold text-[color:var(--ink-900)]">
                      {tr(node.labelKey)}
                    </p>
                    <p className="text-xs text-[color:var(--ink-500)]">
                      {tr(node.detailKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass mt-6 rounded-3xl p-6">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-500)]">
              {tr("affiliations_title")}
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {affiliations.map((aff) => (
                <div
                  key={aff.key}
                  className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 transition hover:-translate-y-1 hover:bg-white/10 hover:shadow-md"
                >
                  <span className="flex h-6 w-6 items-center justify-center text-teal-500 transition group-hover:scale-110">
                    {aff.icon === "hospital" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-5 w-5"
                      >
                        <path d="M3 21h18M5 21V7l8-4 8 4v14M9 21v-6h6v6M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />
                      </svg>
                    )}
                    {aff.icon === "bone" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-5 w-5"
                      >
                        <circle cx="5" cy="5" r="2" />
                        <circle cx="19" cy="19" r="2" />
                        <path d="M5 7v2a4 4 0 004 4h6a4 4 0 004-4V7M5 17v-2a4 4 0 014-4" />
                      </svg>
                    )}
                    {aff.icon === "medical" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-5 w-5"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    )}
                  </span>
                  <span className="text-xs font-semibold text-[color:var(--ink-700)]">
                    {tr(aff.key)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
