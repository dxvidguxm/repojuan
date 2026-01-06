import React from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, BarChart3, Image as ImageIcon, CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import ImageCarousel from '../../components/ImageCarousel';
import DescriptionList from '../../components/DescriptionList';
import RevealText from '../../components/RevealText';



const Investigacion = () => {
    const navigate = useNavigate();

    const methodologyItems = [
        { label: 'Metodología', value: 'Investigación Cuantitativa y Descriptiva aplicada a sectores productivos.' },
        { label: 'Herramientas', value: 'Google Forms para recolección, Looker Studio para visualización.' },
        { label: 'Muestreo', value: 'Muestreo aleatorio simple con un nivel de confianza del 95%.' },
        { label: 'Objetivo', value: 'Identificar el grado de adopción tecnológica en PyMES agroindustriales.' }
    ];

    const galleryImages = [
        { src: '/assets/img/imagenespaso1.jpeg', alt: 'Fase de Creación', title: 'Fase 1: Diseño', description: 'Estructuración de preguntas clave y variables de estudio.' },
        { src: '/assets/img/imagenespaso2.jpeg', alt: 'Aplicación de Encuestas', title: 'Fase 2: Aplicación', description: 'Trabajo de campo digital y presencial.' },
        { src: '/assets/img/imagenespaso3.jpeg', alt: 'Recolección de Datos', title: 'Fase 3: Recolección', description: 'Consolidación de respuestas en bases de datos.' },
        { src: '/assets/img/imagenespaso4.jpeg', alt: 'Análisis de Resultados', title: 'Fase 4: Análisis', description: 'Interpretación estadística de tendencias.' }
    ];

    return (
        <PageLayout
            title="Investigación de Producto"
            subtitle="Recolección de datos y análisis estratégico de la agroindustria."
            badge="Fase Inicial: Análisis"
            sideMenuSections={[
                { id: 'ficha', label: 'Ficha' },
                { id: 'encuesta', label: 'Encuesta' },
                { id: 'galeria', label: 'Galería' },
                { id: 'informe', label: 'Informe' }
            ]}
            nextLink="/practice/practica1"
        >


            <div className="relative z-10 space-y-20">
                {/* Intro Section with RevealText */}
                <section className="max-w-3xl mx-auto text-center">
                    <RevealText
                        text="El análisis de datos permite transformar observaciones empíricas en estrategias de innovación tangibles."
                        className="text-xl md:text-2xl font-light leading-relaxed text-content-primary/80 justify-center"
                    />
                </section>

                {/* Section: Ficha Técnica (DescriptionList) */}
                <section id="ficha" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                            <FileSpreadsheet className="w-7 h-7" />
                        </div>
                        <h2 className="text-3xl font-orbitron font-bold text-[var(--text-primary)]">Diseño del Estudio</h2>
                        <p className="text-content-secondary text-base leading-relaxed">
                            Estructuramos una investigación rigurosa para capturar la realidad del sector.
                        </p>
                        <DescriptionList
                            title="Ficha Técnica del Proyecto"
                            description="Detalles operacionales de la fase de investigación."
                            items={methodologyItems}
                        />
                    </div>

                    {/* Embedded Forms with Glass Container */}
                </section>

                <section id="encuesta" className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-orbitron font-bold text-[var(--text-primary)] mb-4">Encuesta de investigación</h2>
                        <p className="text-[var(--text-primary)]/80 text-lg leading-relaxed max-w-4xl">
                            A continuación se presenta la encuesta aplicada a productores y ciudadanos del sector agroindustrial.
                            Esta encuesta fue elaborada en Google Forms con el fin de conocer la percepción sobre la innovación
                            y el uso de tecnologías en la agroindustria.
                        </p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="p-2 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent border border-[var(--border-color)] shadow-xl"
                    >
                        <div className="rounded-[1.5rem] overflow-hidden bg-surface-card">
                            <iframe
                                src="https://docs.google.com/spreadsheets/d/1UTEE3crWjtpZChrNP3SUZ3CrebKSmWmhNyfXL1b_WqI/edit?usp=sharing"
                                className="w-full h-[500px]"
                                frameBorder="0"
                                title="Encuesta Forms"
                            />
                        </div>
                    </motion.div>
                </section>

                {/* Section: Galería (ImageCarousel) */}
                <section id="galeria" className="space-y-8">
                    <div className="text-center max-w-xl mx-auto">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-secondary/10 text-brand-secondary mb-4">
                            <ImageIcon className="w-5 h-5" />
                        </div>
                        <h2 className="text-2xl font-orbitron font-bold text-[var(--text-primary)] mb-3">Proceso Documentado</h2>
                        <p className="text-content-secondary text-sm">
                            Registro visual de las etapas clave durante la recolección y análisis de información.
                        </p>
                    </div>

                    <ImageCarousel images={galleryImages} className="max-w-4xl mx-auto shadow-2xl shadow-brand-primary/10" />
                </section>

                {/* Section: Informe (Dashboard) */}
                <section id="informe" className="relative p-1 border border-[var(--border-color)] rounded-[2.5rem] bg-surface-card/30 backdrop-blur-sm overflow-hidden">
                    <div className="absolute inset-0 bg-brand-primary/5 blur-3xl pointer-events-none" />

                    <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1 space-y-6">
                            <div className="w-12 h-12 rounded-xl bg-brand-tertiary/10 flex items-center justify-center text-brand-tertiary">
                                <BarChart3 className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-orbitron font-bold text-[var(--text-primary)] mb-3">Dashboard Interactivo</h3>
                                <p className="text-content-secondary text-sm leading-relaxed">
                                    Explore los datos en tiempo real. Utilice los filtros del informe para segmentar por ubicación, tamaño de empresa o tipo de producto.
                                    <br /><br />
                                    El siguiente informe muestra los resultados obtenidos a partir de la encuesta anterior, analizados y visualizados mediante <b>Google Looker Studio</b>.
                                </p>
                            </div>
                            <div className="pt-4 border-t border-[var(--border-color)]">
                                <h4 className="text-[10px] font-bold text-[var(--text-primary)] uppercase tracking-widest mb-3">Indicadores Clave</h4>
                                <ul className="space-y-2">
                                    {['Adopción Digital', 'Inversión I+D', 'Capacitación'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-content-secondary text-xs">
                                            <CheckCircle2 className="w-3 h-3 text-brand-tertiary" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-span-2 rounded-[1.5rem] overflow-hidden bg-white shadow-inner h-[500px]">
                            <iframe
                                src="https://lookerstudio.google.com/embed/reporting/029e00e8-4d21-4348-9f80-c78e279e2025/page/eXjaF"
                                className="w-full h-full"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen
                                title="Dashboard Looker Studio"
                            />
                        </div>
                    </div>
                </section>

                {/* Section: Conclusiones (Restored) */}
                <section id="conclusiones" className="p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-[var(--border-color)] text-center">
                    <h2 className="text-2xl font-orbitron font-bold mb-4 text-[var(--text-primary)]">Conclusiones</h2>
                    <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-3xl mx-auto italic">
                        El análisis de los resultados permitió identificar las principales oportunidades
                        para fortalecer el sector agroindustrial mediante la aplicación de tecnologías
                        y la innovación en procesos.
                    </p>
                </section>

                {/* Conclusion */}
                <div className="flex justify-center pt-8">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/practice/practica1')}
                        className="group flex items-center gap-3 px-8 py-4 rounded-full bg-brand-primary text-[var(--text-primary)] font-orbitron font-bold text-base hover:bg-brand-glow hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-300"
                    >
                        Siguiente Práctica <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </div>
            </div>
        </PageLayout>
    );
};

export default Investigacion;


