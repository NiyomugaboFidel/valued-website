import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Button } from './Button';

type PageHeroProps = {
  kicker?: string;
  title: string;
  description?: string;
  cta?: { label: string; to?: string; href?: string };
  children?: ReactNode;
  compact?: boolean;
};

export function PageHero({ kicker, title, description, cta, children, compact = false }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-brand-dark/20 bg-brand-dark text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#7f1d1d_0%,#991b1b_60%,#450a0a_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className={`container-main relative ${compact ? 'py-14 sm:py-16' : 'py-16 sm:py-20 lg:py-24'}`}>
        <div className="max-w-3xl">
          {kicker && (
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-widest text-red-200 sm:text-xs"
            >
              {kicker}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-4xl"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="mt-4 max-w-2xl text-sm leading-relaxed text-red-100/75 sm:text-base"
            >
              {description}
            </motion.p>
          )}
          {cta && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-7">
              <Button to={cta.to} href={cta.href} variant="white" size="lg">{cta.label}</Button>
            </motion.div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
