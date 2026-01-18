'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp, ExternalLink } from 'lucide-react'

const footerLinks = {
  navigation: [
    { name: 'Mind', href: '#mind' },
    { name: 'Build', href: '#projects' },
    { name: 'Learn', href: '#education' },
    { name: 'Impact', href: '#experience' },
    { name: 'Connect', href: '#contact' },
  ],
  social: [
    { name: 'GitHub', href: 'https://github.com/Suraj-creation', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/surajkumarvu', icon: Linkedin },
    { name: 'Email', href: 'mailto:surajcreationinfinity1@gmail.com', icon: Mail },
  ],
  projects: [
    { name: 'Healthcare AI', href: 'https://healthcare-prediction.vercel.app/' },
    { name: 'Jarurat Care', href: 'https://jarurat-care-cyan.vercel.app/' },
    { name: 'EEG Alzheimer\'s', href: 'https://machine-learning-suraj-creation.streamlit.app/' },
    { name: 'ChatGPT Clone', href: 'https://chatgpt-clone-taupe-one.vercel.app/' },
  ],
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative z-10 border-t border-white/5">
      {/* Gradient Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan via-accent-purple to-accent-pink p-[2px]">
                  <div className="w-full h-full rounded-xl bg-void flex items-center justify-center">
                    <span className="text-lg font-bold text-gradient">SK</span>
                  </div>
                </div>
                <div>
                  <span className="text-lg font-display font-bold text-white">Suraj Kumar</span>
                  <div className="text-xs text-gray-400 font-mono">Living System Portfolio</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                A dynamic, self-evolving digital organism reflecting intellectual growth in AI, 
                Machine Learning, and Full-Stack Development.
              </p>
              <div className="flex gap-3">
                {footerLinks.social.map((link) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-lg glass text-gray-400 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all"
                    >
                      <Icon size={18} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-white font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                {footerLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-accent-cyan transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Featured Projects */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-white font-semibold mb-4">Featured Projects</h3>
              <ul className="space-y-2">
                {footerLinks.projects.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-accent-cyan transition-colors text-sm flex items-center gap-1 group"
                    >
                      {link.name}
                      <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <p>📍 Bangalore, India</p>
                <p>📧 surajcreationinfinity1@gmail.com</p>
                <p>📱 +91 6204153972</p>
              </div>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 border border-accent-cyan/30 text-accent-cyan text-sm font-medium hover:shadow-glow-sm transition-all"
              >
                Send Message
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm flex items-center gap-1"
          >
            © {new Date().getFullYear()} Suraj Kumar. Built with{' '}
            <Heart size={14} className="text-accent-pink fill-accent-pink" /> and Next.js
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl glass text-gray-400 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-[100px]" />
      </div>
    </footer>
  )
}
