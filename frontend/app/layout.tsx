import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/ui/SmoothScroll";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const tiroHindi = Tiro_Devanagari_Hindi({
  weight: "400",
  variable: "--font-tiro",
  subsets: ["devanagari"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mangal to Kruti Dev Converter | Premium Hindi Font Tool",
  description: "Transform Mangal (Unicode) to Kruti Dev seamlessly with our advanced converter. Elegant, fast, and secure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${tiroHindi.variable}`}>
      <body className="antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
