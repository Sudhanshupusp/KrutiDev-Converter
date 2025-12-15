"use client";

import { motion } from "framer-motion";
import { Zap, Layers, Clipboard, CheckCircle2, CloudOff, Gift } from "lucide-react";
import Section from "../ui/Section";

const features = [
    {
        title: "One-Click Conversion",
        description: "Instantly transform Mangal Unicode to Kruti Dev with a single click.",
        icon: Zap,
        className: "md:col-span-2 bg-gradient-to-br from-saffron/20 to-saffron/5 border-saffron/20",
    },
    {
        title: "Batch Processing",
        description: "Convert multiple files at once to save time.",
        icon: Layers,
        className: "bg-charcoal/50 border-white/10",
    },
    {
        title: "Copy & Paste Ready",
        description: "Formatted text ready for immediate use.",
        icon: Clipboard,
        className: "bg-charcoal/50 border-white/10",
    },
    {
        title: "100% Accurate",
        description: "AI-powered engine ensures zero errors.",
        icon: CheckCircle2,
        className: "md:col-span-2 bg-gradient-to-br from-teal/20 to-teal/5 border-teal/20",
    },
    {
        title: "Works Offline",
        description: "No internet needed for basic conversions.",
        icon: CloudOff,
        className: "bg-charcoal/50 border-white/10",
    },
    {
        title: "Free Forever",
        description: "Basic features are free for everyone.",
        icon: Gift,
        className: "bg-charcoal/50 border-white/10",
    },
];

export default function Features() {
    return (
        <Section id="features">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                    Why Choose <span className="text-saffron">MangalKruti?</span>
                </h2>
                <p className="text-silver max-w-2xl mx-auto">
                    Built for speed, accuracy, and ease of use. Experience the best Hindi font converter.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`p-8 rounded-3xl border backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300 group ${feature.className}`}
                    >
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                            <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-silver text-sm leading-relaxed">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
