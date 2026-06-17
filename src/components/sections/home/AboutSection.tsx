import { motion } from 'framer-motion';
import { aboutGalleryImages, aboutSummary } from '../../../data/content';
import { Button } from '../../ui/Button';
import { LazyImage } from '../../ui/LazyImage';
import { Reveal } from '../../motion/Reveal';

export function AboutSection() {
  return (
    <section className="section-pad overflow-hidden bg-white">
      <div className="container-main">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right" className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-12 sm:gap-4">
             

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.12, duration: 0.55 }}
                whileHover={{ scale: 1.03 }}
                className="relative min-h-[120px] overflow-hidden rounded-2xl sm:col-span-5 sm:min-h-[150px] lg:col-span-10 lg:min-h-[190px]"
              >
                <LazyImage
                  src={aboutGalleryImages[1]}
                  alt="ValuEd workshops"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.22, duration: 0.55 }}
                whileHover={{ scale: 1.03 }}
                className="relative min-h-[120px] overflow-hidden rounded-2xl sm:col-span-5 sm:min-h-[150px] lg:col-span-5 lg:min-h-[190px]"
              >
                <LazyImage
                  src={aboutGalleryImages[2]}
                  alt="ValuEd community events"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </motion.div>
            
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.22, duration: 0.55 }}
                whileHover={{ scale: 1.03 }}
                className="relative min-h-[120px] overflow-hidden rounded-2xl sm:col-span-5 sm:min-h-[150px] lg:col-span-5 lg:min-h-[190px]"
              >
                <LazyImage
                  src={aboutGalleryImages[2]}
                  alt="ValuEd community events"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </motion.div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="order-1 lg:order-2">
            <span className="text-kicker mb-2 block text-brand">
              {aboutSummary.kicker}
            </span>
            <h2 className="font-display text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {aboutSummary.title}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
              {aboutSummary.description}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <Button to="/about" variant="outline" className="w-full sm:w-auto">Our Story</Button>
              <Button to="/impact" className="w-full sm:w-auto">See Our Impact</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
