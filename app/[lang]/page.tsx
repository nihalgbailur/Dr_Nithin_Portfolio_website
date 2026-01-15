import HomePage from "../../components/home-page";
import StructuredData from "../../components/structured-data";
import { clinicInfo } from "../../lib/content-data";
import {
  defaultLang,
  getTranslations,
  isSupportedLang,
  translations,
} from "../../lib/locale";
import { notFound } from "next/navigation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const doctorPhoto =
  process.env.NEXT_PUBLIC_DOCTOR_PHOTO ?? "/doctor-photo.jpg";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  if (!isSupportedLang(resolvedParams.lang)) {
    notFound();
  }

  const lang = resolvedParams.lang;
  const t = getTranslations(lang);
  const tr = (key: string) =>
    t[key] ?? translations[defaultLang][key] ?? key;

  const imageUrl = doctorPhoto.startsWith("http")
    ? doctorPhoto
    : new URL(doctorPhoto, siteUrl).toString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: clinicInfo.doctorName,
    description: tr("meta_description"),
    medicalSpecialty: clinicInfo.specialty,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinicInfo.address.streetAddress,
      addressLocality: clinicInfo.address.addressLocality,
      addressRegion: clinicInfo.address.addressRegion,
      postalCode: clinicInfo.address.postalCode,
    },
    telephone: clinicInfo.phone,
    image: imageUrl,
    priceRange: clinicInfo.priceRange,
    openingHours: clinicInfo.openingHours,
    url: `${siteUrl}/${lang}`,
  };

  return (
    <>
      <StructuredData data={jsonLd} />
      <HomePage lang={lang} />
    </>
  );
}
