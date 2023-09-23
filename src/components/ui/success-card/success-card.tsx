import s from './success-card.module.scss'

import { Button, Modal } from '@/components/ui'
import { SuccessIcon } from '@/components/ui/icons'

interface SuccessCardProps {
  isOpen: boolean
  onClose: () => void
}

export const SuccessCard = ({ onClose, isOpen }: SuccessCardProps) => {
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
