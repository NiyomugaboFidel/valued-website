import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { LazyImage } from '../components/ui/LazyImage';
import { CtaBand } from '../components/sections/CtaBand';
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal';
import { images } from '../data/images';
import { aboutSummary, missionCards, team } from '../data/content';

export function About() {
  return (
    <>
      <PageHero
        kicker="About VALUED"
        title="Empowering Youth Through Purpose, Skill, and Community"
        description="A Light Center initiative in Kabuga, Kigali — training young people in arts, sports, leadership, and life skills since day one."
        cta={{ label: 'Apply Now', to: '/apply' }}
      />

      <section className="section-pad">
        <div className="container-main grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal direction="right" className="order-2 lg:order-1">
            <LazyImage src={images.hero} alt="VALUED community" className="w-full shadow-md" />
          </Reveal>
          <Reveal direction="left" delay={0.1} className="order-1 lg:order-2">
            <SectionHeading kicker={aboutSummary.kicker} title={aboutSummary.title} description={aboutSummary.description} align="left" />
            <Button to="/apply">Join the Program</Button>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-main">
          <Reveal><SectionHeading kicker="Our Mission" title="What Drives Everything We Do" /></Reveal>
          <Stagger className="grid gap-4 md:grid-cols-3 lg:gap-5">
            {missionCards.map((card) => (
              <StaggerItem key={card.title}>
                <div className="card h-full p-6">
                  <h3 className="text-lg font-bold text-brand">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{card.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main">
          <Reveal><SectionHeading kicker="Leadership" title="The Team Behind VALUED" description="Dedicated professionals guiding every program, event, and participant journey." /></Reveal>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="card overflow-hidden">
                  <LazyImage src={member.image} alt={member.name} className="h-52 w-full object-cover sm:h-56" />
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900">{member.name}</h3>
                    <p className="mt-1 text-sm text-muted">{member.role}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {'whatsapp' in member && (
                        <a href={`https://wa.me/${member.whatsapp}`} target="_blank" rel="noreferrer" className="bg-brand-muted px-3 py-1.5 text-xs font-semibold text-brand hover:bg-brand hover:text-white transition-colors">WhatsApp</a>
                      )}
                      {'instagram' in member && member.instagram && (
                        <a href={member.instagram} target="_blank" rel="noreferrer" className="bg-brand-muted px-3 py-1.5 text-xs font-semibold text-brand hover:bg-brand hover:text-white transition-colors">Instagram</a>
                      )}
                    </div>
                  </div>
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
