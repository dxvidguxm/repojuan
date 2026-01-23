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

import { practices } from '../data/navigation';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};



import RevealText from '../components/RevealText';
import Typewriter from '../components/Typewriter';

const Home = () => {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <PageLayout
            title="Investigación & Desarrollo"
            subtitle="Sofia Cordero, Juan Gomez, Nayeli Morocho, Jesus Vidal"
            badge="Universidad de Cuenca"
        >
            {/* Stats/Bento Grid Section */}
            <section className="px-6 py-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-2 p-10 rounded-[2.5rem] bg-[var(--card-bg)] border border-[var(--border-color)] flex flex-col justify-between shadow-xl transition-colors duration-300"
                    >
                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-orbitron font-bold mb-4 text-[var(--text-primary)]">Sobre la Asignatura</h2>
                            <p className="text-[var(--text-secondary)] text-lg leading-relaxed text-justify">
                                Capacitamos para el desarrollo de productos industriales de vanguardia bajo estándares globales.
                                Nuestra visión integra marketing estratégico con ingeniería de manufactura avanzada y un compromiso ético con el bienestar social y ambiental.
                            </p>
                        </div>
                        <div className="mt-8 flex gap-4 text-xs font-bold tracking-widest text-white/40 uppercase">
                            <span># Innovación</span>
                            <span># Manufactura</span>
                            <span># Diseño</span>
                        </div>
                    </motion.div>

                    <div className="grid grid-rows-2 gap-6">
                        <div className="p-8 rounded-[2rem] bg-[var(--card-bg)] border border-[var(--border-color)] flex items-center gap-6 group hover:border-blue-500/30 transition-all cursor-default shadow-lg">
                            <div className="w-14 h-14 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="w-7 h-7" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1 text-[var(--text-primary)]">Ética Prof.</h4>
                                <p className="text-[var(--text-secondary)] text-sm">Respeto a la salud y bienestar social.</p>
                            </div>
                        </div>
                        <div className="p-8 rounded-[2rem] bg-blue-500 border border-transparent shadow-[0_20px_40px_rgba(59,130,246,0.2)] text-white flex flex-col justify-center items-center group cursor-pointer hover:bg-blue-400 transition-colors">
                            <span className="text-4xl font-black mb-2">9+</span>
                            <span className="text-xs font-bold uppercase tracking-widest text-white/70">Proyectos Realizados</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Practices Section */}
            <section id="proyectos" className="px-6 py-32 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 text-[var(--text-primary)]">Portafolio Técnico</h2>
                        <p className="text-[var(--text-secondary)] text-lg">Explora nuestra colección de prácticas y experimentos desarrollados en laboratorio.</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-10 h-1 rounded-full bg-blue-500" />
                        <div className="w-2 h-1 rounded-full bg-white/10" />
                        <div className="w-2 h-1 rounded-full bg-white/10" />
                    </div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {practices.map((practice, index) => (
                        <Link to={practice.path} key={index} className="block group">
                            <SpotlightCard className="h-full transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/40 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-indigo-600/0 group-hover:from-blue-600/10 group-hover:to-indigo-600/5 transition-all duration-700 pointer-events-none" />

                                <div className="relative z-10 p-8">
                                    <div className={`w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-xl shadow-blue-500/0 group-hover:shadow-blue-500/20`}>
                                        {React.cloneElement(practice.icon, { className: "w-7 h-7" })}
                                    </div>
                                    <h3 className="text-2xl font-orbitron font-bold mb-3 group-hover:text-blue-400 text-[var(--text-primary)] transition-colors duration-500">
                                        {practice.title}
                                    </h3>
                                    <p className="text-[var(--text-secondary)] font-light leading-relaxed mb-8 group-hover:text-[var(--text-secondary)]/80 transition-colors duration-500">
                                        {practice.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-blue-500/50 group-hover:text-blue-400 transition-colors duration-500">
                                        EXPLORAR <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
                                    </div>
                                </div>
                            </SpotlightCard>
                        </Link>
                    ))}
                </motion.div>
            </section>
        </PageLayout>
    );
};

export default Home;
