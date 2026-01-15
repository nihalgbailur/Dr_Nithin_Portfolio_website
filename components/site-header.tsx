import type { Lang } from "../lib/locale";
import type { NavItem } from "../lib/content-data";
import Container from "./container";

type SiteHeaderProps = {
  lang: Lang;
  navItems: NavItem[];
  activeSection: string;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
  onLanguageChange: (lang: Lang) => void;
  tr: (key: string) => string;
};

export default function SiteHeader({
  lang,
  navItems,
  activeSection,
  menuOpen,
  onToggleMenu,
  onCloseMenu,
  onLanguageChange,
  tr,
}: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <Container>
        <div className="flex items-center justify-between gap-4 py-4">
          <a className="font-display text-xl font-semibold" href="#home">
            Dr. Nithin KR
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-[color:var(--ink-700)] lg:flex">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition ${
                    isActive
                      ? "text-[color:var(--teal-600)]"
                      : "hover:text-[color:var(--teal-600)]"
                  }`}
                >
                  {tr(item.key)}
                </a>
              );
            })}
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden rounded-full border border-white/20 bg-white/5 p-1 text-xs font-semibold text-[color:var(--ink-700)] sm:flex">
              <button
                type="button"
                className={`rounded-full px-3 py-1 transition ${
                  lang === "en"
                    ? "bg-[color:var(--teal-600)] text-white"
                    : "hover:bg-white/10"
                }`}
                aria-pressed={lang === "en"}
                onClick={() => onLanguageChange("en")}
              >
                EN
              </button>
              <button
                type="button"
                className={`rounded-full px-3 py-1 transition ${
                  lang === "kn"
                    ? "bg-[color:var(--teal-600)] text-white"
                    : "hover:bg-white/10"
                }`}
                aria-pressed={lang === "kn"}
                onClick={() => onLanguageChange("kn")}
              >
                ಕನ್ನಡ
              </button>
            </div>
            <a
              href="#contact"
              className="hidden rounded-full bg-[linear-gradient(135deg,_var(--teal-500),_var(--teal-700))] px-5 py-2 text-sm font-semibold text-white shadow-[var(--shadow-tight)] transition hover:-translate-y-0.5 lg:inline-flex"
            >
              {tr("nav_cta")}
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[color:var(--ink-700)] lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={onToggleMenu}
            >
              <span className="text-lg">☰</span>
            </button>
          </div>
        </div>
      </Container>
      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-3 text-sm font-semibold text-[color:var(--ink-700)]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-[color:var(--teal-600)]"
                onClick={onCloseMenu}
              >
                {tr(item.key)}
              </a>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                lang === "en"
                  ? "bg-[color:var(--teal-600)] text-white"
                  : "border border-white/20 bg-white/5"
              }`}
              aria-pressed={lang === "en"}
              onClick={() => onLanguageChange("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                lang === "kn"
                  ? "bg-[color:var(--teal-600)] text-white"
                  : "border border-white/20 bg-white/5"
              }`}
              aria-pressed={lang === "kn"}
              onClick={() => onLanguageChange("kn")}
            >
              ಕನ್ನಡ
            </button>
            <a
              href="#contact"
              className="rounded-full bg-[linear-gradient(135deg,_var(--teal-500),_var(--teal-700))] px-4 py-2 text-xs font-semibold text-white"
              onClick={onCloseMenu}
            >
              {tr("nav_cta")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
