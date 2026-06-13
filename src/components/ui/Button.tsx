import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
};

const variants = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  outline: 'border-2 border-brand text-brand hover:bg-brand hover:text-white',
  white: 'bg-white text-brand hover:bg-brand-muted border border-slate-200',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
};

const motionProps = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring' as const, stiffness: 400, damping: 20 },
};

export function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-brand font-semibold transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link to={to} className={classes}>{children}</Link>
      </motion.div>
    );
  }

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <motion.a
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} className={classes} onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  );
}
