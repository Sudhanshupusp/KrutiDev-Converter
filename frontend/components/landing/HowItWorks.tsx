"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";

const steps = [
    {
        number: "01",
        title: "Upload File",
        description: "Select your Mangal (Unicode) DOCX file.",
    },
    {
        number: "02",
        title: "Convert",
        description: "Click the convert button and let our engine work.",
    },
    {
        number: "03",
        title: "Download",
        description: "Get your Kruti Dev formatted file instantly.",
    },
];

export default function HowItWorks() {
    return (
        <Section id="how-it-works" className="bg-white/5">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                    How It <span className="text-saffron">Works</span>
                </h2>
                <p className="text-silver max-w-2xl mx-auto">
                    Three simple steps to transform your documents.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="relative text-center"
                    >
                        <div className="w-24 h-24 mx-auto bg-ink-black border border-white/10 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-6 relative z-10 shadow-xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-saffron to-gold">
                                {step.number}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-silver text-sm">{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
