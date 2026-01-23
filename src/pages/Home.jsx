import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Beaker,
    Menu,
    X,
    Cpu,
    Zap,
    Microscope,
    ArrowRight,
    Layers,
    ShieldCheck,
    Globe,
    Rocket
} from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';
import PageLayout from '../components/PageLayout';

import { practices } from '../data/navigation.jsx';
import logoCarrera from '../assets/LOGO_CARRERA.jpeg';
import ingIndust from '../assets/ing_indust.png';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const Home = () => {
    return (
        <PageLayout hideHeader={true}>
            {/* Hero Section */}
            <section className="relative min-h-screen w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex flex-col items-center justify-center overflow-hidden">
                {/* Full-width Cover Background */}
                <div className="absolute inset-0 z-0 overflow-hidden w-full">
                    <img
                        src={ingIndust}
                        alt="Background Cover"
                        className="w-full h-full object-cover opacity-90 dark:opacity-60 transition-all duration-1000 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/20 to-transparent" />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="flex flex-col md:flex-row items-center justify-center gap-12"
                    >
                        {/* Logo Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden bg-white flex flex-shrink-0 items-center justify-center shadow-2xl border-4 border-white/20 group"
                        >
                            <img
                                src={logoCarrera}
                                alt="Logo"
                                className="w-[85%] h-auto group-hover:scale-110 transition-transform duration-700"
                            />
                        </motion.div>

                        {/* Text Right */}
                        <div className="text-center md:text-left space-y-4">
                            <h1 className="text-4xl md:text-7xl font-black font-orbitron tracking-tighter text-[var(--text-primary)] uppercase leading-tight">
                                INVESTIGACIÓN <br />
                                <span className="text-[var(--brand-navy)] dark:text-blue-600">Y DESARROLLO</span>
                            </h1>
                            <div className="h-1 w-24 bg-[var(--brand-navy)] mx-auto md:mx-0 dark:bg-blue-600" />
                            <h2 className="text-lg md:text-2xl font-bold tracking-[0.2em] text-[var(--text-secondary)] uppercase">
                                Ingeniería Industrial • 2026
                            </h2>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                >
                    <div className="w-px h-16 bg-gradient-to-b from-[var(--brand-navy)] to-transparent" />
                    <span className="text-[8px] font-black uppercase tracking-[0.5em] text-[var(--brand-navy)] dark:text-blue-600">Deslizar para explorar</span>
                </motion.div>
            </section>

            {/* Portfolio Grid */}
            <section id="proyectos" className="px-6 py-32 max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <h2 className="text-5xl md:text-8xl font-orbitron font-black mb-6 text-[var(--text-primary)] tracking-tighter">
                            EXPEDIENTE <span className="text-[var(--brand-navy)] dark:text-blue-600">2026</span>
                        </h2>
                        <p className="text-[var(--text-secondary)] text-lg md:text-xl font-light uppercase tracking-[0.2em] opacity-60">
                            Portafolio de Prácticas e Investigaciones
                        </p>
                    </motion.div>
                </div>

                <div className="relative w-full overflow-hidden mask-fade-sides py-12 group/track">
                    <motion.div
                        className="flex gap-8 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30,
                        }}
                    >
                        {[...practices, ...practices].map((practice, index) => (
                            <Link
                                to={practice.path}
                                key={index}
                                className="block group relative w-[400px] md:w-[500px] flex-shrink-0"
                            >
                                <SpotlightCard className="h-full relative card-premium">
                                    <div className="absolute top-8 right-8 text-6xl font-black opacity-[0.03] group-hover:opacity-[0.07] transition-opacity font-orbitron tracking-tighter">
                                        0{(index % practices.length) + 1}
                                    </div>

                                    <div className="relative z-10 p-12 flex flex-col h-full justify-between">
                                        <div>
                                            <div className="w-16 h-16 rounded-lg bg-[var(--text-primary)]/5 flex items-center justify-center text-[var(--text-primary)] mb-12 group-hover:bg-[var(--text-primary)] group-hover:text-[var(--bg-primary)] transition-all duration-500">
                                                {React.cloneElement(practice.icon, { className: "w-8 h-8" })}
                                            </div>
                                            <h3 className="text-3xl font-orbitron font-bold mb-6 group-hover:text-[var(--text-primary)] text-[var(--text-primary)] transition-colors duration-500 uppercase tracking-tight leading-none">
                                                {practice.title}
                                            </h3>
                                            <p className="text-[var(--text-secondary)] font-light leading-relaxed mb-12 opacity-70 group-hover:opacity-100 transition-opacity">
                                                {practice.description}
                                            </p>
                                        </div>

                                        <div className="inline-flex items-center gap-4 text-[10px] font-black tracking-[0.4em] text-[var(--brand-navy)] dark:text-blue-400 group-hover:gap-6 transition-all duration-500 uppercase mt-auto">
                                            Detalles técnicos <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </Link>
                        ))}
                    </motion.div>

                    {/* Gradient Masks */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
                </div>
            </section>
        </PageLayout>
    );
};

export default Home;
