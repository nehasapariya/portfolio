import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import heroImg from '../assets/hero.png'

const skills = [
  { name: 'HTML & CSS',  pct: 95, color: 'from-orange-400 to-red-400' },
  { name: 'JavaScript',  pct: 88, color: 'from-yellow-400 to-orange-400' },
  { name: 'React.js',    pct: 90, color: 'from-[#2563EB] to-[#3B82F6]' },
  { name: 'Node.js',     pct: 82, color: 'from-emerald-400 to-teal-500' },
  { name: 'TypeScript',  pct: 75, color: 'from-[#3B82F6] to-cyan-400' },
]

function SkillBar({ name, pct, color, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }}>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-semibold text-[#111827] dark:text-slate-200">{name}</span>
        <span className="text-sm font-bold text-[#2563EB] dark:text-blue-400">{pct}%</span>
      </div>
      <div className="h-2.5 bg-blue-50 dark:bg-[#1e293b] rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0D0D1A] transition-colors duration-300 ">
      <div className="max-w-6xl mx-auto px-6 ">
        

        <div ref={ref} className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col items-center gap-5"
          >
            <div className="relative">
              <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border-2 border-white dark:border-white/10 shadow-2xl shadow-violet-200/40 dark:shadow-violet-900/30">
                <img src="neha_sapariya_pic.png" alt="Neha Sapariya" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">About<span className="grad-text"> Me </span></h3>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Full Stack Developer</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
             I'm Neha Sapariya, a passionate MERN Stack Developer with hands-on experience building full-stack web applications using React.js, Node.js, Express.js, MongoDB, PostgreSQL, Redux, JWT Authentication, and REST APIs.</p>
                         <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
Prior to transitioning into full-stack web development, I worked as an iOS Developer for 5 years, developing and maintaining mobile applications, integrating APIs, optimizing performance, and delivering user-focused solutions. This experience has strengthened my understanding of software architecture, clean code practices, problem-solving, and application lifecycle management.
          </p>
           <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
I enjoy creating responsive, scalable, and efficient applications that provide seamless user experiences. I'm continuously learning new technologies and best practices to build modern, high-quality software solutions.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 grad-bg text-white font-semibold rounded-xl hover:opacity-90 hover:shadow-lg hover:shadow-violet-300/40 transition-all duration-200">
              Know More <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
