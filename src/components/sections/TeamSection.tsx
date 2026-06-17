import { SocialIcon } from '../ui/SocialIcon';
import { motion } from 'framer-motion';
import { team } from '../../data/content';
import { LazyImage } from '../ui/LazyImage';
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal';

type TeamSectionProps = {
  kicker?: string;
  title?: string;
  description?: string;
  className?: string;
  surface?: boolean;
};

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function TeamSection({
  kicker = 'Leadership',
  title = 'The Team Behind ValuEd',
  description = 'Dedicated professionals guiding every program, event, and participant journey.',
  className = '',
  surface = false,
}: TeamSectionProps) {
  return (
    <section className={`section-pad ${surface ? 'bg-surface' : 'bg-white'} ${className}`}>
      <div className="container-main">
        <Reveal className="mb-8 text-center sm:mb-10">
          <span className="mb-2 block text-[11px] font-semibold uppercase tracking-widest text-brand sm:text-xs">
            {kicker}
          </span>
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl lg:text-3xl">{title}</h2>
          {description && (
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {description}
            </p>
          )}
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <motion.article
                whileHover={{ y: -4 }}
                className="group flex h-full flex-col overflow-hidden border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-brand-muted">
                  {member.image ? (
                    <LazyImage
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand/20 to-brand-dark/30">
                      <span className="text-3xl font-extrabold text-brand/60">{getInitials(member.name)}</span>
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-dark/70 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="font-bold leading-snug text-slate-900">{member.name}</h3>
                  <p className="mt-1 flex-1 text-xs leading-relaxed text-muted sm:text-sm">{member.role}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.whatsapp && (
                      <a
                        href={`https://wa.me/${member.whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`WhatsApp ${member.name}`}
                        title="WhatsApp"
                        className="inline-flex h-9 w-9 items-center justify-center bg-brand text-white transition-colors hover:bg-brand-dark"
                      >
                        <SocialIcon platform="whatsapp" size={16} />
                      </a>
                    )}
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Instagram ${member.name}`}
                        title="Instagram"
                        className="inline-flex h-9 w-9 items-center justify-center border border-brand/25 bg-brand-muted text-brand transition-colors hover:bg-brand hover:text-white"
                      >
                        <SocialIcon platform="instagram" size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
