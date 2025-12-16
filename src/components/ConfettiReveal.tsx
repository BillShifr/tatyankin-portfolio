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
      <div className="mt-16 mb-16 flex justify-center">
        <div 
          className="relative text-center p-8 md:p-12 rounded-3xl border-2 border-pink-500/30 bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-indigo-900/20 backdrop-blur-sm shadow-2xl hover:shadow-pink-500/30 transition-all duration-500 transform hover:scale-105 animate-pulse hover:animate-none"
          style={{
            background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(147, 51, 234, 0.1) 50%, rgba(79, 70, 229, 0.1) 100%)',
            boxShadow: '0 0 40px rgba(236, 72, 153, 0.3), inset 0 0 40px rgba(147, 51, 234, 0.2)',
            animation: 'glow-border 3s ease-in-out infinite',
          }}
        >
          {/* Декоративные элементы */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl pointer-events-none">
            <div className="absolute top-0 left-0 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s' }} />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          <div className="relative z-10">
            <p 
              className="text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 mb-8 font-bold drop-shadow-lg"
              style={{
                textShadow: '0 0 20px rgba(236, 72, 153, 0.5)',
                animation: 'text-shimmer 3s ease-in-out infinite',
              }}
            >
              узнать почему я не могу устроиться на работу
            </p>
            <Button
              type="primary"
              size="large"
              icon={<QuestionCircleOutlined />}
              onClick={handleReveal}
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-700 border-0 h-16 px-12 text-xl font-bold shadow-2xl hover:shadow-pink-500/50 transform hover:scale-110 transition-all duration-300 relative overflow-hidden group"
              style={{
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 3s ease infinite, button-pulse 2s ease-in-out infinite',
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>узнать</span>
                <QuestionCircleOutlined className="animate-spin-slow" />
              </span>
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                style={{
                  animation: 'shimmer 2s infinite',
                }}
              />
            </Button>
          </div>
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
        @keyframes gradient-shift {
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
        @keyframes button-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(236, 72, 153, 0.4), 0 0 40px rgba(147, 51, 234, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(236, 72, 153, 0.6), 0 0 60px rgba(147, 51, 234, 0.5);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        @keyframes text-shimmer {
          0%, 100% {
            background-position: 0% 50%;
            filter: brightness(1);
          }
          50% {
            background-position: 100% 50%;
            filter: brightness(1.2);
          }
        }
        @keyframes glow-border {
          0%, 100% {
            box-shadow: 0 0 40px rgba(236, 72, 153, 0.3), inset 0 0 40px rgba(147, 51, 234, 0.2), 0 0 0 2px rgba(236, 72, 153, 0.3);
          }
          50% {
            box-shadow: 0 0 60px rgba(236, 72, 153, 0.5), inset 0 0 60px rgba(147, 51, 234, 0.3), 0 0 0 2px rgba(236, 72, 153, 0.5);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </>
  )
}

export default ConfettiReveal
