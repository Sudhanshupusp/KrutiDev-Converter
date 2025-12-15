"use client";

import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Converter from "../components/landing/Converter";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import Pricing from "../components/landing/Pricing";
import Footer from "../components/landing/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-ink-black text-white selection:bg-saffron/30">
      <Navbar />

      <div className="flex flex-col gap-0">
        <Hero />
        <Converter />
        <Features />
        <HowItWorks />
        <Pricing />
      </div>

      <Footer />
    </main>
  );
}
