import { ReactNode, useEffect, useState } from 'react'

import clsx from 'clsx'

import s from './modal.module.scss'

import { Portal } from '@/components/ui'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  lazy?: boolean
}

export const Modal = ({ className = '', children, isOpen, lazy }: ModalProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }

    return () => {
      setIsMounted(false)
    }
  }, [isOpen])

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={clsx(s.modal, isOpen && s.opened, className)}>
        <div className={s.overlay} />
        <div className={s.content}>{children}</div>
      </div>
    </Portal>
  )
}
