import { Card, Row, Col } from 'antd'
import {
  FireOutlined,
  CheckCircleOutlined,
  SettingOutlined,
  BookOutlined,
} from '@ant-design/icons'

const principles = [
  {
    title: 'Не выгорающий лид',
    icon: <FireOutlined className="text-4xl text-orange-500" />,
    content:
      'Баланс между работой и жизнью. Умею распределять нагрузку, делегировать задачи и поддерживать здоровую атмосферу в команде. Регулярные ретро и открытая коммуникация помогают избежать выгорания.',
  },
  {
    title: 'Ответственность',
    icon: <CheckCircleOutlined className="text-4xl text-green-500" />,
    content:
      'Беру ответственность за решения и их последствия. Если что-то пошло не так — анализирую, исправляю и делюсь уроками с командой. Прозрачность и честность — основа доверия.',
  },
  {
    title: 'Четкие процессы',
    icon: <SettingOutlined className="text-4xl text-blue-500" />,
    content:
      'Выстраиваю процессы, которые работают на практике, а не только на бумаге. Code review, CI/CD, документация — всё должно быть понятно и полезно для команды. Процессы должны помогать, а не мешать.',
  },
  {
    title: 'Образование и развитие',
    icon: <BookOutlined className="text-4xl text-purple-500" />,
    content:
      'Выпускник ЮФМЛ. Активно делюсь опытом на Habr и в личных блогах. Верю, что лучший способ учиться — это учить других. Менторство и обмен знаниями — часть моей работы.',
  },
]

const Principles = () => {
  return (
    <section id="principles" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-100">
        Принципы и подходы
      </h2>

      <Row gutter={[24, 24]}>
        {principles.map((principle, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card
              className="h-full hover:shadow-xl transition-all duration-300 border-slate-700 hover:border-primary-500"
              title={
                <div className="flex items-center gap-3">
                  {principle.icon}
                  <span className="text-slate-100 font-semibold">
                    {principle.title}
                  </span>
                </div>
              }
            >
              <p className="text-slate-300 leading-relaxed">
                {principle.content}
              </p>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Дополнительная информация */}
      <div className="mt-16 text-center">
        <div className="inline-block p-6 bg-slate-800 rounded-lg border border-slate-700">
          <p className="text-slate-300 mb-2">
            <strong className="text-primary-400">Образование:</strong> ЮФМЛ
          </p>
          <p className="text-slate-300">
            <strong className="text-primary-400">Публикации:</strong> Habr
            (статьи о React, TypeScript, архитектуре фронтенда)
          </p>
        </div>
      </div>
    </section>
  )
}

export default Principles

