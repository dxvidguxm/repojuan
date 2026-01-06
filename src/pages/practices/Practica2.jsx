import React from 'react';
import { motion } from 'framer-motion';
import { Layers, CheckCircle2, ListChecks, Image as ImageIcon, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';

const Practica2 = () => {
    const navigate = useNavigate();

    return (
        <PageLayout
            title="Modelado e Impresión 3D"
            subtitle="Modelado e impresión de maceta 3D: Diseño paramétrico y materialización de prototipos funcionales."
            badge="Práctica 02"
            sideMenuSections={[
                { id: 'objetivos', label: 'Objetivos' },
                { id: 'herramientas', label: 'Herramientas' },
                { id: 'galeria', label: 'Galería' },
                { id: 'vision', label: 'Visión' }
            ]}
            prevLink="/practice/practica1"
            nextLink="/practice/practicascaner"
        >
            <div className="space-y-20">
                {/* Objectives */}
                <section id="objetivos" className="max-w-4xl mx-auto space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4 justify-center">
                            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-orbitron font-bold uppercase tracking-tight">Objetivos</h2>
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                'Desarrollar habilidades en el modelado 3D utilizando software CAD avanzado.',
                                'Analizar la relación directa entre el diseño digital y el producto físico final.',
                                'Validar ensambles y tolerancias mecánicas en piezas reales.'
                            ].map((obj, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="flex gap-4 p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-indigo-500/20 transition-all group"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                                    <p className="text-[var(--text-secondary)] leading-relaxed font-light text-sm">{obj}</p>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Specific Objective Text (Restored) */}
                    <div className="text-center max-w-3xl mx-auto">
                        <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-light">
                            Diseñar una maceta funcional en Fusion 360, preparar el archivo para impresión en un slicer (Cura / Prusa Slicer),
                            ejecutar la impresión en una impresora de filamento (FL SUN V400) y comparar la simulación con el resultado real
                            en términos de tiempo, consumo y calidad.
                        </p>
                    </div>
                </section>

                {/* Tools Section */}
                <section id="herramientas" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-[var(--text-secondary)] font-light text-sm">
                    <div className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-3">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">01. Diseño</div>
                        <p>Uso de Fusion 360 y Tinkercad para la generación de geometrías paramétricas.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-3">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">02. Validación</div>
                        <p>Chequeo de mallas y manifoldness para asegurar la integridad estructural.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-3">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">03. Producción</div>
                        <p>Fabricación en impresoras de gran formato para piezas agroindustriales.</p>
                    </div>
                </section>

                {/* Section: Resultados de Aprendizaje (Restored) */}
                <section className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-[2rem] p-8">
                    <h2 className="text-2xl font-orbitron font-bold text-[var(--text-primary)] mb-6">Resultados de aprendizaje esperados</h2>
                    <div className="space-y-4">
                        <div className="flex gap-4 group">
                            <div className="text-sm font-black text-brand-primary pt-1">SO2</div>
                            <p className="text-[var(--text-secondary)] text-sm">Aplicar el diseño de Ingeniería Industrial para producir soluciones que satisfagan necesidades específicas, considerando seguridad, salud y factores socioambientales.</p>
                        </div>
                        <div className="flex gap-4 group">
                            <div className="text-sm font-black text-brand-primary pt-1">SO4</div>
                            <p className="text-[var(--text-secondary)] text-sm">Reconocer responsabilidades éticas y profesionales y emitir juicios fundamentados sobre el impacto de las soluciones de ingeniería.</p>
                        </div>
                        <div className="flex gap-4 group">
                            <div className="text-sm font-black text-brand-primary pt-1">SO6</div>
                            <p className="text-[var(--text-secondary)] text-sm">Desarrollar y ejecutar experimentos, analizar e interpretar datos y usar criterio de ingeniería para obtener conclusiones.</p>
                        </div>
                    </div>
                </section>

                {/* Section: Materiales y Métodos & Data (Restored) */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-orbitron font-bold text-[var(--text-primary)]">Procedimiento experimental</h2>
                        <ol className="list-decimal list-inside space-y-2 text-[var(--text-secondary)] text-sm">
                            <li>Diseñar la maceta en Fusion 360 y revisar dimensiones.</li>
                            <li>Exportar el diseño en formato OBJ/STL y cargar en el slicer.</li>
                            <li>Configurar parámetros (PLA, relleno 10–20%, temperaturas).</li>
                            <li>Simular la impresión y anotar tiempo estimado/consumo.</li>
                            <li>Preparar la impresora (FL SUN V400) y ejecutar impresión.</li>
                            <li>Medir tiempo real, pesar pieza y comparar con simulación.</li>
                        </ol>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-[var(--border-color)] space-y-4">
                        <h3 className="text-xl font-bold text-brand-secondary">Datos Comparativos</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="text-[var(--text-secondary)] uppercase text-xs">Simulación</p>
                                <p className="text-[var(--text-primary)] font-mono">Tiempo: 2 h 23 min</p>
                                <p className="text-[var(--text-primary)] font-mono">Consumo: 74 g / 24.80 m</p>
                            </div>
                            <div>
                                <p className="text-[var(--text-secondary)] uppercase text-xs">Real</p>
                                <p className="text-brand-primary font-mono font-bold">Tiempo: 2 h 36 min</p>
                                <p className="text-brand-primary font-mono font-bold">Peso: 76 g (78g total)</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery */}
                <section id="galeria">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                            <ImageIcon className="w-4 h-4" />
                        </div>
                        <h2 className="text-xl font-orbitron font-bold uppercase tracking-tight">Registro Fotográfico</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[var(--text-secondary)]">
                        {[
                            { src: '/assets/img/practica2.1.jpg', label: 'Bocetado Digital' },
                            { src: '/assets/img/practica2.2.jpg', label: 'Inicio de Manufactura' },
                            { src: '/assets/img/Practica2.3.jpg', label: 'Detalle de Capa' },
                            { src: '/assets/img/Practica2.4.jpg', label: 'Producto Final' }
                        ].map((img, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="group relative rounded-2xl overflow-hidden border border-[var(--border-color)]"
                            >
                                <img src={img.src} alt={img.label} className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">{img.label}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Conclusion */}
                <section id="vision" className="p-8 rounded-[2.5rem] bg-gradient-to-br from-indigo-800 to-purple-900 shadow-2xl shadow-indigo-500/20 text-center">
                    <h2 className="text-2xl font-orbitron font-bold mb-4 italic text-indigo-200">Visión Técnica</h2>
                    <p className="max-w-3xl mx-auto text-lg font-light leading-relaxed text-indigo-100/80">
                        "La práctica de la maceta permitió validar la relación entre parámetros del slicer (relleno, altura de capa, velocidad) y los resultados físicos. Las diferencias observadas —13 minutos adicionales en tiempo, 2 g más en peso y 0.6 m más de filamento— son pequeñas y atribuibles a tolerancias de la impresora. Se recomienda documentar siempre simulación vs real para mejorar estimaciones futuras."
                    </p>
                </section>

                {/* Next Button */}
                <div className="flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/practice/practicascaner')}
                        className="flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-orbitron font-bold text-base group hover:bg-indigo-500 hover:text-[var(--text-primary)] transition-all duration-500 shadow-2xl shadow-white/10"
                    >
                        Siguiente Práctica <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                </div>
            </div>
        </PageLayout>
    );
};

export default Practica2;
