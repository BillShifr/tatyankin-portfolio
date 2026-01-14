import { Card } from 'antd'
import { RocketOutlined } from '@ant-design/icons'
import { useState } from 'react'

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
    <section id="final-summary" className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="relative">
        {/* Фоновые декоративные элементы */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-primary-500/10 to-primary-600/10 rounded-3xl blur-3xl" />
        
        <Card
          className="relative border-2 border-primary-500/30 bg-gradient-to-br from-slate-800/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm overflow-hidden"
          styles={{
            body: {
              padding: '16px 12px',
            },
          }}
        >
          <div className="text-center space-y-6 sm:space-y-8 overflow-x-hidden">
            {/* Заголовок */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              <RocketOutlined className="text-3xl sm:text-4xl md:text-5xl text-primary-400" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 m-0">
                Резюмирую
              </h2>
            </div>

            {/* Основной текст */}
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto px-2">
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
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-700/50 relative w-full overflow-hidden">
              {/* Анимированное сообщение */}
              {showMessage && (
                <div className="fixed sm:absolute top-20 sm:-top-16 md:-top-20 left-1/2 transform -translate-x-1/2 z-50 animate-bounce w-[calc(100%-2rem)] sm:w-auto max-w-[90vw] sm:max-w-none px-2">
                  <div className="bg-gradient-to-r from-primary-500 to-cyan-500 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full shadow-2xl text-xs sm:text-sm md:text-base lg:text-xl font-bold text-center break-words">
                    {messageText}
                  </div>
                </div>
              )}
              
              <div className="w-full space-y-3 sm:space-y-4">
                {/* Блок с ЗП */}
                <div
                  className="relative w-full flex items-center justify-center bg-gradient-to-r from-primary-600/30 via-primary-500/30 to-primary-600/30 border-2 border-primary-500/50 rounded-lg sm:rounded-xl md:rounded-2xl px-2 sm:px-3 md:px-4 lg:px-5 py-2.5 sm:py-3 md:py-4 lg:py-5 backdrop-blur-sm shadow-2xl shadow-primary-500/20 hover:shadow-primary-500/40 hover:border-primary-400 hover:scale-105 transition-all duration-300 cursor-pointer active:scale-95 group min-w-0"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleClick}
                  style={{ maxWidth: '100%' }}
                >
                  {/* Затемнение при наведении */}
                  <div
                    className={`absolute inset-0 bg-black/70 rounded-lg sm:rounded-xl md:rounded-2xl transition-opacity duration-300 ${
                      isHovered && !isClicked ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  
                  {/* Надпись "валидно!" - показывается при наведении, но скрывается после клика */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center z-20 transition-all duration-300 px-2 ${
                      isHovered && !isClicked
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-green-400 animate-pulse break-words text-center">
                      валидно!
                    </span>
                  </div>

                  {/* Основной контент */}
                  <div
                    className={`relative z-10 text-center transition-opacity duration-300 w-full min-w-0 ${
                      isHovered && !isClicked ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    <div className="text-[8px] sm:text-[10px] md:text-xs text-slate-400 uppercase tracking-wider mb-1 sm:mb-1.5 flex items-center justify-center gap-0.5 sm:gap-1 flex-wrap">
                      <span className="whitespace-nowrap">Требуемые условия</span>
                      <span className="text-primary-400 text-[8px] sm:text-[10px] md:text-xs whitespace-nowrap">(кликни)</span>
                    </div>
                    <div className="text-[11px] sm:text-xs md:text-sm lg:text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-primary-400 break-words min-w-0">
                      ЗП {salary >= 500000 ? 'до' : 'от'} {salary.toLocaleString('ru-RU')} ₽
                    </div>
                  </div>
                </div>
                
                {/* Блок "команда где мы поняли, что нашли друг друга" */}
                <div 
                  className="relative w-full flex items-center justify-center bg-gradient-to-r from-cyan-600/30 via-blue-500/30 to-cyan-600/30 border-2 border-cyan-500/50 rounded-lg sm:rounded-xl md:rounded-2xl px-2 sm:px-3 md:px-4 lg:px-5 py-2.5 sm:py-3 md:py-4 lg:py-5 backdrop-blur-sm shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 min-w-0"
                  style={{ maxWidth: '100%' }}
                >
                  <div className="text-center w-full min-w-0">
                    <div className="text-[8px] sm:text-[10px] md:text-xs text-slate-400 uppercase tracking-wider mb-1 sm:mb-1.5 whitespace-nowrap">
                      Идеальная ситуация
                    </div>
                    <div className="text-[11px] sm:text-xs md:text-sm lg:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-cyan-400 break-words min-w-0">
                      Команда, где мы поняли, что нашли друг друга
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Дополнительный акцент */}
            <div className="mt-6 sm:mt-8 text-slate-400 text-xs sm:text-sm italic px-2">
              Готов обсудить детали при личной встрече
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default FinalSummary
