import React, { useEffect, useState } from 'react';
import navSignature from '../assets/nav_signature.png';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Beaker, ArrowLeft } from 'lucide-react';
import Typewriter from './Typewriter';
import PageTransition from './PageTransition';
import SideMenu from './SideMenu';
import ThemeToggle from './ThemeToggle';
import ucuencaLogo from '../assets/ucuenca_logo_new.png';

const PageLayout = ({ children, title, subtitle, badge = "Engineering Lab", sideMenuSections, prevLink, nextLink }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const [showBackToTop, setShowBackToTop] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 400);
        };
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 40,
                y: (e.clientY / window.innerHeight - 0.5) * 40
            });
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="min-h-screen text-[var(--text-primary)] selection:bg-blue-500/30 overflow-x-hidden transition-colors duration-300">
            <div className="noise-overlay" />
            {/* Reading Progress Bar */}
            {/* Page Load Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 z-[100] origin-left"
                initial={{ scaleX: 0, opacity: 1 }}
                animate={{ scaleX: 1, opacity: 0 }}
                transition={{ duration: 0.8, ease: "circOut", opacity: { delay: 0.8, duration: 0.3 } }}
            />

            {/* Side Menu Global Integration */}
            {sideMenuSections && <SideMenu sections={sideMenuSections} prevLink={prevLink} nextLink={nextLink} />}

            {/* Dynamic Navbar */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-[var(--bg-primary)]/80 border-b border-[var(--border-color)] transition-colors duration-300">
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center gap-2 group">
                        <img
                            src={navSignature}
                            alt="Investigación & Desarrollo"
                            className="h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity dark:invert"
                        />
                    </Link>
                </div>
                <div className="flex items-center gap-6">
                    <Link to="/" className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                        Inicio
                    </Link>
                    <ThemeToggle />
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

            {/* Background Glows - FLUID & PARALLAX */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <motion.div
                    style={{ x: mousePosition.x * -0.5, y: mousePosition.y * -0.5 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] h-[100%] bg-blue-600/5 rounded-full blur-[120px] animate-fluid-glow"
                />
                <motion.div
                    style={{
                        x: mousePosition.x * 0.3,
                        y: mousePosition.y * 0.3,
                        animationDirection: 'reverse'
                    }}
                    className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/5 rounded-full blur-[120px] animate-fluid-glow"
                />

                {/* Ambient Particles */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            opacity: [0.05, 0.2, 0.05],
                            y: [0, -80, 0],
                            x: [0, Math.random() * 40 - 20, 0]
                        }}
                        transition={{
                            duration: 8 + Math.random() * 12,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                        style={{
                            position: 'absolute',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: '2px',
                            height: '2px',
                            backgroundColor: '#6366f1',
                            borderRadius: '50%',
                            filter: 'blur(1px)'
                        }}
                    />
                ))}
            </div>

            {/* Content Wrapper for Sticky Footer Effect */}
            <div className="relative z-10 bg-[var(--bg-primary)] transition-colors duration-300 shadow-2xl pb-12 mb-[500px] rounded-b-[3rem]">
                <header className="relative pt-32 pb-12 px-8 md:px-12 z-10">
                    <div className="max-w-5xl mx-auto">
                        {!isHome && (
                            <Link to="/" className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors mb-8 group text-[10px] font-bold uppercase tracking-[0.2em]">
                                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Volver al Inicio
                            </Link>
                        )}

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
                            className="text-[var(--text-secondary)] text-base md:text-xl font-light max-w-2xl leading-relaxed"
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
            </div>

            <footer
                className="fixed bottom-0 left-0 w-full z-0 py-12 border-t border-[var(--border-color)] text-center transition-colors duration-300 h-[500px] flex flex-col justify-end pb-20"
                style={{ backgroundColor: 'var(--footer-bg, #172554)' }}
            >
                <style>{`
                :root { --footer-bg: #172554; }
                .dark { --footer-bg: var(--bg-primary); }
            `}</style>
                <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
                    <div className="w-px h-20 bg-gradient-to-b from-blue-500/50 to-transparent mb-6" />

                    {/* UCuenca Official Logo */}
                    <div className="relative group pb-4">
                        <img
                            src={ucuencaLogo}
                            alt="UCuenca"
                            className="h-32 w-auto relative z-10 opacity-90 hover:opacity-100 transition-opacity"
                        />
                    </div>

                    <div className="space-y-2">
                        <p className="text-white/70 text-xs font-bold uppercase tracking-[0.2em]">© 2026 Investigación y Desarrollo Agroindustrial</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PageLayout;
