import { Card } from 'antd'
import { UserOutlined, SendOutlined, CheckCircleOutlined } from '@ant-design/icons'

const HRMessageBlock = () => {
  return (
    <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      <Card
        className="border-slate-700 hover:border-primary-500/50 transition-all duration-300 group"
        style={{
          backgroundColor: 'rgba(30, 41, 59, 0.8)',
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%)',
        }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8">
          {/* Иконки */}
          <div className="flex gap-4 sm:gap-6">
            <div className="text-primary-400 group-hover:scale-110 transition-transform duration-300">
              <UserOutlined className="text-4xl sm:text-5xl md:text-6xl" />
            </div>
            <div className="text-primary-400 group-hover:scale-110 transition-transform duration-300">
              <SendOutlined className="text-4xl sm:text-5xl md:text-6xl" />
            </div>
            <div className="text-primary-400 group-hover:scale-110 transition-transform duration-300">
              <CheckCircleOutlined className="text-4xl sm:text-5xl md:text-6xl" />
            </div>
          </div>

          {/* Текст */}
          <div className="flex-1 text-center sm:text-left">
            <p className="text-base sm:text-lg md:text-xl font-semibold text-primary-400 mb-2 sm:mb-3">
              Давайте договоримся!
            </p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-100 mb-3 sm:mb-4">
              Уважаемые HR-специалисты
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
              Если мое резюме вас заинтерует, пожалуйста, направьте его{' '}
              <strong className="text-primary-400">непосредственному лицу, отвечающему за техническое решение</strong> — 
              техническому директору, тимлиду или руководителю разработки. 
              Это поможет быстрее оценить мою квалификацию и принять решение, что позволит мне найти команду и текущий вектор развития, а работодателю — закрыть потребность в отличном специалисте.
            </p>
          </div>
        </div>
      </Card>
    </section>
  )
}

export default HRMessageBlock
