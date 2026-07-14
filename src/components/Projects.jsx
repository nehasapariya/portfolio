import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, GitFork } from 'lucide-react'

const projects = [
  { title: 'Bags E-Commerce Platform', desc: 'A full-stack multi-vendor e-commerce application built with React.js, Node.js, Express.js, and MongoDB. Features include user, vendor, and admin dashboards, product management, wishlist, cart, order processing, inventory tracking, JWT authentication, role-based access control, and responsive UI design.', tags: ['React', 'Node.js', 'MongoDB'], live: '#', code: '#' },
  { title: 'Book Publisher SaaS Platform', desc: 'A full-stack SaaS-based Book Publisher Platform built with React.js, Node.js, Express.js, and PostgreSQL. Features include role-based access control, JWT authentication, commission management, book publishing workflows, file uploads, order tracking, responsive dashboards, and REST API integration. Skills demonstrated include React.js, Node.js, PostgreSQL, Redux, RBAC, JWT Authentication, and SaaS application development.', tags: ['React', 'Node.js', 'PostgreSQL'], live: '#', code: '#' },
]

function ProjectCard({ title, desc, tags, gradient, emoji, live, code, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group bg-white dark:bg-[#1a1a1a] border border-slate-100 dark:border-white/5 rounded-2xl overflow-hidden hover:border-[#999B84]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#999B84]/10"
    >
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-slate-900 dark:text-white text-base leading-tight">{title}</h3>
          <a href={live} className="text-slate-400 dark:text-white/30 hover:text-[#999B84] transition ml-2 flex-shrink-0"><ExternalLink size={15} /></a>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#999B84]/10 text-[#999B84] border border-[#999B84]/20">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#110D1A] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#999B84]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#999B84]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-14">
          <span className="text-sm font-bold text-[#999B84] uppercase tracking-widest">My Work</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-2 tracking-tight">
            Featured <span className="grad-text">Projects</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            A selection of projects I've built — from production applications to open source tools.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => <ProjectCard key={p.title} {...p} index={i} />)}
        </div>
      </div>
    </section>
  )
}
