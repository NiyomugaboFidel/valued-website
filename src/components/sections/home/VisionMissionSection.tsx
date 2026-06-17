import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';
import { aboutMission, aboutVision } from '../../../data/content';
import { Reveal } from '../../motion/Reveal';

export function VisionMissionSection() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-main">
        <Reveal className="mb-8 text-center sm:mb-10">
          <span className="text-kicker text-brand">What Drives Us</span>
          <h2 className="font-display mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Vision &amp; Mission
          </h2>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          <Reveal>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="relative flex h-full flex-col overflow-hidden p-7 sm:p-9 lg:p-10"
              style={{
                background:
                  'linear-gradient(145deg, #b91c1c 0%, #991b1b 40%, #7f1d1d 75%, #450a0a 100%)',
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.9) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              />
              <span className="pointer-events-none absolute -right-2 -top-4 font-display text-[7rem] font-semibold leading-none text-white/10 sm:text-[8rem]">
                01
              </span>

              <div className="relative mb-6 flex h-12 w-12 items-center justify-center border border-white/20 bg-white/10 text-white backdrop-blur-sm">
                <Eye size={22} strokeWidth={1.5} />
              </div>

              <h3 className="font-display relative text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
                {aboutVision.title}
              </h3>
              <p className="relative mt-4 flex-1 text-sm leading-relaxed text-red-100/90 sm:text-base">
                {aboutVision.description}
              </p>

              <div className="relative mt-8 h-px w-16 bg-white/30" />
            </motion.article>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="card relative flex h-full flex-col overflow-hidden border-t-4 border-t-brand p-7 sm:p-9 lg:p-10"
            >
              <div className="pointer-events-none absolute -bottom-6 -right-4 h-40 w-40 rounded-full bg-brand-muted/60 blur-2xl" />
              <span className="pointer-events-none absolute -right-2 -top-4 font-display text-[7rem] font-semibold leading-none text-brand/8 sm:text-[8rem]">
                02
              </span>

              <div className="relative mb-6 flex h-12 w-12 items-center justify-center bg-brand-muted text-brand">
                <Target size={22} strokeWidth={1.5} />
              </div>

              <h3 className="font-display relative text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
                {aboutMission.title}
              </h3>
              <p className="relative mt-4 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                {aboutMission.description}
              </p>

              <ul className="relative mt-8 flex flex-wrap gap-2">
                {['Skills', 'Mentorship', 'Partnerships', 'Impact'].map((tag) => (
                  <li
                    key={tag}
                    className="border border-brand/15 bg-brand-muted/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
