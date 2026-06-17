import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { isNavActive, navLinks, type NavLinkItem } from '../../data/navigation';
import { images } from '../../data/images';
import { Button } from '../ui/Button';
import { LazyImage } from '../ui/LazyImage';
import { NavDropdown } from './NavDropdown';

function DesktopNavLink({ link }: { link: NavLinkItem }) {
  const location = useLocation();
  const active = isNavActive(location.pathname, link);

  if (!link.children) {
    return (
      <NavLink
        to={link.path}
        end={link.path === '/'}
        className={() =>
          `px-3 py-2 text-sm font-medium transition-colors xl:px-3.5 ${
            active ? 'bg-brand-muted text-brand' : 'text-slate-600 hover:bg-slate-50 hover:text-brand'
          }`
        }
      >
        {link.label}
      </NavLink>
    );
  }

  return (
    <NavDropdown label={link.label} active={active}>
      <Link
        to={link.path}
        className={`block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-brand-muted hover:text-brand ${
          location.pathname === link.path ? 'bg-brand-muted text-brand' : 'text-slate-600'
        }`}
      >
        All Programs
      </Link>
      {link.children.map((child) => (
        <Link
          key={child.path}
          to={child.path}
          className={`block px-4 py-2.5 text-sm transition-colors hover:bg-brand-muted hover:text-brand ${
            location.pathname === child.path ? 'bg-brand-muted font-medium text-brand' : 'text-slate-600'
          }`}
        >
          {child.label}
        </Link>
      ))}
    </NavDropdown>
  );
}

function MobileNavLink({
  link,
  onNavigate,
}: {
  link: NavLinkItem;
  onNavigate: () => void;
}) {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const active = isNavActive(location.pathname, link);

  if (!link.children) {
    return (
      <NavLink
        to={link.path}
        end={link.path === '/'}
        onClick={onNavigate}
        className={() =>
          `px-3 py-2.5 text-sm font-medium ${active ? 'bg-brand-muted text-brand' : 'text-slate-600'}`
        }
      >
        {link.label}
      </NavLink>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        className={`flex w-full items-center justify-between px-3 py-2.5 text-sm font-medium ${
          active ? 'bg-brand-muted text-brand' : 'text-slate-600'
        }`}
      >
        {link.label}
        <ChevronDown size={16} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-l-2 border-brand/20 pl-3"
          >
            <NavLink
              to={link.path}
              onClick={onNavigate}
              className={() =>
                `block px-3 py-2 text-sm ${
                  location.pathname === link.path ? 'font-medium text-brand' : 'text-slate-500'
                }`
              }
            >
              All Programs
            </NavLink>
            {link.children.map((child) => (
              <NavLink
                key={child.path}
                to={child.path}
                onClick={onNavigate}
                className={() =>
                  `block px-3 py-2 text-sm ${
                    location.pathname === child.path ? 'font-medium text-brand' : 'text-slate-500'
                  }`
                }
              >
                {child.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar({
  embedded = false,
  fullWidth = false,
}: {
  embedded?: boolean;
  fullWidth?: boolean;
}) {
  const [open, setOpen] = useState(false);

  const innerBarClass = fullWidth
    ? 'container-main py-3.5'
    : embedded
      ? 'px-4 py-3.5 sm:px-6 sm:py-4 lg:px-8'
      : 'container-main py-3.5';

  return (
    <header
      className={
        embedded
          ? 'relative z-50 overflow-visible bg-white'
          : 'sticky top-0 z-50 overflow-visible border-b border-slate-100 bg-white/95 backdrop-blur-md'
      }
    >
      <div className={`flex items-center justify-between gap-3 ${innerBarClass}`}>
        <Link to="/" className="flex min-w-0 shrink items-center gap-2">
          <LazyImage src={images.logo} alt="VALUED" className="h-8 w-8 shrink-0 object-cover sm:h-9 sm:w-9" priority />
          <span className="truncate text-base font-extrabold tracking-tight text-brand sm:text-lg">VALUED</span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {navLinks.map((link) => (
            <DesktopNavLink key={link.path} link={link} />
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Button to="/apply" size="sm">Apply Now</Button>
        </div>

        <button
          type="button"
          className="shrink-0 p-2 text-slate-600 hover:bg-slate-50 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-visible border-t border-slate-100 bg-white lg:hidden"
          >
            <nav className={`flex flex-col gap-1 py-4 ${embedded && !fullWidth ? 'px-4 sm:px-6 lg:px-8' : 'px-4'}`}>
              {navLinks.map((link) => (
                <MobileNavLink key={link.path} link={link} onNavigate={() => setOpen(false)} />
              ))}
              <Button to="/apply" className="mt-2 w-full" onClick={() => setOpen(false)}>Apply Now</Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
