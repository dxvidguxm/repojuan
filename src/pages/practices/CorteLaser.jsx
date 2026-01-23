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
                            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0">
                                <Settings className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-orbitron font-bold uppercase tracking-tight text-[var(--text-primary)]">Ejes de Mando</h2>
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
                <section id="stats" className="p-8 rounded-[var(--radius-main)] bg-[var(--card-bg)] border border-[var(--border-color)] relative overflow-hidden group">
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
                                    <span className="text-3xl font-black font-orbitron text-[var(--brand-navy)] dark:text-blue-400 tracking-tighter inline-block group-hover/stat:scale-110 transition-transform animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
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
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0">
                            <Play className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-orbitron font-bold uppercase tracking-tight text-[var(--text-primary)]">Registro de Operación</h2>
                    </div>
                    <div className="flex flex-col gap-12 items-center">
                        {/* Top: Design File Card (Above the videos) */}
                        <div className="w-full max-w-sm">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="rounded-xl overflow-hidden border border-[var(--brand-navy)]/50 bg-[var(--brand-navy)]/5 shadow-xl group"
                            >
                                <div className="w-full aspect-video relative flex flex-col items-center justify-center">
                                    <div className="flex flex-col items-center gap-6 p-6 text-center">
                                        <div className="w-20 h-20 rounded-full bg-[var(--brand-navy)]/20 flex items-center justify-center text-[var(--brand-navy)] dark:text-blue-400 group-hover:scale-110 transition-transform duration-500">
                                            <Box className="w-10 h-10" />
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm font-orbitron font-bold text-[var(--text-primary)] uppercase tracking-wider">Archivo de Diseño</p>
                                            <p className="text-[10px] text-[var(--text-secondary)] uppercase tracking-widest leading-relaxed">Plano vectorial para corte y grabado.</p>
                                        </div>
                                        <a
                                            href={getDriveDirectLink(driveAssets.moldefinal_stl)}
                                            className="px-6 py-3 rounded-full bg-[var(--brand-navy)] text-white font-bold text-[10px] uppercase tracking-widest hover:opacity-90 transition-all shadow-lg"
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
                                        className="absolute inset-0 w-full h-full border-0 pointer-events-none group-hover:pointer-events-auto transition-all"
                                        allow="autoplay"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 pointer-events-none group-hover:hidden bg-transparent z-10" />
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
                                        className="absolute inset-0 w-full h-full border-0 pointer-events-none group-hover:pointer-events-auto transition-all"
                                        allow="autoplay"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 pointer-events-none group-hover:hidden bg-transparent z-10" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Conclusion */}
                {/* Conclusion */}
                <section id="conclusion" className="conclusion-standard">
                    <h2>Conclusión de Manufactura</h2>
                    <p>
                        "La práctica de corte y grabado láser (Casa de Navidad) permitió comprender la importancia de una correcta preparación del archivo vectorial (capas/colores), la selección adecuada de potencia y velocidad según el material (MDF 3 mm) y las medidas de seguridad (ventilación y chiller). La simulación mostró tiempos y área usados que luego se confirmaron en la práctica con diferencias pequeñas."
                    </p>
                    <br />
                    <p className="not-italic text-sm opacity-100 font-normal">
                        <strong>Datos destacados:</strong> tiempo estimado ~ 15 minutos, área de cama ≈ 0.23 m², consumo ≈ 0.00069252 m³ (MDF 3 mm).
                    </p>
                    <p className="not-italic text-sm opacity-100 font-normal mt-2">
                        <strong>Recomendaciones:</strong> verificar y limpiar vectores antes de la ejecución, realizar cortes de prueba en retazos, optimizar disposición de piezas para reducir desperdicio, y mantener ventilación y supervisión constantes.
                    </p>
                </section>

                {/* Next Button */}
                <div className="flex justify-center">
                    <button
                        onClick={() => navigate('/practice/examen')}
                        className="btn-premium group"
                    >
                        <span className="btn-premium-text">
                            Examen Interciclo
                        </span>
                        <ArrowRight className="relative z-10 w-5 h-5 text-[var(--text-primary)] group-hover:text-white group-hover:translate-x-1 transition-all duration-700" />
                    </button>
                </div>
            </div>
        </PageLayout>
    );
};

export default CorteLaser;
