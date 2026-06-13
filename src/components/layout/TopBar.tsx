import { Mail, Phone } from 'lucide-react';
import { contactInfo, socialLinks } from '../../data/navigation';

export function TopBar() {
  return (
    <div className="hidden border-b border-brand-dark/20 bg-brand-dark text-white md:block">
      <div className="container-main flex items-center justify-between py-2 text-xs">
        <div className="flex items-center gap-5">
          <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-1.5 hover:text-red-200 transition-colors">
            <Mail size={13} />
            {contactInfo.email}
          </a>
          <a href={`tel:${contactInfo.phones[0].replace(/\s/g, '')}`} className="flex items-center gap-1.5 hover:text-red-200 transition-colors">
            <Phone size={13} />
            {contactInfo.phones[0]}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-red-200/70">Follow Us:</span>
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hover:text-red-200 transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
