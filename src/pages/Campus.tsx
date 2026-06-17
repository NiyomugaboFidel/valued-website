import { PageHero } from '../components/ui/PageHero';
import { LazyImage } from '../components/ui/LazyImage';
import { PartnersSection } from '../components/sections/PartnersSection';
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal';
import { galleryImages, pageHeroImages } from '../data/content';

type GalleryItem = {
  src: string;
  layout: string;
};

const campusGallery: GalleryItem[] = [
  { src: galleryImages[0], layout: 'col-span-2 row-span-2 min-h-[240px] sm:min-h-[320px]' },
  { src: galleryImages[1], layout: 'col-span-1 row-span-1 min-h-[160px]' },
  { src: galleryImages[2], layout: 'col-span-1 row-span-1 min-h-[160px]' },
  { src: galleryImages[3], layout: 'col-span-1 row-span-2 min-h-[200px] sm:min-h-[320px]' },
  { src: galleryImages[4], layout: 'col-span-1 row-span-1 min-h-[160px]' },
  { src: galleryImages[5], layout: 'col-span-2 row-span-1 min-h-[180px] sm:min-h-[200px]' },
];

export function Campus() {
  return (
    <>
      <PageHero
        kicker="Campus"
        title="Life at Light Center"
        image={pageHeroImages.campus}
      />

      <section className="section-pad bg-surface">
        <div className="container-main">
          <Reveal className="mb-8 sm:mb-10">
            <span className="mb-2 block text-[11px] font-semibold uppercase tracking-widest text-brand sm:text-xs">
              Gallery
            </span>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl lg:text-3xl">
              Moments From Our Campus
            </h2>
          </Reveal>

          <Stagger className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
            {campusGallery.map((item, i) => (
              <StaggerItem key={`${item.src}-${i}`} className={item.layout}>
                <div className="group relative h-full overflow-hidden">
                  <LazyImage
                    src={item.src}
                    alt={`Campus gallery ${i + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-dark/0 transition-colors duration-300 group-hover:bg-brand-dark/20" />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <PartnersSection />
    </>
  );
}
