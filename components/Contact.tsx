'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Phone, Linkedin, Github, Award, Copy, MapPin, Briefcase, Send } from 'lucide-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import { trackContactSubmission } from '@/components/Analytics';

export default function Contact() {
  const email = 'aslamkemu@gmail.com';
  const phone = '972-670-2912';
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage({ type: 'success', text: 'Thank you! Your message has been sent. I\'ll get back to you soon.' });
        setFormData({ name: '', email: '', company: '', message: '' });
        trackContactSubmission(true);
      } else {
        const data = await response.json();
        setSubmitMessage({ type: 'error', text: data.error || 'Something went wrong. Please try again later.' });
        trackContactSubmission(false);
      }
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'Failed to send message. Please try again later.' });
      trackContactSubmission(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-sf-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-copy-secondary max-w-2xl mx-auto">
            Ready to transform your Salesforce architecture? Let's discuss your next big project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left side - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact cards */}
            <div className="bg-sf-gray-800 border border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-copy-secondary mb-1">Email</div>
                  <div className="font-semibold text-white">{email}</div>
                </div>
                <CopyToClipboard text={email} onCopy={handleCopy}>
                  <button className="p-2 rounded-lg bg-sf-gray-700 hover:bg-primary transition-colors duration-300">
                    <Copy className="w-4 h-4 text-copy hover:text-white" />
                  </button>
                </CopyToClipboard>
              </div>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-success"
                >
                  ✓ Copied to clipboard!
                </motion.div>
              )}
            </div>

            <div className="bg-sf-gray-800 border border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-colors duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-copy-secondary mb-1">Phone</div>
                  <div className="font-semibold text-white">{phone}</div>
                </div>
              </div>
            </div>

            <div className="bg-sf-gray-800 border border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-colors duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-copy-secondary mb-1">Location</div>
                  <div className="font-semibold text-white">Dallas, Texas</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-sf-blue/10 border border-primary/20 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-copy-secondary mb-1">Availability</div>
                  <div className="font-semibold text-success">H-1B Ready (Oct 2026)</div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <Link
                href="https://linkedin.com/in/aslam-sharif-mohammed-36988911a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-4 bg-sf-gray-800 border border-primary/10 rounded-xl hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
              </Link>
              <Link
                href="https://github.com/aslamkemu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-4 bg-sf-gray-800 border border-primary/10 rounded-xl hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
              </Link>
              <Link
                href="https://trailblazer.me/id/aslamkemu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-4 bg-sf-gray-800 border border-primary/10 rounded-xl hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <Award className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
              </Link>
            </div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-sf-gray-800 border border-primary/10 rounded-2xl p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-copy mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-sf-gray-700 border border-primary/10 rounded-lg text-white placeholder:text-copy-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-error text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-copy mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-sf-gray-700 border border-primary/10 rounded-lg text-white placeholder:text-copy-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-error text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-copy mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-sf-gray-700 border border-primary/10 rounded-lg text-white placeholder:text-copy-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                  placeholder="Your company (optional)"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-copy mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-sf-gray-700 border border-primary/10 rounded-lg text-white placeholder:text-copy-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
                {errors.message && <p className="text-error text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    submitMessage.type === 'success'
                      ? 'bg-success/10 border border-success/20 text-success'
                      : 'bg-error/10 border border-error/20 text-error'
                  }`}
                >
                  {submitMessage.text}
                </motion.div>
              )}

              <div className="text-center pt-4">
                <Link
                  href="https://calendly.com/aslamkemu/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors duration-300"
                >
                  Or schedule a 30-min technical discussion
                  <Send className="w-4 h-4" />
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
