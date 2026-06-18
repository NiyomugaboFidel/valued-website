import { motion } from 'framer-motion';
import { GraduationCap, Globe, Sparkles, Users } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { LazyImage } from '../components/ui/LazyImage';
import { CtaBand } from '../components/sections/CtaBand';
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal';
import { pageHeroImages, programs, programsOverview } from '../data/content';

const programIcons = {
  school: GraduationCap,
  globe: Globe,
  users: Users,
  sparkles: Sparkles,
};

export function Programs() {
  return (
    <>
      <PageHero
        kicker={programsOverview.kicker}
        title={programsOverview.title}
        image={pageHeroImages.programs}
      />

      <section className="section-pad">
        <div className="container-main">
          <Stagger className="grid gap-5 sm:grid-cols-2">
            {programs.map((program) => {
              const Icon = programIcons[program.icon];
              return (
                <StaggerItem key={program.id}>
                  <motion.div whileHover={{ y: -3 }} className="card flex h-full flex-col overflow-hidden">
                    <LazyImage src={program.image} alt={program.cardTitle} className="h-44 w-full object-cover" />
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3 flex h-9 w-9 items-center justify-center bg-brand-muted text-brand">
                        <Icon size={17} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{program.cardTitle}</h3>
                      <Button to={program.slug} variant="outline" size="sm" className="mt-5 w-full sm:w-auto">
                        Learn More
                      </Button>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <Reveal className="container-main text-center">
          <SectionHeading title="Find the Right Program for You" className="mb-6" />
          <Button to="/apply" size="sm">Apply Now</Button>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
