import { Card, Row, Col, Segmented } from 'antd'
import {
  FireOutlined,
  CheckCircleOutlined,
  SettingOutlined,
  BookOutlined,
} from '@ant-design/icons'
import { useState, useEffect, useRef } from 'react'

const principles = [
  {
    title: 'Не выгорающий лид',
    icon: <FireOutlined className="text-4xl text-orange-500" />,
    content:
      'Баланс между работой и жизнью. Умею распределять нагрузку, делегировать задачи и поддерживать здоровую атмосферу в команде. Регулярные ретро и открытая коммуникация помогают избежать выгорания.',
  },
  {
    title: 'Ответственность',
    icon: <CheckCircleOutlined className="text-4xl text-green-500" />,
    content:
      'Беру ответственность за решения и их последствия. Если что-то пошло не так — анализирую, исправляю и делюсь уроками с командой. Прозрачность и честность — основа доверия.',
  },
  {
    title: 'Четкие процессы',
    icon: <SettingOutlined className="text-4xl text-blue-500" />,
    content:
      'Выстраиваю процессы, которые работают на практике, а не только на бумаге. Code review, CI/CD, документация — всё должно быть понятно и полезно для команды. Процессы должны помогать, а не мешать.',
  },
  {
    title: 'Образование и развитие',
    icon: <BookOutlined className="text-4xl text-purple-500" />,
    content:
      'Выпускник лицея ЮФМЛ. Магистр Югорского государственного университета (2020, 2022). Активно делюсь опытом на Habr и в личных блогах. Верю, что лучший способ учиться — это учить других. Менторство и обмен знаниями — часть моей работы.',
  },
]

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

const Principles = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [showTruth, setShowTruth] = useState(false)
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
      particle.vy += 0.1

      ctx.save()
      ctx.translate(particle.x, particle.y)
      ctx.rotate((particle.rotation * Math.PI) / 180)
      ctx.fillStyle = particle.color
      ctx.shadowBlur = 15
      ctx.shadowColor = particle.color
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0

      const shapeType = Math.floor(Math.random() * 3)
      if (shapeType === 0) {
        ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size)
      } else if (shapeType === 1) {
        ctx.beginPath()
        ctx.arc(0, 0, particle.size / 2, 0, Math.PI * 2)
        ctx.fill()
      } else {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showConfetti])

  useEffect(() => {
    if (showTruth) {
      const timer = setTimeout(() => {
        setShowTruth(false)
        setShowConfetti(false)
        particlesRef.current = []
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
      }, 7000)
      return () => clearTimeout(timer)
    }
  }, [showTruth])

  const handleSwitchChange = (value: string | number) => {
    const checked = value === 'yes'
    setIsChecked(checked)
    
    if (checked) {
      setShowConfetti(true)
      setShowTruth(true)
    } else {
      // Останавливаем конфетти и надпись при выключении
      setShowConfetti(false)
      setShowTruth(false)
      particlesRef.current = []
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }

  return (
    <section id="principles" className="py-20 px-4 max-w-6xl mx-auto relative">
      {/* Canvas для конфетти */}
      {showConfetti && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-50"
        />
      )}

      {/* Overlay с надписью "это правда!" */}
      {showTruth && (
        <div className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none">
          <div className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 via-purple-400 to-pink-300 drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] animate-bounce">
            это правда!
          </div>
        </div>
      )}

      <div className="flex flex-col items-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-slate-100">
          Принципы и подходы
        </h2>
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-2xl">
            <Segmented
              value={isChecked ? 'yes' : 'no'}
              onChange={handleSwitchChange}
              options={[
                {
                  label: (
                    <div className="text-center py-2">
                      <div className="text-xl md:text-2xl font-bold">
                        Ожидание
                      </div>
                    </div>
                  ),
                  value: 'no',
                },
                {
                  label: (
                    <div className="text-center py-2">
                      <div className="text-xl md:text-2xl font-bold">
                        Действительность
                      </div>
                    </div>
                  ),
                  value: 'yes',
                },
              ]}
              size="large"
              block
              className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 border-2 border-slate-600 rounded-2xl shadow-2xl"
              style={{
                minWidth: '500px',
                height: '80px',
                fontSize: '20px',
                padding: '4px',
              }}
            />
          </div>
        </div>
      </div>

      <Row gutter={[24, 24]}>
        {principles.map((principle, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card
              className="h-full hover:shadow-xl transition-all duration-300 border-slate-700 hover:border-primary-500"
              title={
                <div className="flex items-center gap-3">
                  {principle.icon}
                  <span className="text-slate-100 font-semibold">
                    {principle.title}
                  </span>
                </div>
              }
            >
              <p className="text-slate-300 leading-relaxed">
                {principle.content}
              </p>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Дополнительная информация */}
      <div className="mt-16 text-center">
        <div className="inline-block p-6 bg-slate-800 rounded-lg border border-slate-700">
          <p className="text-slate-300 mb-2">
            <strong className="text-primary-400">Образование:</strong> Лицей ЮФМЛ, Югорский государственный университет - Ханты-Мансийск
          </p>
          <p className="text-slate-300 mb-2">
            <strong className="text-primary-400">Степень:</strong> Магистр (2020, 2022)
          </p>
          <p className="text-slate-300">
            <strong className="text-primary-400">Публикации:</strong> Habr
            (статьи о React, TypeScript, архитектуре фронтенда)
          </p>
        </div>
      </div>
    </section>
  )
}

export default Principles

