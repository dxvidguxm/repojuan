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
    Home
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
        { id: 'objetivos', label: '3. Objetivos' },
        { id: 'sistema', label: '4. Sistema' },
        { id: 'sensores', label: '5. Sensores' },
        { id: 'alerta', label: '6. Alerta Sonora' },
        { id: 'electronica', label: '7. Electrónica' },
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
                                text="Un dispositivo de asistencia tecnológica diseñado para mejorar la autonomía y seguridad de personas con discapacidad visual."
                                className="text-xl md:text-2xl font-light leading-relaxed text-[var(--text-primary)]/80"
                            />
                            <div className="max-w-none text-[var(--text-secondary)] space-y-4">
                                <p>
                                    El Bastón Inteligente con Alerta Sonora es una solución innovadora que utiliza la electrónica para detectar obstáculos en el entorno y emitir alertas auditivas en tiempo real.
                                </p>
                                <p>
                                    Utilizando la plataforma <strong>Arduino UNO</strong>, el sistema integra sensores ultrasónicos y de agua junto con un buzzer piezoeléctrico, proporcionando una respuesta inmediata y confiable ante posibles riesgos.
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[var(--card-bg)] p-8 rounded-[var(--radius-main)] border border-[var(--border-color)] shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--brand-red)] opacity-50" />
                            <h3 className="text-xl font-bold mb-4 text-[var(--brand-navy)] dark:text-blue-400">Riesgos Constantes</h3>
                            <ul className="space-y-3 text-[var(--text-secondary)]">
                                <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-[var(--brand-red)] shrink-0" /> Desniveles y escaleras descendentes.</li>
                                <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-[var(--brand-red)] shrink-0" /> Superficies mojadas o charcos no detectables físicamente.</li>
                                <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-[var(--brand-red)] shrink-0" /> Huecos en la vía pública.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                Estas limitaciones derivan en accidentes y caídas que afectan drásticamente la calidad de vida. El proyecto identifica la necesidad de ampliar la percepción del entorno sin interferir con el sentido del oído (más allá de las alertas necesarias) o el tacto.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. Objetivos del proyecto */}
                <section id="objetivos" className="max-w-6xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-orbitron font-bold text-[var(--text-primary)]">3. Objetivos del Proyecto</h2>
                    </div>
                    <div className="space-y-12">
                        <div className="bg-gradient-to-r from-[var(--brand-navy)]/10 to-transparent p-8 rounded-[var(--radius-main)] border border-[var(--border-color)]">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--brand-navy)] dark:text-blue-400 mb-2">Objetivo General</h3>
                            <p className="text-xl font-light text-[var(--text-primary)] italic">
                                "Diseñar e implementar un bastón inteligente con alerta sonora, capaz de detectar obstáculos y comunicar el nivel de riesgo mediante sonidos, utilizando Arduino UNO."
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Implementar sensores ultrasónicos para detección.",
                                "Procesar información mediante microcontrolador.",
                                "Emitir alertas auditivas proporcionales a la distancia.",
                                "Diseñar estructura física mediante impresión 3D.",
                                "Validar el funcionamiento mediante pruebas."
                            ].map((obj, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-[var(--radius-main)] bg-[var(--card-bg)] border border-[var(--border-color)]">
                                    <div className="text-[var(--brand-navy)] dark:text-blue-400 font-black">0{i + 1}</div>
                                    <p className="text-sm text-[var(--text-secondary)]">{obj}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Descripción general del sistema */}
                <section id="sistema" className="max-w-6xl mx-auto space-y-8">
                    <div className="mb-6">
                        <h2 className="text-3xl font-orbitron font-bold text-[var(--text-primary)]">4. Descripción General del Sistema</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4">
                            <p className="text-[var(--text-secondary)]">El dispositivo integra múltiples componentes para una detección de 360° en la trayectoria frontal del usuario:</p>
                            <ul className="space-y-2">
                                {[
                                    { item: "Controlador", desc: "Arduino UNO como cerebro central." },
                                    { item: "Sensores", desc: "Ultrasónicos y de agua estratégicos." },
                                    { item: "Salida", desc: "Buzzer para avisos sonoros dinámicos." },
                                    { item: "Estructura", desc: "Diseño mecánico fabricado en 3D." }
                                ].map((sys, i) => (
                                    <li key={i} className="flex gap-3 text-sm">
                                        <span className="font-bold text-blue-400 text-nowrap">{sys.item}:</span>
                                        <span className="text-[var(--text-secondary)]">{sys.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative group p-4 rounded-[var(--radius-main)] bg-[var(--brand-navy)]/5 border border-[var(--border-color)] flex items-center justify-center overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[var(--brand-navy)]/10 blur-[80px] group-hover:bg-[var(--brand-navy)]/20 transition-colors -z-10" />
                            <img
                                src="/assets/img/proyecto_final/desceripcion_sistema.jpeg"
                                alt="Descripción del Sistema"
                                className="w-full max-w-sm mx-auto h-auto rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* 5. Sensores y principio de funcionamiento */}
                <section id="sensores" className="max-w-6xl mx-auto space-y-12">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                            <Cpu className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-orbitron font-bold text-[var(--text-primary)]">5. Sensores y Funcionamiento</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-[var(--brand-navy)] dark:text-blue-400">Ultrasónicos (HC-SR04)</h3>
                            <div className="bg-[var(--card-bg)] p-6 rounded-[var(--radius-main)] border border-[var(--border-color)] space-y-4 shadow-xl">
                                <img
                                    src="/assets/img/proyecto_final/HC-SRO4.jfif"
                                    alt="Sensor HC-SR04"
                                    className="w-full h-48 object-cover rounded-xl border border-[var(--border-color)]"
                                />
                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                    Emiten pulsos de alta frecuencia (40 kHz). Al reflejarse en un objeto, el eco regresa y el sistema calcula la distancia basándose en el tiempo de vuelo del pulso. El sensor inferior se enfoca específicamente en la detección de huecos.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-[var(--brand-navy)] dark:text-blue-400">Sensor de Agua</h3>
                            <div className="bg-[var(--card-bg)] p-6 rounded-[var(--radius-main)] border border-[var(--border-color)] space-y-4 shadow-xl">
                                <img
                                    src="/assets/img/proyecto_final/SENSOR_AGUA.jfif"
                                    alt="Sensor de Agua"
                                    className="w-full h-48 object-cover rounded-xl border border-[var(--border-color)]"
                                />
                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                    Compuesto por pistas conductoras. Al entrar en contacto con agua, se cierra el circuito permitiendo el paso de corriente, lo que Arduino interpreta como presencia de charcos, alertando al usuario antes de dar el paso.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Sistema de alerta sonora (Buzzer) */}
                <section id="alerta" className="max-w-6xl mx-auto space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-400">
                            <Activity className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-orbitron font-bold text-[var(--text-primary)]">6. Sistema de Alerta Sonora</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                        <div className="space-y-4">
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                El sistema de aviso utiliza un buzzer piezoeléctrico, encargado de transmitir información al usuario mediante sonido. El dispositivo convierte señales eléctricas del Arduino en ondas sonoras perceptibles.
                            </p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="rounded-[var(--radius-main)] overflow-hidden border border-[var(--border-color)] shadow-2xl bg-[var(--card-bg)]"
                        >
                            <img
                                src="/assets/img/proyecto_final/arduino-buzzer-module.jpg"
                                alt="Módulo Buzzer Arduino"
                                className="w-full h-auto"
                            />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Obstáculo Lejano", alert: "Sonido lento", accent: "from-emerald-500 to-emerald-400" },
                            { title: "Obstáculo Cercano", alert: "Sonido intermitente", accent: "from-amber-500 to-amber-400" },
                            { title: "Peligro Inmediato", alert: "Sonido continuo", accent: "from-rose-500 to-rose-400" }
                        ].map((alert, i) => (
                            <div key={i} className="relative group p-8 rounded-[var(--radius-main)] bg-[var(--card-bg)] border border-[var(--border-color)] text-center space-y-4 hover:shadow-xl transition-all overflow-hidden">
                                {/* Subtle Luxury Accent Bar */}
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${alert.accent} opacity-50`} />

                                <h4 className="font-orbitron font-bold uppercase text-[10px] tracking-[0.2em] text-[var(--text-secondary)]">{alert.title}</h4>
                                <div className="flex justify-center">
                                    <div className="p-4 rounded-xl bg-gradient-to-br bg-opacity-10 flex items-center justify-center">
                                        <Play className="w-5 h-5" />
                                    </div>
                                </div>
                                <p className="text-sm font-black text-[var(--text-primary)] tracking-tight">{alert.alert}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 7. Electrónica y conexiones */}
                <section id="electronica" className="max-w-6xl mx-auto space-y-8">
                    <div className="mb-6">
                        <h2 className="text-3xl font-orbitron font-bold text-[var(--text-primary)]">7. Electrónica y Conexiones</h2>
                    </div>
                    <div className="bg-[var(--card-bg)] p-8 rounded-[var(--radius-main)] border border-[var(--border-color)]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-[var(--brand-navy)] dark:text-blue-400">Configuración Central</h3>
                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">Arduino UNO gestiona las señales de disparo a los sensores y procesa la lógica de salida PWM para el buzzer piezoeléctrico.</p>
                                <ul className="space-y-2 text-xs font-mono">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-navy)]" />
                                        VCC/GND: Alimentación central.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-navy)]" />
                                        Trigger/Echo: Pines ultrasónicos.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-navy)]" />
                                        Analog In: Lectura sensor agua.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-navy)]" />
                                        PWM Out: Control de frecuencia buzzer.
                                    </li>
                                </ul>
                            </div>
                            <div className="flex items-center justify-center">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="relative group p-2 rounded-xl bg-[var(--brand-navy)]/5 border border-[var(--border-color)]"
                                >
                                    <img
                                        src="/assets/img/proyecto_final/arduino.jfif"
                                        alt="Arduino Central"
                                        className="w-full h-auto rounded-xl shadow-2xl"
                                    />
                                </motion.div>
                            </div>
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
                                src={`https://drive.google.com/file/d/${driveAssets.pro_fin_video_final.match(/\/d\/(.+?)\//)[1]}/preview`}
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
                            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Explicación Detallada</h3>
                            <p className="text-[var(--text-secondary)] text-lg">Presentación profunda de todos los puntos y componentes del Proyecto Final.</p>
                        </div>
                    </div>
                </section>

                {/* 13. Conclusión */}
                {/* 13. Conclusión */}
                <section id="conclusion" className="conclusion-standard max-w-6xl mx-auto">
                    <h2>13. Conclusión</h2>
                    <p>
                        "El Bastón Inteligente Alerta Sonora representa una solución tecnológica viable y socialmente relevante, demostrando cómo el uso de Arduino UNO y herramientas de fabricación digital puede contribuir al desarrollo de dispositivos de asistencia accesibles e inclusivos."
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
