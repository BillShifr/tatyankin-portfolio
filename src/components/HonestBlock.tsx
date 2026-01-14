import { Card } from 'antd'
import { GlobalOutlined, WarningOutlined, ExclamationCircleOutlined } from '@ant-design/icons'

const HonestBlock = () => {
  return (
    <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      <Card
        className="border-slate-700 hover:border-amber-500/50 transition-all duration-300 group"
        style={{
          backgroundColor: 'rgba(30, 41, 59, 0.8)',
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%)',
        }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8">
          {/* Иконки */}
          <div className="flex gap-4 sm:gap-6">
            <div className="text-amber-500/70 group-hover:scale-110 transition-transform duration-300">
              <GlobalOutlined className="text-4xl sm:text-5xl md:text-6xl" />
            </div>
            <div className="text-amber-500/70 group-hover:scale-110 transition-transform duration-300">
              <WarningOutlined className="text-4xl sm:text-5xl md:text-6xl" />
            </div>
            <div className="text-amber-500/70 group-hover:scale-110 transition-transform duration-300">
              <ExclamationCircleOutlined className="text-4xl sm:text-5xl md:text-6xl" />
            </div>
          </div>

          {/* Текст */}
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-100 mb-3 sm:mb-4">
              Честно о минусах
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
              Уровень английского языка не идеален. Также за счет умения общаться и находить подход к людям, 
              у ребят иногда возникает панибратское отношение.
            </p>
          </div>
        </div>
      </Card>
    </section>
  )
}

export default HonestBlock
