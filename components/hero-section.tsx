import Container from "./container";
import { BoneIcon, SpineIcon } from "./icon-library";

type HeroSectionProps = {
  tr: (key: string) => string;
  primaryHref: string;
  secondaryHref: string;
};

export default function HeroSection({
  tr,
  primaryHref,
  secondaryHref,
}: HeroSectionProps) {
  return (
    <section id="home" className="relative pb-20 pt-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--teal-600)]">
              {tr("hero_greeting")}
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-[color:var(--ink-900)] md:text-6xl">
              {tr("hero_name")}
            </h1>
            <p className="text-lg font-semibold text-[color:var(--teal-600)]">
              {tr("hero_title")}
            </p>
            <p className="max-w-xl text-base leading-relaxed text-[color:var(--ink-700)] md:text-lg">
              {tr("hero_tagline")}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={primaryHref}
                className="rounded-full bg-[linear-gradient(135deg,_var(--teal-500),_var(--teal-700))] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-tight)] transition hover:-translate-y-0.5"
              >
                {tr("hero_primary_cta")}
              </a>
              <a
                href={secondaryHref}
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-[color:var(--ink-700)] transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                {tr("hero_secondary_cta")}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="glass relative overflow-hidden rounded-[32px] p-6">
              <div
                className="portrait-placeholder"
                role="img"
                aria-label="Doctor portrait placeholder"
              >
                <div className="absolute inset-0 rounded-[28px] bg-[linear-gradient(145deg,_rgba(13,148,136,0.55),_rgba(255,255,255,0.8))] flex flex-col items-center justify-center">
                  <svg
                    className="h-16 w-16 text-teal-600/60"
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
                  <p className="mt-2 text-sm font-medium text-teal-700/70">
                    Add Photo Here
                  </p>
                  <p className="text-xs text-teal-600/50">
                    Place doctor-photo.jpg in /public
                  </p>
                </div>
                <div className="absolute bottom-8 left-8 rounded-full bg-black/80 border border-white/20 px-4 py-2 text-xs font-semibold text-[color:var(--teal-500)] shadow">
                  {tr("hero_badge")}
                </div>
              </div>
            </div>
            <div className="glass floaty absolute -bottom-6 right-4 max-w-[240px] rounded-2xl p-4 text-left">
              <p className="text-sm font-semibold text-[color:var(--ink-900)]">
                {tr("hero_floating_title")}
              </p>
              <p className="mt-2 text-xs text-[color:var(--ink-700)]">
                {tr("hero_floating_text")}
              </p>
            </div>
            <div className="glass floaty absolute -left-4 top-8 flex h-12 w-12 items-center justify-center rounded-2xl text-[color:var(--teal-600)]">
              <BoneIcon className="h-6 w-6" />
            </div>
            <div className="glass floaty absolute right-10 top-24 flex h-12 w-12 items-center justify-center rounded-2xl text-[color:var(--teal-600)]">
              <SpineIcon className="h-6 w-6" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
