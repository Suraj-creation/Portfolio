'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

// Comprehensive skills data from resume
const skillCategories = [
  {
    name: 'Programming Languages',
    color: 'from-accent-cyan to-blue-500',
    skills: ['Python', 'Java', 'C', 'SQL', 'R', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'PHP'],
  },
  {
    name: 'AI/ML Frameworks',
    color: 'from-accent-purple to-violet-500',
    skills: ['TensorFlow', 'PyTorch', 'LangChain', 'Hugging Face', 'spaCy', 'Scikit-learn', 'LightGBM', 'XGBoost'],
  },
  {
    name: 'Data & Analytics',
    color: 'from-accent-pink to-rose-500',
    skills: ['Power BI', 'Tableau', 'Pandas', 'NumPy', 'EDA', 'Statistics', 'Feature Engineering', 'Big Data'],
  },
  {
    name: 'Web Development',
    color: 'from-accent-green to-emerald-500',
    skills: ['React', 'Next.js', 'Node.js', 'Flask', 'FastAPI', 'Angular', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    name: 'Cloud & DevOps',
    color: 'from-accent-amber to-orange-500',
    skills: ['AWS', 'AWS Lambda', 'EC2', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'GitHub Actions'],
  },
  {
    name: 'Databases',
    color: 'from-blue-500 to-cyan-500',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'SQLite', 'MS SQL Server', 'Redis'],
  },
  {
    name: 'AI/ML Concepts',
    color: 'from-violet-500 to-purple-500',
    skills: ['Deep Learning', 'NLP', 'Computer Vision', 'Reinforcement Learning', 'MLOps', 'LLMOps', 'Fine-tuning'],
  },
  {
    name: 'GenAI Tools',
    color: 'from-pink-500 to-red-500',
    skills: ['GitHub Copilot', 'Cursor AI', 'ChatGPT', 'MidJourney', 'Elevenlabs', 'HeyGen', 'Lovable', 'Windsurf'],
  },
  {
    name: 'Hardware & IoT',
    color: 'from-gray-500 to-slate-500',
    skills: ['Arduino', 'IMU Sensors', '3D Modeling', '3D Printing', 'IoT Protocols', 'ROS Basics'],
  },
  {
    name: 'Finance & Business',
    color: 'from-green-500 to-teal-500',
    skills: ['Financial Analysis', 'Portfolio Theory', 'Corporate Finance', 'Investment Management', 'Startup Finance'],
  },
]

const toolLogos = [
  { name: 'Python', icon: '🐍' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Git', icon: '📦' },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            <span className="text-white">Technical </span>
            <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            80+ technologies across AI/ML, Full-Stack, Cloud, and Finance domains
          </p>
        </motion.div>

        {/* Animated Tool Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4 mb-16 flex-wrap"
        >
          {toolLogos.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.05, type: 'spring' }}
              whileHover={{ scale: 1.2, y: -5 }}
              className="w-14 h-14 rounded-xl glass flex items-center justify-center text-2xl hover:border-accent-cyan/30 transition-all cursor-default"
              title={tool.name}
            >
              {tool.icon}
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.05 }}
              onMouseEnter={() => setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`glass rounded-2xl p-5 transition-all duration-300 ${
                hoveredCategory === category.name ? 'scale-105 z-10' : ''
              } ${hoveredCategory && hoveredCategory !== category.name ? 'opacity-50' : ''}`}
            >
              {/* Category Header */}
              <div className={`h-1 rounded-full bg-gradient-to-r ${category.color} mb-4`} />
              <h3 className="font-semibold text-white text-sm mb-3">{category.name}</h3>
              
              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.05 + skillIndex * 0.02 }}
                    whileHover={{ scale: 1.1 }}
                    className="skill-badge px-2 py-1 rounded-md text-xs bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Soft Skills & Traits</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Leadership', 'Critical Thinking', 'Problem-Solving', 'Communication',
              'Teamwork', 'Adaptability', 'Innovation', 'Research & Analytics',
              'Presentation', 'Collaboration', 'Attention to Detail'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.03 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 rounded-full glass text-sm text-gray-300 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 glass rounded-2xl p-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Programming Languages', value: '10+' },
              { label: 'AI/ML Frameworks', value: '15+' },
              { label: 'Tools & Platforms', value: '40+' },
              { label: 'Domains Covered', value: '8+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.1 + index * 0.1 }}
              >
                <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
