import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons'

const socials = [
  { icon: GithubIcon,   href: 'https://github.com/nehasapariya',  label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/neha-sapariya/', label: 'LinkedIn' }]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSent(true); setSending(false)
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    }, 1000)
  }

  const inputCls = "w-full px-4 py-3 bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#999B84]/20 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 outline-none focus:border-[#999B84] dark:focus:border-[#999B84] focus:ring-2 focus:ring-[#999B84]/15 transition"
  const labelCls = "block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide"

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0D0D1A] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-14">
          <span className="text-lg font-bold text-[#999B84] uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mt-2 tracking-tight">
            Let's <span className="grad-text">Work Together</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="lg:col-span-2">
            <div className="rounded-2xl p-6 text-white grad-bg">
              <h3 className="font-bold text-lg mb-1">Contact Information</h3>
              <p className="text-white/80 text-sm mb-6">Fill out the form and I'll be in touch.</p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0"><Mail size={16} /></div>
                  <span className="text-sm">patel.neha4790@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0"><MapPin size={16} /></div>
                  <span className="text-sm">Ahemdabad, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-sm">Available for new opportunities</span>
                </div>
              </div>
              <div className="flex gap-3 mt-8">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer"
                    className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center hover:bg-white/25 transition">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-3">
            <form onSubmit={submit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Name</label>
                  <input value={form.name} onChange={set('name')} type="text" placeholder="Your name" required className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Email</label>
                  <input value={form.email} onChange={set('email')} type="email" placeholder="your@email.com" required className={inputCls} />
                </div>
              </div>
              <div>
                <label className={labelCls}>Subject</label>
                <input value={form.subject} onChange={set('subject')} type="text" placeholder="Project inquiry" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Message</label>
                <textarea value={form.message} onChange={set('message')} rows={5} placeholder="Tell me about your project…" required className={inputCls + ' resize-none'} />
              </div>
              <button type="submit" disabled={sending}
                className="flex items-center justify-center gap-2 px-6 py-3.5 grad-bg text-white font-semibold rounded-xl hover:opacity-90 hover:shadow-lg hover:shadow-[#999B84]/30 disabled:opacity-50 transition-all duration-200 self-start">
                {sending ? 'Sending…' : <><Send size={16} /> Send Message</>}
              </button>
              {sent && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-sm text-[#999B84] font-medium">
                  ✓ Message sent! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
