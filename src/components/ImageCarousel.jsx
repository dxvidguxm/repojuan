import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const ImageCarousel = ({ images, className = "" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className={`relative group rounded-3xl overflow-hidden border border-[var(--border-color)] bg-[var(--card-bg)] shadow-xl ${className}`}>
            {/* Main Image View */}
            <div className="relative aspect-video overflow-hidden cursor-zoom-in" onClick={() => setIsLightboxOpen(true)}>
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full object-cover"
                    />
                </AnimatePresence>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 w-full p-6">
                    <p className="text-white font-orbitron font-bold text-lg">{images[currentIndex].title}</p>
                    <p className="text-gray-200 text-sm">{images[currentIndex].description}</p>
                </div>
            </div>

            {/* Navigation Controls */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/10 hover:bg-brand-primary/50 transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/10 hover:bg-brand-primary/50 transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronRight className="w-5 h-5" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 right-6 flex gap-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-brand-primary w-6' : 'bg-white/30 hover:bg-white/60'}`}
                    />
                ))}
            </div>

            {/* Lightbox Overlay with Portal */}
            <AnimatePresence>
                {isLightboxOpen && createPortal(
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-[var(--bg-primary)]/95 backdrop-blur-xl flex items-center justify-center p-4"
                    >
                        <button
                            onClick={() => setIsLightboxOpen(false)}
                            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[var(--text-primary)]/10 hover:bg-[var(--text-primary)]/20 flex items-center justify-center text-[var(--text-primary)] transition-colors z-50"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="max-w-7xl max-h-[90vh] relative">
                            <img
                                src={images[currentIndex].src}
                                alt={images[currentIndex].alt}
                                className="max-w-full max-h-[85vh] rounded-lg shadow-2xl border border-[var(--border-color)]"
                            />
                            <div className="mt-4 text-center">
                                <h3 className="text-xl font-orbitron font-bold text-[var(--text-primary)]">{images[currentIndex].title}</h3>
                            </div>
                        </div>
                    </motion.div>,
                    document.body
                )}
            </AnimatePresence>
        </div>
    );
};

export default ImageCarousel;
