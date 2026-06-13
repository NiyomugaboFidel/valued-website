import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import { images } from '../../data/images';
import { Button } from '../ui/Button';
import { LazyImage } from '../ui/LazyImage';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="container-main flex items-center justify-between py-3.5">
        <Link to="/" className="flex items-center gap-2">
          <LazyImage src={images.logo} alt="VALUED" className="h-9 w-9 object-cover" priority />
          <span className="text-lg font-extrabold tracking-tight text-brand">VALUED</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'bg-brand-muted text-brand' : 'text-slate-600 hover:bg-slate-50 hover:text-brand'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/apply" size="sm">Apply Now</Button>
        </div>

        <button
          type="button"
          className="p-2 text-slate-600 hover:bg-slate-50 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
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
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2.5 text-sm font-medium ${isActive ? 'bg-brand-muted text-brand' : 'text-slate-600'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button to="/apply" className="mt-2 w-full" onClick={() => setOpen(false)}>Apply Now</Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
