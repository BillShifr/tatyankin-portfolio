import { Tag, Tooltip } from 'antd'
import { useState } from 'react'

interface TechItem {
  name: string
  category: 'Frontend' | 'State' | 'Tools' | 'Testing' | 'Styling' | 'Backend' | 'DevOps' | 'Other'
  color: string
  tooltip: string
}

const techStack: TechItem[] = [
  // Frontend Frameworks
  {
    name: 'React',
    category: 'Frontend',
    color: 'blue',
    tooltip: 'Основной фреймворк. Использовал для создания масштабируемых SPA и микросервисных архитектур.',
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    color: 'geekblue',
    tooltip: 'SSR/SSG фреймворк. Использовал для продвигающих лендингов и основного продукта.',
  },
  {
    name: 'Remix',
    category: 'Frontend',
    color: 'cyan',
    tooltip: 'Full-stack веб-фреймворк с фокусом на веб-стандарты.',
  },
  {
    name: 'Vue.js',
    category: 'Frontend',
    color: 'green',
    tooltip: 'Использовал для разработки расширений Directus Extension SDK.',
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    color: 'cyan',
    tooltip: 'Внедрил в legacy проект, что сократило количество багов на 40%.',
  },
  {
    name: 'Vite',
    category: 'Tools',
    color: 'gold',
    tooltip: 'Билд-инструмент для быстрой разработки. HMR работает мгновенно!',
  },
  {
    name: 'React Router',
    category: 'Frontend',
    color: 'orange',
    tooltip: 'Роутинг для SPA. Настроил code splitting и lazy loading.',
  },
  {
    name: 'Code Splitting',
    category: 'Frontend',
    color: 'purple',
    tooltip: 'Оптимизация бандла через динамические импорты и lazy loading.',
  },
  {
    name: 'Lazy Loading',
    category: 'Frontend',
    color: 'purple',
    tooltip: 'Ленивая загрузка компонентов для улучшения производительности.',
  },
  {
    name: 'Suspense',
    category: 'Frontend',
    color: 'purple',
    tooltip: 'React Suspense для управления состоянием загрузки.',
  },
  {
    name: 'Skeleton Loaders',
    category: 'Frontend',
    color: 'default',
    tooltip: 'Skeleton UI для улучшения UX во время загрузки данных.',
  },
  {
    name: 'PWA',
    category: 'Frontend',
    color: 'processing',
    tooltip: 'Progressive Web Apps для офлайн-работы и установки на устройство.',
  },
  
  // State Management
  {
    name: 'Zustand',
    category: 'State',
    color: 'purple',
    tooltip: 'Использовал для миграции с Redux в проекте роботов-уборщиков, чтобы упростить онбординг и уменьшить бандл на 30%.',
  },
  {
    name: 'Redux Toolkit',
    category: 'State',
    color: 'magenta',
    tooltip: 'Опыт работы с Redux Toolkit, RTK Query для сложных state-менеджмент задач.',
  },
  
  // Data Fetching
  {
    name: 'SWR',
    category: 'State',
    color: 'blue',
    tooltip: 'React hooks для data fetching с кешированием и ревалидацией.',
  },
  {
    name: 'React Query',
    category: 'State',
    color: 'cyan',
    tooltip: 'Мощная библиотека для управления серверным состоянием и кеширования.',
  },
  {
    name: 'Axios',
    category: 'State',
    color: 'geekblue',
    tooltip: 'HTTP клиент для работы с REST API.',
  },
  
  // Forms
  {
    name: 'React Hook Form',
    category: 'Frontend',
    color: 'volcano',
    tooltip: 'Высокопроизводительная библиотека для работы с формами. Использовал в проекте роботов-уборщиков.',
  },
  {
    name: 'Yup',
    category: 'Frontend',
    color: 'orange',
    tooltip: 'Schema validation для форм. Работает в паре с React Hook Form.',
  },
  {
    name: 'Formik',
    category: 'Frontend',
    color: 'gold',
    tooltip: 'Альтернативная библиотека для работы с формами.',
  },
  
  // UI Libraries
  {
    name: 'Ant Design',
    category: 'Frontend',
    color: 'geekblue',
    tooltip: 'UI-библиотека для быстрого прототипирования и создания консистентных интерфейсов. Использовал таблицы и формы в проекте ИГИТ.',
  },
  {
    name: 'Material UI',
    category: 'Frontend',
    color: 'blue',
    tooltip: 'React компоненты в стиле Material Design.',
  },
  {
    name: 'MUI X',
    category: 'Frontend',
    color: 'cyan',
    tooltip: 'Расширенный набор компонентов MUI, включая DataGrid.',
  },
  {
    name: 'MUI DataGrid',
    category: 'Frontend',
    color: 'cyan',
    tooltip: 'Мощная таблица данных с сортировкой, фильтрацией и пагинацией.',
  },
  {
    name: 'React Toastify',
    category: 'Frontend',
    color: 'gold',
    tooltip: 'Библиотека для отображения уведомлений.',
  },
  {
    name: 'Notistack',
    category: 'Frontend',
    color: 'lime',
    tooltip: 'Альтернативная библиотека для уведомлений с поддержкой стека.',
  },
  {
    name: 'TanStack Table',
    category: 'Frontend',
    color: 'purple',
    tooltip: 'Headless UI библиотека для создания мощных таблиц.',
  },
  
  // Styling
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    color: 'green',
    tooltip: 'Утилитарный CSS для кастомизации и создания уникального дизайна.',
  },
  {
    name: 'SCSS',
    category: 'Styling',
    color: 'magenta',
    tooltip: 'Препроцессор CSS для более структурированных стилей.',
  },
  {
    name: 'Styled Components',
    category: 'Styling',
    color: 'purple',
    tooltip: 'CSS-in-JS библиотека. Использовал в проекте роботов-уборщиков.',
  },
  {
    name: 'Emotion',
    category: 'Styling',
    color: 'volcano',
    tooltip: 'Мощная CSS-in-JS библиотека для стилизации компонентов.',
  },
  
  // Utilities
  {
    name: 'Lodash',
    category: 'Other',
    color: 'default',
    tooltip: 'Утилитарная библиотека для работы с массивами, объектами и функциями.',
  },
  
  // Maps & Real-time
  {
    name: 'OpenLayers',
    category: 'Frontend',
    color: 'geekblue',
    tooltip: 'Библиотека для работы с интерактивными картами. Реализовал прослойку с телеметрией в проекте ИГИТ.',
  },
  {
    name: 'WebSocket',
    category: 'Frontend',
    color: 'cyan',
    tooltip: 'Реал-тайм коммуникация для телеметрии и управления юнитами.',
  },
  
  // Testing
  {
    name: 'Jest',
    category: 'Testing',
    color: 'red',
    tooltip: 'Unit и интеграционные тесты. Покрытие кода тестами увеличил с 20% до 80%.',
  },
  {
    name: 'React Testing Library',
    category: 'Testing',
    color: 'volcano',
    tooltip: 'Тестирование компонентов с фокусом на пользовательский опыт.',
  },
  {
    name: 'Cypress',
    category: 'Testing',
    color: 'green',
    tooltip: 'E2E тестирование веб-приложений.',
  },
  {
    name: 'Playwright',
    category: 'Testing',
    color: 'blue',
    tooltip: 'Современный фреймворк для E2E тестирования с поддержкой нескольких браузеров.',
  },
  
  // Tools
  {
    name: 'ESLint',
    category: 'Tools',
    color: 'lime',
    tooltip: 'Линтинг кода. Настроил кастомные правила для команды.',
  },
  {
    name: 'Prettier',
    category: 'Tools',
    color: 'cyan',
    tooltip: 'Автоматическое форматирование кода для единообразия стиля.',
  },
  {
    name: 'Esbuild',
    category: 'Tools',
    color: 'gold',
    tooltip: 'Экстремально быстрый JavaScript бандлер.',
  },
  {
    name: 'SWC',
    category: 'Tools',
    color: 'purple',
    tooltip: 'Сверхбыстрый компилятор TypeScript/JavaScript написанный на Rust.',
  },
  
  // Backend & CMS
  {
    name: 'Node.js',
    category: 'Backend',
    color: 'success',
    tooltip: 'Backend для SSR и инструментов разработки. Разработка расширений Directus.',
  },
  {
    name: 'Strapi',
    category: 'Backend',
    color: 'geekblue',
    tooltip: 'Headless CMS. Использовал в проекте EvenBet Gaming для контент-менеджмента.',
  },
  {
    name: 'Directus',
    category: 'Backend',
    color: 'cyan',
    tooltip: 'Headless CMS. Разработал расширения для работы с Excel (экспорт/импорт).',
  },
  {
    name: 'Clickhouse',
    category: 'Backend',
    color: 'blue',
    tooltip: 'Аналитическая БД для хранения больших объемов данных и метрик.',
  },
  
  // DevOps
  {
    name: 'Docker',
    category: 'DevOps',
    color: 'blue',
    tooltip: 'Контейнеризация приложений для единообразного развертывания.',
  },
  {
    name: 'GitHub Actions',
    category: 'DevOps',
    color: 'default',
    tooltip: 'CI/CD пайплайны для автоматизации сборки и деплоя.',
  },
  {
    name: 'GitLab CI/CD',
    category: 'DevOps',
    color: 'orange',
    tooltip: 'CI/CD в GitLab. Использовал в проекте ИГИТ для автоматизации процессов.',
  },
  
  // Analytics & Monitoring
  {
    name: 'GTM',
    category: 'Other',
    color: 'lime',
    tooltip: 'Google Tag Manager для управления тегами и аналитикой.',
  },
  {
    name: 'Sentry',
    category: 'Other',
    color: 'red',
    tooltip: 'Мониторинг ошибок и производительности. Использовал в проекте ИГИТ.',
  },
]

