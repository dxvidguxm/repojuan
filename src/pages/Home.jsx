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
    Globe
} from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';
import PageTransition from '../components/PageTransition';

const practices = [
    { id: 'investigacion', title: 'Investigación de Mercado', description: 'Análisis profundo para la elaboración de nuevos productos industriales.', icon: <Microscope />, path: '/practice/investigacion', color: 'blue' },
    { id: 'practica1', title: 'Práctica 1: Slicer para Impresión 3D', description: 'Configuración técnica avanzada de modelos para fabricación FDM.', icon: <Cpu />, path: '/practice/practica1', color: 'cyan' },
    { id: 'practica2', title: 'Modelado e Impresión 3D', description: 'Diseño paramétrico y materialización de prototipos funcionales.', icon: <Layers />, path: '/practice/practica2', color: 'indigo' },
    { id: 'practicascaner', title: 'Escaneo y Resina', description: 'Digitalización 3D y manufactura de alta precisión en resina fotopolímera.', icon: <Zap />, path: '/practice/practicascaner', color: 'purple' },
    { id: 'practicacortelaser', title: 'Corte y Grabado Láser', description: 'Técnicas de sustracción de material mediante tecnología láser de CO2.', icon: <ArrowRight />, path: '/practice/practicacortelaser', color: 'blue' },
    { id: 'examen', title: 'Examen Interciclo', description: 'Diseño integral y elaboración de moldes para producción en serie.', icon: <Beaker />, path: '/practice/examen', color: 'cyan' },
];

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

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-black/20 border-b border-white/5">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <Beaker className="w-5 h-5 text-white" />
                </div>
                <Link to="/" className="font-orbitron font-bold tracking-tighter text-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                    I&D AGRO
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
                <a href="#proyectos" className="hover:text-blue-400 transition-colors uppercase tracking-widest text-xs md:text-sm">Proyectos</a>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center text-white/80 active:scale-95 transition-transform"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={false}
                animate={isOpen ? { opacity: 1, y: 0, display: "flex" } : { opacity: 0, y: -20, transitionEnd: { display: "none" } }}
                className="absolute top-full left-0 w-full p-6 flex-col gap-4 bg-[#050608]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            >
                <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="p-4 text-center rounded-2xl bg-white/5 font-orbitron font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-colors"
                >
                    Inicio
                </Link>
                <a
                    href="#proyectos"
                    onClick={() => setIsOpen(false)}
                    className="p-4 text-center rounded-2xl bg-white/5 font-orbitron font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-colors"
                >
                    Proyectos
                </a>
            </motion.div>
        </nav>
    );
};

import RevealText from '../components/RevealText';
import Typewriter from '../components/Typewriter';

const Home = () => {
    return (
        <div className="relative min-h-screen bg-[#050608] text-white selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
            <Navbar />

            {/* Decorative Background Elements - FLUID */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-blue-600/10 rounded-full blur-[120px] animate-fluid-glow" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/5 rounded-full blur-[120px] animate-fluid-glow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
                <div className="absolute top-[40%] left-[-10%] w-[50%] h-[50%] bg-cyan-600/5 rounded-full blur-[100px] animate-fluid-glow" style={{ animationDuration: '30s' }} />
            </div>

            {/* Hero Section */}
            <PageTransition>
                <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-8"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
                        Universidad de Cuenca
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-black font-orbitron tracking-tighter mb-8 leading-[0.9]"
                    >
                        <span className="block text-white/50 mb-2">
                            <Typewriter text="Investigación" delay={0.1} />
                        </span>
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500 drop-shadow-[0_0_35px_rgba(59,130,246,0.3)] animate-color-flow">
                            & Desarrollo
                        </span>
                    </motion.h1>

                    <div className="max-w-xl mx-auto mb-12">
                        <RevealText
                            text="Sofia Cordero, Juan Gomez, Nayeli Morocho, Jesus Vidal"
                            delay={1.5}
                            className="text-white/80 text-lg md:text-xl font-light leading-relaxed justify-center"
                        />
                    </div>
                </section>

                {/* Stats/Bento Grid Section */}
                <section className="px-6 py-20 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:col-span-2 p-10 rounded-[2.5rem] bg-gradient-to-br from-[#111218] to-[#0a0b0f] border border-white/5 flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-orbitron font-bold mb-4">Sobre la Asignatura</h2>
                                <p className="text-white/80 text-lg leading-relaxed text-justify">
                                    Capacitamos para el desarrollo de productos industriales de vanguardia bajo estándares globales.
                                    Nuestra visión integra marketing estratégico con ingeniería de manufactura avanzada y un compromiso ético con el bienestar social y ambiental.
                                </p>
                            </div>
                            <div className="mt-8 flex gap-4 text-xs font-bold tracking-widest text-[#4d525d] uppercase">
                                <span># Innovación</span>
                                <span># Manufactura</span>
                                <span># Diseño</span>
                            </div>
                        </motion.div>

                        <div className="grid grid-rows-2 gap-6">
                            <div className="p-8 rounded-[2rem] bg-[#111218] border border-white/5 flex items-center gap-6 group hover:border-blue-500/30 transition-all cursor-default">
                                <div className="w-14 h-14 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                                    <ShieldCheck className="w-7 h-7" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Ética Prof.</h4>
                                    <p className="text-white/80 text-sm">Respeto a la salud y bienestar social.</p>
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
                            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">Portafolio Técnico</h2>
                            <p className="text-white/80 text-lg">Explora nuestra colección de prácticas y experimentos desarrollados en laboratorio.</p>
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
                                <SpotlightCard className="h-full p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
                                    <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/[0.03] transition-colors duration-500" />

                                    <div className="relative z-10">
                                        <div className={`w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-xl shadow-blue-500/0 group-hover:shadow-blue-500/20`}>
                                            {React.cloneElement(practice.icon, { className: "w-7 h-7" })}
                                        </div>
                                        <h3 className="text-2xl font-orbitron font-bold mb-3 group-hover:text-blue-400 transition-colors duration-500">
                                            {practice.title}
                                        </h3>
                                        <p className="text-white/80 font-light leading-relaxed mb-8 group-hover:text-white/60 transition-colors duration-500">
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

                {/* Footer */}
                <footer className="relative pt-40 pb-20 px-6 border-t border-white/5 text-center overflow-hidden">
                    <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
                    <div className="max-w-2xl mx-auto">
                        <p className="text-white/70 text-sm font-medium tracking-widest uppercase mb-4">Investigación y Desarrollo Agroindustrial</p>
                        <p className="text-white/50 text-xs">© 2025 Facultad de Ciencias Agropecuarias • UCuenca</p>
                    </div>
                </footer>
            </PageTransition>
        </div>
    );
};

export default Home;
