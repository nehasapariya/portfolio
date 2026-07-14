import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  {
    title: 'Frontend Development',
    icon: '🎨',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux'],
  },
  {
    title: 'Backend Development',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'],
  },
  {
    title: 'Database & Cloud',
    icon: '☁️',
    skills: ['MongoDB', 'PostgreSQL', 'AWS', 'Prisma'],
  },
  {
    title: 'Tools & Practices',
    icon: '🛠️',
    skills: ['Git & GitHub', 'Postman', 'VS Code', 'Vercel'],
  },
]

function SkillChip({ name, index, cardIndex }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.25, delay: cardIndex * 0.08 + index * 0.04 }}
      className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#999B84]/10 dark:bg-[#999B84]/15 text-[#999B84] border border-[#999B84]/20 hover:scale-105 transition-transform duration-200 cursor-default select-none"
    >
      {name}
    </motion.span>
  )
}

function CategoryCard({ title, icon, skills, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:shadow-[#999B84]/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      <div className="h-1 bg-[#999B84]" />
      <div className="p-6">
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#999B84]/10 flex items-center justify-center text-2xl shadow-sm flex-shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base leading-tight">{title}</h3>
            <span className="text-xs font-semibold mt-0.5 inline-block text-[#999B84]">
              {skills.length} skills
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <SkillChip key={skill} name={skill} index={i} cardIndex={index} />
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
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-bold text-[#999B84] uppercase tracking-widest">Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-2 mb-4 tracking-tight">
            My <span className="grad-text">Skills</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Technologies and tools I use to craft scalable, high-quality web applications.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} {...cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
