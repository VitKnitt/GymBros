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
  title: "Gym-Bros Fitness – Nejlepší gym v Příboře",
  description: "Přijď si zacvičit, posuň své tělo na další level a zažij opravdový gym-bros vibe!",
  keywords: [
    "fitness",
    "posilovna",
    "gym",
    "Fitness",
    "cvičení",
    "silový trénink",
    "crossfit",
    "sportovní masáže",
    "gym bros"
  ],
  authors: [{ name: "Fitness", url: "https://www.gbfitness.cz" }],
  openGraph: {
    title: "Gym-Bros Fitness – Nejlepší gym v Příboře",
    description: "Přijď si zacvičit, posuň své tělo na další level a zažij opravdový gym-bros vibe!",
    url: "https://www.gbfitness.cz",
    siteName: "Gym-Bros Fitness",
    images: [
      {
        url: "../assets/icons/logo.png", // nahraď vlastním obrázkem
        width: 1200,
        height: 630,
        alt: "Fitness – Gym Bros"
      }
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gym-Bros Fitness – Nejlepší gym v Příboře",
    description: "Přijď si zacvičit, posuň své tělo na další level a zažij opravdový gym-bros vibe!",
    images: ["../assets/icons/logo.png"],
    creator: "@gbfitness",
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
