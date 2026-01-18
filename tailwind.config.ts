import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Living System Theme Colors
        'void': '#0a0a0f',
        'cosmos': '#0f0f1a',
        'nebula': '#1a1a2e',
        'stellar': '#16213e',
        'accent': {
          cyan: '#00d4ff',
          purple: '#a855f7',
          pink: '#ec4899',
          green: '#10b981',
          amber: '#f59e0b',
        },
        'glass': {
          light: 'rgba(255, 255, 255, 0.05)',
          medium: 'rgba(255, 255, 255, 0.1)',
          heavy: 'rgba(255, 255, 255, 0.15)',
        }
      },
      fontFamily: {
        'display': ['var(--font-space-grotesk)', 'sans-serif'],
        'body': ['var(--font-inter)', 'sans-serif'],
        'mono': ['var(--font-jetbrains-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)',
        'glow-cyan': 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)',
        'glow-purple': 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00d4ff' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0, 212, 255, 0.3)',
        'glow-md': '0 0 30px rgba(0, 212, 255, 0.4)',
        'glow-lg': '0 0 50px rgba(0, 212, 255, 0.5)',
        'glow-purple': '0 0 30px rgba(168, 85, 247, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
export default config
