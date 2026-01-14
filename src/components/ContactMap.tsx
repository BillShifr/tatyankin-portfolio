import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

interface ContactMapProps {
  onToggle?: (visible: boolean) => void
}

const ContactMap = ({ onToggle }: ContactMapProps) => {
  const [showMetaphor, setShowMetaphor] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const scrollPositionRef = useRef<number>(0)

  useEffect(() => {
    if (onToggle) {
      onToggle(showMetaphor)
    }

    if (showMetaphor) {
      window.dispatchEvent(new CustomEvent('contactMap:open'))
    } else {
      window.dispatchEvent(new CustomEvent('contactMap:close'))
    }
  }, [showMetaphor, onToggle])

  const handleToggle = () => {
    const newValue = !showMetaphor
    if (newValue) {
      // Сохраняем текущую позицию скролла перед открытием
      scrollPositionRef.current = window.scrollY
      setShowMetaphor(true)
      window.dispatchEvent(new CustomEvent('contactMap:open'))
    } else {
      setShowMetaphor(false)
      window.dispatchEvent(new CustomEvent('contactMap:close'))
    }
  }

  const handleReturn = () => {
    setShowMetaphor(false)
    window.dispatchEvent(new CustomEvent('contactMap:close'))
    
    // Восстанавливаем позицию скролла после небольшой задержки
    setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
      } else {
        window.scrollTo({ top: scrollPositionRef.current, behavior: 'smooth' })
      }
    }, 100)
  }


  return (
    <>
      {showMetaphor && typeof document !== 'undefined' 
        ? createPortal(
            <div className="fixed inset-0 z-[9999] bg-slate-950 flex items-center justify-center overflow-hidden">
              <div className="absolute left-0 right-0 top-[35%] h-1 bg-gradient-to-r from-transparent via-primary-400/50 to-transparent z-30" />
              
              {/* Вода (нижняя часть) */}
              <div className="absolute inset-0 top-[35%] bg-gradient-to-b from-blue-900/40 via-blue-800/50 to-blue-900/60">
                {/* Волны */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-blue-700/30 to-transparent animate-wave" />
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-blue-600/20 to-transparent animate-wave-delay" />
              </div>

              {/* Контейнер для айсберга */}
              <div className="relative z-20 w-full max-w-6xl mx-auto px-4">
                <div className="iceberg-container">
                  {/* Единая фигура айсберга */}
                  <div className="iceberg-main">
                    {/* Верхняя часть (над водой) */}
                    <div className="iceberg-top-section">
                      <div className="iceberg-top-content">
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-800">
                          указанный опыт
                        </h3>
                      </div>
                    </div>
                    {/* Нижняя часть (под водой) */}
                    <div className="iceberg-bottom-section">
                      <div className="iceberg-bottom-content">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-8 text-center">
                          давайте пообщаемся
                        </h2>
                        <div className="flex justify-center">
                          <Button
                            type="default"
                            size="large"
                            icon={<ArrowLeftOutlined />}
                            onClick={handleReturn}
                            className="bg-white/20 hover:bg-white/30 text-white border-white/40 h-auto min-h-[44px] sm:min-h-[48px] md:min-h-[52px] px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg font-semibold backdrop-blur-sm whitespace-normal break-words max-w-full"
                            style={{ wordBreak: 'break-word' }}
                          >
                            <span className="block text-center">Вернуться</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
        : null
      }

      <style>{`
        @keyframes wave {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-30px);
          }
        }
        .animate-wave {
          animation: wave 3s ease-in-out infinite;
        }
        .animate-wave-delay {
          animation: wave 3s ease-in-out infinite 1.5s;
        }

        /* Контейнер айсберга */
        .iceberg-container {
          position: relative;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          height: 800px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Единая фигура айсберга */
        .iceberg-main {
          position: relative;
          width: 600px;
          height: 700px;
          clip-path: polygon(
            35% 0%,
            65% 0%,
            78% 8%,
            88% 20%,
            95% 35%,
            98% 50%,
            96% 65%,
            90% 78%,
            82% 88%,
            72% 95%,
            60% 98%,
            40% 98%,
            28% 95%,
            18% 88%,
            10% 78%,
            4% 65%,
            2% 50%,
            5% 35%,
            12% 20%,
            22% 8%
          );
          background: linear-gradient(to bottom, 
            rgba(241, 245, 249, 0.98) 0%,
            rgba(241, 245, 249, 0.98) 13%,
            rgba(226, 232, 240, 0.98) 13%,
            rgba(226, 232, 240, 0.98) 15%,
            rgba(148, 163, 184, 0.7) 15%,
            rgba(148, 163, 184, 0.7) 50%,
            rgba(100, 116, 139, 0.6) 50%,
            rgba(100, 116, 139, 0.6) 70%,
            rgba(71, 85, 105, 0.5) 70%,
            rgba(71, 85, 105, 0.5) 100%
          );
          border: 4px solid rgba(255, 255, 255, 0.3);
          box-shadow: 
            0 25px 70px rgba(0, 0, 0, 0.4),
            inset 0 0 40px rgba(255, 255, 255, 0.2);
          overflow: hidden;
          z-index: 25;
        }

        /* Верхняя секция (над водой) */
        .iceberg-top-section {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 15%;
          background: linear-gradient(135deg, rgba(241, 245, 249, 0.98) 0%, rgba(226, 232, 240, 0.98) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
          clip-path: polygon(
            0% 0%,
            100% 0%,
            100% 100%,
            0% 100%
          );
        }

        .iceberg-top-content {
          text-align: center;
        }

        /* Нижняя секция (под водой) */
        .iceberg-bottom-section {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 85%;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
        }

        .iceberg-bottom-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
        }

        @media (max-width: 768px) {
          .iceberg-container {
            height: 700px;
          }

          .iceberg-main {
            width: 85%;
            height: 600px;
          }

          .iceberg-bottom-content h2 {
            font-size: 2rem;
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}

export default ContactMap

