import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { StatCounter } from '../components/ui/StatCounter';
import { Button } from '../components/ui/Button';
import { ContactForm } from '../components/ui/ContactForm';
import { LazyImage } from '../components/ui/LazyImage';
import { CtaBand } from '../components/sections/CtaBand';
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal';
import { impactHighlights, impactStats, testimonials, partners, galleryImages } from '../data/content';

const timeline = [
  { year: '2025', title: 'Intore Mubiruhuko', description: 'National cultural partnership training youth in traditional dance, discipline, and heritage pride.' },
  { year: '2025', title: 'Intercell Competition', description: 'Multi-discipline talent competition across dance, drama, arts, singing, and football.' },
  { year: '2025', title: 'Tourism Workshop', description: 'Industry sessions connecting youth to Rwanda\'s tourism and sustainable development.' },
  { year: 'Monthly', title: 'Connect & Cheers', description: 'Community nights featuring talent showcases, screenings, and cultural activities.' },
];

export function Impact() {
  return (
    <>
      <PageHero
        kicker="Impact"
        title="Measurable Change Across Communities"
        description="From government partnerships to nationwide competitions — see how VALUED turns youth potential into real opportunity."
        cta={{ label: 'Partner With Us', to: '/contact' }}
      />

      <section className="section-pad">
        <div className="container-main">
          <Reveal><SectionHeading kicker="Highlights" title="Programs That Made a Difference" /></Reveal>
          <Stagger className="grid gap-4 md:grid-cols-3 lg:gap-5">
            {impactHighlights.map((item) => (
              <StaggerItem key={item.title}>
                <div className="card overflow-hidden">
                  <LazyImage src={item.image} alt={item.title} className="h-40 w-full object-cover sm:h-44" />
                  <div className="p-5">
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">{item.description}</p>
                    <Button to="/contact" variant="outline" size="sm" className="mt-4">Partner With Us</Button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-brand py-10 sm:py-12">
        <Stagger className="container-main grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {impactStats.map((stat) => (
            <StaggerItem key={stat.label}><StatCounter value={stat.value} label={stat.label} light /></StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="section-pad">
        <div className="container-main">
          <Reveal><SectionHeading kicker="Timeline" title="Key Milestones" /></Reveal>
          <div className="space-y-3">
            {timeline.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06} direction={i % 2 === 0 ? 'right' : 'left'}>
                <div className={`card flex gap-4 p-4 sm:gap-5 sm:p-5 ${i % 2 === 1 ? 'md:ml-8' : 'md:mr-8'}`}>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-brand-muted text-xs font-bold text-brand">{item.year}</div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="mt-1 text-sm text-muted">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-main">
          <Reveal><SectionHeading kicker="Gallery" title="Impact in Pictures" /></Reveal>
          <Stagger className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
            {galleryImages.map((src) => (
              <StaggerItem key={src}><LazyImage src={src} alt="Impact" className="aspect-square w-full object-cover" /></StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad">
        <Reveal className="container-main text-center">
          <SectionHeading kicker="Partners" title="Organizations Behind Our Work" />
          <div className="flex flex-wrap items-center justify-center gap-8">
            {partners.map((p) => <LazyImage key={p.name} src={p.logo} alt={p.name} className="h-8 opacity-60 sm:h-10" />)}
          </div>
        </Reveal>
      </section>

      <section className="section-pad bg-brand-dark text-white">
        <div className="container-main">
          <Reveal><SectionHeading kicker="Voices" title="What People Say" light /></Reveal>
          <Stagger className="grid gap-4 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <StaggerItem key={t.author}>
                <blockquote className="h-full border border-white/10 bg-white/5 p-5">
                  <p className="text-sm italic text-red-100/80">"{t.quote}"</p>
                  <footer className="mt-3 text-xs font-semibold text-red-200">— {t.author}</footer>
                </blockquote>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad">
        <Reveal className="container-main max-w-xl">
          <SectionHeading kicker="Get Involved" title="Support the Next Generation" align="left" />
          <div className="card p-5 sm:p-6">
            <ContactForm action="https://formspree.io/f/xjkeqqzr" />
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
