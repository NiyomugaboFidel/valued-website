import { PageHero } from '../components/ui/PageHero';
import { Button } from '../components/ui/Button';
import { LazyImage } from '../components/ui/LazyImage';
import { CtaBand } from '../components/sections/CtaBand';
import { TeamSection } from '../components/sections/TeamSection';
import { PartnersSection } from '../components/sections/PartnersSection';
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal';
import { images } from '../data/images';
import {
  aboutMission,
  aboutStory,
  aboutValues,
  aboutVision,
  pageHeroImages,
} from '../data/content';

export function About() {
  return (
    <>
      <PageHero
        kicker="About ValuEd"
        title="A Movement for Value-Based Transformation"
        description="Bridging the gap between education and employment for children and youth across Rwanda."
        image={pageHeroImages.about}
        cta={{ label: 'Apply Now', to: '/apply' }}
      />

      <section className="section-pad">
        <div className="container-main grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal direction="right" className="order-2 lg:order-1">
            <LazyImage src={images.hero} alt="ValuEd community" className="w-full shadow-md" />
          </Reveal>
          <Reveal direction="left" delay={0.1} className="order-1 lg:order-2">
            <span className="mb-2 block text-[11px] font-semibold uppercase tracking-widest text-brand sm:text-xs">
              Our Story
            </span>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl lg:text-3xl">
              Why ValuEd Exists
            </h2>
            <div className="mt-5 space-y-4">
              {aboutStory.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="text-sm leading-relaxed text-muted sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
            <Button to="/apply" className="mt-7">Join the Program</Button>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-main grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <span className="mb-2 block text-[11px] font-semibold uppercase tracking-widest text-brand sm:text-xs">
              {aboutVision.title}
            </span>
            <p className="text-sm leading-relaxed text-muted sm:text-base">{aboutVision.description}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="mb-2 block text-[11px] font-semibold uppercase tracking-widest text-brand sm:text-xs">
              {aboutMission.title}
            </span>
            <p className="text-sm leading-relaxed text-muted sm:text-base">{aboutMission.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main">
          <Reveal className="mb-8 sm:mb-10">
            <span className="mb-2 block text-[11px] font-semibold uppercase tracking-widest text-brand sm:text-xs">
              Our Values
            </span>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">What Guides Everything We Do</h2>
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aboutValues.map((value) => (
              <StaggerItem key={value.title}>
                <div className="card h-full border-l-4 border-brand p-5 sm:p-6">
                  <h3 className="font-bold text-brand">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <TeamSection surface />

      <PartnersSection />
      <CtaBand />
    </>
  );
}
