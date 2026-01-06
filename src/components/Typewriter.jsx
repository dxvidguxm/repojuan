import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Typewriter = ({ text, delay = 0.05, className = "" }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, delay * 1000);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, delay]);

    return (
        <span className={className}>
            {displayText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block ml-1 border-r-2 border-blue-500 h-[1em] translate-y-1"
            />
        </span>
    );
};

export default Typewriter;
