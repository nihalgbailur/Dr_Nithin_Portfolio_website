import type { Metadata } from "next";
import Script from "next/script";
import {
  Noto_Sans_Kannada,
  Playfair_Display,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

// Replace with your Google Analytics Measurement ID
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const kannada = Noto_Sans_Kannada({
  subsets: ["kannada"],
  variable: "--font-kannada",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Nithin KR | Orthopedic Surgeon in Shivamogga",
  description:
    "Expert orthopedic care by Dr. Nithin KR, MS Orthopedics. Specializing in trauma, sports injuries, spine care, and arthritis treatment at Max Multi Speciality Hospital, Shivamogga.",
  keywords: [
    "orthopedic surgeon shivamogga",
    "bone doctor",
    "fracture treatment",
    "sports injury",
    "back pain treatment",
    "joint pain specialist",
  ],
  openGraph: {
    title: "Dr. Nithin KR | Orthopedic Surgeon",
    description: "Expert orthopedic care in Shivamogga",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${playfair.variable} ${jakarta.variable} ${kannada.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
