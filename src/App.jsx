import { ThemeProvider } from './context/ThemeContext'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Experience from './components/Experience'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      {/* Light: #F8FAFC | Dark: #0f172a deep navy-blue */}
      <div className="bg-white dark:bg-[#0D0D1A] transition-colors duration-300 min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
