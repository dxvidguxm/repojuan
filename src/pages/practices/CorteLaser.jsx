import React from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle2, ListChecks, Play, Image as ImageIcon, ArrowRight, Settings, Download, Box } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import { driveAssets, getDriveDirectLink } from '../../data/assets';
import laserMachineImg from '../../assets/laser_cutting_machine.png';

const CorteLaser = () => {
    const navigate = useNavigate();

    return (
        <PageLayout
            title="Corte y Grabado Láser"
            subtitle="Corte y grabado láser (Casa de Navidad): prototipado rápido en MDF."
            badge="Práctica 04"
            sideMenuSections={[
                { id: 'objetivos', label: 'Ejes' },
                { id: 'stats', label: 'Metricas' },
                { id: 'video', label: 'Video' },
                { id: 'conclusion', label: 'Cierre' }
            ]}
            prevLink="/practice/practicascaner"
            nextLink="/practice/examen"
        >
            <div className="space-y-20">
                {/* Objectives Section */}
                <section id="objetivos" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                                <Settings className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-orbitron font-bold uppercase tracking-tight">Ejes de Mando</h2>
                        </div>
                        <p className="text-[var(--text-secondary)] text-base leading-relaxed text-justify">
                            Introducir al estudiante en el uso del software RDWorks para la preparación de diseños vectoriales para corte y grabado láser en MDF (3 mm),
                            configurar parámetros de potencia y velocidad, simular el proceso y evaluar tiempo, área y consumo de material con criterios de seguridad y eficiencia.
                        </p>
                        <div className="space-y-3">
                            {[
                                { label: 'RDWorks V8', desc: 'Gestión de capas y vectores.' },
                                { label: 'CO2 Laser', desc: 'Sustracción de material por calor.' },
                                { label: 'MDF 3mm', desc: 'Sustrato estándar de pruebas.' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-[var(--border-color)]">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">{item.label}:</span>
                                    <span className="text-xs text-[var(--text-secondary)]">{item.desc}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="aspect-square rounded-[2rem] bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-[var(--border-color)] flex items-center justify-center relative overflow-hidden group shadow-2xl shadow-orange-500/20"
                        >
                            <img
                                src={laserMachineImg}
                                alt="Laser Cutting Machine"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </motion.div>
                    </div>
                </section>

                {/* Technical Params */}
                <section id="stats" className="p-8 rounded-[2.5rem] bg-[var(--card-bg)] border border-[var(--border-color)] relative overflow-hidden group">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left relative z-10">
                        {[
                            { value: '15 min', label: 'Tiempo Estimado' },
                            { value: '0.23 m²', label: 'Área de Cama' },
                            { value: '99%', label: 'Precisión Vectorial' }
                        ].map((stat, i) => (
                            <React.Fragment key={i}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="space-y-1 group/stat"
                                >
                                    <span className="text-3xl font-black font-orbitron text-orange-500 tracking-tighter inline-block group-hover/stat:scale-110 transition-transform animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                                        {stat.value}
                                    </span>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-secondary)]">{stat.label}</p>
                                </motion.div>
                                {i < 2 && <div className="w-px h-10 bg-white/10 hidden md:block" />}
                            </React.Fragment>
                        ))}
                    </div>
                </section>

                {/* Video Mosaic */}
                <section id="video">
                    <div className="flex items-center gap-4 mb-8 text-[var(--text-secondary)]">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
                            <Play className="w-4 h-4" />
                        </div>
                        <h2 className="text-xl font-orbitron font-bold uppercase tracking-tight">Registro de Operación</h2>
                    </div>
                    <div className="flex flex-col gap-12 items-center">
                        {/* Top: Design File Card (Above the videos) */}
                        <div className="w-full max-w-sm">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="rounded-xl overflow-hidden border border-orange-500/50 bg-orange-500/5 shadow-orange-500/10 shadow-lg group"
                            >
                                <div className="w-full aspect-video relative flex flex-col items-center justify-center">
                                    <div className="flex flex-col items-center gap-6 p-6 text-center">
                                        <div className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform duration-500">
                                            <Box className="w-10 h-10" />
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm font-orbitron font-bold text-[var(--text-primary)] uppercase tracking-wider">Archivo de Diseño</p>
                                            <p className="text-[10px] text-[var(--text-secondary)] uppercase tracking-widest leading-relaxed">Plano vectorial para corte y grabado.</p>
                                        </div>
                                        <a
                                            href={getDriveDirectLink(driveAssets.moldefinal_stl)}
                                            className="px-6 py-3 rounded-full bg-orange-500 text-[var(--text-primary)] font-bold text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Descargar Archivo
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Bottom: Two Videos Side by Side */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                            {/* Left Video: New Video provided by user */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--card-bg)] shadow-lg group"
                            >
                                <div className="w-full aspect-[9/16] relative">
                                    <iframe
                                        src="https://drive.google.com/file/d/1CU7b1SeN-thznGyl2yFJRds7pfqqpQdx/preview?mute=1"
                                        className="absolute inset-0 w-full h-full border-0"
                                        allow="autoplay"
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>

                            {/* Right Video: Current Video (practica4_3) */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--card-bg)] shadow-lg group"
                            >
                                <div className="w-full aspect-[9/16] relative">
                                    <iframe
                                        src={`https://drive.google.com/file/d/${driveAssets.practica4_3_mp4.match(/\/d\/(.+?)\//)[1]}/preview?mute=1`}
                                        className="absolute inset-0 w-full h-full border-0"
                                        allow="autoplay"
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="relative p-8 rounded-[2.5rem] bg-gradient-to-br from-orange-500/50 to-red-700/50 border border-orange-500/20 shadow-2xl shadow-orange-500/10 overflow-hidden group">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                    <h2 className="text-2xl font-orbitron font-bold mb-4 text-[var(--text-primary)] tracking-tighter italic text-center">Conclusión de Manufactura</h2>
                    <div className="max-w-4xl mx-auto text-lg font-light leading-relaxed text-[var(--text-primary)]/90 text-justify italic space-y-4">
                        <p>"La práctica de corte y grabado láser (Casa de Navidad) permitió comprender la importancia de una correcta preparación del archivo vectorial (capas/colores), la selección adecuada de potencia y velocidad según el material (MDF 3 mm) y las medidas de seguridad (ventilación y chiller). La simulación mostró tiempos y área usados que luego se confirmaron en la práctica con diferencias pequeñas."</p>
                        <p>Datos destacados: tiempo estimado ~ 15 minutos, área de cama ≈ 0.23 m², consumo ≈ 0.00069252 m³ (MDF 3 mm).</p>
                        <p>Recomendaciones: verificar y limpiar vectores antes de la ejecución, realizar cortes de prueba en retazos, optimizar disposición de piezas para reducir desperdicio, y mantener ventilación y supervisión constantes.</p>
                    </div>
                </section>

                {/* Next Button */}
                <div className="flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/practice/examen')}
                        className="flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-orbitron font-bold text-base group hover:bg-orange-600 hover:text-[var(--text-primary)] transition-all duration-500 shadow-2xl shadow-white/10"
                    >
                        Examen Interciclo <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                </div>
            </div>
        </PageLayout>
    );
};

export default CorteLaser;
