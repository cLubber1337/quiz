import { useEffect } from 'react'

import s from './success-modal.module.scss'

import { Button, Modal } from '@/components/ui'
import { SuccessIcon } from '@/components/ui/icons'

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export const SuccessModal = ({ onClose, isOpen }: SuccessModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <Modal isOpen={isOpen} lazy>
      <div className={s.successCard}>
        <SuccessIcon className={s.icon} />
        <h2 className={s.title}>Ваша заявка успешно отправлена!</h2>
        <div className={s.btn}>
          <Button onClick={() => onClose()}>Закрыть</Button>
        </div>
      </div>
    </Modal>
  )
}
