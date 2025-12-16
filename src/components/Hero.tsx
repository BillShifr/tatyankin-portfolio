import { Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'

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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          {showLenny && (
            <div className="text-6xl mb-4 animate-bounce">( ͡° ͜ʖ ͡°)</div>
          )}
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
          Frontend Архитектор
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-slate-300">
          & Ментор
        </h2>
        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto">
          Создаю масштабируемые решения, выстраиваю процессы и делюсь опытом
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
      </div>
    </section>
  )
}

export default Hero

