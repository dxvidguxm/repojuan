import React from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle2, ListChecks, Play, Image as ImageIcon, ArrowRight, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';

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
                        <p className="text-white/80 text-base leading-relaxed text-justify">
                            Introducir al estudiante en el uso del software RDWorks para la preparación de diseños vectoriales para corte y grabado láser en MDF (3 mm),
                            configurar parámetros de potencia y velocidad, simular el proceso y evaluar tiempo, área y consumo de material con criterios de seguridad y eficiencia.
                        </p>
                        <div className="space-y-3">
                            {[
                                { label: 'RDWorks V8', desc: 'Gestión de capas y vectores.' },
                                { label: 'CO2 Laser', desc: 'Sustracción de material por calor.' },
                                { label: 'MDF 3mm', desc: 'Sustrato estándar de pruebas.' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-white/80">{item.label}:</span>
                                    <span className="text-xs text-white/30">{item.desc}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="aspect-square rounded-[2rem] bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-white/10 flex items-center justify-center relative overflow-hidden group"
                        >
                            <Zap className="w-32 h-32 text-orange-400/20 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_70%)]" />
                        </motion.div>
                    </div>
                </section>

                {/* Technical Params */}
                <section id="stats" className="p-8 rounded-[2.5rem] bg-[#0d0e13] border border-white/5 relative overflow-hidden group">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left relative z-10">
                        <div className="space-y-1">
                            <span className="text-3xl font-black font-orbitron text-orange-500 tracking-tighter">15 min</span>
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Tiempo Estimado</p>
                        </div>
                        <div className="w-px h-10 bg-white/10 hidden md:block" />
                        <div className="space-y-1">
                            <span className="text-3xl font-black font-orbitron text-orange-500 tracking-tighter">0.23 m²</span>
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Área de Cama</p>
                        </div>
                        <div className="w-px h-10 bg-white/10 hidden md:block" />
                        <div className="space-y-1">
                            <span className="text-3xl font-black font-orbitron text-orange-500 tracking-tighter">99%</span>
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Precisión Vectorial</p>
                        </div>
                    </div>
                </section>

                {/* Video Mosaic */}
                <section id="video">
                    <div className="flex items-center gap-4 mb-8 text-white/80">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
                            <Play className="w-4 h-4" />
                        </div>
                        <h2 className="text-xl font-orbitron font-bold uppercase tracking-tight">Registro de Operación</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {[4.1, 4.01, 4.2, 4.3].map((num, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="rounded-xl overflow-hidden border border-white/5 bg-[#0d0e13] shadow-lg"
                            >
                                <video controls muted className="w-full aspect-[9/16] object-cover">
                                    <source src={`/assets/video/practica4.${num === 4.01 ? '01' : num.toString().split('.')[1]}.mp4`} type="video/mp4" />
                                </video>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="relative p-8 rounded-[2.5rem] bg-gradient-to-br from-orange-600 to-red-800 shadow-2xl shadow-orange-500/20 overflow-hidden group">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                    <h2 className="text-2xl font-orbitron font-bold mb-4 text-orange-100 tracking-tighter italic text-center">Conclusión de Manufactura</h2>
                    <div className="max-w-4xl mx-auto text-lg font-light leading-relaxed text-orange-50/80 text-justify italic space-y-4">
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
                        className="flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-orbitron font-bold text-base group hover:bg-orange-600 hover:text-white transition-all duration-500 shadow-2xl shadow-white/10"
                    >
                        Examen Interciclo <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                </div>
            </div>
        </PageLayout>
    );
};

export default CorteLaser;
