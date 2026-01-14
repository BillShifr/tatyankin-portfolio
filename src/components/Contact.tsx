import { Card } from 'antd'
import { MailOutlined, GithubOutlined, PhoneOutlined } from '@ant-design/icons'

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

const Contact = () => {

  return (
    <section id="contact" className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-100">
        Связаться со мной
      </h2>

      <Card className="border-slate-700 bg-slate-800/50">

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          <a
            href="mailto:vladislavtatyankin@mail.ru"
            className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700 transition-all duration-300 text-slate-300 hover:text-white border border-slate-700 hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/20"
          >
            <MailOutlined className="text-4xl text-primary-400" />
            <span className="font-medium">Email</span>
          </a>
          <a
            href="https://t.me/VladislavTatyankin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700 transition-all duration-300 text-slate-300 hover:text-white border border-slate-700 hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/20"
          >
            <TelegramIcon className="text-4xl text-primary-400 w-10 h-10" />
            <span className="font-medium">Telegram</span>
          </a>
          <a
            href="tel:+79824108293"
            className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700 transition-all duration-300 text-slate-300 hover:text-white border border-slate-700 hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/20"
          >
            <PhoneOutlined className="text-4xl text-primary-400" />
            <span className="font-medium">+7 (982) 410-82-93</span>
          </a>
        </div>
      </Card>
    </section>
  )
}

export default Contact

