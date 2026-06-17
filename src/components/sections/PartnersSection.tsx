import { partners } from '../../data/content';
import { LazyImage } from '../ui/LazyImage';
import { Reveal } from '../motion/Reveal';

const sizeClasses = {
  sm: 'w-[calc(50%-6px)] min-h-[88px] sm:w-[calc(25%-12px)]',
  md: 'w-[calc(50%-6px)] min-h-[104px] sm:w-[calc(33.333%-8px)]',
  lg: 'w-full min-h-[120px] sm:w-[calc(50%-6px)] sm:min-h-[136px]',
} as const;

export function PartnersSection() {
  return (
    <section className="section-pad bg-white">
      <Reveal className="container-main">
        <div className="mb-8 text-center sm:mb-10">
          <span className="text-kicker mb-2 block text-brand">
            Partners
          </span>
          <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
            Organizations We Work With
          </h2>
        </div>

        <div className="-m-1.5 flex flex-wrap justify-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className={`card m-1.5 flex items-center justify-center p-4 transition-colors hover:border-brand/30 hover:bg-brand-muted/20 ${sizeClasses[partner.span]}`}
            >
              {partner.logo ? (
                <LazyImage
                  src={partner.logo}
                  alt={partner.name}
                  className={`max-h-full max-w-full object-contain opacity-80 grayscale transition-all hover:opacity-100 hover:grayscale-0 ${
                    partner.span === 'lg' ? 'h-14 sm:h-16' : partner.span === 'md' ? 'h-10 sm:h-12' : 'h-8 sm:h-9'
                  }`}
                />
              ) : (
                <span
                  className={`px-2 text-center font-semibold text-slate-500 ${
                    partner.span === 'lg' ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
                  }`}
                >
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
