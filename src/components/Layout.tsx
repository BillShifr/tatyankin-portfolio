import { Outlet } from 'react-router-dom'
import { FloatButton } from 'antd'
import { ArrowUpOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'

const Layout = () => {
  const [isZoomed, setIsZoomed] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleContactMapOpen = () => setIsZoomed(true)
    const handleContactMapClose = () => setIsZoomed(false)

    window.addEventListener('contactMap:open', handleContactMapOpen)
    window.addEventListener('contactMap:close', handleContactMapClose)

    return () => {
      window.removeEventListener('contactMap:open', handleContactMapOpen)
      window.removeEventListener('contactMap:close', handleContactMapClose)
    }
  }, [])

  // Фоновые текстовые элементы для всего сайта
  const backgroundPhrases = [
    { text: 'хочу работать', top: '5%', left: '3%', rotation: '-12deg', size: 'text-xl md:text-2xl' },
    { text: 'умею работать', top: '12%', right: '5%', rotation: '8deg', size: 'text-2xl md:text-3xl' },
    { text: 'дайте таску', top: '8%', left: '25%', rotation: '-5deg', size: 'text-xl md:text-2xl' },
    { text: 'топ лид', top: '15%', right: '20%', rotation: '15deg', size: 'text-3xl md:text-4xl' },
    { text: 'ищу работу', top: '22%', left: '8%', rotation: '-8deg', size: 'text-xl md:text-2xl' },
    { text: 'хочу работать', top: '18%', left: '50%', rotation: '12deg', size: 'text-2xl md:text-3xl' },
    { text: 'умею работать', top: '25%', right: '12%', rotation: '-10deg', size: 'text-xl md:text-2xl' },
    { text: 'дайте таску', top: '30%', left: '15%', rotation: '6deg', size: 'text-2xl md:text-3xl' },
    { text: 'топ лид', top: '28%', left: '65%', rotation: '-15deg', size: 'text-2xl md:text-3xl' },
    { text: 'ищу работу', top: '35%', right: '8%', rotation: '9deg', size: 'text-xl md:text-2xl' },
    { text: 'хочу работать', top: '40%', left: '5%', rotation: '7deg', size: 'text-2xl md:text-3xl' },
    { text: 'топ лид', top: '45%', right: '25%', rotation: '-11deg', size: 'text-xl md:text-2xl' },
    { text: 'умею работать', top: '50%', left: '30%', rotation: '13deg', size: 'text-xl md:text-2xl' },
    { text: 'дайте таску', top: '55%', right: '15%', rotation: '-7deg', size: 'text-2xl md:text-3xl' },
    { text: 'ищу работу', top: '60%', left: '12%', rotation: '10deg', size: 'text-xl md:text-2xl' },
    { text: 'хочу работать', top: '65%', left: '55%', rotation: '-9deg', size: 'text-2xl md:text-3xl' },
    { text: 'топ лид', top: '70%', right: '10%', rotation: '14deg', size: 'text-xl md:text-2xl' },
    { text: 'умею работать', top: '75%', left: '8%', rotation: '-6deg', size: 'text-2xl md:text-3xl' },
    { text: 'дайте таску', top: '80%', right: '30%', rotation: '11deg', size: 'text-xl md:text-2xl' },
    { text: 'ищу работу', top: '85%', left: '20%', rotation: '-13deg', size: 'text-2xl md:text-3xl' },
    { text: 'хочу работать', top: '90%', right: '18%', rotation: '8deg', size: 'text-xl md:text-2xl' },
    { text: 'топ лид', top: '95%', left: '45%', rotation: '-10deg', size: 'text-2xl md:text-3xl' },
    { text: 'умею работать', top: '38%', left: '75%', rotation: '5deg', size: 'text-xl md:text-2xl' },
    { text: 'дайте таску', top: '52%', left: '80%', rotation: '-14deg', size: 'text-2xl md:text-3xl' },
    { text: 'ищу работу', top: '68%', left: '70%', rotation: '9deg', size: 'text-xl md:text-2xl' },
    { text: 'хочу работать', top: '78%', right: '45%', rotation: '-8deg', size: 'text-2xl md:text-3xl' },
    { text: 'топ лид', top: '88%', left: '60%', rotation: '12deg', size: 'text-xl md:text-2xl' },
    { text: 'умею работать', top: '42%', right: '35%', rotation: '-6deg', size: 'text-xl md:text-2xl' },
    { text: 'дайте таску', top: '58%', left: '40%', rotation: '7deg', size: 'text-2xl md:text-3xl' },
    { text: 'ищу работу', top: '72%', right: '22%', rotation: '-11deg', size: 'text-xl md:text-2xl' },
  ]

  return (
    <div 
      className={`min-h-screen relative transition-all duration-1000 origin-center ${
        isZoomed ? 'scale-0 opacity-0 pointer-events-none' : ''
      }`}
      style={{
        transformOrigin: 'center center',
      }}
    >
      {/* Фоновые текстовые элементы для всего сайта */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {backgroundPhrases.map((phrase, index) => (
          <div
            key={index}
            className={`absolute ${phrase.size} text-slate-500/15 font-semibold select-none`}
            style={{
              top: phrase.top,
              left: phrase.left,
              right: phrase.right,
              transform: `rotate(${phrase.rotation})`,
            }}
          >
            {phrase.text}
          </div>
        ))}
      </div>
      
      <div className="relative z-10">
        <Outlet />
      </div>
      
      <FloatButton
        icon={<ArrowUpOutlined />}
        type="primary"
        style={{ right: 24 }}
        onClick={scrollToTop}
        tooltip="Наверх"
      />
    </div>
  )
}

export default Layout

