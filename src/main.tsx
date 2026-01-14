import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import ruRU from 'antd/locale/ru_RU'
import App from './App.tsx'
import './index.css'

// Определяем basename для React Router в зависимости от окружения
// В dev режиме basename = '/', в production = '/tatyankin-portfolio'
const basename = import.meta.env.DEV ? '/' : '/tatyankin-portfolio'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <ConfigProvider locale={ruRU}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
)

