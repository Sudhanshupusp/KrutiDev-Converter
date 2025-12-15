"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "secondary" | "ghost" | "outline";
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}

export default function Button({
    children,
    onClick,
    className,
    variant = "primary",
    disabled = false,
    type = "button",
}: ButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) * 0.3; // Magnetic pull strength
        const y = (clientY - (top + height / 2)) * 0.3;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const variants = {
        primary: "bg-saffron text-white hover:bg-saffron-dark shadow-lg shadow-saffron/20",
        secondary: "bg-white text-ink-black hover:bg-pearl",
        ghost: "bg-transparent text-white hover:bg-white/10",
        outline: "bg-transparent border border-white/20 text-white hover:bg-white/5",
    };

    return (
        <motion.button
            ref={ref}
            type={type}
            onClick={onClick}
            disabled={disabled}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={cn(
                "relative px-8 py-4 rounded-full font-medium text-sm tracking-wide transition-colors duration-300 flex items-center justify-center gap-2 overflow-hidden group",
                variants[variant],
                disabled && "opacity-50 cursor-not-allowed",
                className
            )}
        >
            <span className="relative z-10 flex items-center gap-2">{children}</span>
            {variant === "primary" && (
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-saffron to-saffron-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
        </motion.button>
    );
}
