import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: "100vw", scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: "-100vw", scale: 0.9, filter: 'blur(10px)' }}
            transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
                mass: 1
            }}
            className="w-full origin-center"
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
