import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { siteUrl } from "@/lib/site";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AM Salt — Not a wellness blend. Just salt.",
  description:
    "Sodium, potassium, magnesium, water. Before your coffee, not instead of it. No proprietary formula, no blend, no nonsense.",
  openGraph: {
    title: "AM Salt — Not a wellness blend. Just salt.",
    description:
      "You know the first hour — the one you spend waiting to feel like yourself. Water and electrolytes before the caffeine. No jolt, no crash, just a morning that starts when you do.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AM Salt — Not a wellness blend. Just salt.",
    description:
      "You know the first hour — the one you spend waiting to feel like yourself. Water and electrolytes before the caffeine. No jolt, no crash, just a morning that starts when you do.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${plexMono.variable}`}>
      <body>
        <OrganizationSchema />
        {children}
      </body>
    </html>
  );
}
