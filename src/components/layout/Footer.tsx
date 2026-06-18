import { Link } from 'react-router-dom';
import { navLinks, contactInfo, socialLinks, programLinks } from '../../data/navigation';
import { images } from '../../data/images';
import { Button } from '../ui/Button';
import { LazyImage } from '../ui/LazyImage';
import { SocialLinkButton } from '../ui/SocialIcon';
import { Reveal } from '../motion/Reveal';

export function Footer() {
  return (
    <footer className="bg-brand-footer text-white">
      <div className="brand-section-inner container-main py-14">
        <Reveal>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <LazyImage src={images.logo} alt="VALUED" className="h-9 w-9 object-cover" />
                <span className="text-lg font-extrabold">VALUED Program</span>
              </div>
              <p className="text-sm leading-relaxed text-red-100/70">
                Empowering youth talents across Africa through creativity, leadership, and community impact.
              </p>
              <div className="mt-4 flex gap-2">
                {socialLinks.map((link) => (
                  <SocialLinkButton
                    key={link.label}
                    href={link.href}
                    label={link.label}
                    platform={link.platform}
                    variant="light"
                  />
                ))}
              </div>
            </div>

            <div>
              <h6 className="mb-4 text-xs font-bold uppercase tracking-widest text-red-200/60">Explore</h6>
              <ul className="space-y-2.5">
                {navLinks.slice(1).filter((link) => link.label !== 'Programs').map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-red-100/70 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="mb-4 text-xs font-bold uppercase tracking-widest text-red-200/60">Programs</h6>
              <ul className="space-y-2.5">
                {programLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-red-100/70 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="mb-4 text-xs font-bold uppercase tracking-widest text-red-200/60">Quick Links</h6>
              <ul className="space-y-2.5 text-sm text-red-100/70">
                <li><Link to="/apply" className="transition-colors hover:text-white">How to Apply</Link></li>
                <li><Link to="/gallery" className="transition-colors hover:text-white">Gallery</Link></li>
                <li><Link to="/contact" className="transition-colors hover:text-white">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h6 className="mb-4 text-xs font-bold uppercase tracking-widest text-red-200/60">Contact</h6>
              <ul className="space-y-2 text-sm text-red-100/70">
                <li>{contactInfo.email}</li>
                {contactInfo.phones.map((phone) => <li key={phone}>{phone}</li>)}
                <li className="pt-1">{contactInfo.address}</li>
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-red-100/50">© {new Date().getFullYear()} VALUED Program. All rights reserved.</p>
          <Button to="/apply" variant="white" size="sm">Join Our Program</Button>
        </div>
      </div>
    </footer>
  );
}
