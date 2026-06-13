import { Mail, MapPin, Phone } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ContactForm } from '../components/ui/ContactForm';
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal';
import { contactInfo } from '../data/navigation';

const addressCards = [
  { icon: MapPin, title: 'Visit Us', content: contactInfo.address },
  { icon: Mail, title: 'Email', content: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Phone, title: 'Phone', content: contactInfo.phones.join(' · '), href: `tel:${contactInfo.phones[0].replace(/\s/g, '')}` },
];

export function Contact() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="We're Here to Help — Reach Out Anytime"
        description="Enrollment questions, partnership proposals, or general inquiries. Our team responds within one business day."
        cta={{ label: 'Send a Message', href: '#contact-form' }}
        compact
      />

      <section className="section-pad">
        <div className="container-main">
          <Reveal><SectionHeading kicker="Reach Us" title="Contact Information" /></Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-3">
            {addressCards.map(({ icon: Icon, title, content, href }) => (
              <StaggerItem key={title}>
                <div className="card p-5 text-center sm:p-6">
                  <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center bg-brand text-white">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  {href ? (
                    <a href={href} className="mt-2 block text-sm text-muted hover:text-brand transition-colors">{content}</a>
                  ) : (
                    <p className="mt-2 text-sm text-muted">{content}</p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="contact-form" className="section-pad bg-surface">
        <div className="container-main grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal direction="right">
            <SectionHeading kicker="Write to Us" title="Send a Message" description="Fill out the form and we will get back to you as soon as possible." align="left" />
            <div className="card p-5 sm:p-6">
              <ContactForm action="https://formspree.io/f/xjkeqqzr" />
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <iframe title="VALUED Location Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.123456789!2d30.123456789!3d-1.23456789" className="h-80 w-full border border-slate-100 shadow-sm lg:h-full min-h-[20rem]" loading="lazy" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
