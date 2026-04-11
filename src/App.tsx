import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Events from '@/pages/Events';
import Team from '@/pages/Team';
import Gallery from '@/pages/Gallery';
import Contact from '@/pages/Contact';
import Hackathons from '@/pages/Hackathons';
import Community from '@/pages/Community';
import Blog from '@/pages/Blog';
import Careers from '@/pages/Careers';
import Legal from '@/pages/Legal';
import CustomCursor from '@/components/ui/CustomCursor';
import { AnimatePresence, motion } from 'motion/react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Developer from './pages/Developer';

gsap.registerPlugin(ScrollTrigger);

// Scroll to top on route change
function ScrollToTop({ lenis }: { lenis?: Lenis | null }) {
  const { pathname } = useLocation();
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

import Loader from '@/components/ui/Loader';

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Lock scroll while loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const handleRefresh = () => lenis.resize();
    ScrollTrigger.addEventListener('refresh', handleRefresh);
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener('refresh', handleRefresh);
      gsap.ticker.remove(ticker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div
        className={`min-h-screen bg-background text-white selection:bg-primary selection:text-black transition-all duration-1000 ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <Navbar />
        <ScrollToTop lenis={lenisRef.current} />
        <main>
          <AnimatePresence mode="wait">
            <Routes location={location}>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <Home />
                  </PageWrapper>
                }
              />
              <Route
                path="/about"
                element={
                  <PageWrapper>
                    <About />
                  </PageWrapper>
                }
              />
              <Route
                path="/events"
                element={
                  <PageWrapper>
                    <Events />
                  </PageWrapper>
                }
              />
              <Route
                path="/team"
                element={
                  <PageWrapper>
                    <Team />
                  </PageWrapper>
                }
              />
              <Route
                path="/gallery"
                element={
                  <PageWrapper>
                    <Gallery />
                  </PageWrapper>
                }
              />
              <Route
                path="/community"
                element={
                  <PageWrapper>
                    <Community />
                  </PageWrapper>
                }
              />
              <Route
                path="/hackathons"
                element={
                  <PageWrapper>
                    <Hackathons />
                  </PageWrapper>
                }
              />
              <Route
                path="/blog"
                element={
                  <PageWrapper>
                    <Blog />
                  </PageWrapper>
                }
              />
              <Route
                path="/careers"
                element={
                  <PageWrapper>
                    <Careers />
                  </PageWrapper>
                }
              />
              <Route
                path="/privacy-policy"
                element={
                  <PageWrapper>
                    <Legal />
                  </PageWrapper>
                }
              />
              <Route
                path="/terms-&-conditions"
                element={
                  <PageWrapper>
                    <Legal />
                  </PageWrapper>
                }
              />
              <Route
                path="/code-of-conduct"
                element={
                  <PageWrapper>
                    <Legal />
                  </PageWrapper>
                }
              />
              <Route
                path="/community-guidelines"
                element={
                  <PageWrapper>
                    <Legal />
                  </PageWrapper>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageWrapper>
                    <Contact />
                  </PageWrapper>
                }
              />
              <Route
                path="/Team/:memberId"
                element={
                  <PageWrapper>
                    <Developer />
                  </PageWrapper>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
