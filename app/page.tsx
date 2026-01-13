"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import en from "../locales/en.json";
import kn from "../locales/kn.json";

type Lang = "en" | "kn";

const translations: Record<Lang, Record<string, string>> = {
  en: en as Record<string, string>,
  kn: kn as Record<string, string>,
};

const navItems = [
  { href: "#home", key: "nav_home" },
  { href: "#about", key: "nav_about" },
  { href: "#services", key: "nav_services" },
  { href: "#credentials", key: "nav_credentials" },
  { href: "#contact", key: "nav_contact" },
];

const services = [
  {
    key: "service_trauma",
    titleKey: "service_trauma_title",
    descKey: "service_trauma_desc",
    tags: ["24/7 Emergency", "Fracture Care", "Surgery"],
    size: "large",
  },
  {
    key: "service_spine",
    titleKey: "service_spine_title",
    descKey: "service_spine_desc",
    tags: ["Back Pain", "Disc Issues", "Posture"],
    size: "large",
  },
  {
    key: "service_arthritis",
    titleKey: "service_arthritis_title",
    descKey: "service_arthritis_desc",
    tags: ["Joint Pain", "Mobility"],
    size: "wide",
  },
  {
    key: "service_sports",
    titleKey: "service_sports_title",
    descKey: "service_sports_desc",
    tags: ["Athletes", "Recovery"],
    size: "wide",
  },
];

const timeline = [
  { year: "2014", label: "MBBS", detail: "JSS Medical College" },
  { year: "2022", label: "MS Orthopedics", detail: "Bangalore Medical College" },
  { year: "2025", label: "Consultant", detail: "Max Hospital", active: true },
];

const affiliations = [
  { icon: "hospital", name: "Max Multi Speciality Hospital", key: "affiliation_one" },
  { icon: "bone", name: "Indian Orthopaedic Association", key: "affiliation_two" },
  { icon: "medical", name: "Karnataka Medical Council", key: "affiliation_three" },
];

const concernOptions = [
  { value: "fracture", key: "contact_form_concern_fracture" },
  { value: "back", key: "contact_form_concern_back" },
  { value: "arthritis", key: "contact_form_concern_arthritis" },
  { value: "sports", key: "contact_form_concern_sports" },
  { value: "general", key: "contact_form_concern_general" },
  { value: "other", key: "contact_form_concern_other" },
];

const whatsappOptions = [
  { key: "whatsapp_message_appointment", labelKey: "whatsapp_option_appointment" },
  { key: "whatsapp_message_directions", labelKey: "whatsapp_option_directions" },
  { key: "whatsapp_message_timings", labelKey: "whatsapp_option_timings" },
  { key: "whatsapp_message_general", labelKey: "whatsapp_option_general" },
];

const Container = ({ children }: { children: ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
);

const BoneIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="24" r="6"></circle>
    <circle cx="36" cy="24" r="6"></circle>
    <rect x="16" y="20" width="16" height="8" rx="4"></rect>
  </svg>
);

const SpineIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="24" y1="8" x2="24" y2="40"></line>
    <circle cx="24" cy="12" r="4"></circle>
    <circle cx="24" cy="24" r="4"></circle>
    <circle cx="24" cy="36" r="4"></circle>
  </svg>
);

const JointIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="16" cy="24" r="6"></circle>
    <circle cx="32" cy="24" r="6"></circle>
    <line x1="22" y1="24" x2="26" y2="24"></line>
  </svg>
);

const SportsIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="24" cy="24" r="10"></circle>
    <path d="M14 24h20"></path>
    <path d="M24 14c-3 2-5 5-5 10"></path>
    <path d="M24 14c3 2 5 5 5 10"></path>
  </svg>
);

const WhatsappIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.5 12.2c0-4.1 3.4-7.4 7.5-7.4s7.5 3.3 7.5 7.4-3.4 7.4-7.5 7.4c-1 0-2-.2-2.9-.6L5 20l1.1-3.1c-1.1-1.2-1.6-2.7-1.6-4.7z"></path>
    <path d="M9 10.5c.4 1.2 1.4 2.2 2.6 2.8l1.1-.9c.2-.2.4-.2.6-.1l1 .4c.3.1.4.4.4.7-.1.8-.8 1.3-1.7 1.3-2.5 0-4.5-2-4.5-4.5 0-.9.5-1.5 1.3-1.7.3-.1.6.1.7.4l.4 1c.1.2 0 .5-.1.6l-1 .8z"></path>
  </svg>
);

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const whatsappRef = useRef<HTMLDivElement | null>(null);

  const t = translations[lang] ?? translations.en;
  const tr = (key: string) => t[key] ?? translations.en[key] ?? key;

  useEffect(() => {
    const stored = localStorage.getItem("preferredLang");
    const browserPref = navigator.language.toLowerCase().includes("kn") ? "kn" : "en";
    const initial = stored === "kn" || stored === "en" ? stored : browserPref;
    setLang(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("preferredLang", lang);
  }, [lang]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    if (!items.length) return;

    const handleScroll = () => {
      const offset = window.scrollY;
      items.forEach((item) => {
        const speed = Number(item.dataset.parallax || 0);
        item.style.transform = `translateY(${offset * speed}px)`;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const sections = ["home", "about", "services", "credentials", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -55% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!whatsappRef.current) return;
      if (!whatsappRef.current.contains(event.target as Node)) {
        setWhatsappOpen(false);
      }
    };

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setWhatsappOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setFormSubmitted(true);
    form.reset();
  };

  const handleWhatsapp = (key: string) => {
    const phone = "918123841470";
    const message = tr(key);
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setWhatsappOpen(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-6 focus:left-6 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-40 right-[-8%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_top,_rgba(13,148,136,0.35),_transparent_65%)] opacity-70 blur-3xl"
          data-parallax="0.08"
        ></div>
        <div
          className="absolute top-[30%] left-[-10%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.35),_transparent_70%)] opacity-60 blur-3xl"
          data-parallax="0.12"
        ></div>
        <div
          className="absolute bottom-[-12%] right-[10%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.25),_transparent_70%)] opacity-70 blur-3xl"
          data-parallax="0.1"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30"></div>
        <div className="grid-lines absolute inset-0 opacity-50"></div>
      </div>

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
                    className={`transition ${isActive
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
              {/* Language Toggle */}
              <div className="hidden rounded-full border border-white/20 bg-white/5 p-1 text-xs font-semibold text-[color:var(--ink-700)] sm:flex">
                <button
                  type="button"
                  className={`rounded-full px-3 py-1 transition ${lang === "en"
                    ? "bg-[color:var(--teal-600)] text-white"
                    : "hover:bg-white/10"
                    }`}
                  aria-pressed={lang === "en"}
                  onClick={() => setLang("en")}
                >
                  EN
                </button>
                <button
                  type="button"
                  className={`rounded-full px-3 py-1 transition ${lang === "kn"
                    ? "bg-[color:var(--teal-600)] text-white"
                    : "hover:bg-white/10"
                    }`}
                  aria-pressed={lang === "kn"}
                  onClick={() => setLang("kn")}
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
                onClick={() => setMenuOpen((open) => !open)}
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
                  onClick={() => setMenuOpen(false)}
                >
                  {tr(item.key)}
                </a>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${lang === "en"
                  ? "bg-[color:var(--teal-600)] text-white"
                  : "border border-white/20 bg-white/5"
                  }`}
                aria-pressed={lang === "en"}
                onClick={() => setLang("en")}
              >
                EN
              </button>
              <button
                type="button"
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${lang === "kn"
                  ? "bg-[color:var(--teal-600)] text-white"
                  : "border border-white/20 bg-white/5"
                  }`}
                aria-pressed={lang === "kn"}
                onClick={() => setLang("kn")}
              >
                ಕನ್ನಡ
              </button>
              <a
                href="#contact"
                className="rounded-full bg-[linear-gradient(135deg,_var(--teal-500),_var(--teal-700))] px-4 py-2 text-xs font-semibold text-white"
              >
                {tr("nav_cta")}
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
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
                    href="#contact"
                    className="rounded-full bg-[linear-gradient(135deg,_var(--teal-500),_var(--teal-700))] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-tight)] transition hover:-translate-y-0.5"
                  >
                    {tr("hero_primary_cta")}
                  </a>
                  <a
                    href="#services"
                    className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-[color:var(--ink-700)] transition hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    {tr("hero_secondary_cta")}
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="glass relative overflow-hidden rounded-[32px] p-6">
                  <div className="portrait-placeholder" role="img" aria-label="Doctor portrait placeholder">
                    {/* TODO: Replace this placeholder with actual photo */}
                    {/* <Image src="/doctor-photo.jpg" alt="Dr. Nithin KR" fill className="object-cover rounded-[28px]" /> */}
                    <div className="absolute inset-0 rounded-[28px] bg-[linear-gradient(145deg,_rgba(13,148,136,0.55),_rgba(255,255,255,0.8))] flex flex-col items-center justify-center">
                      <svg className="h-16 w-16 text-teal-600/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <p className="mt-2 text-sm font-medium text-teal-700/70">Add Photo Here</p>
                      <p className="text-xs text-teal-600/50">Place doctor-photo.jpg in /public</p>
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

        <section id="about" className="relative py-20">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="space-y-6">
                <div className="glass relative overflow-hidden rounded-[28px] p-6">
                  <div className="portrait-placeholder" role="img" aria-label="Doctor photo placeholder">
                    {/* TODO: Replace with actual photo - same as hero */}
                    <div className="absolute inset-0 rounded-[22px] bg-[linear-gradient(160deg,_rgba(13,148,136,0.35),_rgba(255,255,255,0.75))] flex flex-col items-center justify-center">
                      <svg className="h-14 w-14 text-teal-600/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <p className="mt-2 text-xs font-medium text-teal-700/60">Add Photo</p>
                    </div>
                    <span className="absolute top-6 left-6 rounded-full bg-[color:rgba(212,175,55,0.9)] px-3 py-1 text-xs font-semibold text-[color:var(--ink-900)]">
                      {tr("about_badge")}
                    </span>
                  </div>
                </div>
                <div className="glass rounded-2xl p-4 text-sm text-[color:var(--ink-700)]">
                  {tr("about_highlight")}
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-[color:var(--gold-500)]"></span>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--teal-600)]">
                    {tr("about_label")}
                  </p>
                </div>
                <h2 className="font-display text-3xl font-semibold text-[color:var(--ink-900)] md:text-4xl">
                  {tr("about_title")}
                </h2>
                <p className="text-base leading-relaxed text-[color:var(--ink-700)]">
                  {tr("about_body")}
                </p>
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

        <section id="services" className="relative py-20">
          <Container>
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--teal-600)]">
                  {tr("services_label")}
                </p>
                <h2 className="font-display text-3xl font-semibold text-[color:var(--ink-900)] md:text-4xl">
                  {tr("services_title")}
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-[color:var(--ink-700)]">
                  {tr("services_body")}
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                {services.map((service) => {
                  const Icon =
                    service.key === "service_trauma"
                      ? BoneIcon
                      : service.key === "service_spine"
                        ? SpineIcon
                        : service.key === "service_arthritis"
                          ? JointIcon
                          : SportsIcon;

                  const isLarge = service.size === "large";

                  return (
                    <div
                      key={service.key}
                      className={`glass group rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:border-[color:rgba(212,175,55,0.6)] hover:shadow-[0_25px_50px_rgba(15,118,110,0.15)] ${isLarge ? "flex flex-col gap-4 min-h-[200px]" : "flex flex-row items-center gap-5"
                        }`}
                    >
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[color:rgba(13,148,136,0.15)] text-[color:var(--teal-600)] transition group-hover:scale-110 group-hover:bg-[color:rgba(13,148,136,0.25)]">
                        <Icon className="h-7 w-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[color:var(--ink-900)]">
                          {tr(service.titleKey)}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-700)]">
                          {tr(service.descKey)}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2 opacity-0 translate-y-2 transition duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-block rounded-full border border-teal-600/20 bg-teal-600/10 px-3 py-1 text-xs font-semibold text-[color:var(--teal-600)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

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

              {/* Career Timeline */}
              <div className="mt-8">
                <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-500)]">
                  Career Journey
                </p>
                <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-start md:justify-between md:gap-0">
                  {/* Timeline Line (Desktop) */}
                  <div className="absolute top-3 left-4 right-4 hidden h-[3px] rounded-full bg-gradient-to-r from-teal-600/30 via-teal-500 to-teal-600/30 md:block" />

                  {timeline.map((node, idx) => (
                    <div
                      key={node.year}
                      className={`group relative z-10 flex items-center gap-4 md:flex-col md:items-center md:gap-2 md:text-center ${idx === 0 ? '' : ''}`}
                    >
                      <span className="absolute -top-5 left-1/2 hidden -translate-x-1/2 text-[10px] font-semibold text-[color:var(--teal-600)] md:block">
                        {node.year}
                      </span>
                      <div
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-[3px] border-teal-500 transition group-hover:scale-125 md:h-7 md:w-7 ${node.active
                          ? "bg-teal-500 shadow-[0_0_0_6px_rgba(13,148,136,0.2)]"
                          : "bg-white/10 group-hover:bg-teal-500 group-hover:shadow-[0_0_0_6px_rgba(45,212,191,0.2)]"
                          }`}
                      />
                      <div className="md:mt-3">
                        <p className="text-sm font-semibold text-[color:var(--ink-900)]">
                          {node.label}
                        </p>
                        <p className="text-xs text-[color:var(--ink-500)]">
                          {node.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Affiliations with Icons */}
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
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                            <path d="M3 21h18M5 21V7l8-4 8 4v14M9 21v-6h6v6M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />
                          </svg>
                        )}
                        {aff.icon === "bone" && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                            <circle cx="5" cy="5" r="2" /><circle cx="19" cy="19" r="2" />
                            <path d="M5 7v2a4 4 0 004 4h6a4 4 0 004-4V7M5 17v-2a4 4 0 014-4" />
                          </svg>
                        )}
                        {aff.icon === "medical" && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                          </svg>
                        )}
                      </span>
                      <span className="text-xs font-semibold text-[color:var(--ink-700)]">
                        {aff.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="contact" className="relative py-20">
          <Container>
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--teal-600)]">
                  {tr("contact_label")}
                </p>
                <h2 className="font-display text-3xl font-semibold text-[color:var(--ink-900)] md:text-4xl">
                  {tr("contact_title")}
                </h2>
                <p className="max-w-2xl text-base text-[color:var(--ink-700)]">
                  {tr("contact_body")}
                </p>
              </div>
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                <form
                  className="glass rounded-3xl p-6"
                  onSubmit={handleFormSubmit}
                  onInput={() => setFormSubmitted(false)}
                >
                  <h3 className="font-display text-2xl font-semibold">
                    {tr("contact_form_title")}
                  </h3>
                  <div className="mt-6 grid gap-4">
                    <div className="grid gap-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-500)]" htmlFor="full-name">
                        {tr("contact_form_name_label")}
                      </label>
                      <input
                        id="full-name"
                        name="full-name"
                        type="text"
                        required
                        minLength={2}
                        placeholder={tr("contact_form_name_placeholder")}
                        className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[color:var(--teal-500)]"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-500)]" htmlFor="phone">
                        {tr("contact_form_phone_label")}
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        inputMode="numeric"
                        placeholder={tr("contact_form_phone_placeholder")}
                        className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[color:var(--teal-500)]"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-500)]" htmlFor="email">
                        {tr("contact_form_email_label")}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={tr("contact_form_email_placeholder")}
                        className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[color:var(--teal-500)]"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-500)]" htmlFor="concern">
                        {tr("contact_form_concern_label")}
                      </label>
                      <select
                        id="concern"
                        name="concern"
                        required
                        defaultValue=""
                        className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[color:var(--teal-500)]"
                      >
                        <option value="" disabled>
                          {tr("contact_form_concern_placeholder")}
                        </option>
                        {concernOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {tr(option.key)}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="grid gap-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-500)]" htmlFor="message">
                        {tr("contact_form_message_label")}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        maxLength={500}
                        placeholder={tr("contact_form_message_placeholder")}
                        className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[color:var(--teal-500)]"
                      ></textarea>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <button
                      type="submit"
                      className="rounded-full bg-[linear-gradient(135deg,_var(--teal-500),_var(--teal-700))] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-tight)] transition hover:-translate-y-0.5"
                    >
                      {tr("contact_form_submit")}
                    </button>
                    {formSubmitted && (
                      <p className="text-sm font-semibold text-[color:var(--success-500)]">
                        {tr("contact_form_success")}
                      </p>
                    )}
                  </div>
                </form>
                <div className="space-y-6">
                  <div className="glass rounded-3xl p-6">
                    <h3 className="font-display text-2xl font-semibold">
                      {tr("contact_info_title")}
                    </h3>
                    <div className="mt-6 space-y-4 text-sm text-[color:var(--ink-700)]">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-500)]">
                          {tr("contact_address_label")}
                        </p>
                        <p
                          className="mt-2"
                          dangerouslySetInnerHTML={{ __html: tr("contact_address_value") }}
                        />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-500)]">
                          {tr("contact_phone_label")}
                        </p>
                        <p className="mt-2">+91 81238 41470</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-500)]">
                          {tr("contact_email_label")}
                        </p>
                        <p className="mt-2">nith777ine@gmail.com</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-500)]">
                          {tr("contact_hours_label")}
                        </p>
                        <p
                          className="mt-2"
                          dangerouslySetInnerHTML={{ __html: tr("contact_hours_value") }}
                        />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-500)]">
                          {tr("contact_emergency_label")}
                        </p>
                        <p className="mt-2">{tr("contact_emergency_value")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="glass rounded-3xl p-4">
                    <iframe
                      title="Max Multi Speciality Hospital"
                      loading="lazy"
                      src="https://www.google.com/maps?q=NT%20Road%20Milagatta%20Shivamogga%20Karnataka%20577205&output=embed"
                      className="h-64 w-full rounded-2xl border-0"
                    ></iframe>
                    <a
                      className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-[color:var(--ink-700)] hover:bg-white/10"
                      href="https://www.google.com/maps?q=NT%20Road%20Milagatta%20Shivamogga%20Karnataka%20577205"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {tr("contact_map_button")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="relative border-t border-white/10 bg-black/80 py-12">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
            <div className="space-y-3">
              <p className="font-display text-2xl font-semibold">Dr. Nithin KR</p>
              <p className="text-sm font-semibold text-[color:var(--ink-700)]">
                {tr("footer_tagline")}
              </p>
              <p className="text-sm text-[color:var(--ink-500)]">
                {tr("footer_description")}
              </p>
            </div>
            <div className="space-y-2 text-sm text-[color:var(--ink-700)]">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-500)]">
                {tr("footer_links_title")}
              </p>
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block">
                  {tr(item.key)}
                </a>
              ))}
            </div>
            <div className="space-y-2 text-sm text-[color:var(--ink-700)]">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-500)]">
                {tr("footer_connect_title")}
              </p>
              <p>+91 81238 41470</p>
              <p>nith777ine@gmail.com</p>
              <p>{tr("footer_address")}</p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-xs text-[color:var(--ink-500)]">
            <p>{tr("footer_copyright")}</p>
            <p>{tr("footer_designed")}</p>
          </div>
        </Container>
      </footer>

      <div className="fixed bottom-6 right-6 z-50" ref={whatsappRef}>
        <button
          type="button"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_32px_rgba(37,211,102,0.35)] transition hover:-translate-y-1"
          aria-label={tr("whatsapp_label")}
          aria-expanded={whatsappOpen}
          onClick={() => setWhatsappOpen((open) => !open)}
        >
          <WhatsappIcon className="h-6 w-6" />
        </button>
        {whatsappOpen && (
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
                onClick={() => setWhatsappOpen(false)}
              >
                ×
              </button>
            </div>
            <div className="mt-3 grid gap-2">
              {whatsappOptions.map((option) => (
                <button
                  key={option.key}
                  type="button"
                  className="rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 px-3 py-2 text-left text-xs font-semibold text-[#1B7B47] transition hover:bg-[#25D366]/20"
                  onClick={() => handleWhatsapp(option.key)}
                >
                  {tr(option.labelKey)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
