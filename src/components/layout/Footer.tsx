import { Link } from 'react-router-dom';
import { navLinks, contactInfo, socialLinks } from '../../data/navigation';
import { images } from '../../data/images';
import { Button } from '../ui/Button';
import { LazyImage } from '../ui/LazyImage';
import { Reveal } from '../motion/Reveal';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-main py-14">
        <Reveal>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-white/10 px-3 py-1.5 text-xs font-medium text-red-100/80 hover:bg-white/10 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h6 className="mb-4 text-xs font-bold uppercase tracking-widest text-red-200/60">Explore</h6>
              <ul className="space-y-2.5">
                {navLinks.slice(1).map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-red-100/70 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="mb-4 text-xs font-bold uppercase tracking-widest text-red-200/60">Quick Links</h6>
              <ul className="space-y-2.5 text-sm text-red-100/70">
                <li><Link to="/apply" className="hover:text-white transition-colors">How to Apply</Link></li>
                <li><Link to="/campus" className="hover:text-white transition-colors">Campus</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
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
