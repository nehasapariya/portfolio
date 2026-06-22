import { Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

const quickLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']
const services   = ['Web Development', 'API Development']

export default function Footer() {
  return (
    <footer className="bg-[#0D0D1A] text-slate-400  transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="lg:col-span-1">
            <a href="#home" className="text-3xl font-black grad-text block mb-3">NS</a>
            <p className="text-sm leading-relaxed">
              Building scalable and responsive web applications with React.js, Node.js, Express.js, MongoDB, PostgreSQL, and REST APIs.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: GithubIcon,   href: 'https://github.com/nehasapariya' },
                { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/neha-sapariya/' },
                { icon: Mail,         href: 'mailto:patel.neha4790@gmail.com' },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer"
                  className="w-9 h-9 bg-white/5 border border-[#7C3AED]/20 rounded-xl flex items-center justify-center hover:bg-[#7C3AED] hover:border-[#7C3AED] hover:text-white transition-all duration-200">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`}
                    className="text-sm flex items-center gap-1 hover:text-[#A78BFA] transition-colors duration-200 group">
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -ml-1 transition" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {services.map(s => (
                <li key={s} className="text-sm flex items-center gap-1 group">
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -ml-1 text-[#A78BFA] transition" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-3.5">
              <a href="mailto:patel.neha4790@gmail.com" className="flex items-start gap-3 text-sm hover:text-[#A78BFA] transition-colors">
                <Mail size={15} className="text-[#A78BFA] mt-0.5 flex-shrink-0" /> patel.neha4790@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={15} className="text-[#A78BFA] mt-0.5 flex-shrink-0" /> India
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-[#A78BFA] rounded-full animate-pulse flex-shrink-0" />
                Available for hire
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#7C3AED]/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-3">
          <p className="text-xs text-slate-500">© 2026 Neha Sapariya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
