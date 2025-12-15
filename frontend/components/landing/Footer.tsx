"use client";

import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-charcoal border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-gradient-to-br from-saffron to-saffron-dark rounded-md flex items-center justify-center text-white font-bold text-lg font-hindi">
                                M
                            </div>
                            <span className="text-xl font-display font-bold text-white tracking-tight">
                                Mangal<span className="text-saffron">Kruti</span>
                            </span>
                        </div>
                        <p className="text-silver max-w-sm leading-relaxed">
                            The most advanced Mangal to Kruti Dev converter.
                            Designed for professionals, writers, and developers who value precision and aesthetics.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Product</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-silver hover:text-saffron transition-colors">Features</a></li>
                            <li><a href="#" className="text-silver hover:text-saffron transition-colors">Pricing</a></li>
                            <li><a href="#" className="text-silver hover:text-saffron transition-colors">API</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-silver hover:text-saffron transition-colors">About</a></li>
                            <li><a href="#" className="text-silver hover:text-saffron transition-colors">Contact</a></li>
                            <li><a href="#" className="text-silver hover:text-saffron transition-colors">Privacy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-silver text-sm">
                        © {new Date().getFullYear()} MangalKruti. All rights reserved.
                    </p>
                    <p className="text-silver text-sm flex items-center gap-1">
                        Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in India
                    </p>
                </div>
            </div>
        </footer>
    );
}
