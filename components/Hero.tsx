'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Github, FileText, Mail, ArrowDown, Sparkles } from 'lucide-react';

const typingTexts = [
  'Building intelligent Salesforce solutions with AI',
  'Architecting enterprise-scale integrations',
  'Creating seamless user experiences',
  'Transforming business processes with automation',
];

export default function Hero() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typingTexts[currentIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % typingTexts.length);
    } else {
      const typingSpeed = isDeleting ? 50 : 100;
      const nextChar = isDeleting ? currentText.slice(0, -1) : current.slice(0, currentText.length + 1);
      timeout = setTimeout(() => {
        setCurrentText(nextChar);
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sf-gray-900 via-background to-sf-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-sf-blue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid opacity-10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Available for new opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-white via-copy to-sf-gray-400 bg-clip-text text-transparent"
            >
              Aslam Sharif
              <br />
              Mohammed
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold text-primary mb-6"
            >
              Salesforce Technical Architect
            </motion.p>

            {/* Typing animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-16 mb-8"
            >
              <p className="text-lg md:text-xl text-copy-secondary font-mono">
                {currentText}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                  className="inline-block w-0.5 h-6 ml-1 bg-primary align-middle"
                />
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">8+</div>
                <div className="text-sm text-copy-secondary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">48+</div>
                <div className="text-sm text-copy-secondary">Trailhead Badges</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-copy-secondary">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4</div>
                <div className="text-sm text-copy-secondary">Certifications</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className="group relative px-8 py-4 bg-primary text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FileText className="w-5 h-5" />
                  Request Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                href="https://github.com/aslamkemu"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-transparent border-2 border-primary text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Github className="w-5 h-5" />
                View GitHub
              </Link>

              <Link
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className="group px-8 py-4 bg-transparent border-2 border-copy-secondary text-copy-secondary font-semibold rounded-lg transition-all duration-300 hover:bg-copy-secondary hover:text-background hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-sf-blue/20 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-primary/30 to-transparent animate-spin-slow"></div>
              
              {/* Profile image */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/30">
                <Image
                  src="/images/aslam.jpg"
                  alt="Aslam Sharif Mohammed"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 px-4 py-2 bg-sf-gray-800 border border-primary/30 rounded-full shadow-lg"
              >
                <span className="text-sm font-semibold text-primary">AI Specialist</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-sf-gray-800 border border-primary/30 rounded-full shadow-lg"
              >
                <span className="text-sm font-semibold text-primary">Dallas, TX</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-copy-secondary hover:text-primary transition-colors duration-300"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}
