import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "./footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NRG Fitness – Nejlepší gym v Brně",
  description: "Přijď si zacvičit, posuň své tělo na další level a zažij opravdový gym-bros vibe!",
  keywords: [
    "fitness",
    "posilovna",
    "gym",
    "NRG Fitness",
    "cvičení",
    "silový trénink",
    "crossfit",
    "sportovní masáže",
    "gym bros"
  ],
  authors: [{ name: "NRG Fitness", url: "https://www.nrgfitness.cz" }],
  openGraph: {
    title: "NRG Fitness – Nejlepší gym v Brně",
    description: "Přijď si zacvičit, posuň své tělo na další level a zažij opravdový gym-bros vibe!",
    url: "https://www.nrgfitness.cz",
    siteName: "NRG Fitness",
    images: [
      {
        url: "/og-image.jpg", // nahraď vlastním obrázkem
        width: 1200,
        height: 630,
        alt: "NRG Fitness – Gym Bros"
      }
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NRG Fitness – Nejlepší gym v Brně",
    description: "Přijď si zacvičit, posuň své tělo na další level a zažij opravdový gym-bros vibe!",
    images: ["/og-image.jpg"],
    creator: "@nrgfitness",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
