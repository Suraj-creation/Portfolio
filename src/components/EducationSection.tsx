'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  GraduationCap, BookOpen, Award, Calendar, MapPin, 
  ChevronDown, ChevronUp, Star, Trophy, Check
} from 'lucide-react'

const education = {
  university: {
    name: 'Vidyashilp University',
    location: 'Bangalore, India',
    degree: 'B.Tech Computer Science Engineering (Hons)',
    specialization: 'Data Science | Minor in Finance',
    duration: '2023 - 2027',
    scholarship: '100% Scholarship - Karta Initiative India Foundation',
    highlights: [
      'Strong foundation in AI, Machine Learning, Data Science, and Finance',
      'Interdisciplinary approach combining technical skills with design thinking',
      'Research methodology and critical thinking integrated throughout',
      'Community engagement and sustainable development focus',
    ],
  },
  school: {
    name: 'Shoshit Samadhan Kendra',
    location: 'Patna, Bihar',
    achievements: [
      { level: 'Class 12th', year: '2023', score: '79%' },
      { level: 'Class 10th', year: '2021', score: '92%' },
    ],
  },
}

const semesters = [
  {
    sem: 1,
    courses: [
      'Design Workshop', 'Visualizing Data For Story Telling', 'Probability Theory',
      'Materials For Smart Devices', 'Introduction To Psychology', 'Introduction To Writing',
      'Communication Skills', 'Problem Solving With Design Thinking'
    ],
  },
  {
    sem: 2,
    courses: [
      'Data Structures', 'Foundations To Data Science', 'Academic Writing', 'Calculus',
      'Statistics With R', 'Sustainable Smart Materials', 'Learning To Learn',
      'Leadership And Teamwork Skills', 'Community Engagement And Service Experience'
    ],
  },
  {
    sem: 3,
    courses: [
      'Theoretical Computer Science', 'Analysis Of Algorithms', 'Exploratory Data Analysis',
      'Linear Algebra', 'Research Methodology', 'Introduction To Financial Accounting',
      'Sustainable Cities And Communities', 'Introduction To Epistemology',
      'Socio-Cultural Perspectives On Indian Life'
    ],
  },
  {
    sem: 4,
    courses: [
      'Digital Design And Computer Organization', 'Object Oriented Programming',
      'Databases Management', 'Artificial Intelligence', 'Financial Institutions, Markets And Services',
      'Optimization Techniques For Data Science', 'Human Values In Work And Life',
      'Foundation Seminar', 'Critical Thinking'
    ],
  },
  {
    sem: 5,
    courses: [
      'Microprocessors And Computer Architecture', 'Operating Systems', 'Computer Networks',
      'Machine Learning', 'Summer Internship', 'Language',
      'Probabilistic Graph Models', 'Corporate Finance'
    ],
  },
  {
    sem: 6,
    courses: [
      'Reinforcement Learning', 'Deep Learning', 'MLOps',
      'Internet of Things (IoT)', 'Financial Statement Analysis',
      'Investment Management', 'Basics of Startup Finance'
    ],
  },
]

const achievements = [
  {
    title: 'Top 50 Brightest Minds of Bihar',
    organization: 'Times Bihar Scholar - Ministry of Finance, Government of Bihar',
    year: '2023',
    description: 'Recognized for exceptional academic achievement and leadership potential',
    icon: Trophy,
    color: 'from-accent-amber to-yellow-500',
  },
  {
    title: 'Karta Initiative Scholarship',
    organization: 'Karta Initiative India Foundation',
    year: '2023',
    description: '100% scholarship at Vidyashilp University for academic excellence and service-minded leadership',
    icon: Award,
    color: 'from-accent-cyan to-blue-500',
  },
  {
    title: 'Science Model Competition Finalist',
    organization: 'Agastya International Foundation',
    year: '2021',
    description: 'Top 10 out of 80 participants with electromagnetic induction-based walking-powered battery charging project',
    icon: Star,
    color: 'from-accent-purple to-violet-500',
  },
]

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [expandedSem, setExpandedSem] = useState<number | null>(null)

  return (
    <section id="education" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent-green/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent-amber/5 rounded-full blur-[100px]" />
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
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-green/20 to-accent-amber/20 border border-accent-green/30 mb-6"
          >
            <GraduationCap className="w-8 h-8 text-accent-green" />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            <span className="text-white">The </span>
            <span className="text-gradient">Learn Layer</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Continuous learning journey through formal education, courses, and self-directed exploration.
          </p>
        </motion.div>

        {/* Main Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="glass rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden"
        >
          {/* Gradient Border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink" />
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - University Info */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 border border-accent-cyan/30">
                  <GraduationCap className="w-8 h-8 text-accent-cyan" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{education.university.name}</h3>
                  <p className="text-gray-400 flex items-center gap-2 mt-1">
                    <MapPin size={14} /> {education.university.location}
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-lg font-semibold text-gradient">{education.university.degree}</p>
                  <p className="text-gray-300">{education.university.specialization}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={16} />
                  <span>{education.university.duration}</span>
                </div>
              </div>

              {/* Scholarship Badge */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-accent-amber/20 to-yellow-500/20 border border-accent-amber/30"
              >
                <Trophy className="w-5 h-5 text-accent-amber" />
                <span className="text-accent-amber font-medium text-sm">{education.university.scholarship}</span>
              </motion.div>
            </div>

            {/* Right Column - Highlights */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Program Highlights</h4>
              <ul className="space-y-3">
                {education.university.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Courses by Semester */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-accent-cyan" />
            Comprehensive Curriculum (6 Semesters, 50+ Courses)
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {semesters.map((semester, index) => (
              <motion.div
                key={semester.sem}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.05 }}
                className="glass rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedSem(expandedSem === semester.sem ? null : semester.sem)}
                  className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-white">Semester {semester.sem}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">{semester.courses.length} courses</span>
                    {expandedSem === semester.sem ? (
                      <ChevronUp className="w-4 h-4 text-accent-cyan" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedSem === semester.sem ? 'auto' : 0,
                    opacity: expandedSem === semester.sem ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <div className="p-4 pt-0 space-y-2">
                    {semester.courses.map((course, i) => (
                      <div
                        key={i}
                        className="text-sm text-gray-400 flex items-start gap-2"
                      >
                        <span className="text-accent-cyan">•</span>
                        {course}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-2">
            <Award className="w-5 h-5 text-accent-amber" />
            Achievements & Recognition
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass rounded-2xl p-6 hover:border-accent-amber/30 transition-all relative overflow-hidden group"
                >
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${achievement.color}`} />
                  
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                  <p className="text-sm text-accent-cyan mb-2">{achievement.organization}</p>
                  <p className="text-sm text-gray-400 mb-3">{achievement.description}</p>
                  <span className="text-xs text-gray-500">{achievement.year}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* School Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-12 glass rounded-xl p-6"
        >
          <h4 className="font-semibold text-white mb-4">{education.school.name}</h4>
          <p className="text-sm text-gray-400 mb-4 flex items-center gap-2">
            <MapPin size={14} /> {education.school.location}
          </p>
          <div className="flex flex-wrap gap-4">
            {education.school.achievements.map((item) => (
              <div key={item.level} className="glass rounded-lg px-4 py-3">
                <span className="text-white font-medium">{item.level}</span>
                <span className="text-accent-cyan ml-2">{item.score}</span>
                <span className="text-gray-500 ml-2 text-sm">({item.year})</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
