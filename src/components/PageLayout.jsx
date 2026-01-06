import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Beaker, ArrowLeft } from 'lucide-react';
import Typewriter from './Typewriter';
import PageTransition from './PageTransition';
import SideMenu from './SideMenu';

const PageLayout = ({ children, title, subtitle, badge = "Engineering Lab", sideMenuSections }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#050608] text-white selection:bg-blue-500/30 overflow-x-hidden">
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 z-[100] origin-left"
                style={{ scaleX }}
            />

            {/* Side Menu Global Integration */}
            {sideMenuSections && <SideMenu sections={sideMenuSections} />}

            {/* Dynamic Navbar */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-black/20 border-b border-white/5">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
                        <Beaker className="w-5 h-5 text-white" />
                    </div>
                    <Link to="/" className="font-orbitron font-bold tracking-tighter text-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        I&D AGRO
                    </Link>
                </div>
                <div className="flex items-center gap-6">
                    <Link to="/" className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors">
                        Inicio
                    </Link>
                    <a href="#contacto" className="hidden md:block px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-all text-[10px] font-bold uppercase tracking-widest">
                        Ayuda
                    </a>
                </div>
            </nav>

            {/* Back to Top Button */}
            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-2xl shadow-blue-500/40 hover:bg-blue-400 transition-colors"
                    >
                        <ArrowLeft className="w-6 h-6 rotate-90" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Background Glows - FLUID */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] h-[100%] bg-blue-600/5 rounded-full blur-[120px] animate-fluid-glow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/5 rounded-full blur-[120px] animate-fluid-glow" style={{ animationDirection: 'reverse' }} />
            </div>

            <header className="relative pt-32 pb-12 px-8 md:px-12 z-10">
                <div className="max-w-5xl mx-auto">
                    <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 group text-[10px] font-bold uppercase tracking-[0.2em]">
                        <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Volver al Inicio
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-6"
                    >
                        {badge}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black font-orbitron mb-6 leading-tight"
                    >
                        <Typewriter text={title} delay={0.08} />
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/80 text-base md:text-xl font-light max-w-2xl leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>
                </div>
            </header>

            <main className="relative z-10 max-w-5xl mx-auto px-8 md:px-12 pb-24">
                <PageTransition>
                    {children}
                </PageTransition>
            </main>

            <footer className="relative z-10 py-20 border-t border-white/5 text-center">
                <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                    <div className="w-px h-20 bg-gradient-to-b from-blue-500/50 to-transparent mb-12" />
                    <p className="text-white/50 text-xs font-bold uppercase tracking-[0.5em]">Ingeniería Industrial • UCuenca</p>
                </div>
            </footer>
        </div>
    );
};

export default PageLayout;
