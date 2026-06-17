import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Reveal } from '../motion/Reveal';
import { ctaBand } from '../../data/content';

export function CtaBand() {
  return (
    <section className="bg-brand-section py-14 sm:py-16">
      <Reveal className="brand-section-inner container-main">
        <motion.div
          whileHover={{ scale: 1.005 }}
          className="flex flex-col items-start justify-between gap-6 border border-white/15 bg-black/15 px-6 py-8 backdrop-blur-sm sm:flex-row sm:items-center sm:px-10 sm:py-10"
        >
          <div className="max-w-xl">
            <h2 className="text-xl font-bold text-white sm:text-2xl">{ctaBand.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-red-100/75 sm:text-base">{ctaBand.description}</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button to={ctaBand.primary.to} variant="white" size="lg" className="w-full sm:w-auto">
              {ctaBand.primary.label} <ArrowRight size={16} />
            </Button>
            <Button to={ctaBand.secondary.to} variant="outline" size="lg" className="w-full border-white/30 text-white hover:bg-white hover:text-brand sm:w-auto">
              {ctaBand.secondary.label}
            </Button>
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}
