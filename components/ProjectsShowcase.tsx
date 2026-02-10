'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, Sparkles } from 'lucide-react';
import { useState } from 'react';

import projectsData from '@/data/projects.json';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  screenshots?: string[];
  category: string[];
  tags: string[];
  techStack?: string[];
  github?: string;
  demo?: string;
  links?: {
    github?: string;
    liveDemo?: string;
  };
  featured: boolean;
}

const projectCategories = [
  'All',
  'Salesforce',
  'AI',
  'Full-Stack',
  'Integration',
];

const ProjectsShowcase = () => {
  const [filter, setFilter] = useState('All');
  const projects = projectsData as Project[];

  // If no projects, don't render the section
  if (projects.length === 0) {
    return null;
  }

  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return true;
    return project.category.includes(filter);
  }).slice(0, 6); // Show only 6 featured projects

  return (
    <section id="projects" className="py-24 bg-sf-gray-900 relative overflow-hidden">
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
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-copy-secondary max-w-2xl mx-auto">
            Showcasing innovative solutions from enterprise Salesforce implementations to full-stack applications
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                  : 'bg-sf-gray-800 text-copy-secondary hover:text-white border border-primary/10 hover:border-primary/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-sf-gray-800 rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.screenshots?.[0] || `https://picsum.photos/seed/${project.id}/700/400`}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sf-gray-900 via-sf-gray-900/50 to-transparent opacity-60"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold">
                    <Sparkles className="w-3 h-3" />
                    {Array.isArray(project.category) ? project.category[0] : project.category}
                  </span>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-copy-secondary mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {(project.techStack || project.tags).slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                  {(project.techStack || project.tags).length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium text-copy-secondary">
                      +{(project.techStack || project.tags).length - 3}
                    </span>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  {project.links?.github && (
                    <Link
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-sf-gray-700 border border-primary/20 rounded-lg text-sm font-medium text-copy hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Link>
                  )}
                  {project.links?.liveDemo && (
                    <Link
                      href={project.links.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary border border-primary rounded-lg text-sm font-medium text-white hover:bg-primary-dark transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Link>
                  )}
                </div>
              </div>

              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
          >
            View All Projects
            <ExternalLink className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
