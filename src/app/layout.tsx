import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://workingenglishlab.com";
const siteName = "Focus English";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Inglés profesional para trabajar`,
    template: `%s | ${siteName}`,
  },
  description:
    "Inglés profesional para emailing, reuniones, entrevistas y presentaciones. Plan guiado y progreso medible para profesionales y equipos.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: `${siteName} | Inglés profesional para trabajar`,
    description:
      "Inglés profesional para emailing, reuniones, entrevistas y presentaciones. Plan guiado y progreso medible.",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Inglés profesional para trabajar`,
    description:
      "Inglés profesional para emailing, reuniones, entrevistas y presentaciones. Plan guiado y progreso medible.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
