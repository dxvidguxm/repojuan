import React, { useEffect, useState } from 'react';
import navSignature from '../assets/nav_signature.png';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Beaker, ArrowLeft, ChevronRight, Menu as MenuIcon, X, Rocket, Cpu, Layers, Zap, Microscope, ArrowRight, Home as HomeIcon } from 'lucide-react';
import { practices } from '../data/navigation.jsx';
import Typewriter from './Typewriter';
import PageTransition from './PageTransition';
import SideMenu from './SideMenu';
import ThemeToggle from './ThemeToggle';
import ucuencaLogo from '../assets/ucuenca_logo_new.png';

const PageLayout = ({ children, title, subtitle, badge = "Engineering Lab", sideMenuSections, prevLink, nextLink }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const [showBackToTop, setShowBackToTop] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 400);
        };
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 40;
            const y = (e.clientY / window.innerHeight - 0.5) * 40;
            mouseX.set(x);
            mouseY.set(y);
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
                    <button
                        onClick={() => setIsNavOpen(true)}
                        className="flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 group"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Navegación</span>
                        <MenuIcon className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                    </button>
                    <ThemeToggle />
                </div>
            </nav>

            {/* Premium Navigation Overlay */}
            <AnimatePresence>
                {isNavOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-[var(--bg-primary)]/95 backdrop-blur-2xl flex flex-col items-center justify-center p-8 md:p-20 overflow-hidden"
                    >
                        {/* Ambient background for overlay */}
                        <div className="absolute inset-0 pointer-events-none opacity-30">
                            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-600/20 blur-[150px] animate-fluid-glow" />
                            <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-indigo-600/20 blur-[150px] animate-fluid-glow" style={{ animationDirection: 'reverse' }} />
                        </div>

                        <button
                            onClick={() => setIsNavOpen(false)}
                            className="absolute top-8 right-8 w-14 h-14 rounded-full bg-[var(--text-primary)]/5 border border-[var(--text-primary)]/10 flex items-center justify-center text-[var(--text-primary)] hover:bg-red-500/20 hover:text-red-400 transition-all duration-300 group z-50"
                        >
                            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
                        </button>

                        <div className="max-w-7xl w-full relative z-10">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="mb-16 text-center"
                            >
                                <h2 className="text-4xl md:text-7xl font-black font-orbitron mb-4 text-[var(--text-primary)] tracking-tighter">MAPA DEL SITIO</h2>
                                <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-4" />
                                <p className="text-[var(--text-secondary)] text-xs md:text-sm font-bold uppercase tracking-[0.5em]">Laboratorio de Innovación & Desarrollo</p>
                            </motion.div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-y-auto max-h-[70vh] md:max-h-none p-4 custom-scrollbar">
                                <Link
                                    to="/"
                                    onClick={() => setIsNavOpen(false)}
                                    className="p-10 rounded-3xl bg-blue-600 border border-blue-400/30 flex flex-col items-center justify-center text-white shadow-2xl hover:bg-blue-500 hover:scale-[1.02] transition-all group relative overflow-hidden"
                                >
                                    <div className="absolute top-4 left-4 text-[10px] font-black opacity-30">00</div>
                                    <HomeIcon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-500" />
                                    <span className="text-sm font-black uppercase tracking-widest">Inicio</span>
                                </Link>

                                {practices.map((item, i) => (
                                    <Link
                                        key={i}
                                        to={item.path}
                                        onClick={() => setIsNavOpen(false)}
                                        className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-[var(--text-primary)] hover:bg-white/10 hover:border-blue-500/50 hover:scale-[1.02] transition-all group relative overflow-hidden text-center"
                                    >
                                        <div className="absolute top-4 left-4 text-[10px] font-black opacity-20 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
                                        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-xl shadow-blue-500/0 group-hover:shadow-blue-500/20">
                                            {React.cloneElement(item.icon, { className: "w-7 h-7" })}
                                        </div>
                                        <span className="text-xs font-black uppercase tracking-widest leading-tight group-hover:text-blue-400 transition-colors">{item.title}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                    style={{ x: mouseX, y: mouseY }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] h-[100%] bg-blue-600/5 rounded-full blur-[120px] animate-fluid-glow"
                />
                <motion.div
                    style={{
                        x: mouseX,
                        y: mouseY,
                        rotate: 180,
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
                        <p className="text-white/70 text-xs font-bold uppercase tracking-[0.2em]">© 2026 Investigación y Desarrollo</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PageLayout;
