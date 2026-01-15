import en from "../locales/en.json";
import kn from "../locales/kn.json";

export const supportedLangs = ["en", "kn"] as const;
export type Lang = (typeof supportedLangs)[number];
export const defaultLang: Lang = "en";

export const translations: Record<Lang, Record<string, string>> = {
  en: en as Record<string, string>,
  kn: kn as Record<string, string>,
};

export const isSupportedLang = (lang: string | undefined): lang is Lang =>
  supportedLangs.includes(lang as Lang);

export const getTranslations = (lang: string | undefined) =>
  translations[isSupportedLang(lang) ? lang : defaultLang];
