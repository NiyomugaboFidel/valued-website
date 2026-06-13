import { GraduationCap, Lightbulb, Network, Rocket } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ContactForm } from '../components/ui/ContactForm';
import { CtaBand } from '../components/sections/CtaBand';
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal';
import { applyBenefits } from '../data/content';

const benefitIcons = { graduation: GraduationCap, lightbulb: Lightbulb, network: Network, rocket: Rocket };

const steps = [
  { title: 'Submit Application', description: 'Fill in your details, select a track, and tell us about your goals.' },
  { title: 'Orientation Call', description: 'Our team reviews your application and schedules a brief orientation.' },
  { title: 'Start Training', description: 'Get accepted and begin your journey with weekly sessions at Light Center.' },
];

export function Apply() {
  return (
    <>
      <PageHero
        kicker="Apply"
        title="Take the First Step Toward Your Future"
        description="Join 300+ young people already training in arts, sports, leadership, and creative skills at VALUED."
        cta={{ label: 'Start Application', href: '#apply-form' }}
        compact
      />

      <section className="section-pad">
        <div className="container-main">
          <Reveal><SectionHeading kicker="Benefits" title="What You Gain as a VALUED Participant" /></Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {applyBenefits.map((benefit) => {
              const Icon = benefitIcons[benefit.icon as keyof typeof benefitIcons];
              return (
                <StaggerItem key={benefit.title}>
                  <div className="card h-full p-5 text-center">
                    <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center bg-brand-muted text-brand">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-bold text-slate-900">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{benefit.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section id="apply-form" className="section-pad bg-surface">
        <Reveal className="container-main max-w-lg">
          <SectionHeading kicker="Application" title="Complete Your Application" description="All fields are required unless marked optional. We review applications on a rolling basis." />
          <div className="card p-5 sm:p-6">
            <ContactForm action="https://formspree.io/f/mgvljjdj" fields="apply" />
          </div>
        </Reveal>
      </section>

      <section className="section-pad">
        <div className="container-main">
          <Reveal><SectionHeading kicker="Process" title="How to Apply in 3 Steps" /></Reveal>
          <Stagger className="grid gap-4 md:grid-cols-3">
            {steps.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="card h-full p-6 text-center">
                  <span className="text-2xl font-extrabold text-brand/25">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-2 font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted">{step.description}</p>
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
