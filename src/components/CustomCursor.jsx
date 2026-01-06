import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const handleHoverStart = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            }
        };

        const handleHoverEnd = () => {
            setIsHovering(false);
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleHoverStart);
        window.addEventListener("mouseout", handleHoverEnd);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleHoverStart);
            window.removeEventListener("mouseout", handleHoverEnd);
        };
    }, []);

    return (
        <React.Fragment>
            {/* Main Cursor (Dot) */}
            <motion.div
                className="hidden md:block fixed top-0 left-0 w-3 h-3 bg-blue-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isHovering ? 0 : 1
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            />
            {/* Trailing Ring */}
            <motion.div
                className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-500/50 pointer-events-none z-[9998]"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                    borderColor: isHovering ? 'rgba(59, 130, 246, 0.8)' : 'rgba(59, 130, 246, 0.3)'
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
            />
        </React.Fragment>
    );
};

export default CustomCursor;
