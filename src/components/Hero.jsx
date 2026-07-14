import { motion } from 'framer-motion'
import { Mail, ArrowRight, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-white dark:bg-[#0D0D1A] flex items-center pt-20 pb-16 overflow-hidden transition-colors duration-300 relative">

      {/* Background blobs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#999B84]/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#999B84]/10 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col items-center gap-14 lg:gap-20">

          {/* Left */}
          <div className="flex-1 text-center lg:text-center">
      

            <motion.h1 {...fadeUp(0.15)} className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-slate-900 dark:text-white leading-[1.1] mb-3 tracking-tight">
              Hi, I'm <span className="text-[#999B84]">Neha </span> Sapariya

            </motion.h1>

            <motion.p {...fadeUp(0.25)} className="text-lg font-semibold text-[#999B84] mb-4">
              Full Stack Developer
            </motion.p>

            <motion.p {...fadeUp(0.3)} className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Building scalable and responsive web applications with React.js, Node.js, Express.js, MongoDB, PostgreSQL, and REST APIs.
            </motion.p>

            <motion.div {...fadeUp(0.35)} className="flex flex-wrap items-center justify-center align-items-center
              gap-3 mb-8">
              <a href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#999B84] text-white font-semibold text-sm rounded-lg hover:opacity-90 hover:shadow-lg hover:shadow-[#999B84]/30 transition-all duration-200">
                Hire Me <ArrowRight size={15} />
              </a>
              <a href="src/assets/Neha_Sapariya.pdf" download target="_blank"
                className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 font-semibold text-sm rounded-lg border border-slate-200 dark:border-white/10 hover:border-[#999B84] dark:hover:border-[#999B84] hover:text-[#999B84] dark:hover:text-[#999B84] transition-all duration-200">
                <Download size={15} /> Download CV
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.4)} className="flex items-center justify-center lg:justify-center gap-2.5">
              {[
                { icon: GithubIcon,   href: 'https://github.com/nehasapariya',   label: 'GitHub' },
                { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/neha-sapariya/',  label: 'LinkedIn' },
                { icon: Mail,         href: 'mailto:patel.neha4790@gmail.com', label: 'Email', isLucide: true },
              ].map(({ icon: Icon, href, label, isLucide }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-300 hover:text-[#999B84] dark:hover:text-[#999B84] hover:border-[#999B84]/40 dark:hover:border-[#999B84]/40 hover:bg-[#999B84]/10 dark:hover:bg-[#999B84]/10 transition-all duration-200">
                  {isLucide ? <Icon size={16} /> : <Icon size={16} />}
                </a>
              ))}
            </motion.div>
          </div>


        </div>
      </div>
    </section>
  )
}
