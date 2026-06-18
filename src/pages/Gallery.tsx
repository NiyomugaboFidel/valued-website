import { useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { LazyImage } from '../components/ui/LazyImage';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/motion/Reveal';
import { galleryImages, pageHeroImages } from '../data/content';

const GALLERY_BATCH = 36;

export function Gallery() {
  const [visibleCount, setVisibleCount] = useState(GALLERY_BATCH);
  const visibleImages = galleryImages.slice(0, visibleCount);
  const hasMore = visibleCount < galleryImages.length;

  return (
    <>
      <PageHero
        kicker="Gallery"
        title="Moments of Learning & Celebration"
        description="Photos from ValuEd programs, workshops, performances, and community events across Rwanda."
        image={pageHeroImages.gallery}
      />

      <section className="section-pad bg-surface">
        <div className="container-main">
          <Reveal>
            <SectionHeading
              kicker="Photo Gallery"
              title="Life at ValuEd"
              description={`${galleryImages.length} moments captured from our programs and community.`}
            />
          </Reveal>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
            {visibleImages.map((src, i) => (
              <div
                key={src}
                className="group relative aspect-[4/3] overflow-hidden bg-slate-100 shadow-sm"
              >
                <LazyImage
                  src={src}
                  alt={`ValuEd gallery photo ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-dark/0 transition-colors duration-300 group-hover:bg-brand-dark/15" />
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="mt-8 flex justify-center">
              <Button
                variant="outline"
                onClick={() => setVisibleCount((count) => Math.min(count + GALLERY_BATCH, galleryImages.length))}
              >
                Load more photos ({galleryImages.length - visibleCount} remaining)
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
