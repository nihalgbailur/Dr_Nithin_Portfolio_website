import Container from "./container";

type AboutSectionProps = {
  tr: (key: string) => string;
};

export default function AboutSection({ tr }: AboutSectionProps) {
  return (
    <section id="about" className="relative py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="glass relative overflow-hidden rounded-[28px] p-6">
              <div
                className="portrait-placeholder"
                role="img"
                aria-label="Doctor photo placeholder"
              >
                <div className="absolute inset-0 rounded-[22px] bg-[linear-gradient(160deg,_rgba(13,148,136,0.35),_rgba(255,255,255,0.75))] flex flex-col items-center justify-center">
                  <svg
                    className="h-14 w-14 text-teal-600/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <p className="mt-2 text-xs font-medium text-teal-700/60">
                    Add Photo
                  </p>
                </div>
                <span className="absolute bottom-6 left-6 rounded-full bg-black/80 border border-white/20 px-4 py-2 text-xs font-semibold text-[color:var(--teal-500)] shadow">
                  {tr("about_badge")}
                </span>
              </div>
            </div>
            <div className="glass rounded-2xl p-5 text-sm text-[color:var(--ink-700)]">
              {tr("about_highlight")}
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--teal-600)]">
                {tr("about_label")}
              </p>
              <h2 className="font-display text-3xl font-semibold text-[color:var(--ink-900)] md:text-4xl">
                {tr("about_title")}
              </h2>
              <p className="text-base leading-relaxed text-[color:var(--ink-700)]">
                {tr("about_body")}
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-500)]">
                {tr("about_education_title")}
              </p>
              <div className="glass rounded-2xl p-4">
                <p className="text-sm font-semibold text-[color:var(--ink-900)]">
                  {tr("about_education_mbbs")}
                </p>
                <p className="text-sm text-[color:var(--ink-600)]">
                  {tr("about_education_mbbs_inst")}
                </p>
              </div>
              <div className="glass rounded-2xl p-4">
                <p className="text-sm font-semibold text-[color:var(--ink-900)]">
                  {tr("about_education_ms")}
                </p>
                <p className="text-sm text-[color:var(--ink-600)]">
                  {tr("about_education_ms_inst")}
                </p>
              </div>
            </div>
            <blockquote className="glass rounded-2xl border-l-4 border-teal-600/70 p-5 text-sm italic text-[color:var(--ink-700)]">
              {tr("about_quote")}
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}
