import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { clinicInfo, seo } from "../../lib/content-data";
import {
  defaultLang,
  getTranslations,
  isSupportedLang,
  supportedLangs,
  translations,
} from "../../lib/locale";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const ogImage = process.env.NEXT_PUBLIC_OG_IMAGE ?? "/og-image.jpg";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = isSupportedLang(resolvedParams.lang)
    ? resolvedParams.lang
    : defaultLang;
  const t = getTranslations(lang);
  const title = t.meta_title ?? translations[defaultLang].meta_title;
  const description =
    t.meta_description ?? translations[defaultLang].meta_description;
  const imageUrl = ogImage.startsWith("http")
    ? ogImage
    : new URL(ogImage, siteUrl).toString();

  const languageAlternates = Object.fromEntries(
    supportedLangs.map((code) => [code, `/${code}`])
  );

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: seo.keywords,
    alternates: {
      canonical: `/${lang}`,
      languages: languageAlternates,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `/${lang}`,
      siteName: clinicInfo.doctorName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: seo.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  if (!isSupportedLang(resolvedParams.lang)) {
    notFound();
  }

  return <>{children}</>;
}
