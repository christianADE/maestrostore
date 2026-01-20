import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up";
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
}

const ScrollReveal = ({
    children,
    animation = "fade-up",
    delay = 0,
    duration = 0.6,
    className = "",
    once = true,
}: ScrollRevealProps) => {
    const variants = {
        "fade-up": {
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
        },
        "fade-in": {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
        "slide-left": {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
        },
        "slide-right": {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
        },
        "scale-up": {
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-50px" }}
            transition={{ delay, duration, ease: [0.21, 0.47, 0.32, 0.98] }}
            variants={variants[animation]}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
