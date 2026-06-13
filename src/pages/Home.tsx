import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Globe, Mail, MapPin, Phone, Sparkles, Trophy, Users } from 'lucide-react';
import { BusinessHero } from '../components/sections/BusinessHero';
import { CtaBand } from '../components/sections/CtaBand';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { StatCounter } from '../components/ui/StatCounter';
import { ContactForm } from '../components/ui/ContactForm';
import { LazyImage } from '../components/ui/LazyImage';
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal';
import { images } from '../data/images';
import { contactInfo } from '../data/navigation';
import {
  stats, corePrograms, innovakidzTracks, whyChoose, aboutSummary,
  testimonials, howItWorks, events, faqs, galleryImages, partners,
} from '../data/content';

const programIcons = { sparkles: Sparkles, trophy: Trophy, globe: Globe, users: Users };

const programTabs = [
  { label: 'InnovaKidz', key: 'tracks' as const },
  { label: 'RTIC', key: 'rtic' as const },
  { label: 'ValueXchange', key: 'valuexchange' as const },
  { label: 'Connect & Cheers', key: 'connect' as const },
];

export function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const tabContent = () => {
    if (activeTab === 0) {
      return (
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {innovakidzTracks.map((track) => (
            <StaggerItem key={track.title}>
              <motion.div whileHover={{ y: -3 }} className="card overflow-hidden">
                <LazyImage src={track.image} alt={track.title} className="h-28 w-full object-cover sm:h-32" />
                <div className="p-4">
                  <h4 className="text-sm font-bold text-slate-900">{track.title}</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">{track.description}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      );
    }
    const program = corePrograms[activeTab];
    const Icon = programIcons[program.icon as keyof typeof programIcons];
    return (
      <Reveal>
        <div className="card mx-auto max-w-2xl p-6 sm:p-8">
          <div className="mb-4 flex h-10 w-10 items-center justify-center bg-brand-muted text-brand">
            <Icon size={20} />
          </div>
          <h3 className="text-lg font-bold text-slate-900">{program.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{program.description}</p>
          <Button to={program.link} className="mt-6" size="sm">
            View Full Details <ArrowRight size={14} />
          </Button>
        </div>
      </Reveal>
    );
  };

  return (
    <>
      <BusinessHero />

      {/* Stats strip — desktop only (mobile shown in hero) */}
      <section className="hidden bg-brand py-10 lg:block">
        <Stagger className="container-main grid grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} light />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* About */}
      <section className="section-pad">
        <div className="container-main grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal direction="right" className="order-2 lg:order-1">
            <LazyImage src={images.culture} alt="VALUED youth at Light Center" className="w-full shadow-md" />
          </Reveal>
          <Reveal direction="left" delay={0.1} className="order-1 lg:order-2">
            <SectionHeading
              kicker={aboutSummary.kicker}
              title={aboutSummary.title}
              description={aboutSummary.description}
              align="left"
            />
            <ul className="space-y-3">
              {aboutSummary.points.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button to="/about" variant="outline">Our Story</Button>
              <Button to="/impact">See Our Impact</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Programs */}
      <section className="section-pad bg-surface">
        <div className="container-main">
          <Reveal>
            <SectionHeading
              kicker="What We Offer"
              title="Programs Built for Real Growth"
              description="Four structured pathways — from weekly youth sessions to national competitions and industry workshops."
            />
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {corePrograms.map((program) => {
              const Icon = programIcons[program.icon as keyof typeof programIcons];
              return (
                <StaggerItem key={program.id}>
                  <motion.div whileHover={{ y: -4 }} className="card flex h-full flex-col overflow-hidden">
                    <LazyImage src={program.image} alt={program.title} className="h-36 w-full object-cover" />
                    <div className="flex flex-1 flex-col p-5">
                      <div className="mb-3 flex h-9 w-9 items-center justify-center bg-brand-muted text-brand">
                        <Icon size={17} />
                      </div>
                      <h3 className="text-sm font-bold leading-snug text-slate-900">{program.title}</h3>
                      <p className="mt-2 flex-1 text-xs leading-relaxed text-muted">{program.description}</p>
                      <Button to={program.link} variant="outline" size="sm" className="mt-4 w-full sm:w-auto">
                        Learn More
                      </Button>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Program tracks tabs */}
      <section className="section-pad">
        <div className="container-main">
          <Reveal>
            <SectionHeading kicker="Explore Tracks" title="Find the Right Path" description="Browse our core programs and discover where your talent fits best." />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
              {programTabs.map((tab, i) => (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => setActiveTab(i)}
                  className={`shrink-0 px-4 py-2.5 text-xs font-semibold transition-colors sm:text-sm ${
                    activeTab === i
                      ? 'bg-brand text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-brand-muted hover:text-brand'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </Reveal>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {tabContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Why choose */}
      <section className="section-pad bg-brand-dark text-white">
        <div className="container-main">
          <Reveal>
            <SectionHeading kicker="Our Advantage" title="Why Families & Partners Choose VALUED" light />
          </Reveal>
          <Stagger className="grid gap-4 md:grid-cols-3 lg:gap-5">
            {whyChoose.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full border border-white/10 bg-white/5 p-6">
                  <h3 className="text-base font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-red-100/70">{item.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.points.map((point) => (
                      <li key={point} className="bg-white/10 px-2.5 py-1 text-[11px] font-medium text-red-100/90 sm:text-xs">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad">
        <div className="container-main">
          <Reveal><SectionHeading kicker="Get Started" title="How It Works" description="Three clear steps from application to showcase." /></Reveal>
          <Stagger className="grid gap-4 md:grid-cols-3 lg:gap-6">
            {howItWorks.map((step) => (
              <StaggerItem key={step.step}>
                <div className="card relative h-full p-6">
                  <span className="text-3xl font-extrabold text-brand/15">{step.step}</span>
                  <h3 className="mt-2 text-base font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-8 text-center">
            <Button to="/apply" size="lg">Start Your Application</Button>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad bg-surface">
        <div className="container-main">
          <Reveal><SectionHeading kicker="Testimonials" title="Voices From Our Community" /></Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {testimonials.map((t) => (
              <StaggerItem key={t.author}>
                <blockquote className="card h-full p-5">
                  <p className="text-sm leading-relaxed text-slate-600">"{t.quote}"</p>
                  <footer className="mt-4 border-t border-slate-50 pt-4 text-xs font-semibold text-brand">
                    {t.author} · {t.role}
                  </footer>
                </blockquote>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Events */}
      <section className="section-pad">
        <div className="container-main">
          <Reveal><SectionHeading kicker="Upcoming" title="Events & Activities" /></Reveal>
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:gap-4">
            {events.map((event) => (
              <StaggerItem key={event.title}>
                <div className="card flex gap-4 p-4 sm:p-5">
                  <div className="flex min-w-[3rem] flex-col items-center justify-center bg-brand-muted px-2 py-2 text-center">
                    <span className="text-[10px] font-bold uppercase text-brand">{event.tag}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-muted">{event.date}</p>
                    <h4 className="mt-0.5 text-sm font-bold text-slate-900 sm:text-base">{event.title}</h4>
                    <p className="mt-1 text-xs text-muted">{event.location}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad bg-surface">
        <div className="container-main">
          <Reveal><SectionHeading kicker="Gallery" title="Moments That Define Us" /></Reveal>
          <Stagger className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
            {galleryImages.map((src) => (
              <StaggerItem key={src}>
                <motion.div whileHover={{ scale: 1.02 }} className="h-full">
                  <LazyImage src={src} alt="VALUED program moment" className="aspect-square w-full object-cover" />
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Partners */}
      <section className="section-pad">
        <Reveal className="container-main text-center">
          <SectionHeading kicker="Partners" title="Organizations We Work With" />
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {partners.map((p) => (
              <LazyImage key={p.name} src={p.logo} alt={p.name} className="h-8 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0 sm:h-10" />
            ))}
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-surface">
        <div className="container-main max-w-2xl">
          <Reveal><SectionHeading kicker="FAQ" title="Common Questions" /></Reveal>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 0.04}>
                <div className="card overflow-hidden">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-semibold text-slate-900 sm:px-5"
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{faq.question}</span>
                    <motion.span animate={{ rotate: openFaq === i ? 45 : 0 }} className="shrink-0 text-lg text-brand leading-none">+</motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                        <div className="border-t border-slate-50 px-4 py-4 text-sm leading-relaxed text-muted sm:px-5">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-pad">
        <div className="container-main grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal direction="right">
            <SectionHeading kicker="Contact" title="Let's Start a Conversation" description="Questions about enrollment, partnerships, or programs — we respond promptly." align="left" />
            <div className="space-y-4">
              {[
                { icon: Mail, text: contactInfo.email, href: `mailto:${contactInfo.email}` },
                { icon: Phone, text: contactInfo.phones[0], href: `tel:${contactInfo.phones[0].replace(/\s/g, '')}` },
                { icon: MapPin, text: contactInfo.address },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-start gap-3 text-sm text-slate-600">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-brand-muted text-brand">
                    <Icon size={16} />
                  </div>
                  {href ? (
                    <a href={href} className="pt-1.5 hover:text-brand transition-colors">{text}</a>
                  ) : (
                    <span className="pt-1.5">{text}</span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <div className="card p-5 sm:p-6">
              <ContactForm action="https://formspree.io/f/xgvljjqj" />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
