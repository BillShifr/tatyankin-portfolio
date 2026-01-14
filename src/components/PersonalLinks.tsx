import { Card, Modal, Button } from 'antd'
import { useState } from 'react'
import { GithubOutlined, FileTextOutlined, BookOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'

// SVG иконки в синем стиле
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.193l-1.87 8.81c-.14.625-.52.78-1.05.485l-2.9-2.14-1.4 1.345c-.14.14-.26.26-.535.26l.2-2.84 5.36-4.84c.234-.21-.05-.325-.36-.115l-6.62 4.17-2.85-.89c-.62-.195-.635-.62.13-.93l11.1-4.28c.51-.19.96.115.79.615z" />
  </svg>
)

interface LinkBlock {
  id: string
  title: string
  icon: React.ReactNode
  imageUrl?: string
  logoUrl?: string
}

const links: LinkBlock[] = [
  {
    id: 'github',
    title: 'Личный GitHub',
    icon: <GithubOutlined className="text-6xl" />,
    logoUrl: undefined, // Убрано из-за проблем с clearbit.com
  },
  {
    id: 'portfolio',
    title: 'Личные кейсы портфолио',
    icon: <FileTextOutlined className="text-6xl" />,
  },
  {
    id: 'habr',
    title: 'Habr',
    icon: <BookOutlined className="text-6xl" />,
    logoUrl: undefined, // Убрано из-за проблем с clearbit.com
  },
]

const PersonalLinks = () => {
  const [visibleModal, setVisibleModal] = useState<string | null>(null)

  const handleClick = (id: string) => {
    setVisibleModal(id)
  }

  const handleClose = () => {
    setVisibleModal(null)
  }

  return (
    <>
      <section id="personal-links" className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-slate-100 px-2">
          Дополнительные материалы
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {links.map((link) => (
            <Card
              key={link.id}
              className="relative overflow-hidden border-slate-700 hover:border-primary-500 transition-all duration-300 group cursor-pointer"
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.8)',
                minHeight: '250px',
              }}
              onClick={() => handleClick(link.id)}
            >
              {/* Заблюренный фон */}
              <div className="absolute inset-0 overflow-hidden">
                {link.logoUrl ? (
                  <img
                    src={link.logoUrl}
                    alt={link.title}
                    className="w-full h-full object-cover blur-[40px] opacity-15 scale-150 group-hover:opacity-25 transition-opacity"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-600/15 via-primary-500/15 to-primary-600/15 blur-[40px]" />
                )}
              </div>

              {/* Контент */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[250px] p-4 sm:p-6">
                <div className="text-primary-400 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl sm:text-5xl md:text-6xl">
                    {link.icon}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-100 mb-6 sm:mb-8 text-center px-2">
                  {link.title}
                </h3>
                <Button
                  type="primary"
                  size="large"
                  className="bg-primary-600 hover:bg-primary-500 border-primary-500 shadow-lg hover:shadow-primary-500/50 transition-all duration-300 text-sm sm:text-base"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleClick(link.id)
                  }}
                >
                  Посмотреть
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Модальное окно */}
      <Modal
        open={visibleModal !== null}
        onCancel={handleClose}
        onOk={handleClose}
        okText="Отличная идея!"
        cancelButtonProps={{ style: { display: 'none' } }}
        centered
        width="90%"
        style={{ maxWidth: '500px' }}
        styles={{
          mask: {
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(4px)',
          },
          content: {
            backgroundColor: '#1e293b',
            border: '2px solid #3b82f6',
            borderRadius: '12px sm:rounded-2xl',
          },
          header: {
            backgroundColor: '#1e293b',
            borderBottom: '1px solid #334155',
            padding: '16px sm:20px md:24px',
          },
          body: {
            backgroundColor: '#1e293b',
            padding: '20px sm:24px md:32px',
          },
          footer: {
            backgroundColor: '#1e293b',
            borderTop: '1px solid #334155',
            padding: '12px sm:16px md:24px',
          },
        }}
      >
        <div className="space-y-4 sm:space-y-6">
          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed text-center px-2">
            Предлагаю связаться и обсудить все лично :)
          </p>
          
          {/* Способы связи */}
          <div className="pt-3 sm:pt-4 border-t border-slate-700">
            <h4 className="text-xs sm:text-sm font-semibold text-slate-400 mb-3 sm:mb-4 text-center uppercase tracking-wider">
              Способы связи
            </h4>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <a
                href="mailto:vladislavtatyankin@mail.ru"
                className="flex items-center justify-center gap-1.5 sm:gap-2 p-2 sm:p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700 transition-colors text-slate-300 hover:text-white border border-slate-700 hover:border-primary-500"
              >
                <MailOutlined className="text-lg sm:text-xl text-primary-400" />
                <span className="text-xs sm:text-sm">Email</span>
              </a>
              <a
                href="https://t.me/VladislavTatyankin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 sm:gap-2 p-2 sm:p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700 transition-colors text-slate-300 hover:text-white border border-slate-700 hover:border-primary-500"
              >
                <TelegramIcon className="text-lg sm:text-xl text-primary-400 w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-xs sm:text-sm">Telegram</span>
              </a>
              <a
                href="tel:+79824108293"
                className="flex items-center justify-center gap-1.5 sm:gap-2 p-2 sm:p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700 transition-colors text-slate-300 hover:text-white border border-slate-700 hover:border-primary-500"
              >
                <PhoneOutlined className="text-lg sm:text-xl text-primary-400" />
                <span className="text-xs sm:text-sm">Телефон</span>
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default PersonalLinks
