import { GraduationCap, Lightbulb, Mail, Network, Phone, Rocket } from 'lucide-react';
import { SocialIcon } from '../components/ui/SocialIcon';
import { PageHero } from '../components/ui/PageHero';
import { Button } from '../components/ui/Button';
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal';
import { PartnersSection } from '../components/sections/PartnersSection';
import { applyBenefits, pageHeroImages } from '../data/content';
import { contactInfo } from '../data/navigation';

const benefitIcons = { graduation: GraduationCap, lightbulb: Lightbulb, network: Network, rocket: Rocket };

const steps = [
  { title: 'Reach Out', description: 'Email or WhatsApp our team with your name, age, and program of interest.' },
  { title: 'Orientation Call', description: 'Our team reviews your message and schedules a brief orientation.' },
  { title: 'Start Training', description: 'Get accepted and begin weekly sessions at Light Center, Kabuga.' },
];

export function Apply() {
  return (
    <>
      <PageHero
        kicker="Apply"
        title="Take the First Step Toward Your Future"
        description="Join 300+ young people already training in arts, sports, leadership, and creative skills at VALUED."
        image={pageHeroImages.apply}
        cta={{ label: 'Contact Us to Apply', to: '/contact' }}
      />

      <section className="section-pad">
        <div className="container-main">
          <Reveal className="mb-8 sm:mb-10">
            <span className="mb-2 block text-[11px] font-semibold uppercase tracking-widest text-brand sm:text-xs">
              Benefits
            </span>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">What You Gain as a VALUED Participant</h2>
          </Reveal>
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

      <section className="bg-brand-section py-14 text-white sm:py-16">
        <Reveal className="brand-section-inner container-main max-w-2xl text-center">
          <h2 className="text-xl font-bold sm:text-2xl">Ready to Apply?</h2>
          <p className="mt-3 text-sm text-red-100/85 sm:text-base">
            Contact us directly   no online form needed. Our team will guide you through the next steps.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-brand hover:bg-brand-muted"
            >
              <Mail size={16} />
              {contactInfo.email}
            </a>
            <a
              href={`https://wa.me/250795454671`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              <SocialIcon platform="whatsapp" size={16} />
              WhatsApp Us
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-red-100/75">
            {contactInfo.phones.map((phone) => (
              <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-1.5 hover:text-white">
                <Phone size={14} />
                {phone}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-pad">
        <div className="container-main">
          <Reveal className="mb-8 text-center sm:mb-10">
            <span className="mb-2 block text-[11px] font-semibold uppercase tracking-widest text-brand sm:text-xs">
              Process
            </span>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">How to Apply in 3 Steps</h2>
          </Reveal>
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
          <Reveal className="mt-10 text-center">
            <Button to="/contact" size="lg">Go to Contact Page</Button>
          </Reveal>
        </div>
      </section>

      <PartnersSection />
    </>
  );
}
