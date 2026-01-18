import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import ParticleBackground from '@/components/ParticleBackground'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Suraj Kumar | Living System Portfolio',
  description: 'A dynamic, self-evolving digital organism reflecting intellectual growth in AI, Machine Learning, Data Science, and Full-Stack Development. Explore the knowledge graph of thought, code, and impact.',
  keywords: ['Suraj Kumar', 'AI Developer', 'Machine Learning', 'Data Science', 'Full Stack', 'Portfolio', 'React', 'Python', 'Deep Learning'],
  authors: [{ name: 'Suraj Kumar' }],
  openGraph: {
    title: 'Suraj Kumar | Living System Portfolio',
    description: 'Explore the knowledge graph of thought, code, and impact',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suraj Kumar | Living System Portfolio',
    description: 'AI Developer & Data Scientist',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-void min-h-screen antialiased">
        <ParticleBackground />
        <Navigation />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