const categoryColors: Record<string, string> = {
  Frontend: 'text-blue-400',
  State: 'text-purple-400',
  Tools: 'text-yellow-400',
  Testing: 'text-red-400',
  Styling: 'text-pink-400',
  Backend: 'text-green-400',
  DevOps: 'text-orange-400',
  Other: 'text-slate-400',
}

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(techStack.map((tech) => tech.category)))

  const filteredTech = selectedCategory
    ? techStack.filter((tech) => tech.category === selectedCategory)
    : techStack

  return (
    <section id="tech-stack" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-100">
        Стек технологий
      </h2>

      {/* Фильтры по категориям */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            selectedCategory === null
              ? 'bg-primary-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          Все
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() =>
              setSelectedCategory(
                selectedCategory === category ? null : category
              )
            }
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category
                ? 'bg-primary-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Облако тегов */}
      <div className="flex flex-wrap justify-center gap-3">
        {filteredTech.map((tech) => (
          <Tooltip key={tech.name} title={tech.tooltip} placement="top">
            <Tag
              color={tech.color}
              className="text-base px-4 py-2 cursor-pointer hover:scale-110 transition-transform"
            >
              {tech.name}
            </Tag>
          </Tooltip>
        ))}
      </div>

      {/* Статистика */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => {
          const count = techStack.filter(
            (tech) => tech.category === category
          ).length
          return (
            <div
              key={category}
              className="text-center p-4 bg-slate-800 rounded-lg border border-slate-700"
            >
              <div className={`text-3xl font-bold ${categoryColors[category]}`}>
                {count}
              </div>
              <div className="text-slate-400 text-sm mt-1">{category}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default TechStack

