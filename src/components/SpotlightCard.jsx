import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(59, 130, 246, 0.2)" }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate rotation based on cursor position relative to center
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 25;
        const rotateY = (centerX - x) / 25;

        setPosition({ x, y });
        setRotate({ x: rotateX, y: rotateY });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
        setRotate({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            animate={{ rotateX: rotate.x, rotateY: rotate.y }}
            transition={{ type: "spring", stiffness: 100, damping: 30, mass: 1 }}
            className={`relative overflow-hidden rounded-[var(--radius-main)] border border-[var(--border-color)] bg-[var(--card-bg)] transition-all duration-500 hover:border-[var(--brand-navy)]/30 ${className} group`}
            style={{ perspective: 1000 }}
        >
            {/* Spotlight Glow */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 z-10"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
                }}
            />

            {/* Border Inner Glow */}
            <div
                className="pointer-events-none absolute -inset-[1px] rounded-[var(--radius-main)] border border-[var(--brand-navy)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
            />

            <div className="relative h-full z-20">{children}</div>
        </motion.div>
    );
};

export default SpotlightCard;
