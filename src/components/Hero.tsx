'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, ChevronDown, Sparkles, Code2, Brain, Database, Rocket } from 'lucide-react'

const roles = [
  'AI/ML Engineer',
  'Full-Stack Developer',
  'Data Scientist',
  'System Architect',
  'Innovation Leader',
]

const stats = [
  { label: 'Projects Built', value: '52+', icon: Code2 },
  { label: 'Technologies', value: '80+', icon: Database },
  { label: 'AI Systems', value: '15+', icon: Brain },
  { label: 'Live Deployments', value: '20+', icon: Rocket },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typeSpeed = isDeleting ? 50 : 100
    const pauseTime = 2000

    if (!isDeleting && displayText === currentRole) {
      setTimeout(() => setIsDeleting(true), pauseTime)
      return
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
      )
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="orb orb-cyan w-[500px] h-[500px] top-1/4 -left-64"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="orb orb-purple w-[600px] h-[600px] bottom-1/4 -right-64"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="orb orb-pink w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent-amber" />
            <span className="text-sm text-gray-300">
              Open to Opportunities • B.Tech CSE (Data Science) @ Vidyashilp University
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-display font-bold mb-6"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="text-gradient-animated">Suraj Kumar</span>
          </motion.h1>

          {/* Dynamic Role */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-300 mb-8 h-12"
          >
            <span className="text-white">{displayText}</span>
            <span className="animate-pulse text-accent-cyan">|</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-400 mb-12 leading-relaxed"
          >
            Building intelligent systems that bridge{' '}
            <span className="text-accent-cyan">AI/ML</span>,{' '}
            <span className="text-accent-purple">Data Science</span>, and{' '}
            <span className="text-accent-pink">Full-Stack Development</span>.
            Creating impact through innovation at the intersection of thought, code, and real-world application.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-semibold text-lg hover:shadow-glow-lg transition-all duration-300 flex items-center gap-2"
            >
              <Code2 size={20} />
              Explore My Work
            </motion.a>
            <motion.a
              href="https://github.com/Suraj-creation"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl glass border border-white/10 text-white font-semibold text-lg hover:border-accent-cyan/50 hover:shadow-glow-sm transition-all duration-300 flex items-center gap-2"
            >
              <Github size={20} />
              View GitHub
            </motion.a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-2xl p-6 hover:border-accent-cyan/30 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-accent-cyan mb-3 mx-auto" />
                  <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center gap-4 mt-12"
          >
            {[
              { icon: Github, href: 'https://github.com/Suraj-creation', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/surajkumarvu', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:surajcreationinfinity1@gmail.com', label: 'Email' },
            ].map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-xl glass text-gray-400 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all"
                >
                  <Icon size={24} />
                </motion.a>
              )
            })}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#mind"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-accent-cyan transition-colors"
          >
            <span className="text-sm">Explore</span>
            <ChevronDown size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
