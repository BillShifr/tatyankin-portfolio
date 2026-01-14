import { Modal } from 'antd'
import { useEffect, useState, useRef } from 'react'

interface ScrollBlockModalProps {
  title?: string
  content?: string
  onClose?: () => void
}

const parseMarkdown = (text: string, keyPrefix: string) => {
  const parts: (string | JSX.Element)[] = []
  let lastIndex = 0
  const regex = /\*\*(.*?)\*\*/g
  let match
  let keyCounter = 0

  while ((match = regex.exec(text)) !== null) {

    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index))
    }
    // Добавляем жирный текст
    parts.push(
      <strong key={`${keyPrefix}-bold-${keyCounter++}`} className="text-slate-100 font-bold">
        {match[1]}
      </strong>
    )
    lastIndex = regex.lastIndex
  }

  // Добавляем оставшийся текст
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }

  return parts.length > 0 ? parts : [text]
}

const ScrollBlockModal = ({
  title = 'Добро пожаловать!',
  content = 'Это мое портфолио. Здесь вы найдете информацию о моем опыте работы, технологиях и проектах.',
  onClose,
}: ScrollBlockModalProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const scrollPositionRef = useRef(0)
  const hasTriggeredRef = useRef(false)

  // Блокировка скролла когда модальное окно видимо
  useEffect(() => {
    if (isVisible) {
      // Сохраняем позицию скролла
      scrollPositionRef.current = window.pageYOffset || document.documentElement.scrollTop
      
      // ВАЖНО: Сначала устанавливаем темный фон, чтобы избежать белого фона
      const originalBodyBg = document.body.style.backgroundColor
      const originalHtmlBg = document.documentElement.style.backgroundColor
      
      document.body.style.backgroundColor = '#0f172a'
      document.documentElement.style.backgroundColor = '#0f172a'
      
      // Затем блокируем скролл через CSS
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollPositionRef.current}px`
      document.body.style.width = '100%'
      document.body.style.left = '0'
      document.body.style.right = '0'
      
      // Блокируем скролл на html элементе тоже
      document.documentElement.style.overflow = 'hidden'
      
      // Сохраняем оригинальные значения для восстановления
      return () => {
        // Восстанавливаем оригинальные стили
        document.body.style.overflow = ''
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.left = ''
        document.body.style.right = ''
        document.body.style.backgroundColor = originalBodyBg
        document.documentElement.style.overflow = ''
        document.documentElement.style.backgroundColor = originalHtmlBg
      }
    } else {
      // Разблокируем скролл
      const scrollY = scrollPositionRef.current
      
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.documentElement.style.overflow = ''
      
      // Восстанавливаем позицию скролла
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY)
      })
    }

    return () => {
      // Cleanup
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.documentElement.style.overflow = ''
    }
  }, [isVisible])

  // Отслеживание скролла - простой и надежный подход
  useEffect(() => {
    if (hasTriggeredRef.current || isVisible) return

    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop

    const handleScroll = () => {
      if (hasTriggeredRef.current) {
        // Если уже триггернули, блокируем скролл
        window.scrollTo(0, scrollPositionRef.current)
        return
      }

      const currentScroll = window.pageYOffset || document.documentElement.scrollTop
      
      // Проверяем, что пользователь скроллит вниз и проскроллил больше 80px
      if (currentScroll > lastScrollTop && currentScroll > 80) {
        hasTriggeredRef.current = true
        
        // Сохраняем текущую позицию
        scrollPositionRef.current = currentScroll
        
        // ВАЖНО: Применяем все стили синхронно, без задержек
        // Сначала устанавливаем темный фон (это должно быть первым!)
        document.body.style.backgroundColor = '#0f172a'
        document.documentElement.style.backgroundColor = '#0f172a'
        
        // Затем блокируем скролл (все в одном синхронном блоке)
        document.body.style.overflow = 'hidden'
        document.body.style.position = 'fixed'
        document.body.style.top = `-${scrollPositionRef.current}px`
        document.body.style.width = '100%'
        document.body.style.left = '0'
        document.body.style.right = '0'
        document.documentElement.style.overflow = 'hidden'
        
        // Принудительно применяем стили через reflow
        void document.body.offsetHeight
        
        // Показываем модальное окно
        setIsVisible(true)
        
        return
      }
      
      lastScrollTop = currentScroll
    }

    const handleWheel = (e: WheelEvent) => {
      if (hasTriggeredRef.current) {
        e.preventDefault()
        e.stopPropagation()
        window.scrollTo(0, scrollPositionRef.current)
        return false
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (hasTriggeredRef.current || isVisible) {
        e.preventDefault()
        return false
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (hasTriggeredRef.current || isVisible) {
        if (['ArrowDown', 'PageDown', 'Space'].includes(e.key)) {
          e.preventDefault()
          return false
        }
      }
    }

    // Добавляем обработчики
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('wheel', handleWheel, { passive: false, capture: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false, capture: true })
    window.addEventListener('keydown', handleKeyDown, { passive: false })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', handleWheel, { capture: true } as any)
      window.removeEventListener('touchmove', handleTouchMove, { capture: true } as any)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isVisible])


  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      if (onClose) {
        onClose()
      }
    }, 300)
  }

  return (
    <Modal
      open={isVisible}
      onOk={handleClose}
      okText="Понятно, продолжаем!"
      cancelButtonProps={{ style: { display: 'none' } }}
      closable={false}
      maskClosable={false}
      keyboard={false}
      width="90%"
      style={{ maxWidth: '800px' }}
      centered
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
          padding: '8px 12px',
        },
        body: {
          backgroundColor: '#1e293b',
          padding: '8px 12px',
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
      <div className="text-center">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-100 mb-2 sm:mb-3 px-2">
          {title}
        </h2>
        <div className="modal-content-scroll text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed text-left">
          {content.split('\n').map((paragraph, index) => {
            if (!paragraph.trim()) {
              return <div key={index} className="h-1 sm:h-1.5" />
            }
            return (
              <p key={index} className="mb-1 sm:mb-1.5 md:mb-2 last:mb-0">
                {parseMarkdown(paragraph, `para-${index}`)}
              </p>
            )
          })}
        </div>
      </div>
    </Modal>
  )
}

export default ScrollBlockModal
