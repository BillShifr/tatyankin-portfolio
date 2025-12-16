import { useState, useEffect, useRef } from 'react'
import { Button } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'

interface ConfettiParticle {
  x: number
  y: number
  vx: number
  vy: number
  color: string
  size: number
  rotation: number
  rotationSpeed: number
}

const ConfettiReveal = () => {
  const [isRevealed, setIsRevealed] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<ConfettiParticle[]>([])
  const animationFrameRef = useRef<number>()

  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
    '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B739', '#FF6B9D',
    '#C44569', '#F8B500', '#6C5CE7', '#00D2D3', '#FF6348'
  ]

  const createParticle = (): ConfettiParticle => ({
    x: Math.random() * window.innerWidth,
    y: -10,
    vx: (Math.random() - 0.5) * 4,
    vy: Math.random() * 3 + 2,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: Math.random() * 8 + 4,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 10,
  })

  const initConfetti = () => {
    particlesRef.current = []
    for (let i = 0; i < 200; i++) {
      particlesRef.current.push(createParticle())
    }
  }

  const animateConfetti = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particlesRef.current = particlesRef.current.filter((particle) => {
      particle.x += particle.vx
      particle.y += particle.vy
      particle.rotation += particle.rotationSpeed
      particle.vy += 0.1 // гравитация

      // Рисуем конфетти
      ctx.save()
      ctx.translate(particle.x, particle.y)
      ctx.rotate((particle.rotation * Math.PI) / 180)
      ctx.fillStyle = particle.color
      ctx.shadowBlur = 15
      ctx.shadowColor = particle.color
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0
      
      // Рисуем разные формы для разнообразия
      const shapeType = Math.floor(Math.random() * 3)
      if (shapeType === 0) {
        // Квадрат
        ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size)
      } else if (shapeType === 1) {
        // Круг
        ctx.beginPath()
        ctx.arc(0, 0, particle.size / 2, 0, Math.PI * 2)
        ctx.fill()
      } else {
        // Звезда
        ctx.beginPath()
        for (let i = 0; i < 5; i++) {
          const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2
          const x = Math.cos(angle) * particle.size / 2
          const y = Math.sin(angle) * particle.size / 2
          if (i === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.closePath()
        ctx.fill()
      }
      
      ctx.restore()

      return particle.y < canvas.height + 20
    })

    // Добавляем новые частицы для непрерывного эффекта
    if (particlesRef.current.length < 150 && Math.random() > 0.5) {
      particlesRef.current.push(createParticle())
    }

    if (particlesRef.current.length > 0) {
      animationFrameRef.current = requestAnimationFrame(animateConfetti)
    } else {
      setShowConfetti(false)
    }
  }

  useEffect(() => {
    if (showConfetti) {
      initConfetti()
      animateConfetti()
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [showConfetti])

  const handleReveal = () => {
    setIsRevealed(true)
    setShowConfetti(true)
  }

  const handleClose = () => {
    setIsRevealed(false)
    setShowConfetti(false)
    particlesRef.current = []
  }

  return (
    <>
      <div className="mt-12">
        <div className="text-center mb-6">
          <p className="text-xl md:text-2xl text-slate-300 mb-6 animate-pulse font-medium">
            узнать почему я не могу устроиться на работу
          </p>
          <Button
            type="primary"
            size="large"
            icon={<QuestionCircleOutlined />}
            onClick={handleReveal}
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-700 border-0 h-14 px-10 text-lg font-bold shadow-2xl hover:shadow-pink-500/50 transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
            style={{
              backgroundSize: '200% 200%',
              animation: 'gradient 3s ease infinite',
            }}
          >
            узнать
          </Button>
        </div>
      </div>

      {isRevealed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900/90 via-pink-900/90 to-indigo-900/90 backdrop-blur-md transition-opacity duration-500"
          onClick={handleClose}
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
          />
          
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <div className="animate-bounce mb-8">
              <h2 
                className="text-4xl md:text-6xl lg:text-8xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 via-purple-400 to-pink-300 drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                style={{
                  textShadow: '0 0 40px rgba(255, 192, 203, 0.8), 0 0 80px rgba(255, 192, 203, 0.6)',
                  animation: 'glow 2s ease-in-out infinite alternate',
                }}
              >
                потому что мою резюме просто скпиют
              </h2>
            </div>
            <Button
              type="default"
              size="large"
              onClick={handleClose}
              className="mt-8 bg-white/30 hover:bg-white/40 text-white border-white/50 h-14 px-10 text-lg font-semibold shadow-xl backdrop-blur-sm"
            >
              Закрыть
            </Button>
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes glow {
          from {
            filter: brightness(1) drop-shadow(0 0 20px rgba(255, 192, 203, 0.8));
          }
          to {
            filter: brightness(1.2) drop-shadow(0 0 40px rgba(255, 192, 203, 1));
          }
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  )
}

export default ConfettiReveal
