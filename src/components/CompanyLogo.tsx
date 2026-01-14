import React from 'react'
import { Image } from 'antd'

interface CompanyLogoProps {
  company: string
  size?: number
  className?: string
}

// Маппинг компаний на URL логотипов или SVG компоненты
const companyLogos: Record<string, string | React.ReactElement> = {
  'INovexx': (
    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-full text-white font-bold text-lg shadow-lg">
      IN
    </div>
  ),
  'ИГИТ': (
    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 rounded-full text-white font-bold text-sm shadow-lg border-2 border-orange-300/30">
      ИГИТ
    </div>
  ),
  'EvenBet Gaming': 'https://evenbetgaming.com/wp-content/uploads/2020/06/evenbet-logo-white.svg',
  'XDSOFT': (
    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-500 rounded-full text-white font-bold text-sm shadow-lg border-2 border-blue-300/30">
      XD
    </div>
  ),
  'ЮТЭК-Региональные сети': (
    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-green-600 via-emerald-500 to-teal-500 rounded-full text-white font-bold text-sm shadow-lg border-2 border-green-300/30">
      ЮТЭК
    </div>
  ),
  'АУ Югорский НИИ информационных технологий': (
    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 rounded-full text-white font-bold text-xs shadow-lg border-2 border-slate-400/30">
      ЮНИИИТ
    </div>
  ),
}

const CompanyLogo = ({ company, size = 48, className = '' }: CompanyLogoProps) => {
  const logo = companyLogos[company]

  if (!logo) {
    // Fallback на первую букву компании
    return (
      <div
        className={`flex items-center justify-center bg-primary-500 rounded-full text-white font-bold text-xs sm:text-sm ${className}`}
        style={{ width: size, height: size, minWidth: size, minHeight: size }}
      >
        {company.charAt(0)}
      </div>
    )
  }

  if (typeof logo === 'string') {
    // URL логотипа
    const fallbackSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}'%3E%3Crect width='${size}' height='${size}' fill='%23334155'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='${Math.floor(size * 0.4)}' font-weight='bold'%3E${encodeURIComponent(company.charAt(0))}%3C/text%3E%3C/svg%3E`
    
    return (
      <Image
        src={logo}
        alt={company}
        width={size}
        height={size}
        className={className}
        preview={false}
        style={{
          objectFit: 'contain',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          padding: '4px',
        }}
        fallback={fallbackSvg}
      />
    )
  }

  // React компонент (SVG или div)
  return (
    <div
      className={className}
      style={{ width: size, height: size }}
    >
      {logo}
    </div>
  )
}

export default CompanyLogo
