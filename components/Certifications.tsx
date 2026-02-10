'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';

import certificationsData from '@/data/certifications.json';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications & Recognition
          </h2>
          <p className="text-lg text-copy-secondary max-w-2xl mx-auto">
            Industry-recognized certifications validating expertise in Salesforce and modern technologies
          </p>
        </motion.div>

        {/* Certifications grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-sf-gray-800 border border-primary/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden bg-sf-gray-700">
                <Image
                  src={cert.icon}
                  alt={cert.title}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sf-gray-800 via-transparent to-transparent opacity-60"></div>
                
                {/* Verified badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-success/90 backdrop-blur-sm flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm text-copy-secondary mb-2">{cert.date}</div>
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300 mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                
                <p className="text-sm text-copy-secondary mb-4 line-clamp-3">
                  {cert.description}
                </p>

                {cert.link && (
                  <Link
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors duration-300"
                  >
                    View on Trailblazer
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                )}
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Trailhead highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative bg-gradient-to-br from-sf-gray-800 to-sf-gray-900 border border-primary/20 rounded-2xl p-8 overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-grid opacity-5"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 mb-6">
              <Award className="w-10 h-10 text-primary" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Salesforce Trailblazer
            </h3>
            
            <div className="flex flex-wrap justify-center gap-8 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">48+</div>
                <div className="text-sm text-copy-secondary">Badges Earned</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">Ranger</div>
                <div className="text-sm text-copy-secondary">Trailhead Rank</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">2026</div>
                <div className="text-sm text-copy-secondary">Agentforce Tour</div>
              </div>
            </div>

            <Link
              href="https://trailblazer.me/id/aslamkemu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
            >
              View Trailblazer Profile
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
