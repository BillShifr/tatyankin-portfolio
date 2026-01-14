import { Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import ConfettiReveal from './ConfettiReveal'

const Hero = () => {
  const [showLenny, setShowLenny] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowLenny(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const scrollToExperience = () => {
    const element = document.getElementById('experience')
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="flex items-center justify-center relative overflow-hidden py-2 sm:py-4 md:py-6 lg:py-8" style={{ minHeight: '100dvh' }}>
      {/* Анимированный фон */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary-400 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {showLenny && (
          <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-3 sm:mb-4 md:mb-6 text-slate-300 italic max-w-3xl mx-auto font-medium px-2">
          «Если реализацию сложно объяснить — идея плоха. Если реализацию легко объяснить — идея, возможно, хороша»
          </div>
        )}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent px-2 leading-tight">
          Lead Frontend Developer & Product Creator & Problem Solver &<br />
          <span className="bg-gradient-to-r from-primary-300 to-cyan-400 bg-clip-text text-transparent">Ментор</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-center px-2">
          Строю frontend, который масштабируется. Учу команду, которая успевает.
        </p>
        <Button
          type="primary"
          size="large"
          icon={<DownOutlined />}
          onClick={scrollToExperience}
          className="bg-primary-600 hover:bg-primary-700 border-primary-600 hover:border-primary-700 h-auto min-h-[44px] sm:min-h-[48px] md:min-h-[52px] px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg whitespace-normal break-words max-w-full"
          style={{ wordBreak: 'break-word' }}
        >
          <span className="block text-center">Погрузиться в опыт</span>
        </Button>
        
        <ConfettiReveal />
      </div>
    </section>
  )
}

export default Hero

