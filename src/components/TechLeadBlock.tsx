import { Card, Modal } from 'antd'
import { TeamOutlined, CodeOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { MailOutlined, PhoneOutlined } from '@ant-design/icons'

// SVG иконка Telegram в синем стиле
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

const TechLeadBlock = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleCardClick = () => {
    setIsModalVisible(true)
  }

  const handleClose = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <Card
          className="border-slate-700 hover:border-primary-500 transition-all duration-300 cursor-pointer group"
          style={{
            backgroundColor: 'rgba(30, 41, 59, 0.8)',
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%)',
          }}
          onClick={handleCardClick}
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8">
            {/* Иконки */}
            <div className="flex gap-4 sm:gap-6">
              <div className="text-primary-400 group-hover:scale-110 transition-transform duration-300">
                <TeamOutlined className="text-4xl sm:text-5xl md:text-6xl" />
              </div>
              <div className="text-primary-400 group-hover:scale-110 transition-transform duration-300">
                <CodeOutlined className="text-4xl sm:text-5xl md:text-6xl" />
              </div>
            </div>

            {/* Текст */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-100 mb-3 sm:mb-4">
                Tech Lead & Team Lead
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
                Мой опыт построения архитектуры, инструменты и фичи управления командой и внедрения best practices (куда же без этого). 
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Модальное окно */}
      <Modal
        open={isModalVisible}
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
            borderRadius: '12px',
            maxHeight: '70vh',
          },
          header: {
            backgroundColor: '#1e293b',
            borderBottom: '1px solid #334155',
            padding: '12px 16px',
          },
          body: {
            backgroundColor: '#1e293b',
            padding: '12px 16px',
            maxHeight: 'calc(70vh - 100px)',
            overflowY: 'auto',
          },
          footer: {
            backgroundColor: '#1e293b',
            borderTop: '1px solid #334155',
            padding: '10px 12px',
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

export default TechLeadBlock
