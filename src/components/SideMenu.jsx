import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SideMenu = ({ sections, prevLink, nextLink }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex flex-row-reverse items-center">
            <AnimatePresence mode="wait">
                {isOpen ? (
                    <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={isOpen ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 }}
                        exit={{ x: "100%", opacity: 0 }}
                        className="bg-[var(--card-bg)]/95 backdrop-blur-xl border-y border-l border-[var(--border-color)] p-5 rounded-l-3xl shadow-2xl min-w-[150px] transition-colors duration-300"
                    >
                        <div className="flex flex-col gap-3 mb-6 border-b border-[var(--border-color)] pb-4">
                            <div className="flex items-center justify-end gap-2 group cursor-pointer" onClick={() => setIsOpen(false)}>
                                <h3 className="text-[var(--text-secondary)] text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-[var(--text-primary)] transition-colors">Navegación</h3>
                                <ChevronRight className="w-3 h-3 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors" />
                            </div>
                            <div className="flex justify-end gap-2">
                                {prevLink && (
                                    <Link
                                        to={prevLink}
                                        className="w-8 h-8 rounded-lg bg-[var(--bg-primary)]/50 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-blue-500/20 transition-all group/prev"
                                        title="Práctica Anterior"
                                    >
                                        <ArrowLeft className="w-4 h-4 group-hover/prev:-translate-x-0.5 transition-transform" />
                                    </Link>
                                )}
                                {nextLink && (
                                    <Link
                                        to={nextLink}
                                        className="w-8 h-8 rounded-lg bg-[var(--bg-primary)]/50 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-blue-500/20 transition-all group/next"
                                        title="Siguiente Práctica"
                                    >
                                        <ArrowRight className="w-4 h-4 group-hover/next:translate-x-0.5 transition-transform" />
                                    </Link>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            {sections.map((dot) => (
                                <a
                                    key={dot.id}
                                    href={`#${dot.id}`}
                                    className="group flex items-center justify-end gap-3 transition-all"
                                >
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-all duration-300 text-right">
                                        {dot.label}
                                    </span>
                                    <div className="w-2 h-2 rounded-full bg-[var(--text-secondary)]/20 group-hover:bg-brand-primary group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-300" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <motion.button
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 50, opacity: 0 }}
                        onClick={() => setIsOpen(true)}
                        className="bg-[var(--card-bg)]/80 backdrop-blur-md p-3 rounded-l-xl border-y border-l border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-primary)] transition-all shadow-lg group"
                    >
                        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SideMenu;
