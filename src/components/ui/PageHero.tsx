import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Button } from './Button';
import { LazyImage } from './LazyImage';

type PageHeroProps = {
  kicker?: string;
  title: string;
  description?: string;
  image?: string;
  cta?: { label: string; to?: string; href?: string };
  children?: ReactNode;
  compact?: boolean;
  centered?: boolean;
};

export function PageHero({
  kicker,
  title,
  description,
  image,
  cta,
  children,
  compact = false,
  centered = false,
}: PageHeroProps) {
  const padding = compact ? 'py-20 sm:py-24' : 'py-24 sm:py-28 lg:py-32';

  if (image) {
    return (
      <section className="relative overflow-hidden border-b border-brand-dark/20">
        <LazyImage
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/70" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(69,10,10,0.3),rgba(69,10,10,0.85))]" />

        <div className={`container-main relative text-center text-white ${padding}`}>
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
            className="mx-auto max-w-4xl font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-6xl"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-red-100/85 sm:text-base"
            >
              {description}
            </motion.p>
          )}
          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
              className="mt-7"
            >
              <Button to={cta.to} href={cta.href} variant="white" size="sm">
                {cta.label}
              </Button>
            </motion.div>
          )}
          {children}
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden border-b border-brand-dark/20 bg-brand-dark text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#8B0000_0%,#5c0000_100%)]" />

      <div className={`container-main relative ${compact ? 'py-14 sm:py-16' : 'py-16 sm:py-20 lg:py-24'} ${centered ? 'text-center' : ''}`}>
        <div className={centered ? 'mx-auto max-w-3xl' : 'max-w-3xl'}>
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
            className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className={`mt-4 max-w-2xl text-sm leading-relaxed text-red-100/75 sm:text-base ${centered ? 'mx-auto' : ''}`}
            >
              {description}
            </motion.p>
          )}
          {cta && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-7">
              <Button to={cta.to} href={cta.href} variant="white" size="sm">{cta.label}</Button>
            </motion.div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
