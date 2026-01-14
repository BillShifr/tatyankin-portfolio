import { Card, Button } from 'antd'
import { RocketOutlined } from '@ant-design/icons'
import { useState } from 'react'

const FinalSummary = () => {
  const [salary, setSalary] = useState(300000)
  const [isHovered, setIsHovered] = useState(false)
  const [messageText, setMessageText] = useState('')

  const handleClick = () => {
    setIsHovered(false) // Убираем "валидно" при клике
    
    if (salary < 500000) {
      const newSalary = salary + 50000
      setSalary(newSalary)
      
      if (newSalary >= 500000) {
        setMessageText('вот и моя вилка 300-500к)')
      } else {
        setMessageText('как неожиданно и приятно!')
      }
    } else {
      setMessageText('вот и моя вилка 300-500к)')
    }
    
    // Показываем сообщение на 2-3 секунды
    setTimeout(() => {
      setMessageText('')
    }, 3000)
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
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-700/50 w-full">
              <div className="w-full space-y-3 sm:space-y-4">
                {/* Сообщение после клика */}
                {messageText && (
                  <div className="text-center text-sm sm:text-base md:text-lg text-primary-400 font-semibold animate-fade-in">
                    {messageText}
                  </div>
                )}
                
                {/* Кнопка с ЗП */}
                <div className="relative">
                  <Button
                    type="default"
                    size="large"
                    block
                    onClick={handleClick}
                    onMouseEnter={() => !messageText && setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative overflow-hidden bg-slate-800/80 hover:bg-slate-700/80 border-slate-600 hover:border-primary-500 h-auto min-h-[60px] sm:min-h-[70px] md:min-h-[80px] py-2 sm:py-3 md:py-4 transition-all duration-300"
                    style={{
                      background: isHovered && !messageText ? 'rgba(30, 41, 59, 0.9)' : 'rgba(30, 41, 59, 0.8)',
                      borderColor: isHovered && !messageText ? '#3b82f6' : 'rgba(148, 163, 184, 0.3)',
                    }}
                  >
                    {isHovered && !messageText ? (
                      <div className="text-lg sm:text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-green-400">
                        валидно!
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-1 sm:gap-1.5">
                        <div className="text-[9px] sm:text-[10px] md:text-xs text-slate-400 uppercase tracking-wider">
                          Требуемые условия
                        </div>
                        <div className="text-sm sm:text-base md:text-lg font-bold text-primary-400 transition-all duration-300">
                          ЗП {salary >= 500000 ? 'до' : 'от'} {salary.toLocaleString('ru-RU')} ₽
                        </div>
                        <div className="text-[9px] sm:text-[10px] text-slate-500">
                          (кликни)
                        </div>
                      </div>
                    )}
                  </Button>
                </div>
                
                {/* Кнопка "Идеальная ситуация" */}
                <Button
                  type="default"
                  size="large"
                  block
                  className="bg-slate-800/80 hover:bg-slate-700/80 border-slate-600 hover:border-cyan-500 h-auto min-h-[60px] sm:min-h-[70px] md:min-h-[80px] py-2 sm:py-3 md:py-4 transition-all duration-300"
                  style={{
                    background: 'rgba(30, 41, 59, 0.8)',
                    borderColor: 'rgba(148, 163, 184, 0.3)',
                  }}
                >
                  <div className="flex flex-col items-center justify-center gap-1 sm:gap-1.5">
                    <div className="text-[9px] sm:text-[10px] md:text-xs text-slate-400 uppercase tracking-wider">
                      Идеальная ситуация
                    </div>
                    <div className="text-sm sm:text-base md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                      Команда, где мы поняли, что нашли друг друга
                    </div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Дополнительный акцент */}
            <div className="mt-6 sm:mt-8 text-slate-400 text-xs sm:text-sm italic px-2">
              Буду рад обсудить детали при личной встрече
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default FinalSummary
