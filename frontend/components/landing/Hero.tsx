"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import Button from "../ui/Button";

export default function Hero() {
    const { scrollY } = useScroll();
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-full h-full bg-ink-black" />
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-saffron/10 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-teal/10 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
                        <span className="text-sm font-medium text-silver">The #1 Hindi Font Converter</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight text-white">
                        Transform <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-gold">मंगल</span> to
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-blue-400"> कृतिदेव</span>
                    </h1>

                    <p className="text-lg md:text-xl text-silver max-w-lg leading-relaxed">
                        Seamlessly convert your documents with precision.
                        Preserve formatting and save time with our advanced AI-powered tool.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <Button variant="primary" onClick={() => document.getElementById('converter')?.scrollIntoView({ behavior: 'smooth' })}>
                            Convert Now <ArrowRight className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost">
                            <Play className="w-4 h-4 mr-2 fill-current" /> Watch Demo
                        </Button>
                    </div>
                </motion.div>

                {/* Right Content - Visual */}
                <motion.div
                    style={{ y: y2 }}
                    className="relative hidden lg:block"
                >
                    {/* Floating Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl rotate-[-6deg] hover:rotate-0 transition-transform duration-500"
                    >
                        <div className="flex items-center gap-4 mb-4 border-b border-white/5 pb-4">
                            <div className="w-10 h-10 rounded-full bg-saffron/20 flex items-center justify-center text-saffron font-bold">M</div>
                            <div>
                                <p className="text-sm text-silver">Input (Mangal)</p>
                                <p className="font-hindi text-lg text-white">भारत एक महान देश है</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center py-2">
                            <ArrowRight className="text-white/20 rotate-90" />
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                            <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center text-teal font-bold">K</div>
                            <div>
                                <p className="text-sm text-silver">Output (Kruti Dev)</p>
                                <p className="font-hindi text-lg text-white">Hkkjr ,d egku ns&apos;k gS</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-gradient-to-br from-saffron to-gold rounded-full blur-[40px] opacity-40" />
                    <div className="absolute bottom-[-30px] left-[-30px] w-24 h-24 bg-teal rounded-full blur-[30px] opacity-30" />
                </motion.div>
            </div>
        </section>
    );
}
