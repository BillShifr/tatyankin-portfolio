import { Tag, Tooltip } from 'antd'
import { useState } from 'react'

interface TechItem {
  name: string
  category: 'Frontend' | 'State' | 'Tools' | 'Testing' | 'Styling' | 'Backend' | 'DevOps' | 'SEO' | 'Other'
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
    tooltip: 'React hooks для data fetching с кешированием и ревалидацией. Использовал для получения данных турниров и статистики в покер-платформе.',
  },
  {
    name: 'React Query',
    category: 'State',
    color: 'cyan',
    tooltip: 'Мощная библиотека для управления серверным состоянием и кеширования. Использовал в покер-платформе для синхронизации игрового состояния.',
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
    name: 'Zod',
    category: 'Frontend',
    color: 'cyan',
    tooltip: 'TypeScript-first schema validation. Использовал для валидации API ответов и форм с полной type-safety.',
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
  
  // Animation & 3D
  {
    name: 'Framer Motion',
    category: 'Frontend',
    color: 'purple',
    tooltip: 'Библиотека для создания плавных анимаций в React. Использовал для анимаций в покер-платформе (раздача карт, движение фишек, таймеры).',
  },
  {
    name: 'GSAP',
    category: 'Frontend',
    color: 'green',
    tooltip: 'Мощная библиотека для создания высокопроизводительных анимаций. Использовал для сложных анимаций в покер-платформе.',
  },
  {
    name: 'PixiJS',
    category: 'Frontend',
    color: 'gold',
    tooltip: '2D WebGL рендерер для высокопроизводительной графики. Использовал в покер-платформе для рендеринга карт, фишек и игровых эффектов с высокой частотой кадров.',
  },
  {
    name: 'Three.js',
    category: 'Frontend',
    color: 'cyan',
    tooltip: '3D-библиотека для WebGL. Использовал для 3D-визуализации в покер-платформе (раздача карт с физикой полета, эффекты победителя).',
  },
  {
    name: 'React Spring',
    category: 'Frontend',
    color: 'lime',
    tooltip: 'Физически-основанная анимационная библиотека для React. Альтернатива Framer Motion для более точного контроля анимаций.',
  },
  
  // Utilities
  {
    name: 'Lodash',
    category: 'Other',
    color: 'default',
    tooltip: 'Утилитарная библиотека для работы с массивами, объектами и функциями.',
  },
  {
    name: 'date-fns',
    category: 'Other',
    color: 'cyan',
    tooltip: 'Современная библиотека для работы с датами. Легковесная альтернатива Moment.js.',
  },
  {
    name: 'dayjs',
    category: 'Other',
    color: 'lime',
    tooltip: 'Минималистичная библиотека для работы с датами. Использовал для форматирования времени в покер-платформе.',
  },
  {
    name: 'i18next',
    category: 'Frontend',
    color: 'purple',
    tooltip: 'Интернационализация (i18n) для React. Критично для покер-платформы с мультиязычной поддержкой.',
  },
  {
    name: 'React Intl',
    category: 'Frontend',
    color: 'blue',
    tooltip: 'Библиотека для интернационализации от Format.js. Поддержка множественных языков и локалей.',
  },
  {
    name: 'React Helmet',
    category: 'Frontend',
    color: 'geekblue',
    tooltip: 'Управление head документа для SEO. Динамическое изменение meta-тегов, title и Open Graph.',
  },
  {
    name: 'Web Workers',
    category: 'Frontend',
    color: 'orange',
    tooltip: 'Многопоточность в браузере. Использовал для тяжелых вычислений без блокировки UI (например, расчет вероятностей в покере).',
  },
  {
    name: 'IndexedDB',
    category: 'Frontend',
    color: 'cyan',
    tooltip: 'Клиентское хранилище для больших объемов данных. Использовал для офлайн-режима и кеширования.',
  },
  {
    name: 'React.memo',
    category: 'Frontend',
    color: 'purple',
    tooltip: 'Оптимизация рендеринга через мемоизацию компонентов. Критично для производительности в покер-платформе с частыми обновлениями UI.',
  },
  {
    name: 'useMemo / useCallback',
    category: 'Frontend',
    color: 'geekblue',
    tooltip: 'React хуки для оптимизации производительности через мемоизацию значений и функций.',
  },
  {
    name: 'React Error Boundary',
    category: 'Frontend',
    color: 'red',
    tooltip: 'Обработка ошибок в React компонентах. Graceful degradation для критических ошибок.',
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
    tooltip: 'Реал-тайм коммуникация для телеметрии и управления юнитами. Использовал в покер-платформе для синхронизации игровых событий в реальном времени.',
  },
  {
    name: 'Socket.io',
    category: 'Frontend',
    color: 'blue',
    tooltip: 'Библиотека для реал-тайм коммуникации. Использовал в покер-платформе для синхронизации игровых событий между клиентами.',
  },
  {
    name: 'React DnD',
    category: 'Frontend',
    color: 'purple',
    tooltip: 'Drag and Drop библиотека для React. Использовал для интерактивных элементов в покер-платформе.',
  },
  {
    name: 'React Window',
    category: 'Frontend',
    color: 'geekblue',
    tooltip: 'Виртуализация для рендеринга больших списков. Критично для производительности при работе с большими таблицами данных.',
  },
  {
    name: 'React Virtualized',
    category: 'Frontend',
    color: 'geekblue',
    tooltip: 'Альтернативная библиотека для виртуализации больших списков и таблиц.',
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
  {
    name: 'Webpack',
    category: 'Tools',
    color: 'processing',
    tooltip: 'Опыт настройки кастомных конфигураций для оптимизации бандла. Использовал в проектах XDSOFT и ЮТЭК.',
  },
  {
    name: 'Figma',
    category: 'Tools',
    color: 'purple',
    tooltip: 'Дизайн и прототипирование интерфейсов. Работа с дизайн-макетами в проектах XDSOFT и ЮТЭК.',
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
  {
    name: 'Express',
    category: 'Backend',
    color: 'default',
    tooltip: 'Веб-фреймворк для Node.js. Использовал для поднятия сервера в проекте ЮТЭК (Node.js + Express + PostgreSQL).',
  },
  {
    name: 'PostgreSQL',
    category: 'Backend',
    color: 'geekblue',
    tooltip: 'Реляционная база данных. Использовал в связке с Node.js и Express в проекте ЮТЭК.',
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
  
  // SEO & Analytics
  {
    name: 'Google Analytics',
    category: 'SEO',
    color: 'orange',
    tooltip: 'Веб-аналитика для отслеживания пользовательского поведения, конверсий и метрик производительности. Использовал GA4 в покер-платформе.',
  },
  {
    name: 'Google Tag Manager',
    category: 'SEO',
    color: 'lime',
    tooltip: 'Управление тегами и аналитикой без изменения кода. Централизованное управление всеми аналитическими инструментами.',
  },
  {
    name: 'Google Search Console',
    category: 'SEO',
    color: 'blue',
    tooltip: 'Мониторинг индексации сайта, поисковых запросов и технических проблем SEO.',
  },
  {
    name: 'Next-SEO',
    category: 'SEO',
    color: 'geekblue',
    tooltip: 'SEO компоненты для Next.js. Управление meta-тегами, Open Graph, Twitter Cards.',
  },
  {
    name: 'React Helmet Async',
    category: 'SEO',
    color: 'cyan',
    tooltip: 'Асинхронная версия React Helmet для SSR. Управление SEO мета-тегами в React приложениях.',
  },
  {
    name: 'Schema.org',
    category: 'SEO',
    color: 'purple',
    tooltip: 'Структурированные данные для улучшения отображения в поисковых системах.',
  },
  
  // Monitoring & Performance
  {
    name: 'Sentry',
    category: 'Other',
    color: 'red',
    tooltip: 'Мониторинг ошибок и производительности. Использовал в проекте ИГИТ и покер-платформе.',
  },
  {
    name: 'Lighthouse CI',
    category: 'Tools',
    color: 'gold',
    tooltip: 'Автоматизированный мониторинг производительности через Lighthouse. Интеграция в CI/CD.',
  },
  {
    name: 'Web Vitals',
    category: 'Other',
    color: 'green',
    tooltip: 'Метрики производительности веб-страниц (LCP, FID, CLS). Использовал для оптимизации покер-платформы.',
  },
  {
    name: 'Bundle Analyzer',
    category: 'Tools',
    color: 'volcano',
    tooltip: 'Анализ размера бандла для оптимизации. Выявление тяжелых зависимостей и возможностей для code splitting.',
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
  SEO: 'text-cyan-400',
  Other: 'text-slate-400',
}

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(techStack.map((tech) => tech.category)))

  const filteredTech = selectedCategory
    ? techStack.filter((tech) => tech.category === selectedCategory)
    : techStack

  return (
    <section id="tech-stack" className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-slate-100 px-2">
        Стек технологий
      </h2>

      {/* Фильтры по категориям */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
            selectedCategory === null
              ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/50 scale-105'
              : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white border border-slate-700 hover:border-primary-500/50'
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
            className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/50 scale-105'
                : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white border border-slate-700 hover:border-primary-500/50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Облако тегов */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
        {filteredTech.map((tech) => (
          <Tooltip key={tech.name} title={tech.tooltip} placement="top">
            <Tag
              color={tech.color}
              className="text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 cursor-pointer hover:scale-110 transition-transform"
            >
              {tech.name}
            </Tag>
          </Tooltip>
        ))}
      </div>

      {/* Статистика */}
      <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 px-2">
        {categories.map((category) => {
          const count = techStack.filter(
            (tech) => tech.category === category
          ).length
          return (
            <div
              key={category}
              className="text-center p-3 sm:p-4 bg-slate-800 rounded-lg border border-slate-700"
            >
              <div className={`text-2xl sm:text-3xl font-bold ${categoryColors[category]}`}>
                {count}
              </div>
              <div className="text-slate-400 text-xs sm:text-sm mt-1">{category}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default TechStack

