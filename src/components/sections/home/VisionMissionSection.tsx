import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';
import { aboutMission, aboutVision } from '../../../data/content';
import { SectionHeading } from '../../ui/SectionHeading';
import { Reveal } from '../../motion/Reveal';

export function VisionMissionSection() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-main">
        <Reveal>
          <SectionHeading kicker="What Drives Us" title="Vision & Mission" />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          <Reveal>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="relative flex h-full flex-col overflow-hidden bg-brand-section p-7 text-center text-white sm:p-9 lg:p-10"
            >
              <div className="relative mx-auto mb-6 flex h-12 w-12 items-center justify-center border border-white/20 bg-white/10 text-white backdrop-blur-sm">
                <Eye size={22} strokeWidth={1.5} />
              </div>

              <h3 className="font-display relative text-2xl font-semibold sm:text-3xl lg:text-4xl">
                {aboutVision.title}
              </h3>
              <p className="relative mt-4 flex-1 text-sm leading-relaxed text-red-100/90 sm:text-base">
                {aboutVision.description}
              </p>
            </motion.article>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="card relative flex h-full flex-col overflow-hidden border-t-4 border-t-brand p-7 text-center sm:p-9 lg:p-10"
            >
              <div className="relative mx-auto mb-6 flex h-12 w-12 items-center justify-center bg-brand-muted text-brand">
                <Target size={22} strokeWidth={1.5} />
              </div>

              <h3 className="font-display relative text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
                {aboutMission.title}
              </h3>
              <p className="relative mt-4 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                {aboutMission.description}
              </p>
            </motion.article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
