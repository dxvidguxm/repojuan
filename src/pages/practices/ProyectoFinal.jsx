import React from 'react';
import { motion } from 'framer-motion';
import {
    Rocket,
    BookOpen,
    ListChecks,
    Play,
    Image as ImageIcon,
    Download,
    Box,
    FileText,
    Globe,
    Layers,
    AlertTriangle,
    Settings,
    Cpu,
    Activity,
    Users,
    Lightbulb,
    ArrowUpCircle,
    CheckCircle2,
    ArrowRight,
    Home,
    Wifi,
    Zap,
    Share2,
    Radio
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import { driveAssets, getDriveDirectLink } from '../../data/assets';
import ImageCarousel from '../../components/ImageCarousel';
import RevealText from '../../components/RevealText';

const ProyectoFinal = () => {
    const navigate = useNavigate();
    const galleryImages = [
        { src: '/assets/img/PF_Result1.jpg', alt: 'Proyecto Final 1', title: 'Prototipo Final', description: 'Vista General del proyecto terminado.' },
        { src: '/assets/img/PF_Result2.jpg', alt: 'Proyecto Final 2', title: 'Detalle Técnico', description: 'Acercamiento a componentes críticos.' },
        { src: '/assets/img/PF_Result3.jpg', alt: 'Proyecto Final 3', title: 'Pruebas de Campo', description: 'Validación del funcionamiento.' }
    ];

    const sideMenuSections = [
        { id: 'intro', label: '1. Introducción' },
        { id: 'problema', label: '2. Problema' },
        { id: 'fisica', label: '3. Arq. Física' },
        { id: 'arquitectura', label: '4. Arq. General' },
        { id: 'modulos', label: '5. Módulos y Hardware' },
        { id: 'conexiones', label: '6. Conexiones (Pinout)' },
        { id: 'funcionamiento', label: '7. Funcionamiento' },
        { id: 'metodologia', label: '8. Metodología' },
        { id: 'impacto', label: '9. Impacto Social' },
        { id: 'innovacion', label: '10. Innovación' },
        { id: 'mejoras', label: '11. Mejoras' },
        { id: 'video-final', label: '12. Video Final' },
        { id: 'conclusion', label: '13. Conclusión' },
        { id: 'recursos', label: '14. Recursos' }
    ];

    return (
        <PageLayout
            title="Bastón Inteligente"
            subtitle="Alerta Sonora para Personas con Discapacidad Visual"
            badge="Proyecto Final de Carrera"
            sideMenuSections={sideMenuSections}
            prevLink="/practice/examen"
            nextLink="/"
        >
            <div className="space-y-24 pb-20">
                {/* 1. Introducción */}
                <section id="intro" className="max-w-6xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-[var(--brand-navy)]/10 flex items-center justify-center text-[var(--brand-navy)] dark:text-blue-400">
                            <Rocket className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-orbitron font-bold text-[var(--text-primary)]">1. Introducción</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <RevealText
                                text="El Bastón Inteligente con Alerta Sonora Inalámbrica es un dispositivo de asistencia tecnológica diseñado para mejorar la seguridad, orientación y autonomía de personas con discapacidad visual."
                                className="text-xl md:text-2xl font-light leading-relaxed text-[var(--text-primary)]/80"
                            />
                            <div className="max-w-none text-[var(--text-secondary)] space-y-4">
                                <p>
                                    El sistema se basa en una arquitectura distribuida a lo largo del bastón, donde los sensores y el procesamiento primario se encuentran en la punta inferior, mientras que la alerta sonora se genera en la parte superior, cerca del usuario, garantizando una respuesta auditiva clara e inmediata.
                                </p>
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-[var(--brand-navy)]/10 blur-[80px] group-hover:bg-[var(--brand-navy)]/20 transition-colors -z-10" />
                            <img
                                src="/assets/img/proyecto_final/img_introduccion.jfif"
                                alt="Bastón Inteligente Prototipo"
                                className="w-full max-w-sm mx-auto h-auto rounded-[var(--radius-main)] shadow-2xl border border-[var(--border-color)] group-hover:border-[var(--brand-navy)]/30 transition-all duration-500"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* 2. Planteamiento del problema */}
                <section id="problema" className="max-w-6xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400">
                            <AlertTriangle className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-orbitron font-bold text-[var(--text-primary)]">2. Planteamiento del Problema</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-lg text-[var(--text-primary)] font-light leading-relaxed">
                                Las personas con discapacidad visual enfrentan <span className="text-red-400 font-bold">riesgos constantes</span> durante su desplazamiento, tales como:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Obstáculos a nivel del suelo.",
                                    "Huecos, escalones descendentes y desniveles.",
                                    "Objetos pequeños o de baja altura difíciles de detectar con un bastón convencional."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-sm">
                                        <div className="mt-1 w-2 h-2 rounded-full bg-red-500 shrink-0" />
                                        <span className="text-[var(--text-secondary)]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-red-500/5 to-transparent p-8 rounded-[var(--radius-main)] border border-red-500/10">
                            <p className="text-xl font-light text-[var(--text-primary)] italic mb-6">
                                "Estos riesgos pueden provocar caídas y accidentes."
                            </p>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                El proyecto busca <strong>anticipar estos peligros</strong>, proporcionando información del entorno antes de que el usuario entre en contacto directo con el obstáculo.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. Objetivos del proyecto */}
                {/* 3. Arquitectura Física del Sistema */}
                <section id="fisica" className="max-w-6xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400">
                            <Box className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-orbitron font-bold text-[var(--text-primary)]">3. Arquitectura Física del Sistema</h2>
                    </div>

                    <p className="text-[var(--text-secondary)] mb-4">El bastón está dividido funcionalmente en dos zonas claramente diferenciadas:</p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        {/* 3.1 Módulo Inferior */}
                        <div className="group relative p-8 rounded-[var(--radius-main)] bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-blue-500/30 transition-all shadow-xl">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <ArrowRight className="w-12 h-12 text-blue-500 -rotate-45" />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--brand-navy)] dark:text-blue-400 mb-2">3.1 Módulo Inferior <span className="text-sm font-light opacity-70 block">Zona de Detección (Punta del Bastón)</span></h3>

                            <p className="text-sm text-[var(--text-secondary)] mb-6 font-medium bg-blue-500/5 p-2 rounded inline-block">
                                Ubicado en la parte inferior del bastón, cerca del suelo.
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-primary)] mb-2">Componentes:</h4>
                                    <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                                        <li className="flex items-center gap-2">• Arduino Nano (controlador)</li>
                                        <li className="flex items-start gap-2">
                                            <span>•</span>
                                            <div>
                                                2 Sensores Ultrasónicos (HC-SR04)
                                                <div className="text-xs opacity-70 pl-2 mt-1 border-l border-[var(--border-color)]">
                                                    - Uno orientado al frente<br />
                                                    - Uno orientado hacia el suelo
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-2">• 3 Sensores Infrarrojos</li>
                                        <li className="flex items-center gap-2">• NRF24L01 (Transmisor)</li>
                                    </ul>
                                </div>
                                <div className="pt-4 border-t border-[var(--border-color)]">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-primary)] mb-2">Función:</h4>
                                    <p className="text-sm text-[var(--text-secondary)]">
                                        Detectar obstáculos, desniveles y objetos cercanos, procesar la información y enviar una señal de alerta de forma inalámbrica.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Imagen Central */}
                        <div className="flex flex-col items-center justify-center">
                            <div className="relative w-full max-w-sm rounded-[var(--radius-main)] overflow-hidden border border-[var(--border-color)] shadow-2xl group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <img
                                    src="/assets/img/FINALFINAL.jpeg"
                                    alt="Diseño Físico Completo"
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        {/* 3.2 Módulo Superior */}
                        <div className="group relative p-8 rounded-[var(--radius-main)] bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-amber-500/30 transition-all shadow-xl">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Activity className="w-12 h-12 text-amber-500 -rotate-12" />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--brand-navy)] dark:text-amber-400 mb-2">3.2 Módulo Superior <span className="text-sm font-light opacity-70 block">Zona de Alerta (Mango del Bastón)</span></h3>

                            <p className="text-sm text-[var(--text-secondary)] mb-6 font-medium bg-amber-500/5 p-2 rounded inline-block">
                                Ubicado en la parte superior del bastón, cerca de la mano y oído del usuario.
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-primary)] mb-2">Componentes:</h4>
                                    <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                                        <li className="flex items-center gap-2">• Arduino UNO</li>
                                        <li className="flex items-center gap-2">• NRF24L01 (Receptor)</li>
                                        <li className="flex items-center gap-2">• Buzzer Piezoeléctrico</li>
                                    </ul>
                                </div>
                                <div className="pt-4 border-t border-[var(--border-color)]">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-primary)] mb-2">Función:</h4>
                                    <p className="text-sm text-[var(--text-secondary)]">
                                        Recibir la información enviada desde la parte inferior del bastón y convertirla en alertas sonoras claras y diferenciadas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Arquitectura General del Sistema */}
                <section id="arquitectura" className="max-w-6xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                            <Layers className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-orbitron font-bold text-[var(--text-primary)]">4. Arquitectura General del Sistema</h2>
                    </div>

                    <div className="bg-[var(--card-bg)] p-8 rounded-[var(--radius-main)] border border-[var(--border-color)] shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-32 bg-[var(--brand-navy)]/5 rounded-full blur-3xl -z-10" />

                        <p className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed">
                            El sistema funciona bajo una <strong className="text-[var(--text-primary)]">arquitectura distribuida e inalámbrica</strong>, dividida en dos módulos físicos independientes que se comunican por radiofrecuencia (2.4 GHz). Esto permite flexibilidad, escalabilidad y una clara separación entre la detección y la alerta.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                            {/* Connector Line (Desktop) */}
                            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                <div className="bg-[var(--card-bg)] p-2 rounded-full border border-[var(--border-color)] shadow-lg">
                                    <Wifi className="w-6 h-6 text-[var(--brand-navy)] animate-pulse" />
                                </div>
                            </div>

                            {/* Módulo Detección */}
                            <div className="p-6 rounded-2xl bg-[var(--brand-navy)]/5 border border-[var(--brand-navy)]/20 hover:border-[var(--brand-navy)]/50 transition-colors group">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                                        <Cpu className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--text-primary)]">Módulo de Detección (Emisor)</h3>
                                </div>
                                <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 mt-0.5 text-blue-400" />
                                        <span>Ubicado en el área a monitorear.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 mt-0.5 text-blue-400" />
                                        <span>Lee continuamente los sensores (Ultrasónicos e IR).</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 mt-0.5 text-blue-400" />
                                        <span>Procesa la información y transmite el estado.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Módulo Alerta */}
                            <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 hover:border-amber-500/50 transition-colors group">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-amber-500/20 text-amber-500 rounded-lg">
                                        <AlertTriangle className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--text-primary)]">Módulo de Alerta (Receptor)</h3>
                                </div>
                                <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 mt-0.5 text-amber-500" />
                                        <span>Recibe la señal inalámbrica remota.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 mt-0.5 text-amber-500" />
                                        <span>Gestiona la activación de la alarma sonora.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 mt-0.5 text-amber-500" />
                                        <span>Totalmente independiente del detector.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Descripción de Módulos */}
                <section id="modulos" className="max-w-6xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                            <Cpu className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-orbitron font-bold text-[var(--text-primary)]">5. Módulos y Hardware</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Arduino Nano */}
                        <div className="p-6 rounded-[var(--radius-main)] bg-[var(--card-bg)] border border-[var(--border-color)] space-y-4 hover:shadow-lg transition-all">
                            <h3 className="font-bold text-lg text-cyan-400">Arduino Nano</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                El <strong>"Cerebro de Detección"</strong>. Seleccionado por su tamaño compacto para sistemas embebidos. Lee sensores, decide si hay alerta y envía datos.
                            </p>
                        </div>

                        {/* Arduino Uno */}
                        <div className="p-6 rounded-[var(--radius-main)] bg-[var(--card-bg)] border border-[var(--border-color)] space-y-4 hover:shadow-lg transition-all">
                            <h3 className="font-bold text-lg text-blue-400">Arduino Uno</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                La <strong>"Unidad de Salida"</strong>. Su simplicidad y robustez garantizan estabilidad para recibir datos y activar el buzzer de alerta.
                            </p>
                        </div>

                        {/* NRF24L01 */}
                        <div className="p-6 rounded-[var(--radius-main)] bg-[var(--card-bg)] border border-[var(--border-color)] space-y-4 hover:shadow-lg transition-all relative overflow-hidden">
                            <div className="absolute -right-4 -top-4 bg-yellow-500/10 w-24 h-24 rounded-full blur-xl" />
                            <div className="flex justify-between items-start">
                                <h3 className="font-bold text-lg text-yellow-500">NRF24L01</h3>
                                <Wifi className="w-4 h-4 text-yellow-500" />
                            </div>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Transceptor de radiofrecuencia (2.4 GHz). Comunicación SPI bidireccional y bajo consumo.
                            </p>
                            <div className="flex items-center gap-2 text-xs font-bold text-red-400 bg-red-500/10 p-2 rounded-lg">
                                <Zap className="w-3 h-3" />
                                ¡Atención! Funciona estrictamente a 3.3V.
                            </div>
                        </div>

                        {/* Sensores Ultrasónicos */}
                        <div className="p-6 rounded-[var(--radius-main)] bg-[var(--card-bg)] border border-[var(--border-color)] space-y-4 hover:shadow-lg transition-all col-span-1 md:col-span-2 lg:col-span-1">
                            <h3 className="font-bold text-lg text-emerald-400">Sensores HC-SR04 (x2)</h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                                Utilizan ultrasonido para medir distancia (Ecolocalización). Detectan objetos en un rango definido (ej. &lt; 25 cm). Se usan 2 para ampliar el campo visual.
                            </p>
                        </div>

                        {/* Sensores IR */}
                        <div className="p-6 rounded-[var(--radius-main)] bg-[var(--card-bg)] border border-[var(--border-color)] space-y-4 hover:shadow-lg transition-all col-span-1 md:col-span-2">
                            <h3 className="font-bold text-lg text-purple-400">Sensores Infrarrojos (x3)</h3>
                            <div className="flex flex-col md:flex-row gap-4 items-center">
                                <p className="text-sm text-[var(--text-secondary)] flex-1">
                                    Detectan objetos mediante reflexión de luz IR. Ideales para una detección rápida y muy cercana, complementando a los ultrasónicos. Emiten una señal digital (HIGH/LOW).
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Conexiones */}
                <section id="conexiones" className="max-w-6xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-gray-500/10 flex items-center justify-center text-gray-400">
                            <Share2 className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-orbitron font-bold text-[var(--text-primary)]">6. Diagrama de Conexiones</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Tabla Sensores -> Nano */}
                        <div className="bg-[var(--card-bg)] rounded-[var(--radius-main)] border border-[var(--border-color)] overflow-hidden">
                            <div className="p-4 bg-[var(--brand-navy)]/5 border-b border-[var(--border-color)]">
                                <h3 className="font-bold text-[var(--text-primary)] flex items-center gap-2">
                                    <Cpu className="w-4 h-4 text-cyan-400" />
                                    Sensores <ArrowRight className="w-3 h-3" /> Arduino Nano
                                </h3>
                            </div>
                            <div className="p-6">
                                <table className="w-full text-sm text-left">
                                    <thead>
                                        <tr className="border-b border-[var(--border-color)] text-[var(--text-secondary)]">
                                            <th className="pb-3 font-medium">Componente</th>
                                            <th className="pb-3 font-medium">Pines</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-[var(--text-primary)]">
                                        <tr className="border-b border-[var(--border-color)]/50">
                                            <td className="py-3">HC-SR04 #1</td>
                                            <td className="py-3 font-mono text-xs text-cyan-400">TRIG → D10, ECHO → D2</td>
                                        </tr>
                                        <tr className="border-b border-[var(--border-color)]/50">
                                            <td className="py-3">HC-SR04 #2</td>
                                            <td className="py-3 font-mono text-xs text-cyan-400">TRIG → D3, ECHO → D4</td>
                                        </tr>
                                        <tr className="border-b border-[var(--border-color)]/50">
                                            <td className="py-3">Sensor IR #1</td>
                                            <td className="py-3 font-mono text-xs text-purple-400">Salida → D5</td>
                                        </tr>
                                        <tr className="border-b border-[var(--border-color)]/50">
                                            <td className="py-3">Sensor IR #2</td>
                                            <td className="py-3 font-mono text-xs text-purple-400">Salida → D6</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3">Sensor IR #3</td>
                                            <td className="py-3 font-mono text-xs text-purple-400">Salida → D9</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Tabla NRF24L01 */}
                        <div className="bg-[var(--card-bg)] rounded-[var(--radius-main)] border border-[var(--border-color)] overflow-hidden">
                            <div className="p-4 bg-[var(--brand-navy)]/5 border-b border-[var(--border-color)]">
                                <h3 className="font-bold text-[var(--text-primary)] flex items-center gap-2">
                                    <Radio className="w-4 h-4 text-yellow-500" />
                                    NRF24L01 (SPI)
                                </h3>
                            </div>
                            <div className="p-6">
                                <table className="w-full text-sm text-left">
                                    <thead>
                                        <tr className="border-b border-[var(--border-color)] text-[var(--text-secondary)]">
                                            <th className="pb-3 font-medium">Señal NRF</th>
                                            <th className="pb-3 font-medium">Pin Arduino</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-[var(--text-primary)]">
                                        <tr className="border-b border-[var(--border-color)]/50">
                                            <td className="py-3">CE / CSN</td>
                                            <td className="py-3 font-mono text-xs">D7 / D8</td>
                                        </tr>
                                        <tr className="border-b border-[var(--border-color)]/50">
                                            <td className="py-3">MOSI / MISO</td>
                                            <td className="py-3 font-mono text-xs">D11 / D12</td>
                                        </tr>
                                        <tr className="border-b border-[var(--border-color)]/50">
                                            <td className="py-3">SCK</td>
                                            <td className="py-3 font-mono text-xs">D13</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 font-bold text-yellow-500">VCC</td>
                                            <td className="py-3 font-bold text-red-500 bg-red-500/10 px-2 rounded w-fit">3.3V (NO 5V)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Funcionamiento */}
                <section id="funcionamiento" className="max-w-6xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400">
                            <Activity className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-orbitron font-bold text-[var(--text-primary)]">7. Funcionamiento Paso a Paso</h2>
                    </div>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-[var(--border-color)] md:left-1/2 md:-translate-x-1/2" />

                        <div className="space-y-8">
                            {[
                                { step: 1, title: "Monitoreo", desc: "Los sensores (HC-SR04 y IR) escanean el entorno constantemente.", align: "left" },
                                { step: 2, title: "Lectura", desc: "El Arduino Nano lee las señales de todos los sensores.", align: "right" },
                                { step: 3, title: "Detección", desc: "Si un objeto entra en el umbral (<25cm), se activa la variable de alerta.", align: "left" },
                                { step: 4, title: "Transmisión", desc: "El estado de alerta se envía inalámbricamente por el NRF24L01.", align: "right" },
                                { step: 5, title: "Recepción", desc: "El Arduino Uno recibe la señal enviada por el detector.", align: "left" },
                                { step: 6, title: "Acción", desc: "Se activa el Buzzer mientras persista la alerta.", align: "right" },
                                { step: 7, title: "Restauración", desc: "Al desaparecer el objeto, el sistema vuelve al estado normal.", align: "left" },
                            ].map((item, i) => (
                                <div key={i} className={`relative flex items-center gap-8 ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Number Node */}
                                    <div className="relative z-10 w-14 h-14 rounded-full bg-[var(--card-bg)] border-2 border-[var(--brand-navy)] flex items-center justify-center font-bold text-[var(--brand-navy)] shadow-lg shrink-0 dark:text-blue-400 dark:border-blue-400">
                                        {item.step}
                                    </div>

                                    {/* Content Card */}
                                    <div className="flex-1 p-6 rounded-[var(--radius-main)] bg-[var(--card-bg)] border border-[var(--border-color)] shadow-md hover:border-[var(--brand-navy)]/30 transition-all">
                                        <h4 className="font-bold text-[var(--text-primary)] mb-1">{item.title}</h4>
                                        <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
                                    </div>
                                    <div className="hidden md:block flex-1" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 8. Metodología de desarrollo */}
                <section id="metodologia" className="max-w-6xl mx-auto space-y-12">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                            <ListChecks className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-orbitron font-bold text-[var(--text-primary)]">8. Metodología de Desarrollo</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Identificación",
                                desc: "Análisis de necesidades reales de accesibilidad.",
                                video: driveAssets.pro_fin_mp4_09
                            },
                            {
                                title: "Diseño de Arquitectura",
                                desc: "Definición de lógica de control y patrones sonoros.",
                                image: "/assets/img/proyecto_final/DisenoAraquitectura.jpeg"
                            },
                            {
                                title: "Modelado 3D",
                                desc: "Creación de carcasas y soportes para componentes.",
                                images: [
                                    { src: "/assets/img/proyecto_final/modelado_3d_01.jpeg", alt: "Render 3D 01", title: "Vista Frontal" },
                                    { src: "/assets/img/proyecto_final/modelado_3d_02.jpeg", alt: "Render 3D 02", title: "Vista Lateral" },
                                    { src: "/assets/img/proyecto_final/modelado_3d_03.jpeg", alt: "Render 3D 03", title: "Ensamblaje Superior" },
                                    { src: "/assets/img/proyecto_final/modelado_3d_04.jpeg", alt: "Render 3D 04", title: "Corte Técnico" }
                                ]
                            },
                            {
                                title: "Implementación",
                                desc: "Montaje electrónico de prototipo a placa final.",
                                images: [
                                    { src: "/assets/img/proyecto_final/implementacion01.jpeg", alt: "Implementación 01", title: "Ensamble de Componentes" },
                                    { src: "/assets/img/proyecto_final/implementacion02.jpeg", alt: "Implementación 02", title: "Prototipo en Caja" }
                                ]
                            },
                            {
                                title: "Programación",
                                desc: "Desarrollo en Arduino IDE y calibración de distancias.",
                                images: [
                                    { src: "/assets/img/proyecto_final/programacion01.jfif", alt: "Programación 01", title: "Entorno de Desarrollo Arduino" },
                                    { src: "/assets/img/proyecto_final/programacion02.jfif", alt: "Programación 02", title: "Lógica de Control y Sensores" }
                                ]
                            }
                        ].map((m, i) => (
                            <div
                                key={i}
                                className={`relative p-6 rounded-[var(--radius-main)] border border-[var(--border-color)] bg-[var(--card-bg)] shadow-xl hover:border-blue-500/30 transition-all group ${i === 4 ? 'md:col-span-2 md:w-2/3 md:mx-auto' : ''}`}
                            >
                                <h4 className="font-bold text-blue-400 mb-2 text-lg">
                                    <span className="mr-2 text-blue-500/50 font-black">{i + 1}.</span>
                                    {m.title}
                                </h4>
                                <p className="text-[var(--text-secondary)] text-sm mb-6">{m.desc}</p>

                                {m.video && (
                                    <div className="rounded-[var(--radius-main)] overflow-hidden border border-[var(--border-color)] shadow-md bg-black">
                                        <div className="w-full aspect-video relative">
                                            <iframe
                                                src={`https://drive.google.com/file/d/${m.video.match(/\/d\/(.+?)\//)[1]}/preview?mute=1`}
                                                className="absolute inset-0 w-full h-full border-0 transition-all"
                                                allow="fullscreen"
                                                allowFullScreen
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                )}

                                {m.image && (
                                    <div className="rounded-[var(--radius-main)] overflow-hidden border border-[var(--border-color)] shadow-md">
                                        <img
                                            src={m.image}
                                            alt={m.title}
                                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                )}

                                {m.images && (
                                    <div className="rounded-[var(--radius-main)] overflow-hidden border border-[var(--border-color)] shadow-md">
                                        <ImageCarousel
                                            images={m.images}
                                            className="w-full aspect-video"
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* 9. Impacto social y ODS */}
                <section id="impacto" className="max-w-6xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                            <Users className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-orbitron font-bold text-[var(--text-primary)]">9. Impacto Social y ODS</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { ods: "ODS 3", title: "Salud y Bienestar", desc: "Prevención de accidentes y caídas graves." },
                            { ods: "ODS 11", title: "Ciudades Sostenibles", desc: "Mejora de la accesibilidad urbana." },
                            { ods: "ODS 9", title: "Innovación", desc: "Tecnología aplicada con alto impacto social." }
                        ].map((o, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] text-center hover:bg-emerald-500/5 transition-colors shadow-lg">
                                <div className="text-xl font-black text-emerald-400 mb-2">{o.ods}</div>
                                <h4 className="font-bold text-sm mb-2 text-[var(--text-primary)]">{o.title}</h4>
                                <p className="text-[var(--text-secondary)] text-xs">{o.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 10. Innovación y valor académico */}
                <section id="innovacion" className="max-w-6xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                            <Lightbulb className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-orbitron font-bold text-[var(--text-primary)]">10. Innovación y Valor Académico</h2>
                    </div>
                    <div className="max-w-none grid grid-cols-1 md:grid-cols-2 gap-8 text-[var(--text-secondary)]">
                        <ul className="space-y-2">
                            <li>• Aplicación de tecnología embebida a problemas reales.</li>
                            <li>• Diseño centrado íntegramente en el usuario final.</li>
                        </ul>
                        <ul className="space-y-2">
                            <li>• Integración de hardware, software y fabricación digital.</li>
                            <li>• Proyecto escalable con enfoque interdisciplinario.</li>
                        </ul>
                    </div>
                </section>

                {/* 11. Futuras mejoras */}
                <section id="mejoras" className="max-w-6xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                            <ArrowUpCircle className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-orbitron font-bold text-[var(--text-primary)]">11. Futuras Mejoras</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "Alertas Hápticas",
                            "Modos Silenciosos",
                            "Optimización Energética",
                            "Miniaturización"
                        ].map((m, i) => (
                            <div key={i} className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-center text-xs font-bold text-[var(--brand-primary)] dark:text-blue-200 shadow-md">
                                {m}
                            </div>
                        ))}
                    </div>
                </section>

                {/* 12. Video Final */}
                <section id="video-final" className="max-w-6xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                            <Play className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-orbitron font-bold text-[var(--text-primary)]">12. Video de Presentación Final</h2>
                    </div>

                    <div className="relative rounded-[var(--radius-main)] overflow-hidden border border-[var(--border-color)] bg-[var(--card-bg)] shadow-2xl group">
                        <div className="w-full aspect-video relative">
                            <iframe
                                src="https://drive.google.com/file/d/1QWzEj7k2sgu9UTkz45DPandt6WmNoYO3/preview"
                                className="absolute inset-0 w-full h-full border-0 transition-all"
                                allow="fullscreen"
                                allowFullScreen
                                title="Video Final - Bastón Inteligente"
                                loading="lazy"
                            />
                        </div>
                        <div className="p-8 text-center bg-gradient-to-t from-[var(--card-bg)] to-transparent">
                            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Demostración Completa</h3>
                            <p className="text-[var(--text-secondary)] text-lg">Visualización detallada del prototipo en funcionamiento y validación de sistemas.</p>
                        </div>
                    </div>

                    <div className="relative rounded-[var(--radius-main)] overflow-hidden border border-[var(--border-color)] bg-[var(--card-bg)] shadow-2xl group mt-8">
                        <div className="w-full aspect-video relative">
                            <iframe
                                src={`https://drive.google.com/file/d/${driveAssets.pro_fin_video_explicacion.match(/\/d\/(.+?)\//)[1]}/preview`}
                                className="absolute inset-0 w-full h-full border-0 transition-all"
                                allow="fullscreen"
                                allowFullScreen
                                title="Explicación Detallada - Bastón Inteligente"
                                loading="lazy"
                            />
                        </div>
                        <div className="p-8 text-center bg-gradient-to-t from-[var(--card-bg)] to-transparent">
                            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Yachana Day 2026</h3>
                            <p className="text-[var(--text-secondary)] text-lg">Bastón Inteligente</p>
                        </div>
                    </div>
                </section>

                {/* 13. Conclusión */}
                {/* 13. Conclusión */}
                <section id="conclusion" className="conclusion-standard max-w-6xl mx-auto">
                    <h2>13. Conclusión</h2>
                    <p className="mb-4">
                        "El Bastón Inteligente con Alerta Sonora Inalámbrica presenta una solución eficiente, segura y ergonómica, al distribuir sus componentes a lo largo del bastón de manera estratégica.
                    </p>
                    <p>
                        La separación entre detección inferior y alerta superior mejora la experiencia del usuario, reduce interferencias y demuestra el potencial de la electrónica aplicada a dispositivos de asistencia inclusivos."
                    </p>
                </section>

                {/* 14. Recursos */}
                <section id="recursos" className="max-w-6xl mx-auto space-y-16">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                            <Play className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-orbitron font-bold text-[var(--text-primary)]">14. Recursos del Proyecto</h2>
                    </div>

                    {/* Videos Grid */}
                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { src: driveAssets.pro_fin_mp4_01, label: 'Video 01' },
                            { src: driveAssets.pro_fin_mp4_02, label: 'Video 02' },
                            { src: driveAssets.pro_fin_mp4_03, label: 'Video 03' },
                            { src: driveAssets.pro_fin_mp4_04, label: 'Video 04' },
                            { src: driveAssets.pro_fin_mp4_05, label: 'Video 05' },
                            { src: driveAssets.pro_fin_mp4_06, label: 'Video 06' },
                            { src: driveAssets.pro_fin_mp4_07, label: 'Video 07' },
                            { src: driveAssets.pro_fin_mp4_08, label: 'Video 08' },
                            { src: driveAssets.pro_fin_mp4_09, label: 'Video 09' }
                        ].map((vid, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.01 }}
                                className="w-full md:w-[calc(50%-1rem)] group relative rounded-[var(--radius-main)] overflow-hidden border border-[var(--border-color)] bg-[var(--card-bg)] shadow-2xl"
                            >
                                <div className="w-full aspect-video relative">
                                    <iframe
                                        src={`https://drive.google.com/file/d/${vid.src.match(/\/d\/(.+?)\//)[1]}/preview?mute=1`}
                                        className="absolute inset-0 w-full h-full border-0 transition-all"
                                        allow="fullscreen"
                                        allowFullScreen
                                        title={vid.label}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-4 text-center text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--brand-navy)] dark:group-hover:text-blue-400 transition-colors">
                                    {vid.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Files Download */}
                    <div className="space-y-8 pt-12">
                        <div className="text-center">
                            <h3 className="text-xl font-orbitron font-bold text-[var(--text-primary)]">Archivos de Diseño</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { label: 'Tapón (BLEND)', icon: <FileText />, path: getDriveDirectLink(driveAssets.tapon_blend), name: 'tapon.blend' },
                                { label: 'Tapón (STL)', icon: <Box />, path: getDriveDirectLink(driveAssets.tapon_stl), name: 'tapon.stl' },
                                { label: 'Mango Bastón (STL)', icon: <Box />, path: getDriveDirectLink(driveAssets.mango_baston_stl), name: 'mango_baston.stl' },
                                { label: 'Bastón Completo (STL)', icon: <Box />, path: getDriveDirectLink(driveAssets.baston_completo_stl), name: 'baston_completo.stl' }
                            ].map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.path}
                                    download={item.name}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center justify-between p-6 rounded-[var(--radius-main)] bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--brand-navy)]/30 transition-all group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-[var(--brand-navy)]/10 flex items-center justify-center text-[var(--brand-navy)] dark:text-blue-400">
                                            {item.icon}
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
                                    </div>
                                    <Download className="w-4 h-4 text-[var(--brand-navy)]/50 group-hover:text-[var(--brand-navy)] transition-all" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Technical Datasheets */}
                    <div className="space-y-8 pt-12">
                        <div className="text-center">
                            <h3 className="text-xl font-orbitron font-bold text-[var(--text-primary)]">Hojas Técnicas (Datasheets)</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { label: 'Arduino UNO Datasheet', file: 'ARDUINO UNO-datasheet.pdf' },
                                { label: 'Batería 18650 2500mAh', file: 'ASR00050_18650_2500mAh-3078640.pdf' },
                                { label: 'Sensor HC-SR04', file: 'HC-SR04.PDF' },
                                { label: 'Módulo MT3608', file: 'MT3608.PDF' },
                                { label: 'Módulo TP4056', file: 'TP4056.pdf' }
                            ].map((doc, i) => (
                                <div key={i} className="group relative flex flex-col p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-blue-500/30 transition-all shadow-md">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-colors">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <div className="flex gap-2">
                                            <a
                                                href={`/assets/docs/proyecto_final/${doc.file}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white transition-all text-[10px] font-bold uppercase"
                                                title="Previsualizar"
                                            >
                                                Ver
                                            </a>
                                            <a
                                                href={`/assets/docs/proyecto_final/${doc.file}`}
                                                download={doc.file}
                                                className="p-2 rounded-lg bg-[var(--text-primary)]/5 text-[var(--text-secondary)] hover:bg-[var(--text-primary)]/10 hover:text-[var(--text-primary)] transition-all"
                                                title="Descargar"
                                            >
                                                <Download className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                    <h4 className="text-xs font-bold text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors line-clamp-1">
                                        {doc.label}
                                    </h4>
                                    <p className="text-[10px] text-[var(--text-secondary)]/30 mt-1 uppercase tracking-tighter">Documento PDF</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



                {/* Final Navigation Button */}
                <div className="flex justify-center pt-20">
                    <button
                        onClick={() => navigate('/')}
                        className="btn-premium group"
                    >
                        <span className="btn-premium-text">
                            Volver al Inicio
                        </span>
                        <Home className="relative z-10 w-5 h-5 text-[var(--text-primary)] group-hover:text-white transition-all duration-700" />
                    </button>
                </div>
            </div>
        </PageLayout>
    );
};

export default ProyectoFinal;
