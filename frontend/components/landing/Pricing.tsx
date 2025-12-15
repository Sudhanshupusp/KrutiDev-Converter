"use client";

import { Check } from "lucide-react";
import Button from "../ui/Button";
import Section from "../ui/Section";

const plans = [
    {
        name: "Free",
        price: "₹0",
        features: ["5 Conversions/day", "Basic Support", "Standard Speed"],
        cta: "Get Started",
        popular: false,
    },
    {
        name: "Pro",
        price: "₹499",
        period: "/month",
        features: ["Unlimited Conversions", "Priority Support", "Lightning Speed", "Batch Processing"],
        cta: "Upgrade Now",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        features: ["API Access", "Dedicated Account Manager", "SLA Support", "Custom Integration"],
        cta: "Contact Sales",
        popular: false,
    },
];

export default function Pricing() {
    return (
        <Section id="pricing">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                    Simple <span className="text-saffron">Pricing</span>
                </h2>
                <p className="text-silver max-w-2xl mx-auto">
                    Choose the plan that fits your needs. No hidden fees.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative p-8 rounded-3xl border flex flex-col ${plan.popular
                                ? "bg-white/10 border-saffron/50 shadow-2xl shadow-saffron/10 scale-105 z-10"
                                : "bg-charcoal/50 border-white/10"
                            }`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-saffron text-white text-xs font-bold uppercase tracking-wider rounded-full">
                                Most Popular
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className="text-lg font-medium text-silver mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-white">{plan.price}</span>
                                {plan.period && <span className="text-silver text-sm">{plan.period}</span>}
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-silver">
                                    <Check className="w-4 h-4 text-teal" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Button
                            variant={plan.popular ? "primary" : "outline"}
                            className="w-full"
                        >
                            {plan.cta}
                        </Button>
                    </div>
                ))}
            </div>
        </Section>
    );
}
