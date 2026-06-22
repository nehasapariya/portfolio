import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  {
    title: 'Frontend Development',
    icon: '🎨',
    gradient: 'from-[#7C3AED] to-[#EC4899]',
    lightBg: 'bg-violet-50',
    darkBg: 'dark:bg-violet-900/20',
    lightText: 'text-[#7C3AED]',
    darkText: 'dark:text-[#A78BFA]',
    lightBorder: 'border-violet-100',
    darkBorder: 'dark:border-violet-900/30',
    topBar: 'from-[#7C3AED] to-[#EC4899]',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux'],
  },
  {
    title: 'Backend Development',
    icon: '⚙️',
    gradient: 'from-violet-500 to-purple-600',
    lightBg: 'bg-violet-50',
    darkBg: 'dark:bg-violet-900/20',
    lightText: 'text-violet-600',
    darkText: 'dark:text-violet-400',
    lightBorder: 'border-violet-100',
    darkBorder: 'dark:border-violet-900/30',
    topBar: 'from-violet-500 to-purple-600',
    skills: ['Node.js', 'Express.js','REST APIs', 'JWT Auth'],
  },
  {
    title: 'Database & Cloud',
    icon: '☁️',
    gradient: 'from-emerald-500 to-teal-500',
    lightBg: 'bg-emerald-50',
    darkBg: 'dark:bg-emerald-900/20',
    lightText: 'text-emerald-600',
    darkText: 'dark:text-emerald-400',
    lightBorder: 'border-emerald-100',
    darkBorder: 'dark:border-emerald-900/30',
    topBar: 'from-emerald-500 to-teal-500',
    skills: ['MongoDB', 'PostgreSQL','AWS','Prisma'],
  },
  {
    title: 'Tools & Practices',
    icon: '🛠️',
    gradient: 'from-orange-500 to-amber-500',
    lightBg: 'bg-orange-50',
    darkBg: 'dark:bg-orange-900/20',
    lightText: 'text-orange-600',
    darkText: 'dark:text-orange-400',
    lightBorder: 'border-orange-100',
    darkBorder: 'dark:border-orange-900/30',
    topBar: 'from-orange-500 to-amber-500',
    skills: ['Git & GitHub','Postman', 'VS Code', 'Vercel'],
  },
]

function SkillChip({ name, lightBg, darkBg, lightText, darkText, lightBorder, darkBorder, index, cardIndex }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.25, delay: cardIndex * 0.08 + index * 0.04 }}
      className={`inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-semibold
        ${lightBg} ${darkBg} ${lightText} ${darkText}
        border ${lightBorder} ${darkBorder}
        hover:scale-105 transition-transform duration-200 cursor-default select-none`}
    >
      {name}
    </motion.span>
  )
}

function CategoryCard({ title, icon, gradient, lightBg, darkBg, lightText, darkText, lightBorder, darkBorder, topBar, skills, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="bg-white dark:bg-[#1e293b] rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:shadow-gray-200/60 dark:hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      {/* Top accent bar */}
      <div className={`h-1 bg-gradient-to-r ${topBar}`} />

      <div className="p-6">
        {/* Card header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className={`w-12 h-12 rounded-xl ${lightBg} ${darkBg} flex items-center justify-center text-2xl shadow-sm flex-shrink-0`}>
            {icon}
          </div>
          <div>
            <h3 className={`font-bold text-[#111827] dark:text-white text-base leading-tight`}>
              {title}
            </h3>
            <span className={`text-xs font-semibold mt-0.5 inline-block bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
              {skills.length} skills
            </span>
          </div>
        </div>

        {/* Skill chips */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <SkillChip
              key={skill}
              name={skill}
              lightBg={lightBg}
              darkBg={darkBg}
              lightText={lightText}
              darkText={darkText}
              lightBorder={lightBorder}
              darkBorder={darkBorder}
              index={i}
              cardIndex={index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-[#0D0D1A] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-bold text-[#7C3AED] dark:text-[#A78BFA] uppercase tracking-widest">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#111827] dark:text-white mt-2 mb-4 tracking-tight">
            My <span className="grad-text">Skills</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Technologies and tools I use to craft scalable, high-quality web applications.
          </p>
        </motion.div>

        {/* 2×2 card grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} {...cat} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
