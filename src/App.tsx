import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Footer } from './sections/Footer'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Learning } from './sections/Learning'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

export default function App() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
