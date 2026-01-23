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
                <section id="ficha" className="space-y-12">
                    <div className="space-y-6">
                        <div className="w-14 h-14 rounded-xl bg-[var(--brand-navy)]/10 flex items-center justify-center text-[var(--brand-navy)]">
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
                        className="p-1 rounded-[var(--radius-main)] bg-gradient-to-br from-[var(--brand-navy)]/10 to-transparent border border-[var(--border-color)] shadow-xl"
                    >
                        <div className="rounded-[1.5rem] overflow-hidden bg-surface-card relative group">
                            <iframe
                                src="https://docs.google.com/spreadsheets/d/1UTEE3crWjtpZChrNP3SUZ3CrebKSmWmhNyfXL1b_WqI/edit?usp=sharing"
                                className="w-full h-[500px] pointer-events-none group-hover:pointer-events-auto transition-all"
                                frameBorder="0"
                                title="Encuesta Forms"
                                loading="lazy"
                            />
                            {/* Overlay helper for scrolling */}
                            <div className="absolute inset-0 pointer-events-none group-hover:hidden bg-transparent z-10" />
                        </div>
                    </motion.div>
                </section>

                {/* Section: Galería (ImageCarousel) */}
                <section id="galeria" className="space-y-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--brand-red)]/10 text-[var(--brand-red)] mb-4">
                            <ImageIcon className="w-5 h-5" />
                        </div>
                        <h2 className="text-2xl font-orbitron font-bold text-[var(--text-primary)] mb-3">Proceso Documentado</h2>
                        <p className="text-content-secondary text-sm">
                            Registro visual de las etapas clave durante la recolección y análisis de información.
                        </p>
                    </div>

                    <ImageCarousel images={galleryImages} className="max-w-4xl mx-auto shadow-2xl" />
                </section>

                {/* Section: Informe (Dashboard) */}
                <section id="informe" className="relative p-1 border border-[var(--border-color)] rounded-[var(--radius-main)] bg-[var(--card-bg)] backdrop-blur-sm overflow-hidden">
                    <div className="absolute inset-0 bg-brand-primary/5 blur-3xl pointer-events-none" />

                    <div className="p-6 md:p-10 space-y-12">
                        <div className="space-y-6">
                            <div className="w-12 h-12 rounded-xl bg-[var(--brand-navy)]/10 flex items-center justify-center text-[var(--brand-navy)]">
                                <BarChart3 className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-orbitron font-bold text-[var(--text-primary)] mb-3">Dashboard Interactivo</h3>
                                <p className="text-content-secondary text-base leading-relaxed max-w-4xl">
                                    Explore los datos en tiempo real. Utilice los filtros del informe para segmentar por ubicación, tamaño de empresa o tipo de producto.
                                    <br /><br />
                                    El siguiente informe muestra los resultados obtenidos a partir de la encuesta anterior, analizados y visualizados mediante <b>Google Looker Studio</b>.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-[1.5rem] overflow-hidden bg-white shadow-inner h-[600px] relative group border border-[var(--border-color)]">
                            <iframe
                                src="https://lookerstudio.google.com/embed/reporting/029e00e8-4d21-4348-9f80-c78e279e2025/page/eXjaF"
                                className="w-full h-full pointer-events-none group-hover:pointer-events-auto transition-all"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen
                                title="Dashboard Looker Studio"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 pointer-events-none group-hover:hidden bg-transparent z-10" />
                        </div>
                    </div>
                </section>

                {/* Section: Conclusiones (Standardized) */}
                <section id="conclusiones" className="conclusion-standard">
                    <h2>Conclusiones</h2>
                    <p>
                        El análisis de los resultados permitió identificar las principales oportunidades
                        para fortalecer el sector agroindustrial mediante la aplicación de tecnologías
                        y la innovación en procesos.
                    </p>
                </section>

                {/* Conclusion */}
                <div className="flex justify-center pt-8">
                    <button
                        onClick={() => navigate('/practice/practica1')}
                        className="btn-premium group"
                    >
                        <span className="btn-premium-text">
                            Siguiente Práctica
                        </span>
                        <ArrowRight className="relative z-10 w-5 h-5 text-[var(--text-primary)] group-hover:text-white group-hover:translate-x-1 transition-all duration-700" />
                    </button>
                </div>
            </div>
        </PageLayout>
    );
};

export default Investigacion;


