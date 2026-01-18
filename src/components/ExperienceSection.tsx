'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Briefcase, Calendar, MapPin, ExternalLink, 
  Building, Users, Code, TrendingUp, Award, Heart
} from 'lucide-react'

const experiences = [
  {
    id: 1,
    type: 'work',
    title: 'AI Intern',
    company: 'GoCrackIT',
    location: 'Virtual',
    duration: 'Jun 2025 - Jul 2025',
    description: [
      'Designed and developed an AI-powered Autofill and Resume Generation platform using Flask, Python',
      'Implemented a dual-pipeline architecture combining Gemini AI and open-source tools (PyPDF2, pdfplumber, Tesseract OCR, spaCy)',
      'Achieved 98% accuracy for personal information and 96% accuracy for structured fields',
      'Performed advanced prompt engineering, document chunking, and validation logic',
    ],
    skills: ['Python', 'Flask', 'Gemini AI', 'NLP', 'OCR'],
    color: 'from-accent-cyan to-blue-500',
    icon: Code,
  },
  {
    id: 2,
    type: 'work',
    title: 'Rural Development & Data Analysis Intern',
    company: 'Gram Vikas',
    location: 'Jharsuguda, Orissa',
    duration: 'Jun 2024 - Jul 2024',
    description: [
      'Collected and analyzed quantitative and qualitative data on nutrition, agriculture, and water resources across 20+ villages',
      'Supported evidence-based policy recommendations for rural development',
      'Contributed to project reports aimed at improving livelihood for marginalized communities',
    ],
    skills: ['Data Analysis', 'Research', 'Policy', 'Rural Development'],
    color: 'from-accent-green to-emerald-500',
    icon: TrendingUp,
  },
]

const leadership = [
  {
    id: 1,
    title: 'Aspire Leaders Program',
    organization: 'Aspire Institute (Harvard Business School Faculty)',
    duration: 'Aug 2024 - Feb 2025',
    description: 'Globally recognized leadership development program for first-generation college students. Collaborated with international cohort from 190+ countries.',
    color: 'from-accent-purple to-violet-500',
  },
  {
    id: 2,
    title: 'DexSchool - School of Leadership & Entrepreneurship',
    organization: 'Dexterity Global',
    duration: 'Jul 2023 - Jul 2024',
    description: 'Yearlong program cultivating leadership, strategic thinking, and entrepreneurship through monthly modules and residential training.',
    color: 'from-accent-amber to-orange-500',
  },
  {
    id: 3,
    title: 'National Scholar Development Program',
    organization: 'Dexterity Global',
    duration: 'Aug 2023 - Oct 2023',
    description: 'Intensive program focused on research methodologies, effective communication, storytelling, and strategic planning.',
    color: 'from-accent-pink to-rose-500',
  },
]

const volunteering = [
  {
    id: 1,
    title: 'Tan90 SPARC Challenge',
    organization: 'Bal Bhavan, Bangalore',
    year: '2025',
    description: 'Led planning and execution of interactive STEM activities, engaging students from 90+ schools. Directed volunteer teams for event logistics.',
    impact: '90+ schools, hundreds of participants',
    icon: Users,
  },
  {
    id: 2,
    title: 'Digital System Administrator',
    organization: 'Aspire Growth Syndicate',
    year: '2025',
    description: 'Appointed to manage digital systems for alumni initiative focused on growth and networking.',
    impact: 'Global alumni network management',
    icon: Building,
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-[100px]" />
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
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-amber/20 to-accent-pink/20 border border-accent-amber/30 mb-6"
          >
            <Briefcase className="w-8 h-8 text-accent-amber" />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            <span className="text-white">The </span>
            <span className="text-gradient">Impact Layer</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Real-world experience, leadership journey, and community impact.
          </p>
        </motion.div>

        {/* Work Experience Timeline */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-2xl font-semibold text-white mb-8 flex items-center gap-3"
          >
            <Briefcase className="w-6 h-6 text-accent-cyan" />
            Work Experience
          </motion.h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-pink hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const Icon = exp.icon
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="relative md:pl-20"
                  >
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-5 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-void" />
                    </div>

                    <motion.div
                      whileHover={{ y: -5 }}
                      className="glass rounded-2xl p-8 hover:border-accent-cyan/30 transition-all"
                    >
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.color}`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                            <p className="text-accent-cyan font-medium">{exp.company}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-400 flex items-center gap-2">
                            <Calendar size={14} />
                            {exp.duration}
                          </p>
                          <p className="text-gray-500 flex items-center gap-2 text-sm">
                            <MapPin size={12} />
                            {exp.location}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-300 flex items-start gap-2">
                            <span className="text-accent-cyan mt-1.5">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Leadership Programs */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-2xl font-semibold text-white mb-8 flex items-center gap-3"
          >
            <Award className="w-6 h-6 text-accent-purple" />
            Leadership & Entrepreneurship Programs
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-2xl p-6 hover:border-accent-purple/30 transition-all relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${program.color}`} />
                
                <h4 className="text-lg font-semibold text-white mb-2">{program.title}</h4>
                <p className="text-accent-cyan text-sm mb-3">{program.organization}</p>
                <p className="text-gray-400 text-sm mb-4">{program.description}</p>
                <p className="text-gray-500 text-xs flex items-center gap-2">
                  <Calendar size={12} />
                  {program.duration}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Volunteering & Social Initiatives */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="text-2xl font-semibold text-white mb-8 flex items-center gap-3"
          >
            <Heart className="w-6 h-6 text-accent-pink" />
            Volunteering & Social Impact
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {volunteering.map((vol, index) => {
              const Icon = vol.icon
              return (
                <motion.div
                  key={vol.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass rounded-2xl p-6 hover:border-accent-pink/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-accent-pink/20 to-rose-500/20 border border-accent-pink/30">
                      <Icon className="w-6 h-6 text-accent-pink" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{vol.title}</h4>
                      <p className="text-accent-cyan text-sm mb-2">{vol.organization}</p>
                      <p className="text-gray-400 text-sm mb-3">{vol.description}</p>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-500">{vol.year}</span>
                        <span className="text-xs text-accent-green">Impact: {vol.impact}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
