'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Github, ExternalLink, MapPin, Award, Briefcase, Code } from 'lucide-react';

const highlights = [
  {
    icon: Briefcase,
    title: '8+ Years',
    description: 'Salesforce Architecture Experience',
  },
  {
    icon: Award,
    title: 'Certified',
    description: 'Agentforce Specialist & AI Associate',
  },
  {
    icon: MapPin,
    title: 'Dallas, TX',
    description: 'H-1B Ready (Oct 2026)',
  },
  {
    icon: Code,
    title: 'Full-Stack',
    description: 'Salesforce + Laravel + Vue.js',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-sf-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transforming Business with
            <span className="block text-primary mt-2">Intelligent Solutions</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://picsum.photos/seed/about-tech/800/600"
                alt="Salesforce Architecture"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"></div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-sf-gray-800 border border-primary/20 rounded-xl p-6 shadow-2xl max-w-xs"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">48+</div>
                  <div className="text-sm text-copy-secondary">Trailhead Badges</div>
                </div>
              </div>
              <div className="text-xs text-copy-secondary">
                Ranger Status • Agentforce World Tour '26
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-copy leading-relaxed">
                I'm a <span className="text-primary font-semibold">Salesforce Technical Architect</span> with 
                over 8 years of experience architecting robust, scalable solutions that drive business transformation. 
                My journey spans diverse global markets, including significant contributions in Saudi Arabia.
              </p>
              <p className="text-lg text-copy leading-relaxed">
                From 2022 to 2026, I embarked on a <span className="text-primary font-semibold">Technical Sabbatical</span> — 
                a focused period of growth where I earned my Agentforce Specialist certification and expanded my expertise 
                into full-stack development, mastering technologies like Laravel, Vue.js, and modern AI integration.
              </p>
              <p className="text-lg text-copy leading-relaxed">
                Based in <span className="text-primary font-semibold">Dallas, Texas</span>, I'm actively seeking 
                opportunities to leverage my unique blend of Salesforce expertise and full-stack capabilities. 
                I'm an H-1B Change of Status candidate with immediate availability starting October 2026.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-sf-gray-800 border border-primary/10 rounded-xl p-4 hover:border-primary/30 transition-colors duration-300"
                >
                  <item.icon className="w-8 h-8 text-primary mb-2" />
                  <div className="font-semibold text-white mb-1">{item.title}</div>
                  <div className="text-sm text-copy-secondary">{item.description}</div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-6">
              <Link
                href="https://linkedin.com/in/aslam-sharif-mohammed-36988911a"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-sf-gray-800 border border-primary/20 rounded-lg hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                <span className="text-sm font-medium text-copy group-hover:text-white transition-colors duration-300">LinkedIn</span>
                <ExternalLink className="w-4 h-4 text-copy-secondary group-hover:text-white transition-colors duration-300" />
              </Link>

              <Link
                href="https://github.com/aslamkemu"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-sf-gray-800 border border-primary/20 rounded-lg hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <Github className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                <span className="text-sm font-medium text-copy group-hover:text-white transition-colors duration-300">GitHub</span>
                <ExternalLink className="w-4 h-4 text-copy-secondary group-hover:text-white transition-colors duration-300" />
              </Link>

              <Link
                href="https://trailblazer.me/id/aslamkemu"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-sf-gray-800 border border-primary/20 rounded-lg hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <Award className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                <span className="text-sm font-medium text-copy group-hover:text-white transition-colors duration-300">Trailhead</span>
                <ExternalLink className="w-4 h-4 text-copy-secondary group-hover:text-white transition-colors duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
