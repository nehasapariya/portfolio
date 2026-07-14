import { useState, useEffect } from 'react'
import { Menu, X, Download, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const NAV_ITEMS = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { dark, toggle } = useTheme()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/90 dark:bg-[#0D0D1A]/90 backdrop-blur-xl shadow-sm border-b border-slate-100 dark:border-white/5'
        : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="#home" className="text-xl font-black grad-text tracking-tight">Neha Sapariya</a>

          <div className="hidden md:flex items-center gap-2.5">
        <ul className="hidden md:flex items-center gap-0.5">
          {NAV_ITEMS.map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}
                className="px-3.5 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#999B84] dark:hover:text-[#999B84] rounded-lg hover:bg-[#999B84]/10 dark:hover:bg-[#999B84]/10 transition-all duration-200">
                {item}
              </a>
            </li>
          ))}
        </ul>

          <button onClick={toggle} aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-200">
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggle} className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 dark:text-slate-400">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setOpen(o => !o)} className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-400">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

     
    </header>
  )
}
