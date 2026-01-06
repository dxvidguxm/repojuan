import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const SideMenu = ({ sections }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex flex-row-reverse items-center">
            <AnimatePresence mode="wait">
                {isOpen ? (
                    <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        className="bg-[#0d0e13]/95 backdrop-blur-xl border-y border-l border-white/10 p-5 rounded-l-3xl shadow-2xl min-w-[150px]"
                    >
                        <div className="flex items-center justify-end gap-2 mb-6 group cursor-pointer" onClick={() => setIsOpen(false)}>
                            <h3 className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors">Navegación</h3>
                            <ChevronRight className="w-3 h-3 text-white/80 group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex flex-col gap-4">
                            {sections.map((dot) => (
                                <a
                                    key={dot.id}
                                    href={`#${dot.id}`}
                                    className="group flex items-center justify-end gap-3 transition-all"
                                >
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 group-hover:text-white transition-all duration-300 text-right">
                                        {dot.label}
                                    </span>
                                    <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-brand-primary group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-300" />
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
                        className="bg-black/50 backdrop-blur-md p-3 rounded-l-xl border-y border-l border-white/10 text-white/60 hover:text-white hover:bg-brand-primary/20 transition-all shadow-lg"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SideMenu;
