import { useEffect, useState } from 'react';
import { Navbar } from './Navbar';

const SCROLL_THRESHOLD_RATIO = 0.72;

export function HomeNavbar() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

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

  return (
    <div
      className={`pointer-events-none fixed z-50 transition-all duration-300 ease-out ${
        scrolledPastHero
          ? 'inset-x-0 top-0'
          : 'inset-x-3 top-3 sm:inset-x-6 sm:top-6 lg:inset-x-10 lg:top-8'
      }`}
    >
      <div
        className={`pointer-events-auto overflow-visible bg-white transition-all duration-300 ${
          scrolledPastHero
            ? 'border-b border-slate-100 shadow-md'
            : 'shadow-[0_8px_32px_rgba(0,0,0,0.14)]'
        }`}
      >
        <Navbar embedded={!scrolledPastHero} fullWidth={scrolledPastHero} />
      </div>
    </div>
  );
}
