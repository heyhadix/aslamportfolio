'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Cloud, Zap, Code, Wrench, Database, Layout, Sparkles, GitBranch } from 'lucide-react';

const categories = [
  {
    id: 'salesforce',
    name: 'Salesforce',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Apex', level: 95 },
      { name: 'Lightning Web Components', level: 90 },
      { name: 'OmniStudio', level: 85 },
      { name: 'Platform Events', level: 90 },
      { name: 'Queueable Apex', level: 92 },
      { name: 'SOQL Optimization', level: 88 },
    ],
  },
  {
    id: 'ai',
    name: 'AI & Automation',
    icon: Sparkles,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Agentforce', level: 90 },
      { name: 'Einstein AI', level: 85 },
      { name: 'Salesforce AI', level: 88 },
      { name: 'Process Builder', level: 95 },
      { name: 'Flow Builder', level: 92 },
      { name: 'AI Integration', level: 85 },
    ],
  },
  {
    id: 'fullstack',
    name: 'Full-Stack',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Laravel', level: 85 },
      { name: 'Vue.js', level: 82 },
      { name: 'TypeScript', level: 80 },
      { name: 'Next.js', level: 78 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps',
    icon: Wrench,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'SFDX CLI', level: 85 },
      { name: 'VS Code', level: 92 },
      { name: 'CI/CD', level: 80 },
      { name: 'Agile/Scrum', level: 85 },
      { name: 'Jira', level: 88 },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('salesforce');

  const activeData = categories.find(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-copy-secondary max-w-2xl mx-auto">
            A comprehensive toolkit combining enterprise Salesforce architecture with modern full-stack development
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg shadow-primary/30'
                    : 'bg-sf-gray-800 text-copy-secondary hover:text-white border border-primary/10 hover:border-primary/30'
                }`}
              >
                <div className="relative z-10 flex items-center gap-2">
                  <Icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </div>
                {activeCategory !== category.id && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Skills display */}
        {activeData && (
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {activeData.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-sf-gray-800 border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-white">{skill.name}</span>
                    <span className="text-sm font-bold text-primary">{skill.level}%</span>
                  </div>
                  <div className="relative w-full h-3 bg-sf-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${activeData.color} rounded-full`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech stack icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 p-8 bg-sf-gray-800 border border-primary/10 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">Tools & Technologies</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {['Salesforce', 'Apex', 'LWC', 'Agentforce', 'Laravel', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind', 'Git', 'SFDX', 'VS Code'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="px-4 py-2 bg-sf-gray-700 border border-primary/20 rounded-lg text-sm font-medium text-copy hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
