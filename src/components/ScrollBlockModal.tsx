import { Modal } from 'antd'
import { useEffect, useState, useRef } from 'react'

interface ScrollBlockModalProps {
  title?: string
  content?: string
  onClose?: () => void
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

  // Дополнительная блокировка когда модальное окно открыто
  useEffect(() => {
    if (!isVisible) return

    const blockScroll = (e: Event) => {
      e.preventDefault()
      e.stopPropagation()
      return false
    }

    const blockWheel = (e: WheelEvent) => {
      e.preventDefault()
      e.stopPropagation()
      window.scrollTo(0, scrollPositionRef.current)
      return false
    }

    const blockTouch = (e: TouchEvent) => {
      e.preventDefault()
      e.stopPropagation()
      return false
    }

    const blockKeys = (e: KeyboardEvent) => {
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Space', 'Home', 'End'].includes(e.key)) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
    }

    // Блокируем все способы скролла
    window.addEventListener('scroll', blockScroll, { passive: false, capture: true })
    window.addEventListener('wheel', blockWheel, { passive: false, capture: true })
    window.addEventListener('touchmove', blockTouch, { passive: false, capture: true })
    window.addEventListener('keydown', blockKeys, { passive: false })

    return () => {
      window.removeEventListener('scroll', blockScroll, { capture: true } as any)
      window.removeEventListener('wheel', blockWheel, { capture: true } as any)
      window.removeEventListener('touchmove', blockTouch, { capture: true } as any)
      window.removeEventListener('keydown', blockKeys)
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
      width={800}
      centered
      className="scroll-block-modal"
      maskStyle={{
        backgroundColor: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(4px)',
      }}
      styles={{
        content: {
          backgroundColor: '#1e293b',
          border: '2px solid #3b82f6',
          borderRadius: '16px',
        },
        header: {
          backgroundColor: '#1e293b',
          borderBottom: '1px solid #334155',
          padding: '24px',
        },
        body: {
          backgroundColor: '#1e293b',
          padding: '32px',
        },
        footer: {
          backgroundColor: '#1e293b',
          borderTop: '1px solid #334155',
          padding: '16px 24px',
        },
      }}
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
          {title}
        </h2>
        <div className="text-lg text-slate-300 leading-relaxed space-y-4">
          {content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Modal>
  )
}

export default ScrollBlockModal
