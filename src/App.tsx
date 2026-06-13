import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Layout } from './components/layout/Layout';
import { PageTransition } from './components/motion/PageTransition';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Programs } from './pages/Programs';
import { Campus } from './pages/Campus';
import { Impact } from './pages/Impact';
import { Contact } from './pages/Contact';
import { Apply } from './pages/Apply';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/programs" element={<PageTransition><Programs /></PageTransition>} />
          <Route path="/campus" element={<PageTransition><Campus /></PageTransition>} />
          <Route path="/impact" element={<PageTransition><Impact /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/apply" element={<PageTransition><Apply /></PageTransition>} />
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
