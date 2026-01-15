"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  affiliations,
  clinicInfo,
  contactConcerns,
  navItems,
  services,
  timeline,
  whatsappOptions,
} from "../lib/content-data";
import { defaultLang, translations } from "../lib/locale";
import type { Lang } from "../lib/locale";
import AboutSection from "./about-section";
import BackgroundEffects from "./background-effects";
import ContactSection from "./contact-section";
import CredentialsSection from "./credentials-section";
import HeroSection from "./hero-section";
import ServicesSection from "./services-section";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import WhatsappWidget from "./whatsapp-widget";

const setLangCookie = (lang: Lang) => {
  document.cookie = `preferredLang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
};

export default function HomePage({ lang }: { lang: Lang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const whatsappRef = useRef<HTMLDivElement | null>(null);
  const formStartedAt = useRef<number>(0);
  const router = useRouter();

  const t = translations[lang] ?? translations[defaultLang];
  const tr = (key: string) =>
    t[key] ?? translations[defaultLang][key] ?? key;

  useEffect(() => {
    document.documentElement.lang = lang;
    setLangCookie(lang);
  }, [lang]);

  useEffect(() => {
    formStartedAt.current = Date.now();
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;
    const items = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
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

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
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

    sectionIds.forEach((sectionId) => {
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

  const handleLanguageChange = (nextLang: Lang) => {
    if (nextLang === lang) return;
    const hash = window.location.hash;
    setLangCookie(nextLang);
    setMenuOpen(false);
    router.push(`/${nextLang}${hash}`);
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setFormStatus("submitting");
    setFormError(null);

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;
    payload.elapsedMs = String(Date.now() - formStartedAt.current);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        setFormStatus("error");
        setFormError(
          typeof result.error === "string" ? result.error : tr("contact_form_error")
        );
        return;
      }

      setFormStatus("success");
      form.reset();
      formStartedAt.current = Date.now();
    } catch {
      setFormStatus("error");
      setFormError(tr("contact_form_error"));
    }
  };

  const handleFormInput = () => {
    if (formStatus !== "idle") {
      setFormStatus("idle");
    }
    if (formError) {
      setFormError(null);
    }
  };

  const handleWhatsapp = (key: string) => {
    const message = tr(key);
    const url = `https://wa.me/${clinicInfo.phoneDigits}?text=${encodeURIComponent(
      message
    )}`;
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

      <BackgroundEffects />

      <SiteHeader
        lang={lang}
        navItems={navItems}
        activeSection={activeSection}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onCloseMenu={() => setMenuOpen(false)}
        onLanguageChange={handleLanguageChange}
        tr={tr}
      />

      <main className="flex-1">
        <HeroSection tr={tr} primaryHref="#contact" secondaryHref="#services" />
        <AboutSection tr={tr} />
        <ServicesSection services={services} tr={tr} />
        <CredentialsSection timeline={timeline} affiliations={affiliations} tr={tr} />
        <ContactSection
          tr={tr}
          concerns={contactConcerns}
          clinicInfo={clinicInfo}
          formStatus={formStatus}
          formError={formError}
          onSubmit={handleFormSubmit}
          onInput={handleFormInput}
        />
      </main>

      <SiteFooter navItems={navItems} clinicInfo={clinicInfo} tr={tr} />

      <WhatsappWidget
        tr={tr}
        options={whatsappOptions}
        open={whatsappOpen}
        onToggle={() => setWhatsappOpen((open) => !open)}
        onClose={() => setWhatsappOpen(false)}
        onSelect={handleWhatsapp}
        widgetRef={whatsappRef}
      />
    </div>
  );
}
