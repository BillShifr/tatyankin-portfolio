import { Card } from 'antd'
import { RocketOutlined } from '@ant-design/icons'
import { useState } from 'react'

// SVG иконка указателя
const PointerIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.64 21.97c-.36.02-.72-.08-1.04-.26l-3.46-2.07c-.51-.31-.87-.84-1.01-1.44l-.85-3.57L2.3 11.1c-.39-.39-.39-1.02 0-1.41L11.05 1.05c.39-.39 1.02-.39 1.41 0l8.75 8.75c.39.39.39 1.02 0 1.41l-3.53 3.53-3.57.85c-.6.14-1.13.5-1.44 1.01l-2.07 3.46c-.18.32-.44.58-.76.76-.32.18-.68.28-1.04.26zm-1.64-2.64l2.07-3.46c.18-.31.48-.54.85-.65l4.23-1.01L19.5 9.5 10.5.5 1.5 9.5l5.75 5.75-1.01 4.23c-.11.37-.34.67-.65.85l-3.46 2.07c-.31.18-.68.18-.99 0-.31-.18-.5-.5-.5-.85v-7.07c0-.28.11-.55.29-.75L9.5 1.5l10 10v7.07c0 .35-.19.67-.5.85-.31.18-.68.18-.99 0z" />
  </svg>
)

const FinalSummary = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [salary, setSalary] = useState(300000)
  const [showMessage, setShowMessage] = useState(false)
  const [messageText, setMessageText] = useState('')

  const handleMouseEnter = () => {
    if (!isClicked) {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    if (!isClicked) {
      setIsHovered(false)
    }
  }

  const handleClick = () => {
    setIsClicked(true)
    setIsHovered(false)
    
    let isFinalMessage = false
    
    if (salary < 500000) {
      const newSalary = salary + 50000
      setSalary(newSalary)
      
      // Показываем сообщение
      if (newSalary >= 500000) {
        setMessageText('вот и моя вилка 300-500к)')
        isFinalMessage = true
      } else {
        setMessageText('как неожиданно и приятно!')
      }
    } else {
      // Если уже достигнут максимум, все равно показываем финальную фразу
      setMessageText('вот и моя вилка 300-500к)')
      isFinalMessage = true
    }
    
    // Всегда показываем сообщение при клике
    setShowMessage(true)
    // Для финальной фразы показываем дольше
    const messageDuration = isFinalMessage ? 4000 : 2000
    setTimeout(() => {
      setShowMessage(false)
    }, messageDuration)
    
    // Через некоторое время сбрасываем состояние клика
    setTimeout(() => {
      setIsClicked(false)
    }, 100)
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
            <div className="mt-12 pt-8 border-t border-slate-700/50 relative">
              {/* Анимированное сообщение */}
              {showMessage && (
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
                  <div className="bg-gradient-to-r from-primary-500 to-cyan-500 text-white px-6 py-3 rounded-full shadow-2xl text-xl font-bold whitespace-nowrap">
                    {messageText}
                  </div>
                </div>
              )}
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full">
                {/* Блок с ЗП */}
                <div
                  className="relative w-full md:w-auto inline-flex items-center justify-center bg-gradient-to-r from-primary-600/30 via-primary-500/30 to-primary-600/30 border-2 border-primary-500/50 rounded-2xl px-6 py-6 md:px-10 md:py-8 backdrop-blur-sm shadow-2xl shadow-primary-500/20 hover:shadow-primary-500/40 hover:border-primary-400 hover:scale-105 transition-all duration-300 cursor-pointer active:scale-95 group"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleClick}
                >
                  {/* Иконка указателя в углу */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <PointerIcon className="text-primary-400 w-5 h-5 animate-pulse" />
                  </div>
                {/* Затемнение при наведении */}
                <div
                  className={`absolute inset-0 bg-black/70 rounded-2xl transition-opacity duration-300 ${
                    isHovered && !isClicked ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                
                {/* Надпись "валидно!" - показывается при наведении, но скрывается после клика */}
                <div
                  className={`absolute inset-0 flex items-center justify-center z-20 transition-all duration-300 ${
                    isHovered && !isClicked
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
                    isHovered && !isClicked ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
                    <span>Требуемые условия</span>
                    <span className="text-primary-400 text-xs">(кликни)</span>
                  </div>
                  <div className="text-xl md:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-primary-400 whitespace-nowrap">
                    ЗП {salary >= 500000 ? 'до' : 'от'} {salary.toLocaleString('ru-RU')} ₽
                  </div>
                </div>
              </div>
              
              {/* Блок "команда где мы поняли, что нашли друг друга" */}
              <div className="relative w-full md:w-auto inline-flex items-center justify-center bg-gradient-to-r from-cyan-600/30 via-blue-500/30 to-cyan-600/30 border-2 border-cyan-500/50 rounded-2xl px-6 py-6 md:px-10 md:py-8 backdrop-blur-sm shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300">
                <div className="text-center">
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-2">
                    Идеальная ситуация
                  </div>
                  <div className="text-lg md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-cyan-400">
                    Команда, где мы поняли, что нашли друг друга
                  </div>
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
