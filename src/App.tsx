import { useState } from 'react'

import { AgeGenderCard, LocationCard, NamePhoneCard } from '@/components/ui'
import { SuccessModal } from '@/components/ui/success-modal/success-modal.tsx'
import { selectOptions } from '@/lib/data.ts'
import { FormDataValues, FormValues } from '@/lib/validation.ts'
import { fetchFormData } from '@/services/api.ts'

export const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [progress, setProgress] = useState(1)
  const [isFetching, setIsFetching] = useState(false)
  const [formDataValues, setFormDataValues] = useState<FormDataValues>({
    age: 27,
    gender: '',
    city: selectOptions[0],
    message: '',
  })

  const openModal = () => setIsOpenModal(true)
  const closeModal = () => {
    setIsOpenModal(false)
    setProgress(1)
  }

  const handleSubmit = async (data: FormValues) => {
    setIsFetching(true)
    try {
      await fetchFormData(data)
      setIsFetching(false)
      setProgress(0)
      openModal()
      setFormDataValues({
        age: 27,
        gender: '',
        city: selectOptions[0],
        message: '',
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className="container">
      <SuccessModal isOpen={isOpenModal} onClose={closeModal} />
      {progress === 1 && (
        <AgeGenderCard
          formDataValues={formDataValues}
          setFormDataValues={setFormDataValues}
          setProgress={setProgress}
        />
      )}
      {progress === 2 && (
        <LocationCard
          setProgress={setProgress}
          formDataValues={formDataValues}
          setFormDataValues={setFormDataValues}
        />
      )}
      {progress === 3 && (
        <NamePhoneCard setProgress={setProgress} onSubmit={handleSubmit} isFetching={isFetching} />
      )}
    </main>
  )
}
