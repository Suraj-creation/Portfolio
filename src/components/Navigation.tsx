'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, Code2, Brain, Rocket, GraduationCap, Briefcase, Send } from 'lucide-react'

const navItems = [
  { name: 'Mind', href: '#mind', icon: Brain },
  { name: 'Build', href: '#projects', icon: Code2 },
  { name: 'Learn', href: '#education', icon: GraduationCap },
  { name: 'Impact', href: '#experience', icon: Briefcase },
  { name: 'Connect', href: '#contact', icon: Send },
]

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Suraj-creation', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/surajkumarvu', icon: Linkedin },
  { name: 'Email', href: 'mailto:surajcreationinfinity1@gmail.com', icon: Mail },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section
      const sections = navItems.map(item => item.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass py-3' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan via-accent-purple to-accent-pink p-[2px]">
                <div className="w-full h-full rounded-xl bg-void flex items-center justify-center">
                  <span className="text-lg font-bold text-gradient">SK</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-display font-bold text-white group-hover:text-gradient transition-all duration-300">
                  Suraj Kumar
                </span>
                <div className="text-xs text-gray-400 font-mono">Living System</div>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`nav-link px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                      activeSection === item.href.slice(1)
                        ? 'text-accent-cyan bg-accent-cyan/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon size={16} />
                    {item.name}
                  </motion.a>
                )
              })}
            </div>

            {/* Social Links & CTA */}
            <div className="hidden md:flex items-center gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg text-gray-400 hover:text-accent-cyan hover:bg-accent-cyan/10 transition-all duration-300"
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-2 px-5 py-2 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-medium text-sm hover:shadow-glow-md transition-all duration-300"
              >
                Let's Connect
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-void/95 backdrop-blur-xl" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm glass-heavy"
            >
              <div className="flex flex-col h-full pt-24 px-6 pb-8">
                <nav className="flex flex-col gap-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-4 px-4 py-4 rounded-xl text-lg font-medium text-gray-200 hover:text-white hover:bg-white/5 transition-all"
                      >
                        <Icon size={24} className="text-accent-cyan" />
                        {item.name}
                      </motion.a>
                    )
                  })}
                </nav>

                <div className="mt-auto">
                  <div className="flex justify-center gap-6 py-6">
                    {socialLinks.map((link) => {
                      const Icon = link.icon
                      return (
                        <a
                          key={link.name}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl text-gray-400 hover:text-accent-cyan hover:bg-accent-cyan/10 transition-all"
                        >
                          <Icon size={24} />
                        </a>
                      )
                    })}
                  </div>
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-medium text-center hover:shadow-glow-md transition-all"
                  >
                    Let's Connect
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
