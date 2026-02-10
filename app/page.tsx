'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import BackToTopButton from '@/components/BackToTopButton';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Contact />
      <BackToTopButton />
      <Footer />
    </main>
  );
}
