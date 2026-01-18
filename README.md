# Suraj Kumar - Living System Portfolio 🚀

A dynamic, self-evolving digital portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. This portfolio embodies the philosophy of a "Living System" - treating the portfolio as an interconnected knowledge graph of thought, code, and impact.

![Portfolio Preview](./preview.png)

## ✨ Features

### Design Philosophy
- **Living System Concept**: Portfolio as an interconnected ecosystem of Mind, Build, Learn, and Impact layers
- **Knowledge Graph Visualization**: Interactive exploration of skills, projects, and concepts
- **Dark Cosmic Theme**: Deep space aesthetics with neon accents and glassmorphism
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions

### Technical Highlights
- **Next.js 14 App Router**: Server components and modern React patterns
- **TypeScript**: Full type safety throughout the codebase
- **Tailwind CSS**: Utility-first styling with custom design tokens
- **Framer Motion**: Production-quality animations
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets

### Sections
1. **Hero**: Dynamic typing animation, floating stats, and social links
2. **Mind Layer**: Mental models, thinking frameworks, and philosophies
3. **Skills**: 80+ technologies organized by category with visual hierarchy
4. **Projects**: Featured and categorized projects with live demos
5. **Education**: Academic journey with expandable course details
6. **Experience**: Timeline of work, leadership, and volunteering
7. **Contact**: Interactive form with real-time validation

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 14, React 18 |
| Language | TypeScript 5.4+ |
| Styling | Tailwind CSS 3.4, CSS Variables |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Fonts | Inter, Space Grotesk, JetBrains Mono |

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   ```bash
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles and custom utilities
│   │   ├── layout.tsx       # Root layout with fonts and metadata
│   │   └── page.tsx         # Main page composing all sections
│   └── components/
│       ├── Navigation.tsx    # Responsive navbar with scroll effects
│       ├── ParticleBackground.tsx  # Interactive particle canvas
│       ├── Hero.tsx          # Hero section with animations
│       ├── MindSection.tsx   # Philosophy and mental models
│       ├── SkillsSection.tsx # Skills grid visualization
│       ├── ProjectsSection.tsx    # Project showcase
│       ├── EducationSection.tsx   # Academic journey
│       ├── ExperienceSection.tsx  # Work & leadership
│       ├── ContactSection.tsx     # Contact form
│       └── Footer.tsx        # Site footer
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:

```ts
colors: {
  'void': '#0a0a0f',      // Deep background
  'cosmos': '#0f0f1a',    // Section backgrounds
  'accent': {
    cyan: '#00d4ff',      // Primary accent
    purple: '#a855f7',    // Secondary accent
    pink: '#ec4899',      // Tertiary accent
    // ...
  }
}
```

### Content
Update component files directly to modify:
- Personal information in `Hero.tsx`
- Skills in `SkillsSection.tsx`
- Projects in `ProjectsSection.tsx`
- Experience in `ExperienceSection.tsx`

## 📱 Responsive Design

- **Mobile**: Single column layouts, touch-friendly interactions
- **Tablet**: Adaptive grids, optimized navigation
- **Desktop**: Full multi-column layouts, hover effects

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Platforms
The portfolio can be deployed on any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Suraj Kumar**
- GitHub: [@Suraj-creation](https://github.com/Suraj-creation)
- LinkedIn: [Suraj Kumar VU](https://www.linkedin.com/in/surajkumarvu)
- Email: surajcreationinfinity1@gmail.com

---

Built with ❤️ and Next.js | © 2024 Suraj Kumar
