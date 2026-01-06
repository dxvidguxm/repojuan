import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)', y: 50, scale: 0.9 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0, scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
