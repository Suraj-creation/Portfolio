'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  alpha: number
  pulsePhase: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let mouseX = -1000
    let mouseY = -1000
    let time = 0

    const colors = ['#00d4ff', '#a855f7', '#ec4899', '#10b981', '#22d3ee', '#c084fc']

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      particles = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 12000) // More particles
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          size: Math.random() * 2.5 + 1, // Slightly larger
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.6 + 0.3, // More visible
          pulsePhase: Math.random() * Math.PI * 2,
        })
      }
    }

    const drawParticle = (p: Particle) => {
      // Pulsing glow effect
      const pulseSize = p.size + Math.sin(p.pulsePhase) * 0.5
      
      // Outer glow
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulseSize * 4)
      gradient.addColorStop(0, p.color.replace(')', ', 0.4)').replace('rgb', 'rgba').replace('#', 'rgba(').replace(/([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i, (_, r, g, b) => `${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}, 0.3`))
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
      
      ctx.beginPath()
      ctx.arc(p.x, p.y, pulseSize * 4, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()
      
      // Core particle
      ctx.beginPath()
      ctx.arc(p.x, p.y, pulseSize, 0, Math.PI * 2)
      ctx.fillStyle = p.color
      ctx.globalAlpha = p.alpha
      ctx.shadowColor = p.color
      ctx.shadowBlur = 8
      ctx.fill()
      ctx.shadowBlur = 0
      ctx.globalAlpha = 1
    }

    const drawConnections = () => {
      const maxDistance = 160 // Increased connection range

      // Particle-to-particle connections (Constellation effect)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const alpha = (1 - distance / maxDistance) * 0.35 // More visible lines
            
            // Gradient line between particles
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            )
            gradient.addColorStop(0, particles[i].color.replace(')', `, ${alpha})`).replace('rgb', 'rgba'))
            gradient.addColorStop(1, particles[j].color.replace(')', `, ${alpha})`).replace('rgb', 'rgba'))
            
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }

        // Mouse tracking - Connect particles to cursor
        const dx = particles[i].x - mouseX
        const dy = particles[i].y - mouseY
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 220) { // Increased mouse radius
          const alpha = (1 - distance / 220) * 0.6 // Much more visible
          
          // Gradient line from particle to mouse
          const gradient = ctx.createLinearGradient(
            particles[i].x, particles[i].y,
            mouseX, mouseY
          )
          gradient.addColorStop(0, particles[i].color)
          gradient.addColorStop(1, '#00ffff')
          
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(mouseX, mouseY)
          ctx.strokeStyle = gradient
          ctx.globalAlpha = alpha
          ctx.lineWidth = 1.5 // Thicker lines to mouse
          ctx.stroke()
          ctx.globalAlpha = 1
        }
      }

      // Draw mouse glow when active
      if (mouseX > 0 && mouseY > 0) {
        const mouseGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 120)
        mouseGlow.addColorStop(0, 'rgba(0, 255, 255, 0.15)')
        mouseGlow.addColorStop(0.5, 'rgba(168, 85, 247, 0.08)')
        mouseGlow.addColorStop(1, 'rgba(0, 0, 0, 0)')
        
        ctx.beginPath()
        ctx.arc(mouseX, mouseY, 120, 0, Math.PI * 2)
        ctx.fillStyle = mouseGlow
        ctx.fill()
        
        // Small cursor dot
        ctx.beginPath()
        ctx.arc(mouseX, mouseY, 3, 0, Math.PI * 2)
        ctx.fillStyle = '#00ffff'
        ctx.shadowColor = '#00ffff'
        ctx.shadowBlur = 15
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    const updateParticles = () => {
      time += 0.02
      
      particles.forEach((p) => {
        // Update pulse phase
        p.pulsePhase += 0.05
        
        p.x += p.vx
        p.y += p.vy

        // Bounce off edges with slight randomization
        if (p.x < 0 || p.x > canvas.width) {
          p.vx *= -1
          p.vx += (Math.random() - 0.5) * 0.1
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.vy *= -1
          p.vy += (Math.random() - 0.5) * 0.1
        }

        // Mouse interaction - gentle attraction (not push)
        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 180 && distance > 0) {
          const force = (180 - distance) / 180
          // Gentle attraction toward mouse
          p.vx += (dx / distance) * force * 0.015
          p.vy += (dy / distance) * force * 0.015
        }

        // Damping
        p.vx *= 0.98
        p.vy *= 0.98
        
        // Clamp velocity
        const maxSpeed = 1.5
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed
          p.vy = (p.vy / speed) * maxSpeed
        }
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      drawConnections()
      particles.forEach(drawParticle)
      updateParticles()

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    
    const handleMouseLeave = () => {
      mouseX = -1000
      mouseY = -1000
    }

    const handleResize = () => {
      resize()
      createParticles()
    }

    resize()
    createParticles()
    animate()

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="particles-canvas"
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}
