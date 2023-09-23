import { useState } from 'react'

import { SuccessCard } from '@/components/ui/success-card/success-card.tsx'
import { FormValues } from '@/lib/validation.ts'

export const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(true)

  const setIsOpen = () => {
    setIsOpenModal(false)
  }
  const handleSignIn = (data: FormValues) => {
    console.log(data)
  }

  return (
    <main className="container">
      <SuccessCard isOpen={isOpenModal} onClose={setIsOpen} />
    </main>
  )
}
