import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Button } from '../components/ui/Button';
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal';
import { PartnersSection } from '../components/sections/PartnersSection';
import { TeamSection } from '../components/sections/TeamSection';
import { contactInfo, socialLinks } from '../data/navigation';
import { images } from '../data/images';
import { pageHeroImages } from '../data/content';
import { SocialLinkButton } from '../components/ui/SocialIcon';
import { LazyImage } from '../components/ui/LazyImage';

const channels = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: [contactInfo.address],
    action: { label: 'Open in Maps', href: 'https://maps.google.com/?q=Light+Center+Kabuga+Kigali' },
  },
  {
    icon: Mail,
    title: 'Email',
    lines: [contactInfo.email],
    action: { label: 'Send Email', href: `mailto:${contactInfo.email}` },
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: contactInfo.phones,
    action: { label: 'Call Now', href: `tel:${contactInfo.phones[0].replace(/\s/g, '')}` },
  },
] as const;

export function Contact() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Let's Connect"
        description="Reach the ValuEd team for programs, partnerships, or general inquiries."
        image={pageHeroImages.contact}
        cta={{ label: 'Email Us', href: `mailto:${contactInfo.email}` }}
      />

      <section className="section-pad">
        <div className="container-main">
          <Stagger className="grid gap-4 md:grid-cols-3">
            {channels.map(({ icon: Icon, title, lines, action }) => (
              <StaggerItem key={title}>
                <div className="flex h-full flex-col border border-slate-100 bg-white p-6 shadow-sm">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center bg-brand text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                  <div className="mt-3 flex-1 space-y-1">
                    {lines.map((line) => (
                      <p key={line} className="text-sm leading-relaxed text-muted">{line}</p>
                    ))}
                  </div>
                  <a
                    href={action.href}
                    target={action.href.startsWith('http') ? '_blank' : undefined}
                    rel={action.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="mt-5 inline-block text-sm font-semibold text-brand hover:underline"
                  >
                    {action.label} →
                  </a>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-8 flex items-start gap-3 border-l-4 border-brand bg-surface p-4 sm:mt-10">
            <Clock size={18} className="mt-0.5 shrink-0 text-brand" />
            <div>
              <p className="text-sm font-bold text-slate-900">Response time</p>
              <p className="mt-1 text-sm text-muted">We reply to emails and messages within one business day.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <Reveal className="container-main">
          <span className="mb-2 block text-[11px] font-semibold uppercase tracking-widest text-brand sm:text-xs">
            Location
          </span>
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Find Us at Light Center</h2>
          <div className="mt-6 overflow-hidden border border-slate-100 bg-white shadow-sm">
            <iframe
              title="VALUED Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5!2d30.12!3d-1.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLight+Center+Kabuga!5e0!3m2!1sen!2srw!4v1690000000000!5m2!1sen!2srw"
              className="h-72 w-full sm:h-96 lg:h-[420px]"
              loading="lazy"
            />
          </div>
        </Reveal>
      </section>

      <TeamSection
        kicker="Team"
        title="Talk to a Program Lead"
        description="Connect directly with our coordinators on WhatsApp for quick answers about enrollment and programs."
        surface
      />

      <section className="bg-brand-section py-14 text-white sm:py-16">
        <Reveal className="brand-section-inner container-main text-center">
          <LazyImage src={images.logo} alt="ValuEd" className="mx-auto mb-5 h-14 w-14 object-cover" />
          <h2 className="text-xl font-bold sm:text-2xl">Follow ValuEd</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-red-100/80">
            Stay updated on programs, events, and youth impact across Rwanda.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((link) => (
              <SocialLinkButton
                key={link.label}
                href={link.href}
                label={link.label}
                platform={link.platform}
                variant="light"
                className="h-11 w-11"
              />
            ))}
            <Button to="/programs" variant="white" size="sm">Explore Programs</Button>
          </div>
        </Reveal>
      </section>

      <PartnersSection />
    </>
  );
}
