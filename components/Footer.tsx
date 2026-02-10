'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-sf-gray-900 border-t border-primary/10 py-12"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-sf-blue flex items-center justify-center font-bold text-white text-xl">
                A
              </div>
              <span className="text-xl font-bold text-white">Aslam Sharif</span>
            </div>
            <p className="text-sm text-copy-secondary">
              Salesforce Technical Architect specializing in AI-powered solutions and enterprise integrations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Certifications', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-copy-secondary hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-3 mb-4">
              <Link
                href="https://linkedin.com/in/aslam-sharif-mohammed-36988911a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-sf-gray-800 border border-primary/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
              </Link>
              <Link
                href="https://github.com/aslamkemu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-sf-gray-800 border border-primary/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
              </Link>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 text-success text-sm font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              H-1B Sponsorship Welcome
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-copy-secondary text-center md:text-left">
              © {new Date().getFullYear()} Aslam Sharif Mohammed. All rights reserved.
            </p>
            <p className="text-sm text-copy-secondary flex items-center gap-1">
              Built with{' '}
              <Heart className="w-4 h-4 text-error fill-error" />{' '}
              using{' '}
              <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Next.js
              </Link>
              {' '}&{' '}
              <Link href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Tailwind CSS
              </Link>
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
