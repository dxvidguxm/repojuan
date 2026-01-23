import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence, useTransform } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Beaker, ArrowLeft, ChevronRight, Menu as MenuIcon, X, Rocket, Cpu, Layers, Zap, Microscope, ArrowRight, Home as HomeIcon } from 'lucide-react';
import { practices } from '../data/navigation.jsx';
import Typewriter from './Typewriter';
import PageTransition from './PageTransition';
import ThemeToggle from './ThemeToggle';
import logoCarrera from '../assets/LOGO_CARRERA.jpeg';
import ucuencaLogo from '../assets/ucuenca_logo_new.png';
import ucuencaColorLogo from '../assets/ucuenca_logo.png';

const PageLayout = ({ children, title, subtitle, badge = "Engineering Lab", sideMenuSections, prevLink, nextLink, hideHeader = false }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const [showBackToTop, setShowBackToTop] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

    // Simplified & Stable 3D Rolling Effect
    const rotateX = useTransform(scrollYProgress, [0, 1], [2, -2]);

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
            <div className="grid-overlay" />

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 px-4 md:px-6 py-2 flex justify-between items-center backdrop-blur-md bg-[var(--bg-primary)]/80 transition-colors duration-300">
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-[var(--brand-navy)] text-white flex items-center justify-center font-black text-xs tracking-tighter shadow-md notranslate" translate="no">
                            I&D
                        </div>
                        <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[var(--text-primary)] group-hover:text-[var(--brand-navy)] transition-colors">Industrial</span>
                    </Link>
                </div>
                <div className="flex items-center gap-2 md:gap-6">
                    <div
                        className="relative group"
                        onMouseEnter={() => setIsNavOpen(true)}
                        onMouseLeave={() => setIsNavOpen(false)}
                    >
                        <button
                            onClick={() => setIsNavOpen(!isNavOpen)}
                            className={`btn-premium group py-2 px-3 sm:px-6 ${isNavOpen ? 'bg-[var(--brand-navy)]' : ''}`}
                        >
                            <span className={`btn-premium-text !tracking-[0.2em] !text-[9px] ${isNavOpen ? '!text-white' : ''} hidden sm:block`}>Navegación</span>
                            <div className="relative z-10 flex flex-col gap-1 w-4">
                                <motion.span animate={{ width: isNavOpen ? 16 : 12 }} className={`h-0.5 rounded-none transition-colors ${isNavOpen ? 'bg-white' : 'bg-[var(--text-primary)] group-hover:bg-white'}`} />
                                <motion.span animate={{ width: 16 }} className={`h-0.5 rounded-none transition-colors ${isNavOpen ? 'bg-white' : 'bg-[var(--text-primary)] group-hover:bg-white'}`} />
                                <motion.span animate={{ width: isNavOpen ? 16 : 8 }} className={`h-0.5 rounded-none transition-colors ${isNavOpen ? 'bg-white' : 'bg-[var(--text-primary)] group-hover:bg-white'}`} />
                            </div>
                        </button>

                        {/* Premium Fly-out Dropdown */}
                        <AnimatePresence>
                            {isNavOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.95, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: 20, scale: 0.95, filter: 'blur(10px)' }}
                                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                    className={`absolute top-full right-0 ${sideMenuSections ? 'w-full sm:w-[32rem]' : 'w-64'} bg-[var(--card-bg)] backdrop-blur-3xl border border-[var(--border-color)] border-t-0 rounded-none shadow-[0_30px_100px_rgba(0,0,0,0.3)] overflow-hidden z-[100]`}
                                >
                                    <div className="flex flex-col sm:flex-row-reverse h-full text-[var(--text-primary)] divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-[var(--border-color)]">
                                        {/* General Nav - Now on the Right */}
                                        <div className="flex-1 p-4 overflow-y-auto max-h-[45vh] sm:max-h-[70vh] custom-scrollbar" data-lenis-prevent>
                                            <div className="space-y-1">
                                                <Link
                                                    to="/"
                                                    onClick={() => setIsNavOpen(false)}
                                                    className={`flex items-center gap-3 p-3 transition-all duration-300 group/item border-b border-[var(--border-color)] ${location.pathname === '/' ? 'bg-[var(--brand-navy)]/5' : 'hover:bg-[var(--brand-navy)]/5'}`}
                                                >
                                                    <div className={`flex-shrink-0 w-8 h-8 rounded-none flex items-center justify-center text-[9px] font-black transition-all ${location.pathname === '/' ? 'bg-[var(--brand-navy)] text-white shadow-md' : 'bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-secondary)] group-hover/item:bg-[var(--brand-navy)] group-hover/item:text-white'}`}>
                                                        <HomeIcon className="w-4 h-4" />
                                                    </div>
                                                    <span className={`text-[9px] font-bold uppercase tracking-widest leading-none transition-colors ${location.pathname === '/' ? 'text-blue-600 dark:text-blue-400' : 'text-[var(--text-secondary)] group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400'}`}>Inicio</span>
                                                </Link>



                                                {practices.map((item, i) => (
                                                    <Link
                                                        key={i}
                                                        to={item.path}
                                                        onClick={() => setIsNavOpen(false)}
                                                        className={`flex items-center gap-3 p-3 transition-all duration-300 group/item border-b border-[var(--border-color)] last:border-0 ${location.pathname === item.path ? 'bg-[var(--brand-navy)]/5' : 'hover:bg-[var(--brand-navy)]/5'}`}
                                                    >
                                                        <div className={`flex-shrink-0 w-8 h-8 rounded-none flex items-center justify-center text-[9px] font-black transition-all ${location.pathname === item.path ? 'bg-[var(--brand-navy)] text-white shadow-md' : 'bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-secondary)] group-hover/item:bg-[var(--brand-navy)] group-hover/item:text-white'}`}>
                                                            {i + 1}
                                                        </div>
                                                        <span className={`text-[9px] font-bold uppercase tracking-widest leading-none transition-colors ${location.pathname === item.path ? 'text-blue-600 dark:text-blue-400' : 'text-[var(--text-secondary)] group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400'}`}>{item.title}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Sections - Now on the Left */}
                                        {sideMenuSections && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="p-3 bg-black/10 dark:bg-white/5 flex flex-col overflow-y-auto max-h-[45vh] sm:max-h-[70vh] custom-scrollbar w-full sm:w-[14rem]"
                                                data-lenis-prevent
                                            >
                                                <div className="px-2 py-1.5 mb-1 border-b border-gray-200 dark:border-white/10">
                                                    <span className="text-[8px] font-black uppercase tracking-[0.3em] opacity-60 text-gray-400 dark:text-[var(--text-secondary)]">Secciones</span>
                                                </div>

                                                <div className="space-y-0.5">
                                                    {sideMenuSections.map((section, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={() => {
                                                                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                                                                setIsNavOpen(false);
                                                            }}
                                                            className="w-full flex items-center gap-3 p-2.5 rounded-none hover:bg-[var(--brand-navy)]/5 group/sub text-left transition-all duration-300 border-b border-[var(--border-color)] last:border-0"
                                                        >
                                                            <div className={`flex-shrink-0 w-6 h-6 rounded-none flex items-center justify-center text-[8px] font-bold transition-all bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-secondary)] group-hover/sub:bg-[var(--brand-navy)] group-hover/sub:text-white`}>
                                                                {idx + 1}
                                                            </div>
                                                            <span className="text-[8px] font-bold uppercase tracking-wider text-[var(--text-secondary)] group-hover/sub:text-blue-600 dark:group-hover/sub:text-blue-400 transition-colors">
                                                                {section.label}
                                                            </span>
                                                        </button>
                                                    ))}
                                                </div>

                                                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-white/5 space-y-2">
                                                    <div className="flex justify-center gap-1.5">
                                                        {[...Array(practices.length)].map((_, i) => (
                                                            <div key={i} className={`w-0.5 h-0.5 rounded-full ${i + 1 === practices.findIndex(p => p.path === location.pathname) + 1 ? 'bg-[#00204A] dark:bg-white' : 'bg-gray-300 dark:bg-white/20'}`} />
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
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
                        className="fixed bottom-24 right-8 z-50 w-12 h-12 rounded-full bg-[var(--brand-navy)] text-white flex items-center justify-center shadow-2xl hover:opacity-90 transition-all"
                    >
                        <ArrowLeft className="w-6 h-6 rotate-90" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Background - Formal & Clean */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[var(--bg-primary)]" />

            {/* Content Wrapper with 3D Rolling Effect */}
            <div className="relative z-10">
                <PageTransition>
                    <div
                        className={`relative bg-[var(--bg-primary)] transition-colors duration-300 shadow-xl pb-12 mb-0 rounded-b-[var(--radius-main)]`}

                    >
                        {!hideHeader && title && (
                            <header className="relative pt-24 pb-8 px-8 md:px-12 z-10">
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
                                        {isHome ? <Typewriter text={title} delay={0.08} /> : title}
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
                        )}

                        <main className={`relative z-10 ${isHome ? '' : 'max-w-7xl mx-auto px-6 md:px-12'} pb-24`}>
                            {children}
                        </main>
                    </div>
                </PageTransition>
            </div>

            {/* Cinematic Parallax Footer - Updated Design */}
            {isHome && (
                <motion.footer
                    className="relative bg-[var(--brand-navy)] dark:bg-[#050505] text-left transition-colors duration-300 py-24 border-t border-white/10"
                >
                    <div className="max-w-7xl mx-auto px-6 md:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                            {/* Left Column: Mission */}
                            <div className="space-y-4 max-w-lg">
                                <h3 className="font-bold text-white uppercase text-xs tracking-widest">Nuestra Misión</h3>
                                <p className="text-[10px] text-white/60 uppercase tracking-wider font-medium leading-relaxed">
                                    Desarrollar soluciones integrales que fusionen la eficiencia técnica con la sostenibilidad social. En esta plataforma presentamos los resultados de un proceso riguroso de investigación y fabricación digital.
                                </p>
                            </div>

                            {/* Right Column: Details */}
                            <div className="flex flex-col md:flex-row gap-16 md:gap-32">
                                <div className="space-y-4">
                                    <h4 className="font-bold text-white uppercase text-xs tracking-widest">Integrantes</h4>
                                    <div className="text-[10px] text-white/60 space-y-2 uppercase tracking-wider font-medium">
                                        <p>Sofia Cordero</p>
                                        <p>Juan Gomez</p>
                                        <p>Nayeli Morocho</p>
                                        <p>Jesus Vidal</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <h4 className="font-bold text-white uppercase text-xs tracking-widest">Institución</h4>
                                        <div className="text-[10px] text-white/60 space-y-2 uppercase tracking-wider font-medium">
                                            <p>Universidad de Cuenca</p>
                                            <p>Facultad de Ciencias Químicas</p>
                                        </div>
                                    </div>
                                    <div className="w-32 opacity-90 hover:opacity-100 transition-opacity">
                                        <img
                                            src={ucuencaLogo}
                                            alt="Universidad de Cuenca"
                                            className="w-full h-auto brightness-0 invert"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.footer>
            )}
        </div>
    );
};

export default PageLayout;
