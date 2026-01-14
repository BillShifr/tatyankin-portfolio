import Hero from '../components/Hero'
import ExperienceTimeline from '../components/ExperienceTimeline'
import NotableAchievements from '../components/NotableAchievements'
import Education from '../components/Education'
import TechStack from '../components/TechStack'
import PersonalLinks from '../components/PersonalLinks'
import Principles from '../components/Principles'
import FinalSummary from '../components/FinalSummary'
import Contact from '../components/Contact'
import TechLeadBlock from '../components/TechLeadBlock'
import HonestBlock from '../components/HonestBlock'

const Home = () => {
  return (
    <div>
      {/* Бегущая строка на весь экран */}
      <div className="w-full overflow-hidden bg-gradient-to-r from-primary-600/20 via-primary-500/20 to-primary-600/20 border-y-2 border-primary-500/30">
        <div className="flex animate-scroll">
          <div className="flex whitespace-nowrap text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary-300 py-4 sm:py-5 md:py-6 lg:py-8">
            <span className="mx-4 sm:mx-6 md:mx-8">Весь опыт релевантен, высшее образование, трудовая книжка на руках</span>
            <span className="mx-4 sm:mx-6 md:mx-8">Весь опыт релевантен, высшее образование, трудовая книжка на руках</span>
            <span className="mx-4 sm:mx-6 md:mx-8">Весь опыт релевантен, высшее образование, трудовая книжка на руках</span>
            <span className="mx-4 sm:mx-6 md:mx-8">Весь опыт релевантен, высшее образование, трудовая книжка на руках</span>
          </div>
        </div>
      </div>
      
      <Hero />
      <Education />
      <ExperienceTimeline />
      <TechLeadBlock />
      <NotableAchievements />
      <TechStack />
      <PersonalLinks />
      <Principles />
      <FinalSummary />
      <HonestBlock />
      <Contact />
      
      {/* Бегущая строка в футере */}
      <div className="w-full overflow-hidden bg-gradient-to-r from-primary-600/20 via-primary-500/20 to-primary-600/20 border-y-2 border-primary-500/30">
        <div className="flex animate-scroll">
          <div className="flex whitespace-nowrap text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary-300 py-4 sm:py-5 md:py-6 lg:py-8">
            <span className="mx-4 sm:mx-6 md:mx-8">Весь опыт релевантен, высшее образование, трудовая книжка на руках</span>
            <span className="mx-4 sm:mx-6 md:mx-8">Весь опыт релевантен, высшее образование, трудовая книжка на руках</span>
            <span className="mx-4 sm:mx-6 md:mx-8">Весь опыт релевантен, высшее образование, трудовая книжка на руках</span>
            <span className="mx-4 sm:mx-6 md:mx-8">Весь опыт релевантен, высшее образование, трудовая книжка на руках</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

