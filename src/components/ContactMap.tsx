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

  useEffect(() => {
    if (onToggle) {
      onToggle(showMetaphor)
    }
    // Отправляем события для Layout
    if (showMetaphor) {
      window.dispatchEvent(new CustomEvent('contactMap:open'))
    } else {
      window.dispatchEvent(new CustomEvent('contactMap:close'))
    }
  }, [showMetaphor, onToggle])

  const handleToggle = () => {
    const newValue = !showMetaphor
    setShowMetaphor(newValue)
    if (newValue) {
      window.dispatchEvent(new CustomEvent('contactMap:open'))
    } else {
      window.dispatchEvent(new CustomEvent('contactMap:close'))
    }
  }

  const handleReturn = () => {
    setShowMetaphor(false)
    window.dispatchEvent(new CustomEvent('contactMap:close'))
  }


  return (
    <>
      <Button
        ref={buttonRef}
        type="primary"
        size="large"
        onClick={handleToggle}
        block
        className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 h-16 text-xl font-bold mt-8"
      >
        остались вопросы?
      </Button>

      {showMetaphor && typeof document !== 'undefined' 
        ? createPortal(
            <div className="fixed inset-0 z-[9999] bg-slate-950 flex items-center justify-center overflow-hidden">
              {/* Линия горизонта (вода) */}
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-transparent via-primary-400/50 to-transparent z-30" />
              
              {/* Вода (нижняя часть) */}
              <div className="absolute inset-0 top-1/2 bg-gradient-to-b from-blue-900/40 via-blue-800/50 to-blue-900/60">
                {/* Волны */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-blue-700/30 to-transparent animate-wave" />
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-blue-600/20 to-transparent animate-wave-delay" />
              </div>

              {/* Контейнер для айсберга */}
              <div className="relative z-20 w-full max-w-6xl mx-auto px-4">
                <div className="iceberg-container">
                  {/* Видимая часть айсберга (над водой) */}
                  <div className="iceberg-top">
                    <div className="iceberg-content">
                      <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-800">
                          указанный опыт
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Невидимая часть айсберга (под водой) */}
                  <div className="iceberg-bottom">
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
                          className="bg-white/20 hover:bg-white/30 text-white border-white/40 h-12 px-8 text-lg font-semibold backdrop-blur-sm"
                        >
                          Вернуться
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="iceberg-bottom-layer-1" />
                  <div className="iceberg-bottom-layer-2" />
                  <div className="iceberg-bottom-layer-3" />
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
          height: 600px;
        }

        /* Видимая часть айсберга (над водой) */
        .iceberg-top {
          position: absolute;
          top: 50px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 250px;
          background: linear-gradient(135deg, rgba(241, 245, 249, 0.98) 0%, rgba(226, 232, 240, 0.98) 50%, rgba(203, 213, 225, 0.98) 100%);
          clip-path: polygon(
            30% 0%,
            70% 0%,
            100% 30%,
            100% 70%,
            85% 100%,
            15% 100%,
            0% 70%,
            0% 30%
          );
          border: 4px solid rgba(255, 255, 255, 0.4);
          box-shadow: 
            0 25px 70px rgba(0, 0, 0, 0.4),
            inset 0 0 40px rgba(255, 255, 255, 0.3),
            inset 0 -15px 30px rgba(148, 163, 184, 0.15);
          z-index: 25;
          overflow: hidden;
        }

        .iceberg-content {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        /* Основная невидимая часть айсберга (под водой) */
        .iceberg-bottom {
          position: absolute;
          top: 280px;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 400px;
          background: linear-gradient(135deg, rgba(148, 163, 184, 0.6) 0%, rgba(100, 116, 139, 0.6) 50%, rgba(71, 85, 105, 0.6) 100%);
          clip-path: polygon(
            20% 0%,
            80% 0%,
            95% 20%,
            100% 40%,
            98% 60%,
            95% 80%,
            90% 100%,
            10% 100%,
            5% 80%,
            2% 60%,
            0% 40%,
            5% 20%
          );
          border: 3px solid rgba(255, 255, 255, 0.2);
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.3),
            inset 0 0 30px rgba(255, 255, 255, 0.1);
          z-index: 24;
          overflow: hidden;
        }

        .iceberg-bottom-content {
          height: 100%;
          width: 100%;
          padding: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        /* Дополнительные слои для глубины (под водой) - слой 1 */
        .iceberg-bottom-layer-1 {
          position: absolute;
          top: 620px;
          left: 50%;
          transform: translateX(-50%);
          width: 1100px;
          height: 350px;
          background: linear-gradient(135deg, rgba(100, 116, 139, 0.3) 0%, rgba(71, 85, 105, 0.3) 100%);
          clip-path: polygon(
            18% 0%,
            82% 0%,
            96% 18%,
            100% 38%,
            97% 58%,
            94% 78%,
            88% 98%,
            12% 98%,
            6% 78%,
            3% 58%,
            0% 38%,
            4% 18%
          );
          filter: blur(10px);
          opacity: 0.5;
          z-index: 20;
        }

        /* Дополнительные слои для глубины (под водой) - слой 2 */
        .iceberg-bottom-layer-2 {
          position: absolute;
          top: 680px;
          left: 50%;
          transform: translateX(-50%);
          width: 1300px;
          height: 400px;
          background: linear-gradient(135deg, rgba(71, 85, 105, 0.25) 0%, rgba(51, 65, 85, 0.25) 100%);
          clip-path: polygon(
            15% 0%,
            85% 0%,
            97% 15%,
            100% 35%,
            97% 55%,
            94% 75%,
            90% 95%,
            10% 95%,
            6% 75%,
            3% 55%,
            0% 35%,
            3% 15%
          );
          filter: blur(14px);
          opacity: 0.35;
          z-index: 19;
        }

        /* Дополнительные слои для глубины (под водой) - слой 3 */
        .iceberg-bottom-layer-3 {
          position: absolute;
          top: 720px;
          left: 50%;
          transform: translateX(-50%);
          width: 1500px;
          height: 450px;
          background: linear-gradient(135deg, rgba(51, 65, 85, 0.2) 0%, rgba(30, 41, 59, 0.2) 100%);
          clip-path: polygon(
            12% 0%,
            88% 0%,
            96% 12%,
            100% 32%,
            96% 52%,
            93% 72%,
            88% 92%,
            12% 92%,
            7% 72%,
            4% 52%,
            0% 32%,
            4% 12%
          );
          filter: blur(18px);
          opacity: 0.2;
          z-index: 18;
        }

        @media (max-width: 768px) {
          .iceberg-container {
            height: 700px;
          }

          .iceberg-top {
            width: 85%;
            height: 180px;
            top: 60px;
          }

          .iceberg-bottom {
            width: 100%;
            height: 320px;
            top: 220px;
          }

          .iceberg-bottom-content h2 {
            font-size: 2rem;
            margin-bottom: 1.5rem;
          }

          .iceberg-bottom-layer-1 {
            width: 120%;
            height: 280px;
            top: 480px;
          }

          .iceberg-bottom-layer-2 {
            width: 140%;
            height: 320px;
            top: 540px;
          }

          .iceberg-bottom-layer-3 {
            width: 160%;
            height: 360px;
            top: 580px;
          }
        }
      `}</style>
    </>
  )
}

export default ContactMap

