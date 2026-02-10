'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Github, Mail } from 'lucide-react';

const skills = [
  'Apex',
  'LWC',
  'OmniStudio',
  'Laravel',
  'Vue.js',
  'Agentforce',
];

export default function About() {
  return (
    <section id="about" className="py-16 bg-background text-copy">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          ABOUT ME
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image or Code Snippet Background */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl border border-gray-800 bg-gray-900 flex items-center justify-center"
          >
            <Image
              src="/images/profile-square.jpg" // Placeholder for professional image
              alt="Aslam Sharif Mohammed Profile"
              fill
              style={{ objectFit: 'cover' }}
              className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            />
            {/* Optionally overlay a code snippet */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white p-4 text-center text-lg font-mono opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p>'Architecting intelligent Salesforce solutions...'</p>
            </div>
          </motion.div>

          {/* Right Column - About Text and Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 text-lg"
          >
            <p className="text-secondary">
              Aslam Sharif Mohammed is a seasoned Salesforce Technical Architect with 8+ years of hands-on experience in architecting robust and scalable solutions.
              His journey includes significant contributions in diverse global markets, including Saudi Arabia.
            </p>
            <p className="text-secondary">
              From 2022 to 2026, Aslam undertook a <span className="font-bold text-primary-light">"Technical Sabbatical"</span>, a period of intensive self-improvement.
              During this time, he earned his Agentforce Specialist certification and honed his full-stack development skills, expanding his expertise beyond the Salesforce ecosystem.
            </p>
            <p className="text-secondary">
              Based in <span className="font-semibold text-primary-light">Dallas, Texas</span>, Aslam is available for new opportunities. He is H-1B Change of Status eligible, offering a $100K+ cost saving advantage compared to offshore hires.
            </p>

            <div className="flex items-center space-x-4 pt-4">
              <Link href="https://linkedin.com/in/aslam-sharif-mohammed-36988911a" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:text-accent transition-colors duration-200">
                <Linkedin className="h-8 w-8" />
              </Link>
              <Link href="https://github.com/aslamkemu" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:text-accent transition-colors duration-200">
                <Github className="h-8 w-8" />
              </Link>
              <Link href="mailto:aslamkemu@gmail.com" className="text-primary-light hover:text-accent transition-colors duration-200">
                <Mail className="h-8 w-8" />
              </Link>
              {/* Add Trailblazer link here once icon is determined if not Zap */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
