import { Card } from 'antd'
import { ThunderboltOutlined, RocketOutlined, SwapOutlined, RobotOutlined } from '@ant-design/icons'

interface AchievementItem {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  gradient: string
}

const achievements: AchievementItem[] = [
  {
    id: 'parallel-work',
    title: 'Параллельная работа в двух компаниях',
    icon: <ThunderboltOutlined className="text-5xl" />,
    description: 'Более года работал одновременно в двух компаниях и отлично показывал результат в обеих. Этот опыт дал мне понять, что я могу работать в таком режиме, но хочу концентрироваться и бить в одну точку.',
    gradient: 'from-blue-600/20 to-cyan-600/20',
  },
  {
    id: 'poker-repos',
    title: 'Покер-платформа: параллельная работа с репозиториями',
    icon: <RocketOutlined className="text-5xl" />,
    description: 'В проекте покер-платформы дошел до момента, когда сообразил использовать несколько репозиториев одновременно для параллельного решения нескольких багов. Это позволило значительно ускорить процесс разработки и эффективно управлять множеством задач одновременно.',
    gradient: 'from-purple-600/20 to-pink-600/20',
  },
  {
    id: 'seo-switch',
    title: 'Экстренное переключение на SEO',
    icon: <SwapOutlined className="text-5xl" />,
    description: 'В экстренном моменте мне предложили переключиться на роль SEO со всеми вытекающими технологиями. Готовность быстро адаптироваться к новым задачам и технологиям — это то, что позволяет мне эффективно работать в любых условиях.',
    gradient: 'from-green-600/20 to-emerald-600/20',
  },
  {
    id: 'hh-bot',
    title: 'Бот для подбора вакансий на HH',
    icon: <RobotOutlined className="text-5xl" />,
    description: 'Создал собственного бота на базе API HeadHunter с индивидуальной логикой подбора вакансий. Он не просто спамит откликами, а анализирует текст вакансии, сравнивает с моим профилем и решает, стоит ли тратить время работодателя и мое. Это пример того, как я подхожу к решению проблем — автоматизирую и оптимизирую процессы.',
    gradient: 'from-orange-600/20 to-red-600/20',
  },
]

const NotableAchievements = () => {
  return (
    <section id="notable-achievements" className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-100">
         Интересные кейсы
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement) => (
          <Card
            key={achievement.id}
            className="relative overflow-hidden border-slate-700 hover:border-primary-500 transition-all duration-300 group h-full"
            style={{
              backgroundColor: 'rgba(30, 41, 59, 0.8)',
            }}
          >
            {/* Градиентный фон */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />

            {/* Контент */}
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="text-primary-400 group-hover:text-primary-300 transition-colors">
                  {achievement.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-100 mb-4 text-center group-hover:text-primary-300 transition-colors">
                {achievement.title}
              </h3>

              <p className="text-slate-300 leading-relaxed text-center">
                {achievement.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default NotableAchievements
