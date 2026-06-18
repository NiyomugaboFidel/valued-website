import { PageHero } from '../components/ui/PageHero';
import { ImpactArticleSection } from '../components/sections/ImpactArticleSection';
import { impactArticles } from '../data/content';

export function Impact() {
  return (
    <>
      <PageHero
        title="Our Impact"
        description="Real numbers, real stories, real change — from Rusororo to Rwanda and beyond."
        compact
        centered
      />

      <section className="section-pad bg-white">
        <div className="container-main max-w-[860px]">
          {impactArticles.map((article, index) => (
            <ImpactArticleSection key={article.id} article={article} index={index} />
          ))}
        </div>
      </section>

    </>
  );
}
