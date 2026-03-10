import React from "react";
import {motion} from "framer-motion";


interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({children, className = ""}) => (
    <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: -20}}
        transition={{duration: 0.4}}
        className={`w-full max-w-5xl mx-auto px-6 py-12 ${className}`}
    >
        {children}
    </motion.div>
);

export default SectionWrapper;
