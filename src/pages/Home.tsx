import Hero from '../components/Hero'
import ExperienceTimeline from '../components/ExperienceTimeline'
import Education from '../components/Education'
import TechStack from '../components/TechStack'
import PersonalLinks from '../components/PersonalLinks'
import Principles from '../components/Principles'
import FinalSummary from '../components/FinalSummary'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      {/* Бегущая строка на весь экран */}
      <div className="w-full overflow-hidden bg-gradient-to-r from-primary-600/20 via-primary-500/20 to-primary-600/20 border-y-2 border-primary-500/30">
        <div className="flex animate-scroll">
          <div className="flex whitespace-nowrap text-3xl md:text-4xl lg:text-5xl font-bold text-primary-300 py-6 md:py-8">
            <span className="mx-8">Весь опыт релевантен, высшее образование, трудовая книжка на руках</span>
            <span className="mx-8">Весь опыт релевантен, высшее образование, трудовая книжка на руках</span>
            <span className="mx-8">Весь опыт релевантен, высшее образование, трудовая книжка на руках</span>
            <span className="mx-8">Весь опыт релевантен, высшее образование, трудовая книжка на руках</span>
          </div>
        </div>
      </div>
      
      <Hero />
      <ExperienceTimeline />
      <Education />
      <TechStack />
      <PersonalLinks />
      <Principles />
      <FinalSummary />
      <Contact />
    </div>
  )
}

export default Home

