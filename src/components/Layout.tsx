import { Outlet } from 'react-router-dom'
import { FloatButton } from 'antd'
import { ArrowUpOutlined } from '@ant-design/icons'

const Layout = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      <Outlet />
      <FloatButton
        icon={<ArrowUpOutlined />}
        type="primary"
        style={{ right: 24 }}
        onClick={scrollToTop}
        tooltip="Наверх"
      />
    </div>
  )
}

export default Layout

