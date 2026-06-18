import { partners } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { LazyImage } from '../ui/LazyImage';
import { Reveal } from '../motion/Reveal';

type PartnersSectionProps = {
  className?: string;
};

function PartnerNameMark({ name }: { name: string }) {
  const compact = name.length > 14;

  return (
    <span
      className={`flex h-14 min-w-28 max-w-44 items-center justify-center px-2 text-center font-display font-extrabold uppercase leading-[1.05] tracking-tight text-gold sm:h-16 sm:min-w-32 sm:max-w-52 lg:h-18 lg:max-w-60 ${
        compact ? 'text-sm sm:text-base lg:text-lg' : 'text-base sm:text-lg lg:text-xl'
      }`}
      aria-label={name}
    >
      {name}
    </span>
  );
}

export function PartnersSection({ className = '' }: PartnersSectionProps) {
  return (
    <section className={`py-8 sm:py-10 ${className}`}>
      <Reveal className="container-main">
        <SectionHeading
          kicker="Partners"
          title="Organizations We Work With"
          className="mb-4 sm:mb-5 [&_h2]:text-xl [&_h2]:sm:text-2xl"
        />

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:gap-x-10 sm:gap-y-6 lg:gap-x-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-14 shrink-0 items-center justify-center sm:h-16 lg:h-18"
            >
              {partner.logo ? (
                <LazyImage
                  src={partner.logo}
                  alt={partner.name}
                  className="h-14 w-auto max-w-[150px] object-contain sm:h-16 sm:max-w-[190px] lg:h-18 lg:max-w-[220px]"
                />
              ) : (
                <PartnerNameMark name={partner.name} />
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
