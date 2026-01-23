import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, BookOpen, Download, ListChecks, Play, Image as ImageIcon, CheckCircle2, FileText, Box } from 'lucide-react';
import PageLayout from '../../components/PageLayout';
import { driveAssets, getDriveDirectLink } from '../../data/assets';

const ExamenInterciclo = () => {
    return (
        <PageLayout
            title="Examen Interciclo"
            subtitle="Sistema de Moldes para Velas: diseño y fabricación de moldes para velas mediante escaneo 3D y TPU."
            badge="Proyecto de Evaluación"
            sideMenuSections={[
                { id: 'intro', label: 'Inicio' },
                { id: 'workflow', label: 'Proceso' },
                { id: 'multimedia', label: 'Multimedia' },
                { id: 'downloads', label: 'Recursos' }
            ]}
            prevLink="/practice/practicacortelaser"
            nextLink="/practice/proyectofinal"
        >
            <div className="space-y-20">
                {/* Introduction */}
                <section id="intro" className="space-y-12">
                    {/* Contexto Global & Desafío */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto space-y-6"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                                <BookOpen className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-orbitron font-bold uppercase tracking-tight">Contexto Global</h2>
                        </div>
                        <p className="text-[var(--text-secondary)] text-base leading-relaxed text-justify">
                            Desarrollar la habilidad para integrar herramientas CAD avanzadas (Blender, Fusion 360 y Meshmixer) en la creación de moldes funcionales a partir de geometrías orgánicas obtenidas por escaneado láser.
                        </p>
                        <div className="p-6 rounded-2xl bg-white/5 border border-[var(--border-color)] border-l-4 border-l-blue-500 shadow-xl backdrop-blur-sm">
                            <h4 className="text-[var(--text-primary)] font-bold mb-2 text-sm uppercase tracking-wider">Desafío Técnico: TPU Flex</h4>
                            <p className="text-[var(--text-secondary)] text-xs font-medium leading-relaxed">El uso de poliuretano termoplástico (TPU) requiere una calibración precisa de la retracción y velocidad para evitar el atascamiento del extrusor debido a su elasticidad.</p>
                        </div>
                    </motion.div>

                    {/* Memoria Técnica P.1 - P.6 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl font-orbitron font-bold text-[var(--text-primary)] text-center mb-8">Memoria Técnica del Proyecto</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[var(--text-secondary)] font-light text-sm leading-relaxed">
                            <div className="p-6 rounded-2xl bg-white/5 border border-[var(--border-color)] space-y-4">
                                <h3 className="text-xl font-bold text-blue-400">P.1 Identificación de necesidades</h3>
                                <p>Desarrollar un molde robusto, reutilizable y capaz de reproducir diseños personalizados para velas artesanales. Debe ser resistente al calor moderado, flexible para el desmolde, escalable y una alternativa accesible a los moldes tradicionales costosos.</p>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/5 border border-[var(--border-color)] space-y-4">
                                <h3 className="text-xl font-bold text-blue-400">P.2 Alcance y Variables</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Dimensiones y capacidad de la impresora.</li>
                                    <li>Geometría para evitar atrapamientos de aire.</li>
                                    <li>Selección de TPU por flexibilidad.</li>
                                    <li>Densidad de relleno y temperatura.</li>
                                    <li>Tolerancias de ensamblaje.</li>
                                </ul>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/5 border border-[var(--border-color)] space-y-4">
                                <h3 className="text-xl font-bold text-blue-400">P.3 Boceto Preliminar</h3>
                                <p>Desarrollo en Blender a partir del escaneo: corrección de malla, suavizado, división estratégica del molde y diseño de canales de vertido y espacio para la mecha.</p>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/5 border border-[var(--border-color)] space-y-4">
                                <h3 className="text-xl font-bold text-blue-400">P.4 Justificación del Diseño</h3>
                                <p>Molde de dos partes para facilitar desmolde. Paredes internas suavizadas. TPU elegido por resistencia térmica y flexibilidad. Diseño simple y eficiente.</p>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/5 border border-[var(--border-color)] space-y-4">
                                <h3 className="text-xl font-bold text-blue-400">P.5 Mediciones y Tolerancias</h3>
                                <p>Tolerancias estándar de ±0.2 mm en superficies de contacto. Ajustes en la unión central para evitar filtraciones de cera. Consideración de contracción térmica del TPU.</p>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/5 border border-[var(--border-color)] space-y-4">
                                <h3 className="text-xl font-bold text-blue-400">P.6 Producto Final</h3>
                                <p>Molde funcional en TPU, ergonómico y reutilizable. Pruebas de vaciado exitosas obteniendo velas uniformes. Adecuado para procesos artesanales de baja escala.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Resultados */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto rounded-[2.5rem] p-8 bg-[var(--card-bg)] border border-[var(--border-color)] space-y-6"
                    >
                        <h3 className="text-lg font-orbitron font-bold text-blue-400 uppercase tracking-widest text-center">Resultados Esperados</h3>
                        <div className="space-y-4">
                            {[
                                { so: 'SO2', desc: 'Soluciones complejas de Ingeniería Industrial considerando salud y seguridad.' },
                                { so: 'SO4', desc: 'Reconocimiento de responsabilidades éticas y profesionales en la industria.' },
                                { so: 'SO6', desc: 'Desarrollo y ejecución de protocolos experimentales con criterio técnico.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="text-xs font-black text-blue-500/60 group-hover:text-blue-500 transition-colors pt-1">{item.so}</div>
                                    <p className="text-[var(--text-secondary)] text-xs group-hover:text-[var(--text-primary)] transition-colors uppercase tracking-tight">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Technical Process - Horizontal Scroll/Steps */}
                <section id="workflow">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                            <ListChecks className="w-4 h-4" />
                        </div>
                        <h2 className="text-xl font-orbitron font-bold uppercase tracking-tight">Workflow de Manufactura</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { title: 'Digitalización', desc: 'Escaneo inicial y obtención de nube de puntos OBJ.' },
                            { title: 'Refinamiento', desc: 'Suavizado de superficies y cierre de mallas en Meshmixer.' },
                            { title: 'Ingeniería', desc: 'Diseño de carcasas y guías de ensamble en Fusion 360.' },
                            { title: 'Producción', desc: 'Fabricación en TPU con parámetros de baja velocidad.' }
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-blue-500/30 transition-all group"
                            >
                                <span className="text-[10px] font-bold text-blue-400 group-hover:text-blue-300 mb-3 block">Fase 0{i + 1}</span>
                                <h4 className="text-sm font-bold mb-2 uppercase tracking-wide text-[var(--text-primary)]">{step.title}</h4>
                                <p className="text-[var(--text-secondary)] text-xs font-light leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Section: Materiales y Métodos (Restored) */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-orbitron font-bold text-[var(--text-primary)] mb-6 uppercase tracking-tight">Materiales y Procedimiento</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Materiales */}
                        <div className="p-6 rounded-2xl bg-white/5 border border-[var(--border-color)]">
                            <h3 className="text-xl font-bold text-blue-400 mb-4">Equipos y Materiales</h3>
                            <ul className="list-disc list-inside text-[var(--text-primary)]/70 space-y-2 text-sm">
                                <li>Archivo STL del molde</li>
                                <li>Filamento TPU</li>
                                <li>Impresora 3D de Filamento (FLVSUN)</li>
                                <li>Software: Blender, Fusion 360, Meshmixer, Cura</li>
                            </ul>
                        </div>
                        {/* Procedimiento */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-blue-400">Procedimiento Experimental</h3>
                            <ol className="list-decimal list-inside text-[var(--text-secondary)] font-light text-sm space-y-2">
                                <li>Abrir archivo de escáner en Blender y realizar el molde.</li>
                                <li>Abrir en Ultimaker Cura.</li>
                                <li>Configurar parámetros (TPU, temp, velocidad, soportes).</li>
                                <li>Simular impresión (tiempo, peso, consumo).</li>
                                <li>Guardar G-code.</li>
                                <li>Cargar G-code en impresora FLVSUN.</li>
                                <li>Iniciar impresión 3D.</li>
                                <li>Supervisar proceso.</li>
                                <li>Retirar molde de la cama.</li>
                                <li>Quitar soportes y curar.</li>
                                <li>Ensamblar molde.</li>
                                <li>Realizar pruebas de vaciado de velas.</li>
                            </ol>
                        </div>
                    </div>
                </section>

                {/* Media Block: Central Video Section */}
                <section id="multimedia" className="space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-orbitron font-bold uppercase tracking-tight">Registro Multimedia</h2>
                        <div className="flex gap-4">
                            <div className="w-12 h-1 rounded-full bg-blue-500" />
                            <div className="w-4 h-1 rounded-full bg-white/10" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-12">
                        {/* Featured Video: Proceso de Impresión (Full Width) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="rounded-3xl overflow-hidden border border-[var(--border-color)] bg-[var(--card-bg)] shadow-2xl max-w-5xl mx-auto w-full group"
                        >
                            <div className="w-full aspect-video relative">
                                <iframe
                                    src={`https://drive.google.com/file/d/${driveAssets.exi_new_mp4.match(/\/d\/(.+?)\//)[1]}/preview?mute=1`}
                                    className="absolute inset-0 w-full h-full border-0"
                                    allow="autoplay"
                                    title="Proceso de Impresión"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-6 text-center border-t border-[var(--border-color)]">
                                <h3 className="text-sm font-orbitron font-bold uppercase tracking-widest text-blue-400">Proceso de Elaboración / Impresión</h3>
                            </div>
                        </motion.div>

                        {/* Other Videos Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[var(--text-secondary)]">
                            {[
                                { src: driveAssets.exi4_mp4, label: 'Proceso de Vaciado' },
                                { src: driveAssets.exi13_mp4, label: 'Ensamblaje del Molde' },
                                { src: driveAssets.videoexm_mp4, label: 'Resultado Final' }
                            ].map((vid, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    className="rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--card-bg)] shadow-lg"
                                >
                                    <div className="w-full aspect-[4/5] relative">
                                        <iframe
                                            src={`https://drive.google.com/file/d/${vid.src.match(/\/d\/(.+?)\//)[1]}/preview?mute=1`}
                                            className="absolute inset-0 w-full h-full border-0"
                                            allow="autoplay"
                                            title={vid.label}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-4 text-center text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)]">{vid.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Gallery Focus */}
                <section className="columns-2 md:columns-4 gap-3 space-y-3">
                    {[1, 2, 3, 5, 6, 7, 8, 10, 11, 12].map((num) => (
                        <motion.div
                            key={num}
                            whileHover={{ scale: 1.02 }}
                            className="rounded-xl overflow-hidden border border-[var(--border-color)]"
                        >
                            <img src={`/assets/img/EXI${num}.jpeg`} alt={`Paso ${num}`} className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
                        </motion.div>
                    ))}
                </section>

                {/* Downloads & Resources */}
                <section id="downloads" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1 p-8 rounded-[2rem] bg-gradient-to-br from-blue-600 to-indigo-800 shadow-2xl flex flex-col justify-between group overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                        <div>
                            <h3 className="text-xl font-orbitron font-bold mb-4 italic text-white">Conclusión y Recomendaciones</h3>
                            <div className="space-y-4 text-indigo-100/90 text-sm font-light leading-relaxed italic">
                                <p>"La realización de este proyecto permitió comprender de manera integral todo el proceso involucrado en el diseño y fabricación mediante impresión 3D. Se evidenció la importancia de los parámetros de impresión y cómo cada configuración influye en el comportamiento del material y en la calidad final del producto."</p>
                                <p>"La fabricación del molde demostró que el uso de TPU en aplicaciones funcionales es viable. El flujo de trabajo reforzó competencias en modelado 3D y solución de problemas."</p>
                                <h4 className="font-bold text-white not-italic mt-4">Recomendaciones:</h4>
                                <ul className="list-disc list-inside not-italic space-y-1">
                                    <li>Realizar impresiones de prueba.</li>
                                    <li>Reducir velocidad para material flexible.</li>
                                    <li>Usar desmoldantes.</li>
                                    <li>Considerar TPU de mayor dureza para estabilidad.</li>
                                    <li>Documentar configuraciones.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 text-[var(--text-secondary)]">
                        {[
                            { label: 'Cara Frontal (STL)', file: '/assets/models/cara1.stl', name: 'cara1.stl', icon: <Box /> },
                            { label: 'Cara Posterior (STL)', file: '/assets/models/cara2.stl', name: 'cara2.stl', icon: <Box /> },
                            { label: 'Archivo Fuente (BLEND)', file: getDriveDirectLink(driveAssets.molde_blend), name: 'molde.blend', icon: <FileText /> },
                            { label: 'Informe Técnico (PDF)', file: '/assets/docs/Informe Examen Interciclo.pdf', name: 'Informe_Examen_Interciclo.pdf', icon: <Download /> }
                        ].map((item, i) => (
                            <motion.a
                                key={i}
                                href={item.file}
                                download={item.name}
                                whileHover={{ scale: 1.02, y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex justify-between items-center p-6 rounded-[2rem] bg-white/5 border border-[var(--border-color)] hover:bg-white/10 hover:border-blue-500/30 transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-[var(--text-primary)] transition-all duration-500 animate-float">
                                        {React.cloneElement(item.icon, { className: "w-4 h-4" })}
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">{item.label}</span>
                                </div>
                                <Download className="w-4 h-4 text-[var(--text-primary)]/10 group-hover:text-blue-400 group-hover:translate-y-1 transition-all" />
                            </motion.a>
                        ))}
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default ExamenInterciclo;
