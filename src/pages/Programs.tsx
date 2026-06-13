import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ContactForm } from '../components/ui/ContactForm';
import { LazyImage } from '../components/ui/LazyImage';
import { CtaBand } from '../components/sections/CtaBand';
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal';
import { galleryImages, programDetails, team, testimonials } from '../data/content';

const programFaqs = [
  { q: 'Who can join?', a: 'Youth aged 6–20. No prior experience needed for most tracks.' },
  { q: 'What are the fees?', a: 'T-shirt 10,000 RWF, football kit 20,000 RWF, monthly program fee 2,000 RWF. Scholarships available.' },
  { q: 'How long do programs run?', a: 'From 4-week intensives to 12-month ongoing sessions depending on the track.' },
];

export function Programs() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <PageHero
        kicker="Programs"
        title="Structured Pathways for Every Young Talent"
        description="From weekly InnovaKidz sessions to national competitions and professional workshops — find the program that fits your goals."
        cta={{ label: 'Sign Up Today', href: '#join-form' }}
      />

      <section className="section-pad">
        <div className="container-main space-y-14 lg:space-y-20">
          {programDetails.map((program, i) => (
            <Reveal key={program.title} direction={i % 2 === 0 ? 'right' : 'left'}>
              <div className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <LazyImage src={program.image} alt={program.title} className="h-56 w-full object-cover shadow-md sm:h-72" />
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-brand sm:text-xs">Program {i + 1}</span>
                  <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">{program.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{program.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="join-form" className="section-pad bg-surface">
        <Reveal className="container-main max-w-xl">
          <SectionHeading kicker="Enroll" title="Sign Up for a Program" description="Complete the form and our team will reach out within 48 hours." />
          <div className="card p-5 sm:p-6">
            <ContactForm action="https://formspree.io/f/xblavvbg" fields="join" />
          </div>
        </Reveal>
      </section>

      <section className="section-pad">
        <div className="container-main max-w-2xl">
          <Reveal><SectionHeading kicker="FAQ" title="Program Questions" /></Reveal>
          <div className="space-y-2">
            {programFaqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.05}>
                <div className="card overflow-hidden">
                  <button type="button" className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-semibold sm:px-5" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                    {faq.q}
                    <motion.span animate={{ rotate: openFaq === i ? 45 : 0 }} className="shrink-0 text-lg text-brand">+</motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                        <div className="border-t px-4 py-4 text-sm text-muted sm:px-5">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-main">
          <Reveal><SectionHeading kicker="Gallery" title="Program in Action" /></Reveal>
          <Stagger className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
            {galleryImages.map((src) => (
              <StaggerItem key={src}><LazyImage src={src} alt="Program" className="aspect-video w-full object-cover" /></StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main">
          <Reveal><SectionHeading kicker="Mentors" title="Program Leaders" /></Reveal>
          <Stagger className="grid gap-5 sm:grid-cols-3">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="card p-5 text-center">
                  <LazyImage src={member.image} alt={member.name} className="mx-auto h-20 w-20 object-cover sm:h-24 sm:w-24" />
                  <h4 className="mt-3 font-bold text-slate-900">{member.name}</h4>
                  <p className="text-sm text-muted">{member.role}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad bg-brand-dark text-white">
        <div className="container-main">
          <Reveal><SectionHeading kicker="Feedback" title="What Participants Say" light /></Reveal>
          <Stagger className="grid gap-4 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <StaggerItem key={t.author}>
                <blockquote className="h-full border border-white/10 bg-white/5 p-5">
                  <p className="text-sm italic leading-relaxed text-red-100/80">"{t.quote}"</p>
                  <footer className="mt-3 text-xs font-semibold text-red-200">— {t.author}</footer>
                </blockquote>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
