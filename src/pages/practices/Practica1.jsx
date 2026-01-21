import React from 'react';
import { motion } from 'framer-motion';
import { Layers, CheckCircle2, Play, ArrowRight, Box, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import { driveAssets, getDriveDirectLink } from '../../data/assets';
import ImageCarousel from '../../components/ImageCarousel';
import DescriptionList from '../../components/DescriptionList';
import RevealText from '../../components/RevealText';

import printBg from '../../assets/3d_print_bg.png';

const Practica1 = () => {
    const navigate = useNavigate();

    const objectivesImages = [
        { src: '/assets/img/Practica1.3.jpg', alt: 'Slicer Preview', title: 'Visualización', description: 'Previsualización de capas en software Slicer.' },
        { src: '/assets/img/Practica1.5.jpg', alt: 'Relleno', title: 'Patrones de Relleno', description: 'Configuración de densidad y resistencia.' }
    ];

    const materialItems = [
        { label: 'Software', value: 'Ultimaker Cura 5.0+ (Slicer especializado).' },
        { label: 'Hardware', value: 'Impresora 3D Tecnología FDM (Creality/Prusa).' },
        { label: 'Material', value: 'Filamento PLA 1.75mm (Ácido Poliláctico).' },
        { label: 'Parámetros', value: 'Temp: 200°C / Cama: 60°C / Vel: 50mm/s.' }
    ];

    const galleryImages = [
        { src: '/assets/img/Practica1.3.jpg', alt: 'Preview Slicer', title: 'Configuración Inicial', description: 'Interfaz de usuario de Ultimaker Cura.' },
        { src: '/assets/img/Practica1.5.jpg', alt: 'Infill Pattern', title: 'Análisis de Relleno', description: 'Estructura interna tipo "Grid" al 20%.' },
        { src: '/assets/img/Practica1.4.jpg', alt: 'Final Output', title: 'Resultado Final', description: 'Pieza impresa verificada.' }
    ];

    return (
        <PageLayout
            title="Práctica 1"
            subtitle="Slicer 3D y Parámetros de Impresión"
            badge="Manufactura Aditiva"
            sideMenuSections={[
                { id: 'objetivos', label: 'Objetivos' },
                { id: 'metodos', label: 'Métodos' },
                { id: 'video', label: 'Videos' },
                { id: 'galeria', label: 'Galería' }
            ]}
            prevLink="/practice/investigacion"
            nextLink="/practice/practica2"
        >


            <div className="relative z-10 space-y-20">
                {/* Intro Section with RevealText */}
                <section className="max-w-3xl mx-auto text-center space-y-8">
                    <RevealText
                        text="El control preciso de los parámetros de laminado determina el éxito estructural y dimensional de la pieza final."
                        className="text-xl md:text-2xl font-light leading-relaxed text-[var(--text-primary)]/80 justify-center"
                    />
                    <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                        Familiarizar al estudiante con el uso de programas slicer para la configuración de modelos 3D,
                        aplicando parámetros técnicos que afecten la fabricación por deposición de filamento fundido (impresión FDM).
                    </p>
                </section>

                {/* Section: Resultados de Aprendizaje (Restored) */}
                <section className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-[2rem] p-8 transition-colors duration-300">
                    <h2 className="text-2xl font-orbitron font-bold text-[var(--text-primary)] mb-6">Resultados de aprendizaje esperados</h2>
                    <div className="space-y-4">
                        <div className="flex gap-4 group">
                            <div className="text-sm font-black text-brand-primary pt-1">SO2</div>
                            <p className="text-[var(--text-secondary)] text-sm">Habilidad para aplicar el diseño de Ingeniería Industrial para producir soluciones que satisfagan necesidades específicas, teniendo en consideración la salud pública, la seguridad y el bienestar, así como factores globales, culturales, sociales, medioambientales y económicos.</p>
                        </div>
                        <div className="flex gap-4 group">
                            <div className="text-sm font-black text-brand-primary pt-1">SO4</div>
                            <p className="text-[var(--text-secondary)] text-sm">Habilidad para reconocer las responsabilidades éticas y profesionales en situaciones de Ingeniería Industrial y emitir juicios fundamentados, que tengan en consideración el impacto de las soluciones de ingeniería en el contexto global, económico, medioambiental y social.</p>
                        </div>
                        <div className="flex gap-4 group">
                            <div className="text-sm font-black text-brand-primary pt-1">SO6</div>
                            <p className="text-[var(--text-secondary)] text-sm">Habilidad para desarrollar y llevar a cabo experimentos apropiados, analizar e interpretar datos y uso criterio de ingeniería para obtener conclusiones.</p>
                        </div>
                    </div>
                </section>

                {/* Section: Objetivos (ImageCarousel Placeholder) */}
                <section id="objetivos" className="max-w-4xl mx-auto">
                    <div className="space-y-6">
                        <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                            <Layers className="w-7 h-7" />
                        </div>
                        <h2 className="text-3xl font-orbitron font-bold text-[var(--text-primary)]">Objetivos de la Práctica</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-4 p-4 rounded-xl bg-surface-card/50 border border-[var(--border-color)] hover:border-brand-primary/30 transition-colors">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center text-xs font-bold">1</span>
                                <p className="text-content-secondary text-sm">Comprender la influencia de la altura de capa en la resolución y tiempo de impresión.</p>
                            </li>
                            <li className="flex items-start gap-4 p-4 rounded-xl bg-surface-card/50 border border-[var(--border-color)] hover:border-brand-primary/30 transition-colors">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center text-xs font-bold">2</span>
                                <p className="text-content-secondary text-sm">Analizar cómo la densidad de relleno impacta la resistencia mecánica.</p>
                            </li>
                            <li className="flex items-start gap-4 p-4 rounded-xl bg-surface-card/50 border border-[var(--border-color)] hover:border-brand-primary/30 transition-colors">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center text-xs font-bold">3</span>
                                <p className="text-content-secondary text-sm">Identificar fallos comunes derivados de una mala configuración de temperatura.</p>
                            </li>
                        </ul>
                    </div>

                </section>

                {/* Section: Recursos Técnicos (DescriptionList) */}
                <section id="metodos">
                    <DescriptionList
                        title="Recursos Técnicos"
                        description="Hardware y software utilizados en el proceso."
                        items={[
                            { label: 'Impresora 3D', value: 'Creality Ender 3 V2 / Prusa i3 MK3S+' },
                            { label: 'Software Slicer', value: 'Ultimaker Cura 5.0 / PrusaSlicer' },
                            { label: 'Material', value: 'Filamento PLA 1.75mm (Ácido Poliláctico)' },
                            { label: 'Herramientas', value: 'Calibrador vernier, espátula, alcohol isopropílico' }
                        ]}
                    />
                </section>

                {/* Section: Procedimiento Experimental (Restored) */}
                <section id="procedimiento" className="space-y-6">
                    <h2 className="text-3xl font-orbitron font-bold text-[var(--text-primary)]">Procedimiento experimental</h2>
                    <ol className="space-y-4 list-decimal list-inside text-[var(--text-secondary)] font-light">
                        <li className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)]">Abrir el archivo STL en el slicer (Cura o Bambu Studio).</li>
                        <li className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)]">Configurar parámetros básicos: tipo de material, temperatura, velocidad, altura de capa, tipo de relleno, soportes.</li>
                        <li className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)]">Simular la impresión y observar tiempo estimado, peso y consumo de material.</li>
                        <li className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)]">Comparar dos configuraciones distintas para el mismo modelo y justificar las diferencias.</li>
                        <li className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)]">Guardar los archivos G-code resultantes.</li>
                    </ol>
                </section>

                {/* Gallery */}
                <section id="galeria" className="space-y-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-orbitron font-bold text-[var(--text-primary)] mb-4">Galería de Resultados</h2>
                        <p className="text-[var(--text-secondary)]">Capturas del proceso de configuración y resultado impreso.</p>
                    </div>
                    <ImageCarousel images={galleryImages} autoHeight={true} className="max-w-4xl mx-auto shadow-2xl shadow-brand-tertiary/10" />
                </section>

                {/* Conclusion */}
                <section className="p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-brand-tertiary/20 to-brand-primary/20 border border-brand-primary/20 relative overflow-hidden text-center">
                    <div className="absolute inset-0 bg-surface-card/80 backdrop-blur-sm z-0" />
                    <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                        <h2 className="text-3xl font-orbitron font-bold text-[var(--text-primary)]">Conclusión Técnica</h2>
                        <p className="text-xl font-light leading-relaxed text-content-primary italic">
                            "La práctica permitió comprender el funcionamiento de los slicers y la importancia de configurar correctamente los parámetros de impresión para optimizar tiempo, material y calidad del modelo. Se evidenció que cambios en el relleno, la geometría y el volumen influyen directamente en el consumo de filamento y en la duración del proceso. Además, la comparación entre configuraciones mostró cómo las decisiones tomadas en el software afectan la eficiencia y el uso responsable de los recursos. En general, se cumplió el objetivo de familiarizarse con el programa y analizar cómo cada parámetro modifica el comportamiento de una impresión 3D con filamento."
                        </p>
                    </div>
                </section>

                {/* Next Button */}
                <div className="flex justify-center pt-8">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/practice/practica2')}
                        className="group flex items-center gap-4 px-10 py-5 rounded-full bg-brand-primary text-[var(--text-primary)] font-orbitron font-bold text-lg hover:bg-brand-glow hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-300"
                    >
                        Siguiente Práctica <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </div>
            </div>
        </PageLayout>
    );
};

export default Practica1;

