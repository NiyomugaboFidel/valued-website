import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ContactForm } from '../components/ui/ContactForm';
import { LazyImage } from '../components/ui/LazyImage';
import { CtaBand } from '../components/sections/CtaBand';
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal';
import { images } from '../data/images';
import { galleryImages, campusFeatures } from '../data/content';

const campusTestimonials = [
  { quote: 'Campus life gave me confidence and leadership skills I use every day.', author: 'Alice', role: 'Student Leader' },
  { quote: 'The workshops let me build my first real project and present it publicly.', author: 'Brian', role: 'Innovator' },
  { quote: 'Community events created friendships and memories I will never forget.', author: 'Claire', role: 'Graduate' },
];

export function Campus() {
  return (
    <>
      <PageHero
        kicker="Campus Life"
        title="A Vibrant Space to Learn, Create, and Belong"
        description="Light Center in Kabuga is more than a venue — it is where youth gather weekly for training, events, and community."
        cta={{ label: 'Explore Campus', href: '#campus-life' }}
      />

      <section className="section-pad">
        <div className="container-main grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal direction="right" className="order-2 lg:order-1">
            <LazyImage src={images.campus} alt="VALUED campus" className="w-full shadow-md" />
          </Reveal>
          <Reveal direction="left" delay={0.1} className="order-1 lg:order-2">
            <SectionHeading
              kicker="Our Environment"
              title="Designed for Growth Inside and Outside the Classroom"
              description="Professional training spaces, supportive mentors, and a full calendar of meetups, showcases, and community gatherings."
              align="left"
            />
            <ul className="space-y-2 text-sm text-muted">
              <li>• Weekly training across 7 creative tracks</li>
              <li>• Community events open to families and partners</li>
              <li>• Safe, inclusive environment for all youth</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="campus-life" className="section-pad bg-surface">
        <div className="container-main">
          <Reveal><SectionHeading kicker="Experience" title="What Campus Life Includes" /></Reveal>
          <Stagger className="grid gap-4 md:grid-cols-3 lg:gap-5">
            {campusFeatures.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="card overflow-hidden">
                  <LazyImage src={feature.image} alt={feature.title} className="h-40 w-full object-cover sm:h-44" />
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main">
          <Reveal><SectionHeading kicker="Gallery" title="Life at Light Center" /></Reveal>
          <Stagger className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
            {galleryImages.map((src) => (
              <StaggerItem key={src}><LazyImage src={src} alt="Campus moment" className="aspect-square w-full object-cover" /></StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-main">
          <Reveal><SectionHeading kicker="Testimonials" title="Voices From Campus" /></Reveal>
          <Stagger className="grid gap-4 md:grid-cols-3">
            {campusTestimonials.map((t) => (
              <StaggerItem key={t.author}>
                <blockquote className="card h-full p-5">
                  <p className="text-sm leading-relaxed text-slate-600">"{t.quote}"</p>
                  <footer className="mt-4 text-xs font-semibold text-brand">— {t.author}, {t.role}</footer>
                </blockquote>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal direction="right">
            <SectionHeading kicker="Visit Us" title="Get in Touch" align="left" />
            <ContactForm action="https://formspree.io/f/xjkeqqzr" />
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <iframe title="VALUED Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.123456789!2d30.058!3d-1.940!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789abcdef!2sLight+Center!5e0!3m2!1sen!2srw!4v1690000000000!5m2!1sen!2srw" className="h-72 w-full border border-slate-100 shadow-sm sm:h-80 lg:h-full min-h-[18rem]" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
