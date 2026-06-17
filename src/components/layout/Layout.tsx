import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      {!isHome && <Navbar />}
      <main className="relative flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
