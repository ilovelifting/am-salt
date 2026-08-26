import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://amsalt.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AM Salt — Hydrate your brain first.",
  description:
    "A morning electrolyte packet built for the first hour, not the workout. Sodium, potassium, and magnesium before your coffee. Preorder the first batch.",
  openGraph: {
    title: "AM Salt — Hydrate your brain first.",
    description:
      "Electrolytes for the first hour. One packet, sixteen ounces, before anything else.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
