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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-8">
      {/* Анимированный фон */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-2">
          {showLenny && (
            <div className="text-xl md:text-2xl mb-4 text-slate-300 italic max-w-3xl mx-auto font-medium">
            «Если реализацию сложно объяснить — идея плоха. Если реализацию легко объяснить — идея, возможно, хороша»
            </div>
          )}
        </div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
          Lead Frontend Developer / Product Creator & Problem Solver &<br />
          <span className="bg-gradient-to-r from-primary-300 to-cyan-400 bg-clip-text text-transparent">Ментор</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto text-center">
          Строю frontend, который масштабируется. Учу команду, которая успевает.
        </p>
        <Button
          type="primary"
          size="large"
          icon={<DownOutlined />}
          onClick={scrollToExperience}
          className="bg-primary-600 hover:bg-primary-700 border-primary-600 hover:border-primary-700 h-14 px-8 text-lg"
        >
          Погрузиться в опыт
        </Button>
        
        <ConfettiReveal />
      </div>
    </section>
  )
}

export default Hero

