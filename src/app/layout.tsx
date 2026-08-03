import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const siteUrl = "https://studio360.ltd";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/favicon.png",
  },
  title: {
    default: "Studio360 Ltd — Architecture & Engineering Consultancy",
    template: "%s — Studio360 Ltd",
  },
  description:
    "Studio360 Ltd is an architecture and engineering consultancy specializing in architecture, construction, interior design, engineering, and Space Maker, our full-package home service.",
  keywords: [
    "architecture firm",
    "architecture consultancy",
    "interior design",
    "engineering",
    "construction",
    "Studio360",
  ],
  openGraph: {
    title: "Studio360 Ltd — Architecture & Engineering Consultancy",
    description:
      "Precise, enduring spaces across residential, commercial, and civic typologies.",
    url: siteUrl,
    siteName: "Studio360 Ltd",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio360 Ltd — Architecture & Engineering Consultancy",
    description:
      "Precise, enduring spaces across residential, commercial, and civic typologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-background text-foreground antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
