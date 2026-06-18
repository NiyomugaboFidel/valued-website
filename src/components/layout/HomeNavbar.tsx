import { useEffect, useState } from 'react';
import { Navbar } from './Navbar';

const SCROLL_THRESHOLD_RATIO = 0.72;

export function HomeNavbar() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * SCROLL_THRESHOLD_RATIO;
      setScrolledPastHero(window.scrollY > threshold);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const solidNav = scrolledPastHero || hovered || menuOpen || dropdownOpen;
  const overHero = !scrolledPastHero && !solidNav;

  return (
    <div
      className={`pointer-events-none fixed z-50 transition-all duration-300 ease-out ${
        scrolledPastHero
          ? 'inset-x-0 top-0'
          : 'inset-x-3 top-3 sm:inset-x-6 sm:top-6 lg:inset-x-10 lg:top-8'
      }`}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`pointer-events-auto overflow-visible transition-all duration-300 ${
          solidNav
            ? scrolledPastHero
              ? 'border-b border-slate-100 bg-white shadow-md'
              : 'bg-white shadow-[0_8px_32px_rgba(0,0,0,0.14)]'
            : ''
        }`}
      >
        <Navbar
          embedded={!scrolledPastHero}
          fullWidth={scrolledPastHero}
          overHero={overHero}
          onMenuOpenChange={setMenuOpen}
          onDropdownOpenChange={setDropdownOpen}
        />
      </div>
    </div>
  );
}
