import type { Metadata } from "next";
import {
  Noto_Sans_Kannada,
  Playfair_Display,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

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
      <body
        className={`${playfair.variable} ${jakarta.variable} ${kannada.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
