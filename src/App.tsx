import { Suspense, lazy } from 'react';
import type { ReactNode } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Layout } from './components/layout/Layout';
import { PageTransition } from './components/motion/PageTransition';
import { PageLoader } from './components/ui/PageLoader';
import { Home } from './pages/Home';

const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Programs = lazy(() => import('./pages/Programs').then((m) => ({ default: m.Programs })));
const Vsep = lazy(() => import('./pages/programs/Vsep').then((m) => ({ default: m.Vsep })));
const ValueXchange = lazy(() => import('./pages/programs/ValueXchange').then((m) => ({ default: m.ValueXchange })));
const ConnectCheers = lazy(() => import('./pages/programs/ConnectCheers').then((m) => ({ default: m.ConnectCheers })));
const InnovaKidz = lazy(() => import('./pages/programs/InnovaKidz').then((m) => ({ default: m.InnovaKidz })));
const Gallery = lazy(() => import('./pages/Gallery').then((m) => ({ default: m.Gallery })));
const Impact = lazy(() => import('./pages/Impact').then((m) => ({ default: m.Impact })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const Apply = lazy(() => import('./pages/Apply').then((m) => ({ default: m.Apply })));

function LazyPage({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<PageLoader />}>
      <PageTransition>{children}</PageTransition>
    </Suspense>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="sync">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<LazyPage><About /></LazyPage>} />
          <Route path="/programs" element={<LazyPage><Programs /></LazyPage>} />
          <Route path="/programs/vsep" element={<LazyPage><Vsep /></LazyPage>} />
          <Route path="/programs/valuexchange" element={<LazyPage><ValueXchange /></LazyPage>} />
          <Route path="/programs/connect-cheers" element={<LazyPage><ConnectCheers /></LazyPage>} />
          <Route path="/programs/innovakidz" element={<LazyPage><InnovaKidz /></LazyPage>} />
          <Route path="/gallery" element={<LazyPage><Gallery /></LazyPage>} />
          <Route path="/campus" element={<Navigate to="/gallery" replace />} />
          <Route path="/impact" element={<LazyPage><Impact /></LazyPage>} />
          <Route path="/contact" element={<LazyPage><Contact /></LazyPage>} />
          <Route path="/apply" element={<LazyPage><Apply /></LazyPage>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
