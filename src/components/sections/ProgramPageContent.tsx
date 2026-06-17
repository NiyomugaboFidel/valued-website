import type { Program, ProgramArticleSection } from '../../data/content';
import { PageHero } from '../ui/PageHero';
import { Button } from '../ui/Button';
import { LazyImage } from '../ui/LazyImage';
import { Reveal } from '../motion/Reveal';
import { CtaBand } from './CtaBand';
import { PartnersSection } from './PartnersSection';

type ProgramPageContentProps = {
  program: Program;
};

function ArticleImage({
  image,
  wide = false,
}: {
  image: NonNullable<ProgramArticleSection['image']>;
  wide?: boolean;
}) {
  return (
    <figure className={wide ? 'my-0' : 'my-0'}>
      <LazyImage
        src={image.src}
        alt={image.alt}
        className={`w-full object-cover ${wide ? 'aspect-[21/9] sm:aspect-[2/1]' : 'aspect-[4/3]'}`}
      />
      {image.caption && (
        <figcaption className="mt-3 text-center text-xs text-muted sm:text-sm">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

function ArticleSection({ section, index }: { section: ProgramArticleSection; index: number }) {
  const position = section.imagePosition ?? 'below';
  const image = section.image;

  const textBlock = (
    <div>
      <h2 className="font-display text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl">
        {section.heading}
      </h2>
      <div className="mt-5 space-y-4">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className="text-base leading-[1.85] text-slate-600">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );

  if (position === 'full' && image) {
    return (
      <Reveal delay={index * 0.05} className="border-t border-slate-100 pt-12 sm:pt-14">
        {textBlock}
        <div className="relative left-1/2 mt-10 w-screen max-w-none -translate-x-1/2 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <ArticleImage image={image} wide />
          </div>
        </div>
      </Reveal>
    );
  }

  if (image && (position === 'left' || position === 'right')) {
    return (
      <Reveal delay={index * 0.05} className="border-t border-slate-100 pt-12 sm:pt-14">
        <div
          className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
            position === 'right' ? '' : ''
          }`}
        >
          {position === 'left' && <ArticleImage image={image} />}
          {textBlock}
          {position === 'right' && <ArticleImage image={image} />}
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal delay={index * 0.05} className="border-t border-slate-100 pt-12 sm:pt-14">
      {position === 'above' && image && (
        <div className="mb-10">
          <ArticleImage image={image} />
        </div>
      )}
      {textBlock}
      {position === 'below' && image && (
        <div className="mt-10">
          <ArticleImage image={image} />
        </div>
      )}
    </Reveal>
  );
}

export function ProgramPageContent({ program }: ProgramPageContentProps) {
  return (
    <>
      <PageHero
        kicker={program.category}
        title={program.title}
        image={program.heroImage}
        cta={{ label: 'Apply Now', to: '/apply' }}
      />

      <article className="section-pad">
        <div className="container-main">
          <Reveal>
            <header className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-slate-700 sm:text-xl sm:leading-relaxed">
                {program.shortDescription}
              </p>
              <p className="mt-4 text-sm font-medium text-muted">{program.readTime}</p>
            </header>
          </Reveal>

          <div className="mx-auto mt-14 max-w-3xl">
            {program.sections.map((section, index) => (
              <ArticleSection key={section.heading} section={section} index={index} />
            ))}

            <Reveal className="border-t border-slate-100 pt-12 sm:pt-14">
              <blockquote className="relative border-l-4 border-brand bg-brand-muted/40 px-6 py-8 sm:px-8">
                <p className="font-display text-xl font-medium italic leading-relaxed text-slate-800 sm:text-2xl">
                  &ldquo;{program.quote.text}&rdquo;
                </p>
                <cite className="mt-4 block text-sm font-semibold not-italic text-brand">
                  — {program.quote.attribution}
                </cite>
              </blockquote>
            </Reveal>

            <Reveal delay={0.1} className="border-t border-slate-100 pt-12 sm:pt-14">
              <h3 className="text-kicker text-brand">Program Highlights</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {program.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="border border-brand/20 bg-brand-muted px-3 py-1.5 text-xs font-semibold text-brand"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15} className="mt-12 flex flex-col gap-3 border-t border-slate-100 pt-12 sm:flex-row">
              <Button to="/apply">Apply for This Program</Button>
              <Button to="/programs" variant="outline">
                View All Programs
              </Button>
            </Reveal>
          </div>
        </div>
      </article>

      <PartnersSection />
      <CtaBand />
    </>
  );
}
