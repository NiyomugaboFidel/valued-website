import { PageHero } from '../components/ui/PageHero';
import { LazyImage } from '../components/ui/LazyImage';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CtaBand } from '../components/sections/CtaBand';
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
      />

      <section className="section-pad">
        <div className="container-main">
          <Reveal>
            <SectionHeading kicker="Our Story" title="Why ValuEd" />
          </Reveal>

          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
            <Reveal direction="right" className="w-full min-w-0">
              <LazyImage src={images.hero} alt="ValuEd community" className="w-full shadow-md" />
            </Reveal>
            <Reveal direction="left" delay={0.1} className="w-full min-w-0">
              <div className="space-y-4">
                {aboutStory.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="text-sm leading-relaxed text-muted sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-brand-section section-pad">
        <div className="container-main brand-section-inner">
          <Reveal className="mb-8 sm:mb-10">
            <SectionHeading kicker="What Drives Us" title="Vision & Mission" light />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <Reveal>
              <div className="h-full border border-white/15 bg-brand-dark/40 p-6 text-center sm:p-8">
                <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{aboutVision.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-red-100/90 sm:text-base">{aboutVision.description}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full border border-white/15 bg-brand-dark/40 p-6 text-center sm:p-8">
                <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{aboutMission.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-red-100/90 sm:text-base">{aboutMission.description}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main">
          <Reveal>
            <SectionHeading kicker="Our Values" title="What Guides Everything We Do" />
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

      <CtaBand />
    </>
  );
}
