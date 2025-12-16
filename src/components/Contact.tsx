import { Card, Form, Input, Button, message } from 'antd'
import { MailOutlined, SendOutlined } from '@ant-design/icons'
import type { FormProps } from 'antd'

interface ContactFormData {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const [form] = Form.useForm()

  const onFinish: FormProps<ContactFormData>['onFinish'] = (values) => {
    // В реальном проекте здесь был бы API вызов
    console.log('Form data:', values)
    message.success('Спасибо! Сообщение отправлено (в реальном проекте здесь был бы API)')
    form.resetFields()
  }

  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-100">
        Связаться со мной
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Контактная форма */}
        <Card className="border-slate-700">
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            className="contact-form"
          >
            <Form.Item
              name="name"
              label={<span className="text-slate-300">Имя</span>}
              rules={[{ required: true, message: 'Имя обязательно' }]}
            >
              <Input
                placeholder="Ваше имя"
                className="bg-slate-800 border-slate-600 text-slate-100 placeholder:text-slate-500"
              />
            </Form.Item>

            <Form.Item
              name="email"
              label={<span className="text-slate-300">Email</span>}
              rules={[
                { required: true, message: 'Email обязателен' },
                { type: 'email', message: 'Некорректный email' },
              ]}
            >
              <Input
                type="email"
                placeholder="your.email@example.com"
                className="bg-slate-800 border-slate-600 text-slate-100 placeholder:text-slate-500"
              />
            </Form.Item>

            <Form.Item
              name="message"
              label={<span className="text-slate-300">Сообщение</span>}
              rules={[{ required: true, message: 'Сообщение обязательно' }]}
            >
              <Input.TextArea
                rows={6}
                placeholder="Ваше сообщение..."
                className="bg-slate-800 border-slate-600 text-slate-100 placeholder:text-slate-500"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                icon={<SendOutlined />}
                size="large"
                className="w-full bg-primary-600 hover:bg-primary-700"
              >
                Отправить
              </Button>
            </Form.Item>
          </Form>
        </Card>

        {/* Контактные ссылки */}
        <Card className="border-slate-700">
          <h3 className="text-2xl font-semibold text-slate-100 mb-6">
            Быстрые ссылки
          </h3>
          <div className="space-y-4">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-3 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors text-slate-300 hover:text-white"
            >
              <MailOutlined className="text-2xl text-primary-400" />
              <span>Email</span>
            </a>
            <a
              href="https://t.me/your_telegram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors text-slate-300 hover:text-white"
            >
              <span className="text-2xl">📱</span>
              <span>Telegram</span>
            </a>
            <a
              href="https://habr.com/users/your_username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors text-slate-300 hover:text-white"
            >
              <span className="text-2xl">📝</span>
              <span>Habr</span>
            </a>
            <a
              href="https://github.com/your_username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors text-slate-300 hover:text-white"
            >
              <span className="text-2xl">💻</span>
              <span>GitHub</span>
            </a>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default Contact

