import React from 'react';
import { motion } from 'framer-motion';

const RevealText = ({ text, delay = 0, className = "" }) => {
    // Split text into words
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }} // Wrap for long text
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }} // Trigger when 10% in view
            className={className}
        >
            {words.map((word, index) => (
                <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index}>
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default RevealText;
