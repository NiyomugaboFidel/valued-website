import { useEffect, useState } from 'react';
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
  const { headline, highlight, primaryCta, secondaryCta } = heroContent;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % heroSlides.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home-hero" className="relative min-h-screen overflow-hidden bg-brand-dark text-white">
      {/* Rotating background images */}
      <div className="absolute inset-0">
        {heroSlides.map((src, index) => (
          <motion.img
            key={src}
            src={src}
            alt=""
            aria-hidden
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

      {/* Center headline   stays fixed while images rotate */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 pb-44 pt-32 text-center sm:px-6 sm:pb-48 sm:pt-36 lg:px-10">
        <Reveal>
          <h1 className="font-display mx-auto max-w-5xl text-4xl font-semibold leading-[1.12] sm:text-5xl md:text-6xl lg:text-7xl">
            {headline}
            <span className="mt-1 block text-red-200">{highlight}</span>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to={primaryCta.to} variant="white" size="lg">
              {primaryCta.label} <ArrowRight size={16} />
            </Button>
            <Button
              to={secondaryCta.to}
              variant="outline"
              size="lg"
              className="border-white/50 text-white hover:bg-brand/10 hover:text-brand"
            >
              {secondaryCta.label}
            </Button>
          </div>
        </Reveal>

        {/* Slide indicators */}
      
      </div>

      {/* Stats bar */}
      <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-brand backdrop-blur-md">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 sm:gap-6 sm:px-6 sm:py-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-4 lg:px-10 lg:py-10">
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
