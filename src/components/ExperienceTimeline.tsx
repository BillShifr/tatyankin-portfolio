import { Timeline, Card, Collapse, Button, Modal } from 'antd'
import { RocketOutlined, TeamOutlined, CodeOutlined } from '@ant-design/icons'
import { useState } from 'react'
import type { TimelineItemProps } from 'antd'

interface ExperienceItem {
  title: string
  company: string
  period: string
  role: string
  achievements: string[]
  icon: React.ReactNode
  isMentor?: boolean
}

const experiences: ExperienceItem[] = [
  {
    title: 'Ментор',
    company: 'INovexx',
    period: 'Март 2025 — сейчас (10 месяцев)',
    role: 'Ментор',
    achievements: [
      'Поддержка и ведение учеников с последующим трудоустройством',
      'Проведение мок-собеседований и определение грейда и навыков',
      'Составление краткой методологички, легенды и резюме',
      'Материал, курсы, софт коммуникация (очень важно), тех помощь',
      'Ревью тестовых заданий',
      'Мок и тех собесы',
    ],
    icon: <TeamOutlined />,
    isMentor: true,
  },
  {
    title: 'Ведущий разработчик',
    company: 'ИГИТ',
    period: 'Октябрь 2023 — сейчас (2 года и 3 месяца)',
    role: 'Frontend разработчик / Архитектор клиентской части',
    achievements: [
      'Создал архитектуру фронтенда с нуля для проекта роботов-уборщиков (testfms.168robotics.com)',
      'Заложил масштабируемую основу для будущих модулей и интеграций',
      'Реализовал таблицы antd, связанную фильтрацию, формы RHF и верстку',
      'Подключил и реализовал прослойку интерактивных карт (OpenLayers) с возможностью переключения на телеметрию (OpenLayers + WebSocket) и управления юнитами',
      'Мигрировал стор с redux на zustand, в пользу меньшего бандла, хуках и общей простоте',
      'Разработал два уникальных расширения для работы с Excel в Directus (экспорт и импорт)',
      'Реализовал серверный endpoint с кастомной логикой парсинга для обработки отчётных форм',
      'Работа над системой удалённого мониторинга и диагностики подстанций',
    ],
    icon: <CodeOutlined />,
  },
  {
    title: 'Team lead',
    company: 'EvenBet Gaming',
    period: 'Апрель 2022 — Апрель 2023 (1 год и 1 месяц)',
    role: 'Tech Lead / Team Lead',
    achievements: [
      'Выстроил технические процессы с нуля: архитектура (Strapi + React + Next), пайплайны, CI/CD, линты, прекоммиты, автоматизация сборок',
      'Заметно сократил время выхода фич в прод на длинном спринте (оптимизировал коммуникацию между командой разработки и продуктовым отделом)',
      'Внедрил A/B тестирование, метрики, SEO, TagManager, подключение лицензий',
      'Менторил и развивал команду — подготовил 2 junior-разработчиков до уровня middle+',
      'Внедрил внутренние воркшопы и code style-гайд',
      'Ведение досок (Trello), документация и онбординг (Notion)',
      'Постоянная работа на коннекте между технической, продуктовой и маркетинговой частями команд',
      'Разработка продвигающих лендингов: React, Next.js, TypeScript, Strapi, Clickhouse, GTM, аналитика, event-трекинг',
      'Работа над основным продуктом: ООП, миграция на новую архитектуру, разработка клиентской части кассы, работа с модулями авторизации, платежей, интерфейсов и логики румов',
    ],
    icon: <RocketOutlined />,
  },
]

const ClosureExplanation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Button
        type="link"
        onClick={showModal}
        className="text-primary-400 hover:text-primary-300 p-0 h-auto"
      >
        ( ͡° ͜ʖ ͡°)
      </Button>
      <Modal
        title="Что такое замыкание?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleOk}
        okText="Понятно!"
        cancelText="Закрыть"
        className="text-slate-200"
      >
        <div className="space-y-4">
          <p>
            <strong>Замыкание (Closure)</strong> — это функция, которая
            «запоминает» переменные из внешней области видимости, даже после
            того, как внешняя функция завершила выполнение.
          </p>
          <div className="bg-slate-800 p-4 rounded-lg">
            <pre className="text-sm text-primary-300">
              {`function createCounter() {
  let count = 0
  
  return function() {
    count++
    return count
  }
}

const counter = createCounter()
console.log(counter()) // 1
console.log(counter()) // 2`}
            </pre>
          </div>
          <p>
            В этом примере внутренняя функция имеет доступ к переменной{' '}
            <code className="bg-slate-700 px-1 rounded">count</code>, даже
            после того, как <code className="bg-slate-700 px-1 rounded">
              createCounter
            </code>{' '}
            завершила работу. Это и есть замыкание!
          </p>
          <p className="text-primary-400 italic">
            💡 В React хуки (useState, useEffect) активно используют замыкания
            для сохранения состояния между рендерами.
          </p>
        </div>
      </Modal>
    </>
  )
}

const ExperienceTimeline = () => {
  const timelineItems: TimelineItemProps[] = experiences.map((exp, index) => ({
    dot: exp.icon,
    children: (
      <Card
        className="mb-4 hover:shadow-lg transition-shadow duration-300 border-slate-700"
        title={
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 className="text-xl font-bold text-slate-100 m-0">
                {exp.title}
              </h3>
              <p className="text-slate-400 m-0 text-sm">{exp.company}</p>
            </div>
            <div className="text-right">
              <span className="text-primary-400 font-semibold">
                {exp.period}
              </span>
              {exp.isMentor && (
                <div className="mt-2">
                  <span className="text-slate-500 text-sm">
                    Расскажи, что такое замыкание?{' '}
                  </span>
                  <ClosureExplanation />
                </div>
              )}
            </div>
          </div>
        }
      >
        <Collapse
          ghost
          items={[
            {
              key: index,
              label: (
                <span className="text-slate-300">
                  Ключевые достижения ({exp.achievements.length})
                </span>
              ),
              children: (
                <ul className="list-disc list-inside space-y-2 text-slate-300">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              ),
            },
          ]}
        />
      </Card>
    ),
  }))

  return (
    <section id="experience" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-100">
        Опыт работы
      </h2>
      <Timeline mode="left" items={timelineItems} />
    </section>
  )
}

export default ExperienceTimeline

