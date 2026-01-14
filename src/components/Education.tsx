import { Card, Timeline } from 'antd'
import { BookOutlined, TrophyOutlined, TeamOutlined } from '@ant-design/icons'

// SVG иконка диплома в синем стиле
const DiplomaIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
  </svg>
)

interface EducationItem {
  institution: string
  degree: string
  period: string
  description?: string
  icon: React.ReactNode
}

const educationItems: EducationItem[] = [
  {
    institution: 'Югорский государственный университет',
    degree: 'Магистр',
    period: '2020, 2022',
    description: 'Прикладная математика и информатика',
    icon: <DiplomaIcon className="text-2xl text-primary-400 w-6 h-6" />,
  },
  {
    institution: 'Югорский государственный университет',
    degree: 'Бакалавр',
    period: '2016-2020',
    description: '09.00.00 ИНФОРМАТИКА И ВЫЧИСЛИТЕЛЬНАЯ ТЕХНИКА',
    icon: <DiplomaIcon className="text-2xl text-primary-400 w-6 h-6" />,
  },
  {
    institution: 'Лицей ЮФМЛ',
    degree: 'Среднее образование',
    period: 'Выпускник',
    description: 'Фундаментальная подготовка',
    icon: <BookOutlined className="text-2xl text-primary-400" />,
  },
]

const Education = () => {
  const timelineItems = educationItems.map((item) => ({
    dot: item.icon,
    children: (
      <Card
        className="mb-4 hover:shadow-lg transition-all duration-300 border-slate-700 hover:border-primary-500 bg-slate-800/50"
      >
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-100 m-0">
            {item.institution}
          </h3>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-primary-400 font-semibold text-lg">
              {item.degree}
            </span>
            <span className="text-slate-400 text-sm">
              {item.period}
            </span>
          </div>
          {item.description && (
            <p className="text-slate-300 m-0 text-sm">
              {item.description}
            </p>
          )}
        </div>
      </Card>
    ),
  }))

  return (
    <section id="education" className="py-12 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-4">
          <TrophyOutlined className="text-5xl text-primary-400" />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 m-0">
            Образование
          </h2>
        </div>
        <p className="text-slate-400 text-lg mt-4">
          Фундаментальная база и непрерывное развитие
        </p>
      </div>

      <div className="bg-slate-900/50 rounded-3xl p-8 border border-slate-700/50">
        <Timeline mode="left" items={timelineItems} />
        
        {/* Дополнительная информация */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-primary-500 transition-all">
              <div className="text-center">
                <BookOutlined className="text-4xl text-primary-400 mb-3" />
                <h4 className="text-slate-100 font-semibold mb-2">Публикации</h4>
                <p className="text-slate-300 text-sm m-0">
                  Habr (статьи о React, TypeScript, архитектуре фронтенда)
                </p>
              </div>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 hover:border-primary-500 transition-all">
              <div className="text-center">
                <TeamOutlined className="text-4xl text-primary-400 mb-3" />
                <h4 className="text-slate-100 font-semibold mb-2">Непрерывное обучение</h4>
                <p className="text-slate-300 text-sm m-0">
                  Менторство и обмен знаниями — часть моей работы
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
