'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Code2, ExternalLink, Github, Star, GitFork, 
  Brain, Database, Globe, Cpu, Heart, 
  TrendingUp, Zap, Eye, ChevronRight, Filter
} from 'lucide-react'

// Project data from your repository
const projects = [
  {
    id: 1,
    title: 'Healthcare AI Assistant',
    description: 'AI-powered diagnostic assistant combining ML with Google Gemini AI for intelligent disease predictions, personalized health recommendations, and real-time medical insights.',
    longDescription: '41 disease models with 132 symptoms database. Multi-modal input (text, body map, voice). 7-level severity weighting system.',
    image: '/projects/healthcare.png',
    tags: ['AI/ML', 'Healthcare', 'NLP', 'Gemini AI'],
    tech: ['JavaScript', 'HTML5', 'Tailwind CSS', 'Google Gemini API', 'ECharts.js'],
    github: 'https://github.com/Suraj-creation/Healthcare_Prediction',
    demo: 'https://healthcare-prediction.vercel.app/',
    stats: { stars: 0, forks: 0 },
    featured: true,
    category: 'AI/ML',
    color: 'from-accent-cyan to-blue-500',
    icon: Heart,
  },
  {
    id: 2,
    title: 'EEG Alzheimer\'s Detection',
    description: 'Research-grade ML pipeline for early detection of Alzheimer\'s Disease using resting-state EEG signals from clinical datasets.',
    longDescription: '438 engineered biomarkers, 72% binary accuracy, ensemble learning with LightGBM/XGBoost.',
    image: '/projects/eeg.png',
    tags: ['Machine Learning', 'Healthcare', 'EEG', 'Research'],
    tech: ['Python', 'Streamlit', 'MNE-Python', 'LightGBM', 'XGBoost'],
    github: 'https://github.com/Suraj-creation/Machine_learning',
    demo: 'https://machine-learning-suraj-creation.streamlit.app/',
    stats: { stars: 0, forks: 0 },
    featured: true,
    category: 'AI/ML',
    color: 'from-accent-purple to-violet-500',
    icon: Brain,
  },
  {
    id: 3,
    title: 'Jarurat Care Foundation',
    description: 'Cancer support platform with "Hope" AI chatbot powered by Google Gemini for emotional support and medical guidance.',
    longDescription: 'Patient intake system, volunteer management, analytics visualization. Built in memory of Rekha Joshi.',
    image: '/projects/jarurat.png',
    tags: ['NGO', 'Healthcare', 'AI Chatbot', 'Social Impact'],
    tech: ['JavaScript', 'HTML', 'CSS', 'Python', 'Google Gemini'],
    github: 'https://github.com/Suraj-creation/Jarurat-Care',
    demo: 'https://jarurat-care-cyan.vercel.app/',
    stats: { stars: 0, forks: 0 },
    featured: true,
    category: 'Social Impact',
    color: 'from-accent-pink to-rose-500',
    icon: Heart,
  },
  {
    id: 4,
    title: 'Portfolio Optimization Platform',
    description: 'Full-stack portfolio optimization system applying Modern Portfolio Theory (Markowitz) with NSE India data.',
    longDescription: '15.6% Sharpe Ratio improvement, Monte Carlo simulations, AI-powered insights via Gemini API.',
    image: '/projects/portfolio.png',
    tags: ['FinTech', 'Data Science', 'Optimization', 'AI'],
    tech: ['Python', 'Plotly.js', 'Tailwind CSS', 'Google Gemini', 'Yahoo Finance'],
    github: 'https://github.com/Suraj-creation/Portfolio_finance_Optimal',
    demo: 'https://portfolio-finance-optimal.vercel.app/',
    stats: { stars: 0, forks: 0 },
    featured: true,
    category: 'Finance',
    color: 'from-accent-green to-emerald-500',
    icon: TrendingUp,
  },
  {
    id: 5,
    title: 'ChatGPT Clone',
    description: 'Production-quality ChatGPT replica with real-time streaming responses and conversation management.',
    longDescription: 'Model switching (Flash, Pro, Legacy), full markdown support, syntax highlighting, dark theme.',
    image: '/projects/chatgpt.png',
    tags: ['Full-Stack', 'AI', 'Next.js', 'TypeScript'],
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Google Gemini'],
    github: 'https://github.com/Suraj-creation/chatgpt_clone',
    demo: 'https://chatgpt-clone-taupe-one.vercel.app/',
    stats: { stars: 0, forks: 0 },
    featured: true,
    category: 'AI/ML',
    color: 'from-accent-cyan to-accent-purple',
    icon: Zap,
  },
  {
    id: 6,
    title: 'SYSMIND CLI',
    description: 'Intelligent system monitoring CLI with AI-driven recommendations and anomaly detection.',
    longDescription: 'Zero dependencies, health scoring (0-100), duplicate detection, network diagnostics.',
    image: '/projects/sysmind.png',
    tags: ['CLI', 'System Tools', 'Python', 'AI'],
    tech: ['Python', 'SQLite', 'Cross-platform'],
    github: 'https://github.com/Suraj-creation/Sysmind-CLI',
    demo: null,
    stats: { stars: 0, forks: 0 },
    featured: false,
    category: 'Tools',
    color: 'from-gray-500 to-slate-500',
    icon: Cpu,
  },
  {
    id: 7,
    title: 'Live Classroom AI',
    description: 'AI-powered visual learning whiteboard (ExplainBoard) with classroom chalkboard theme.',
    longDescription: 'Real-time AI explanations, concept visualization, modern dark theme.',
    image: '/projects/classroom.png',
    tags: ['EdTech', 'AI', 'Whiteboard', 'TypeScript'],
    tech: ['React', 'TypeScript', 'Vite', 'Google Gemini'],
    github: 'https://github.com/Suraj-creation/Live_Classroom-powered_by_AI',
    demo: 'https://live-classroom-powered-by-ai.vercel.app/',
    stats: { stars: 0, forks: 0 },
    featured: false,
    category: 'EdTech',
    color: 'from-accent-amber to-orange-500',
    icon: Globe,
  },
  {
    id: 8,
    title: 'Echo Chamber Buster',
    description: 'AI debate platform that challenges beliefs with evidence-based counterarguments from philosophers.',
    longDescription: '40+ topics across 8 domains, cites Socrates, Nietzsche, Bhagavad Gita, peer-reviewed research.',
    image: '/projects/echo.png',
    tags: ['Critical Thinking', 'AI', 'Philosophy', 'Debate'],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Google Gemini'],
    github: 'https://github.com/Suraj-creation/Challenge_your_Reasoning',
    demo: 'https://challenge-your-reasoning.vercel.app/',
    stats: { stars: 0, forks: 0 },
    featured: false,
    category: 'AI/ML',
    color: 'from-red-500 to-orange-500',
    icon: Brain,
  },
]

