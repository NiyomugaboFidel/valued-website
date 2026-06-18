import { motion } from 'framer-motion';
import { GraduationCap, Globe, Sparkles, Users } from 'lucide-react';
import { programs } from '../../../data/content';
import { homeProgramCardImages } from '../../../data/images';
import { Button } from '../../ui/Button';
import { SectionHeading } from '../../ui/SectionHeading';
import { LazyImage } from '../../ui/LazyImage';
import { Reveal, Stagger, StaggerItem } from '../../motion/Reveal';

const programIcons = {
  school: GraduationCap,
  globe: Globe,
  users: Users,
  sparkles: Sparkles,
};

export function ProgramsSection() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-main">
        <Reveal>
          <SectionHeading kicker="What We Offer" title="Our Four Core Programs" />
        </Reveal>

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {programs.map((program) => {
            const Icon = programIcons[program.icon];

            return (
              <StaggerItem key={program.id}>
                <motion.div whileHover={{ y: -4 }} className="card flex h-full flex-col overflow-hidden">
                  <LazyImage
                    src={homeProgramCardImages[program.id as keyof typeof homeProgramCardImages]}
                    alt={program.cardTitle}
                    className="h-36 w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center bg-brand-muted text-brand">
                      <Icon size={17} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{program.cardTitle}</h3>
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
  );
}
