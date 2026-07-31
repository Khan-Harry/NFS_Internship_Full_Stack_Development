import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  hoverEffect = true,
  dark = false,
  glow = false,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -6, transition: { duration: 0.2 } } : {}}
      className={`
        rounded-2xl transition-all duration-300 p-6 md:p-8 relative overflow-hidden
        ${dark
          ? 'glass-card-dark text-white shadow-2xl'
          : 'bg-white border border-slate-100/80 shadow-md shadow-slate-200/50 hover:shadow-card-hover'
        }
        ${glow ? 'before:absolute before:-inset-px before:bg-gradient-to-r before:from-indigo-500 before:to-cyan-500 before:rounded-2xl before:opacity-30 before:-z-10' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
