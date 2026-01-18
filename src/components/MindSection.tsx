'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Lightbulb, Target, Zap, Layers, Workflow, GitBranch, Puzzle } from 'lucide-react'

const mentalModels = [
  {
    icon: Brain,
    title: 'Systems Thinking',
    description: 'Understanding complex problems as interconnected systems, not isolated components.',
    color: 'from-accent-cyan to-blue-500',
  },
  {
    icon: Layers,
    title: 'First Principles',
    description: 'Breaking down problems to fundamental truths and rebuilding solutions from the ground up.',
    color: 'from-accent-purple to-violet-500',
  },
  {
    icon: GitBranch,
    title: 'Iterative Development',
    description: 'Continuous improvement through rapid prototyping, testing, and refinement cycles.',
    color: 'from-accent-pink to-rose-500',
  },
  {
    icon: Puzzle,
    title: 'Abstraction Layers',
    description: 'Creating clean interfaces between complex components for maintainability and scale.',
    color: 'from-accent-green to-emerald-500',
  },
]

const thinkingProcess = [
  { step: '01', title: 'Understand', description: 'Deep dive into problem space, user needs, and constraints' },
  { step: '02', title: 'Research', description: 'Explore existing solutions, patterns, and cutting-edge approaches' },
  { step: '03', title: 'Design', description: 'Architect systems with scalability, maintainability, and elegance' },
  { step: '04', title: 'Build', description: 'Implement with clean code, thorough testing, and documentation' },
  { step: '05', title: 'Iterate', description: 'Measure impact, gather feedback, and continuously improve' },
]

const philosophies = [
  {
    quote: "Technology is a means, not an end. The thinking that precedes implementation matters most.",
    context: 'On Building Systems',
  },
  {
    quote: "Learning is not a destination but a journey. The portfolio should capture evolution, not perfection.",
    context: 'On Continuous Growth',
  },
  {
    quote: "The most powerful insights come from the intersection of disciplines.",
    context: 'On Multidisciplinary Integration',
  },
]

export default function MindSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="mind" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-[100px]" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 border border-accent-cyan/30 mb-6"
          >
            <Brain className="w-8 h-8 text-accent-cyan" />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            <span className="text-white">The </span>
            <span className="text-gradient">Mind Layer</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Revealing how reasoning, thinking, and problem modeling work. 
            Explore the mental models and frameworks that drive innovation.
          </p>
        </motion.div>

        {/* Mental Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {mentalModels.map((model, index) => {
            const Icon = model.icon
            return (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group glass rounded-2xl p-8 hover:border-accent-cyan/30 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${model.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{model.title}</h3>
                <p className="text-gray-400 leading-relaxed">{model.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Thinking Process */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-display font-bold text-white text-center mb-12">
            <Workflow className="inline-block w-6 h-6 text-accent-cyan mr-3" />
            Problem-Solving Methodology
          </h3>
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink -translate-y-1/2" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {thinkingProcess.map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative glass rounded-2xl p-6 text-center hover:border-accent-cyan/30 transition-all"
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center text-sm font-bold text-white">
                    {process.step}
                  </div>
                  <h4 className="text-lg font-semibold text-white mt-4 mb-2">{process.title}</h4>
                  <p className="text-sm text-gray-400">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Philosophies */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-display font-bold text-white text-center mb-12">
            <Lightbulb className="inline-block w-6 h-6 text-accent-amber mr-3" />
            Core Philosophies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophies.map((philosophy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-2xl p-8 hover:border-accent-purple/30 transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-pink" />
                <blockquote className="text-gray-300 italic mb-4 leading-relaxed">
                  "{philosophy.quote}"
                </blockquote>
                <p className="text-sm text-accent-cyan font-medium">— {philosophy.context}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Traits */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-3">
            {[
              'Systems Thinker',
              'Multidisciplinary',
              'First Principles',
              'Impact-Driven',
              'Continuous Learner',
              'Innovation Focused',
            ].map((trait, index) => (
              <motion.span
                key={trait}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full glass text-sm font-medium text-gray-300 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all cursor-default"
              >
                {trait}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
