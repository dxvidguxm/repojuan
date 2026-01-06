import React from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle2, ListChecks, Play, Image as ImageIcon, ArrowRight, Microscope } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import { driveAssets, getDriveDirectLink } from '../../data/assets';

const EscaneoResina = () => {
    const navigate = useNavigate();

    return (
        <PageLayout
            title="Modelado e impresión 3D en resina"
            subtitle="Digitalización 3D mediante escaneo láser y fabricación de alta precisión en resina fotopolímera."
            badge="Práctica 03"
            sideMenuSections={[
                { id: 'objetivos', label: 'Objetivos' },
                { id: 'procedimiento', label: 'Proceso' },
                { id: 'video', label: 'Video' },
                { id: 'galeria', label: 'Galería' }
            ]}
            prevLink="/practice/practica2"
            nextLink="/practice/practicacortelaser"
        >
            <div className="space-y-20">
                {/* Objectives */}
                <section id="objetivos" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                                <Microscope className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-orbitron font-bold uppercase tracking-tight">Objetivos</h2>
                        </div>
                        <ul className="space-y-3 text-[var(--text-secondary)] font-light leading-relaxed text-sm">
                            <li className="flex gap-4 p-3 rounded-lg bg-white/5 border border-[var(--border-color)]">
                                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Capturar digitalmente un objeto mediante escaneo 3D de alta definición.
                            </li>
                            <li className="flex gap-4 p-3 rounded-lg bg-white/5 border border-[var(--border-color)]">
                                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Procesar mallas complejas en Blender para asegurar estanqueidad.
                            </li>
                            <li className="flex gap-4 p-3 rounded-lg bg-white/5 border border-[var(--border-color)]">
                                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Ejecutar procesos de poscurado UV para estabilización del polímero.
                            </li>
                        </ul>
                    </motion.div>

                    {/* Specific Objective Text (Restored) */}
                    <div className="lg:col-span-2 text-center max-w-3xl mx-auto mb-12">
                        <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-light">
                            Capturar digitalmente un objeto mediante escaneo 3D, procesar el modelo en Blender y un slicer especializado para impresión en resina,
                            ejecutar la impresión y realizar el proceso completo de poscurado, comparando los resultados físicos con las simulaciones.
                        </p>
                    </div>


                </section>



                {/* Section: Resultados de Aprendizaje (Restored) */}
                <section className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-[2rem] p-8">
                    <h2 className="text-2xl font-orbitron font-bold text-[var(--text-primary)] mb-6">Resultados de aprendizaje esperados</h2>
                    <div className="space-y-4">
                        <div className="flex gap-4 group">
                            <div className="text-sm font-black text-brand-primary pt-1">SO1</div>
                            <p className="text-[var(--text-secondary)] text-sm">Habilidad para identificar, formular y resolver problemas complejos de Ingeniería Industrial, aplicando principios de ingeniería, ciencias y matemáticas.</p>
                        </div>
                        <div className="flex gap-4 group">
                            <div className="text-sm font-black text-brand-primary pt-1">SO2</div>
                            <p className="text-[var(--text-secondary)] text-sm">Habilidad para aplicar el diseño de Ingeniería Industrial para producir soluciones que satisfagan necesidades específicas, teniendo en consideración la salud pública, la seguridad y el bienestar, así como factores globales, culturales, sociales, medioambientales y económicos.</p>
                        </div>
                        <div className="flex gap-4 group">
                            <div className="text-sm font-black text-brand-primary pt-1">SO3</div>
                            <p className="text-[var(--text-secondary)] text-sm">Habilidad para comunicar temas profesionales a un rango de audiencia con efectividad.</p>
                        </div>
                    </div>
                </section>

                {/* Materiales y Equipos (Restored) */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 rounded-2xl bg-white/5 border border-[var(--border-color)]">
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Reactivos / Materiales</h3>
                        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 text-sm">
                            <li>Resina para impresión 3D (color estándar)</li>
                            <li>Alcohol isopropílico (limpieza de piezas)</li>
                            <li>Guantes de nitrilo, gafas de seguridad, mascarilla</li>
                            <li>Toallas absorbentes o recipientes de enjuague</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-[var(--border-color)]">
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Equipos</h3>
                        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 text-sm">
                            <li>Escáner 3D Creality CR</li>
                            <li>Computadoras con software de CR Studio</li>
                            <li>Impresoras 3D de resina (Anycubic)</li>
                            <li>Máquina de lavado y máquina de curado creality</li>
                            <li>Balanza electrónica de precisión</li>
                        </ul>
                    </div>
                </section>

                {/* Section: Procedimiento Experimental (Full 14 steps Restored) */}
                <section id="procedimiento" className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                            <ListChecks className="w-4 h-4" />
                        </div>
                        <h2 className="text-xl font-orbitron font-bold uppercase tracking-tight">Procedimiento Experimental</h2>
                    </div>
                    <ol className="grid grid-cols-1 md:grid-cols-2 gap-4 list-decimal list-inside text-[var(--text-secondary)] font-light text-sm">
                        {[
                            'Seleccionar un objeto físico pequeño y con forma definida (no translúcido).',
                            'Escanear el objeto con el escáner Creality CR y generar el archivo OBJ.',
                            'Limpiar y mallar el modelo en Blender: cerrar huecos, eliminar errores.',
                            'Exportar a Chitubox.',
                            'Abrir el modelo en el slicer y configurar: malla, relleno, soportes, adhesión.',
                            'Simular la impresión y registrar: tiempo estimado, volumen, peso, resina.',
                            'Preparar y encender la impresora.',
                            'Verificar nivelado, tanque de resina y condiciones.',
                            'Ejecutar la impresión.',
                            'Lavar la pieza en alcohol o agua según tipo de resina.',
                            'Quitar soportes.',
                            'Curar la pieza en la cámara UV durante el tiempo recomendado.',
                            'Medir, pesar y registrar resultados reales.',
                            'Comparar con los valores de simulación y redactar observaciones.'
                        ].map((step, i) => (
                            <li key={i} className="p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-purple-500/30 transition-all">{step}</li>
                        ))}
                    </ol>
                </section>

                {/* Video Display */}
                <section id="video">
                    <div className="flex items-center gap-4 mb-8 text-[var(--text-secondary)]">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                            <Play className="w-4 h-4" />
                        </div>
                        <h2 className="text-xl font-orbitron font-bold uppercase tracking-tight">Captura de Laboratorio</h2>
                    </div>
                    <div className="max-w-3xl mx-auto rounded-[2rem] overflow-hidden border border-[var(--border-color)] bg-[var(--card-bg)] shadow-2xl relative group">
                        <div className="w-full aspect-video relative">
                            <iframe
                                src={`https://drive.google.com/file/d/${driveAssets.practica3_0_mp4.match(/\/d\/(.+?)\//)[1]}/preview`}
                                className="absolute inset-0 w-full h-full border-0"
                                allow="autoplay"
                            />
                        </div>
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </section>

                {/* Gallery */}
                <section id="galeria">
                    <div className="flex items-center gap-4 mb-8 text-[var(--text-secondary)]">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                            <ImageIcon className="w-4 h-4" />
                        </div>
                        <h2 className="text-xl font-orbitron font-bold uppercase tracking-tight">Portafolio de Inspección</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                            { id: 1, src: '/assets/img/Practica3.1.jpg' },
                            { id: 2, src: '/assets/img/Practica3.2.jpg' },
                            { id: 3, src: '/assets/img/Practica3.3.jpg' },
                            { id: 4, src: '/assets/img/Practica3.4.jpg' },
                            { id: 6, src: '/assets/img/practica3.6.jpg' },
                            { id: 7, src: '/assets/img/practica3.7.jpg' },
                            { id: 8, src: '/assets/img/practica3.8.jpg' },
                            { id: 9, src: '/assets/img/practica3.9.jpg' }
                        ].map((img) => (
                            <motion.div
                                key={img.id}
                                whileHover={{ scale: 1.05 }}
                                className="aspect-square rounded-xl overflow-hidden border border-[var(--border-color)] bg-white/5 group"
                            >
                                <img src={img.src} alt={`Resultado ${img.id}`} className="w-full h-full object-cover transition-opacity group-hover:opacity-80" />
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Conclusion */}
                <section className="relative p-8 rounded-[2.5rem] bg-gradient-to-br from-purple-700 to-pink-800 shadow-2xl shadow-purple-500/20 overflow-hidden group">
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                    <h2 className="text-2xl font-orbitron font-bold mb-4 text-purple-100 tracking-tighter">Conclusión Técnica</h2>
                    <p className="max-w-3xl text-lg font-light leading-relaxed text-purple-50/80 text-justify italic">
                        "La práctica permitió comprender de manera integral el proceso de escaneo, modelado y fabricación en resina, obteniendo una pieza final sin errores de impresión ni curado. Se evidenció que el tiempo real fue muy cercano al estimado, mientras que el consumo de material fue significativamente menor, demostrando la importancia de configurar adecuadamente soportes y orientaciones. Además, se confirmó que las decisiones de diseño influyen directamente en el costo, la calidad y el impacto ambiental del proceso. En general, se cumplió satisfactoriamente el objetivo de analizar y ejecutar una impresión 3D en resina aplicando criterios técnicos y de eficiencia."
                    </p>
                </section>

                {/* Next Button */}
                <div className="flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/practice/practicacortelaser')}
                        className="flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-orbitron font-bold text-base group hover:bg-purple-600 hover:text-[var(--text-primary)] transition-all duration-500 shadow-2xl shadow-white/10"
                    >
                        Siguiente Práctica <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                </div>
            </div>
        </PageLayout>
    );
};

export default EscaneoResina;
