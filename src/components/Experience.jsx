import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  { role: 'MERN Stack Developer Intern', company: 'StackDot ', period: 'Feb 2026 – Present', type: 'Full-time', desc: 'Implemented the Purchase Request module for a Purchase and Payment Management System (PPMS) using React.js, Node.js, Express.js, PostgreSQL, and Prisma.Developed end-to-end functionality for request creation, editing, submission, approval workflow, and status tracking.Built RESTful APIs with JWT Authentication and Role-Based Access Control (RBAC) for secure access management.Integrated Axios, form validation, and responsive UI components to deliver a seamless user experience.', skills: ['React', 'Node.js', 'AWS', 'PostgreSQL'] },
  { role: 'MERN Stack Developer Trainee', company: 'StackCode Training Institute', period: 'Jun 2025 – Jan 2026', desc: 'Trained in React.js, Node.js, Express.js, MongoDB, PostgreSQL, Redux, and REST API development.Built full-stack web applications with authentication, database integration, and responsive user interfaces.', skills: ['React', 'Tailwind CSS','NodeJs','PostgreSQL','MongoDb','ExpressJS'] },
  { role: 'iOS Developer', company: 'WebzLabz Pvt. Ltd.', period: 'Nov 2017 – Dec 2018', desc: "Developed and maintained the KidsXap iOS application for childcare and kindergarten management. Enhanced app functionality through API integrations, performance optimization, and collaboration with cross-functional teams using Swift and Objective-C.", skills: ['Objective-c','REST APIs','Xcode','Debugging','Performance Optimization'] },
  { role: 'iOS Developer', company: 'AIS Technolabs', period: 'Jul 2016 – Aug 2017', desc: "Developed and enhanced multiple iOS applications including social media and ride-booking solutions. Implemented UI/UX designs, integrated APIs, performed testing, debugging, and code reviews to ensure application quality.", skills: ['Swift','Objective-c','REST APIs','Xcode','Debugging','Performance Optimization'] },
  { role: 'iOS Developer', company: 'Etilox Solution', period: 'Feb 2015 – Jun 2016', desc: "Developed mobile applications independently, including language translation and recipe management solutions. Designed intuitive user interfaces and implemented application functionality using Swift and Objective-C.", skills: ['Swift','Objective-c','REST APIs','Xcode','Debugging','Performance Optimization'] },
  { role: 'iOS Developer', company: 'Moon Technolabs', period: 'Jul 2013 – Oct 2014', desc: "Contributed to the development of document management and database utility applications. Implemented application features, collaborated with team members, and delivered user-friendly mobile experiences.", skills: ['Objective-C', 'SQLite', 'PDF Processing', 'Mobile Development', 'Team Collaboration'] },
]

const typeColor = {
  'Full-time':  'bg-green-50 dark:bg-[#22c55e]/10 text-green-700 dark:text-[#22c55e] border-green-200 dark:border-[#22c55e]/30',
  'Contract':   'bg-sky-50 dark:bg-[#38bdf8]/10 text-sky-700 dark:text-[#38bdf8] border-sky-200 dark:border-[#38bdf8]/30',
  'Internship': 'bg-amber-50 dark:bg-amber-400/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-400/30',
}

function ExpCard({ role, company, period, type, desc, skills, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: index * 0.1 }} className="sm:pl-16 relative">
      <div className="absolute left-3.5 top-5 w-5 h-5 rounded-full bg-[#999B84] border-4 border-white dark:border-[#0D0D1A] shadow-md hidden sm:block" />
      <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl border border-slate-100 dark:border-[#999B84]/15 p-6 shadow-sm hover:shadow-md hover:shadow-[#999B84]/10 hover:-translate-y-0.5 transition-all duration-300">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">{role}</h3>
            <div className="flex items-center gap-2 mt-1">
              <Briefcase size={13} className="text-[#999B84]" />
              <span className="text-sm font-semibold text-[#999B84]">{company}</span>
            </div>
               <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-slate-600 dark:text-slate-300">{desc}</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {/* <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${typeColor[type]}`}>{type}</span> */}
            <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
              <Calendar size={12} /> {period}
            </span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {skills.map(s => (
            <span key={s} className="text-xs font-medium px-2.5 py-1 bg-[#999B84]/10 text-[#999B84] rounded-lg border border-[#999B84]/20">{s}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-[#0D0D1A] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-14">
          <span className="text-sm font-bold text-[#999B84] uppercase tracking-widest">Career</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-2 tracking-tight">
            Work <span className="grad-text">Experience</span>
          </h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#999B84] to-transparent hidden sm:block" />
          <div className="flex flex-col gap-8 ">
            {experiences.map((exp, i) => <ExpCard key={exp.company} {...exp} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
