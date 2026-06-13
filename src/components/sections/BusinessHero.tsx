import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { LazyImage } from '../ui/LazyImage';
import { heroContent, stats } from '../../data/content';
import { images } from '../../data/images';

export function BusinessHero() {
  const headlineParts = heroContent.headline.split(heroContent.highlight);

  return (
    <section className="relative overflow-hidden bg-brand-dark text-white">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#7f1d1d_0%,#991b1b_45%,#450a0a_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-black/20 blur-3xl" />

      <div className="container-main relative">
        <div className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-24 xl:py-28">
          {/* Copy */}
          <div className="max-w-xl lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-red-100 sm:text-xs"
            >
              <Sparkles size={13} className="text-red-200" />
              {heroContent.kicker}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-[1.75rem] font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem] xl:text-5xl"
            >
              {headlineParts[0]}
              <span className="text-red-200">{heroContent.highlight}</span>
              {headlineParts[1]}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-5 max-w-lg text-sm leading-relaxed text-red-100/75 sm:text-base lg:text-[1.05rem]"
            >
              {heroContent.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <Button to={heroContent.primaryCta.to} size="lg" variant="white">
                {heroContent.primaryCta.label}
                <ArrowRight size={16} />
              </Button>
              <Button to={heroContent.secondaryCta.to} size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-brand">
                {heroContent.secondaryCta.label}
              </Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6"
            >
              {heroContent.trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-xs text-red-100/60 sm:text-sm">
                  <span className="h-1 w-1 shrink-0 bg-red-300" />
                  {point}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Visual panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative border border-white/10 bg-white/5 p-3 backdrop-blur-sm sm:p-4">
              <LazyImage
                src={images.hero}
                alt="VALUED youth program at Light Center"
                className="aspect-[4/3] w-full object-cover sm:aspect-[5/4]"
                priority
              />
              <div className="absolute inset-3 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent sm:inset-4" />

              {/* Floating stat — desktop */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 }}
                className="absolute right-6 top-6 hidden border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md sm:block"
              >
                <div className="text-2xl font-extrabold leading-none">{stats[2].value}{stats[2].suffix}</div>
                <div className="mt-1 text-[10px] font-medium uppercase tracking-wider text-red-100/70">{stats[2].label}</div>
              </motion.div>

              {/* Bottom info bar */}
              <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 border border-white/10 bg-brand-dark/90 px-3 py-2.5 sm:bottom-4 sm:left-4 sm:right-4 sm:px-4">
                <div className="flex items-center gap-1.5 text-[11px] text-red-100/80 sm:text-xs">
                  <MapPin size={13} className="shrink-0 text-red-300" />
                  Light Center, Kabuga — Kigali
                </div>
                <div className="text-[11px] font-semibold text-white sm:text-xs">
                  {stats[0].value}{stats[0].suffix} youth reached
                </div>
              </div>
            </div>

            {/* Mobile stat row */}
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:hidden">
              {stats.map((stat) => (
                <div key={stat.label} className="border border-white/10 bg-white/5 px-3 py-2.5 text-center">
                  <div className="text-lg font-extrabold leading-none">{stat.value}{stat.suffix}</div>
                  <div className="mt-1 text-[10px] text-red-100/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
