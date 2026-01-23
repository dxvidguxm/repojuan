import React, { useState, useEffect } from 'react';
import { Maximize, Minimize } from 'lucide-react';

const FullscreenButton = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1000);

        const handleFullscreenChange = () => {
            const isFull = document.fullscreenElement ||
                document.webkitFullscreenElement ||
                document.mozFullScreenElement ||
                document.msFullscreenElement;
            setIsFullscreen(!!isFull);
        };

        ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"].forEach(
            eventName => document.addEventListener(eventName, handleFullscreenChange)
        );

        return () => {
            clearTimeout(timer);
            ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"].forEach(
                eventName => document.removeEventListener(eventName, handleFullscreenChange)
            );
        };
    }, []);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={toggleFullscreen}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[var(--card-bg)]/80 backdrop-blur-md border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--brand-navy)] hover:scale-110 transition-all duration-300 shadow-xl group"
            title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
        >
            {isFullscreen ? (
                <Minimize className="w-5 h-5 group-hover:text-[var(--brand-navy)] dark:group-hover:text-blue-400 transition-colors" />
            ) : (
                <Maximize className="w-5 h-5 group-hover:text-[var(--brand-navy)] dark:group-hover:text-blue-400 transition-colors" />
            )}

            {/* Tooltip */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-orbitron tracking-wider">
                {isFullscreen ? 'REDUCIR' : 'EXPANDIR'}
            </span>
        </button>
    );
};

export default FullscreenButton;
