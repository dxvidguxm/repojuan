import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setIsLight(true);
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        } else {
            setIsLight(false);
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        }
    }, []);

    const toggleTheme = () => {
        if (isLight) {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsLight(false);
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            localStorage.setItem('theme', 'light');
            setIsLight(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="w-12 h-12 relative group bg-transparent transition-all duration-700 overflow-hidden flex items-center justify-center"
            title={isLight ? "Cambiar a Modo Oscuro" : "Cambiar a Modo Claro"}
        >
            <div className="absolute inset-0 border border-[var(--brand-navy)]/30 group-hover:border-[var(--brand-navy)] transition-colors duration-700" />
            <div className="absolute inset-0 bg-[var(--brand-navy)] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out -z-10" />

            <div className="relative z-10 text-[var(--text-primary)] group-hover:text-white transition-colors duration-700">
                {isLight ? (
                    <Moon className="w-5 h-5" />
                ) : (
                    <Sun className="w-5 h-5" />
                )}
            </div>
        </button>
    );
};

export default ThemeToggle;
