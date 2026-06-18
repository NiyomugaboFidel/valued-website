import { LazyImage } from '../ui/LazyImage';
import { Reveal } from '../motion/Reveal';
import type { ImpactArticle } from '../../data/content';

type ImpactArticleSectionProps = {
  article: ImpactArticle;
  index: number;
};

export function ImpactArticleSection({ article, index }: ImpactArticleSectionProps) {
  const midIndex = Math.ceil(article.paragraphs.length / 2);

  return (
    <Reveal delay={index * 0.04}>
      <article className="border-b border-slate-200 py-12 last:border-b-0 sm:py-14">
        <h2 className="text-center font-display text-2xl font-semibold text-brand sm:text-[1.65rem]">
          {article.title}
        </h2>
        <p className="mt-2 text-center text-sm font-semibold text-[#F5A623] sm:text-base">{article.tagline}</p>

        <div className="mt-6 overflow-hidden">
          <LazyImage
            src={article.image}
            alt={article.imageAlt}
            className="aspect-[16/9] w-full object-cover sm:aspect-[2/1]"
          />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {article.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-brand bg-surface px-3 py-4 text-center sm:px-4"
            >
              <div className="text-2xl font-semibold text-brand sm:text-[1.65rem]">{stat.value}</div>
              <div className="mt-1 text-xs text-muted sm:text-[13px]">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-4">
          {article.paragraphs.slice(0, midIndex).map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-sm leading-[1.8] text-muted sm:text-[15px]">
              {paragraph}
            </p>
          ))}
        </div>

        {article.inlineImages && article.inlineImages.length > 0 && (
          <div className={`mt-6 grid gap-3 ${article.inlineImages.length > 1 ? 'sm:grid-cols-2' : ''}`}>
            {article.inlineImages.map((img) => (
              <LazyImage
                key={img.src}
                src={img.src}
                alt={img.alt}
                className="aspect-[4/3] w-full object-cover"
              />
            ))}
          </div>
        )}

        <div className="mt-6 space-y-4">
          {article.paragraphs.slice(midIndex).map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-sm leading-[1.8] text-muted sm:text-[15px]">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </Reveal>
  );
}
