import { PageHero } from '../components/ui/PageHero';
import { StatCounter } from '../components/ui/StatCounter';
import { LazyImage } from '../components/ui/LazyImage';
import { PartnersSection } from '../components/sections/PartnersSection';
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal';
import { impactHighlights, impactStats, pageHeroImages } from '../data/content';

const timeline = [
  { year: '2025', title: 'Intore Mubiruhuko', description: 'National cultural partnership training youth in traditional dance and heritage pride.' },
  { year: '2025', title: 'Intercell Competition', description: 'Multi-discipline talent competition across dance, drama, arts, singing, and football.' },
  { year: '2025', title: 'Tourism Workshop', description: 'Industry sessions connecting youth to Rwanda\'s tourism and sustainable development.' },
  { year: 'Monthly', title: 'Connect & Cheers', description: 'Community nights featuring talent showcases and cultural activities.' },
];

export function Impact() {
  return (
    <>
      <PageHero
        kicker="Impact"
        title="Real Change, Measurable Results"
        image={pageHeroImages.impact}
      />

      <section className="bg-brand-section py-12 sm:py-14">
        <Stagger className="brand-section-inner container-main grid grid-cols-2 gap-8 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <StatCounter value={stat.value} label={stat.label} light />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="section-pad">
        <div className="container-main">
          <Reveal className="mb-8 sm:mb-10">
            <span className="mb-2 block text-[11px] font-semibold uppercase tracking-widest text-brand sm:text-xs">
              Highlights
            </span>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Programs That Made a Difference</h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {impactHighlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <article className="group overflow-hidden border border-slate-100 bg-white">
                  <LazyImage
                    src={item.image}
                    alt={item.title}
                    className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-48"
                  />
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-main max-w-3xl">
          <Reveal className="mb-8 text-center sm:mb-10">
            <span className="mb-2 block text-[11px] font-semibold uppercase tracking-widest text-brand sm:text-xs">
              Timeline
            </span>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Key Milestones</h2>
          </Reveal>

          <div className="relative space-y-0">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-brand/20 sm:left-5" aria-hidden />
            {timeline.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="relative flex gap-5 pb-8 pl-10 sm:pl-12">
                  <span className="absolute left-2.5 top-1 flex h-4 w-4 items-center justify-center bg-brand sm:left-3.5">
                    <span className="h-1.5 w-1.5 bg-white" />
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand">{item.year}</span>
                    <h4 className="mt-1 font-bold text-slate-900">{item.title}</h4>
                    <p className="mt-1 text-sm text-muted">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PartnersSection />
    </>
  );
}
