import { aboutGalleryStack, aboutSummary } from '../../../data/content';
import { Button } from '../../ui/Button';
import { SectionHeading } from '../../ui/SectionHeading';
import { StackedImageGallery } from '../../ui/StackedImageGallery';
import { Reveal } from '../../motion/Reveal';

export function AboutSection() {
  return (
    <section className="section-pad overflow-hidden bg-white">
      <div className="container-main">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-10 lg:gap-14 xl:gap-16">
          <Reveal direction="right" className="w-full min-w-0">
            <StackedImageGallery
              items={aboutGalleryStack}
              className="mx-auto w-full max-w-[min(100%,22rem)] md:max-w-none"
            />
          </Reveal>

          <Reveal direction="left" delay={0.1} className="flex w-full min-w-0 flex-col justify-center">
            <SectionHeading
              kicker={aboutSummary.kicker}
              title={aboutSummary.title}
              description={aboutSummary.description}
              align="responsive-left"
              className="mb-6 md:mb-8"
            />
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <Button to="/about" variant="outline" className="w-full sm:w-auto">
                Our Story
              </Button>
              <Button to="/impact" className="w-full sm:w-auto">
                See Our Impact
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
