import Hero from '@/components/Hero'
import MindSection from '@/components/MindSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import EducationSection from '@/components/EducationSection'
import ExperienceSection from '@/components/ExperienceSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Mind Layer - Thinking & Philosophy */}
      <MindSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects/Build Layer */}
      <ProjectsSection />

      {/* Education/Learn Layer */}
      <EducationSection />

      {/* Experience/Impact Layer */}
      <ExperienceSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  )
}
