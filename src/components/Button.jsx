import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  icon: Icon = null,
  iconPosition = 'right',
  type = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer select-none rounded-xl';

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5 font-bold',
  };

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-hover focus:ring-primary shadow-lg shadow-indigo-500/25 border border-indigo-500/30',
    secondary: 'bg-secondary text-white hover:bg-secondary-hover focus:ring-secondary shadow-lg shadow-purple-500/20 border border-purple-500/30',
    accent: 'bg-accent text-white hover:bg-accent-hover focus:ring-accent shadow-lg shadow-cyan-500/25 border border-cyan-500/30',
    outline: 'border-2 border-slate-200 text-slate-800 hover:border-primary hover:text-primary hover:bg-indigo-50/50 bg-white focus:ring-primary',
    ghost: 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/60 focus:ring-indigo-300',
    glow: 'bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-glow hover:shadow-accent-glow border border-white/20',
  };

  const combinedClass = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="text-lg flex-shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="text-lg flex-shrink-0" />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={combinedClass}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={combinedClass}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