const categories = ['All', 'AI/ML', 'Healthcare', 'Finance', 'EdTech', 'Tools', 'Social Impact']

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory || p.tags.includes(selectedCategory))

  const featuredProjects = filteredProjects.filter(p => p.featured)
  const otherProjects = filteredProjects.filter(p => !p.featured)

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[100px]" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 border border-accent-purple/30 mb-6"
          >
            <Code2 className="w-8 h-8 text-accent-purple" />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            <span className="text-white">The </span>
            <span className="text-gradient">Build Layer</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-8">
            Systems, products, experiments, and prototypes. Where ideas transform into impact.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-accent-cyan to-accent-purple text-white'
                    : 'glass text-gray-400 hover:text-white hover:border-accent-cyan/30'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-xl font-semibold text-white mb-8 flex items-center gap-2"
            >
              <Star className="w-5 h-5 text-accent-amber" />
              Featured Projects
            </motion.h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => {
                const Icon = project.icon
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className="group project-card glass rounded-2xl overflow-hidden hover:border-accent-cyan/30 transition-all duration-500"
                  >
                    {/* Card Header with Gradient */}
                    <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                    
                    <div className="p-8">
                      {/* Icon & Category */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-20`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xs font-medium text-gray-400 glass px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                        {project.title}
                      </h4>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Extended Description on Hover */}
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: hoveredProject === project.id ? 1 : 0,
                          height: hoveredProject === project.id ? 'auto' : 0
                        }}
                        className="text-sm text-accent-cyan mb-4"
                      >
                        {project.longDescription}
                      </motion.p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-gray-500 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="text-xs text-gray-500">+{project.tech.length - 4}</span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-gray-300 hover:text-white hover:border-accent-cyan/30 transition-all text-sm"
                        >
                          <Github size={16} />
                          Code
                        </motion.a>
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.color} text-white text-sm font-medium`}
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-xl font-semibold text-white mb-8 flex items-center gap-2"
            >
              <Code2 className="w-5 h-5 text-accent-cyan" />
              More Projects
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => {
                const Icon = project.icon
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="glass rounded-xl p-6 hover:border-accent-cyan/30 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${project.color} bg-opacity-20`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-semibold text-white group-hover:text-accent-cyan transition-colors">
                        {project.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent-cyan transition-colors"
                      >
                        <Github size={18} />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-accent-cyan transition-colors"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        )}

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/Suraj-creation?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass border border-accent-cyan/30 text-accent-cyan font-semibold hover:bg-accent-cyan/10 transition-all"
          >
            View All 52+ Projects
            <ChevronRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
