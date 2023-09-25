import { useEffect, useState } from 'react'

import { AgeGenderCard, LocationCard, NamePhoneCard } from '@/components/ui'
import { SuccessModal } from '@/components/ui/success-modal/success-modal.tsx'
import { selectOptions } from '@/lib/data.ts'
import { FormDataValues } from '@/lib/validation.ts'
import { fetchFormData } from '@/services/api.ts'

export const App = () => {
  const KEY = import.meta.env.VITE_KEY
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [progress, setProgress] = useState(1)
  const [isFetching, setIsFetching] = useState(false)
  const [countryCode, setCountryCode] = useState<string>('')
  const [formDataValues, setFormDataValues] = useState<FormDataValues>({
    age: 27,
    gender: '',
    city: selectOptions[0],
    message: '',
    name: '',
    phone: '',
    privacy: true,
  })

  const openModal = () => setIsOpenModal(true)
  const closeModal = () => {
    setIsOpenModal(false)
    setProgress(1)
  }

  const handleSubmit = async () => {
    setIsFetching(true)
    try {
      await fetchFormData(formDataValues)
      setIsFetching(false)
      setProgress(0)
      openModal()
      setFormDataValues({
        age: 27,
        gender: '',
        city: selectOptions[0],
        message: '',
        name: '',
        phone: '',
        privacy: true,
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const fetchCountry = () => {
      fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${KEY}`)
        .then(res => res.json())
        .then(data => {
          const countryCode = data['country_code']

          if (countryCode === 'RU' || countryCode === 'BY') {
            setCountryCode(countryCode)
          } else {
            setCountryCode('')
          }
        })
        .catch(error => {
          console.error(error)
        })
    }

    fetchCountry()
  }, [KEY])

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
        <NamePhoneCard
          formDataValues={formDataValues}
          setProgress={setProgress}
          onSubmit={handleSubmit}
          isFetching={isFetching}
          countryCode={countryCode}
          setFormDataValues={setFormDataValues}
        />
      )}
    </main>
  )
}
