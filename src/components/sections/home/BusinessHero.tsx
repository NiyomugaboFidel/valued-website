import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { heroContent, heroStats } from '../../../data/content';
import { heroSlides } from '../../../data/images';
import { Button } from '../../ui/Button';
import { StatCounter } from '../../ui/StatCounter';
import { Reveal } from '../../motion/Reveal';

const SLIDE_INTERVAL_MS = 5000;

export function BusinessHero() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [loadedSlides, setLoadedSlides] = useState<Set<number>>(() => new Set([0, 1]));
  const { headline, highlight, description, primaryCta, secondaryCta } = heroContent;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % heroSlides.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const next = (slideIndex + 1) % heroSlides.length;
    setLoadedSlides((current) => {
      if (current.has(slideIndex) && current.has(next)) return current;
      const updated = new Set(current);
      updated.add(slideIndex);
      updated.add(next);
      return updated;
    });
  }, [slideIndex]);

  const visibleSlides = useMemo(
    () => heroSlides.map((src, index) => ({ src, index })).filter(({ index }) => loadedSlides.has(index)),
    [loadedSlides],
  );

  return (
    <section id="home-hero" className="relative min-h-[100svh] overflow-hidden bg-brand-dark text-white">
      <div className="absolute inset-0">
        {visibleSlides.map(({ src, index }) => (
          <motion.img
            key={src}
            src={src}
            alt=""
            aria-hidden
            decoding={index === 0 ? 'sync' : 'async'}
            fetchPriority={index === 0 ? 'high' : 'low'}
            animate={{
              opacity: index === slideIndex ? 1 : 0,
              scale: index === slideIndex ? 1 : 1.04,
            }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="absolute inset-0 h-full w-full rounded-none object-cover"
          />
        ))}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.35)_50%,rgba(69,10,10,0.55)_100%)]" />
      </div>

      <div className="relative flex min-h-[100svh] flex-col items-center justify-center px-4 pb-40 pt-28 text-center sm:px-6 sm:pb-44 sm:pt-32 lg:px-10 lg:pb-48 lg:pt-36">
        <Reveal>
          <h1 className="font-display mx-auto max-w-5xl text-[clamp(1.875rem,5vw,4.5rem)] font-semibold leading-[1.12]">
            {headline}
            <span className="mt-1 block text-[#F5A623]">{highlight}</span>
          </h1>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-red-100/90 sm:mt-6 sm:text-base md:text-lg">
            {description}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-7 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
            <Button to={primaryCta.to} variant="white" size="lg" className="w-full sm:w-auto">
              {primaryCta.label} <ArrowRight size={16} />
            </Button>
            <Button
              to={secondaryCta.to}
              variant="outline"
              size="lg"
              className="w-full border-white/50 text-white hover:bg-white/10 hover:text-white sm:w-auto"
            >
              {secondaryCta.label}
            </Button>
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-brand backdrop-blur-md">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-3 px-4 py-5 sm:gap-5 sm:px-6 sm:py-7 md:grid-cols-3 lg:grid-cols-5 lg:gap-4 lg:px-10 lg:py-8">
          {heroStats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              light
              size="lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
