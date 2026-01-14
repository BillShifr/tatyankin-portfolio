import { Card } from 'antd'
import { RocketOutlined } from '@ant-design/icons'
import { useState, useRef } from 'react'

const FinalSummary = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [showValid, setShowValid] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    // Очищаем предыдущий таймер, если есть
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    
    setIsHovered(true)
    
    // Показываем надпись "валидно!" с небольшой задержкой для плавности
    setTimeout(() => {
      setShowValid(true)
    }, 100)
    
    // Через 2 секунды убираем затемнение и надпись
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false)
      setShowValid(false)
    }, 2000)
  }

  const handleMouseLeave = () => {
    // Очищаем таймер при уходе курсора
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    
    // Сразу возвращаем все в исходное состояние
    setIsHovered(false)
    setShowValid(false)
  }
  return (
    <section id="final-summary" className="py-12 px-4 max-w-5xl mx-auto">
      <div className="relative">
        {/* Фоновые декоративные элементы */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-primary-500/10 to-primary-600/10 rounded-3xl blur-3xl" />
        
        <Card
          className="relative border-2 border-primary-500/30 bg-gradient-to-br from-slate-800/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm"
          styles={{
            body: {
              padding: '48px 32px',
            },
          }}
        >
          <div className="text-center space-y-8">
            {/* Заголовок */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <RocketOutlined className="text-5xl text-primary-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-100 m-0">
                Резюмирую
              </h2>
            </div>

            {/* Основной текст */}
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto">
              <p>
                Если я вас <strong className="text-primary-400">заинтересовал</strong> и у вас для меня{' '}
                <strong className="text-primary-400">сугубо техническая работа</strong> — я только за.
              </p>
              <p>
                Но если вы ищете человека, способного{' '}
                <strong className="text-primary-400">совмещать не совмещаемое</strong> и создавать действительно{' '}
                <strong className="text-primary-400">креативную интеллектуальную собственность</strong> — то вы по адресу.
              </p>
            </div>

            {/* Блок с условиями */}
            <div className="mt-12 pt-8 border-t border-slate-700/50">
              <div
                className="relative inline-flex items-center justify-center bg-gradient-to-r from-primary-600/30 via-primary-500/30 to-primary-600/30 border-2 border-primary-500/50 rounded-2xl px-10 py-8 backdrop-blur-sm shadow-2xl shadow-primary-500/20 hover:shadow-primary-500/30 transition-all duration-300 cursor-pointer min-w-[400px]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Затемнение при наведении */}
                <div
                  className={`absolute inset-0 bg-black/70 rounded-2xl transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                
                {/* Надпись "валидно!" */}
                <div
                  className={`absolute inset-0 flex items-center justify-center z-20 transition-all duration-300 ${
                    showValid
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-green-400 animate-pulse">
                    валидно!
                  </span>
                </div>

                {/* Основной контент */}
                <div
                  className={`relative z-10 text-center transition-opacity duration-300 ${
                    isHovered ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-2">
                    Требуемые условия
                  </div>
                  <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-primary-400">
                    ЗП от 300 000 ₽
                  </div>
                </div>
              </div>
            </div>

            {/* Дополнительный акцент */}
            <div className="mt-8 text-slate-400 text-sm italic">
              Готов обсудить детали при личной встрече
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default FinalSummary
