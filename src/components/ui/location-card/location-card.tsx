import { useState } from 'react'

import s from './locationCard.module.scss'

import { Button, Card, Select, Textarea } from '@/components/ui'
import { selectOptions, SelectOption } from '@/lib/data.ts'

export const LocationCard = () => {
  const [city, setCity] = useState<SelectOption>(selectOptions[0])

  const filteredOptions = selectOptions.filter(option => option.title !== city.title)

  const handleChangeSelect = (value: SelectOption) => {
    setCity(value)
  }

  return (
    <Card className={s.locationCard}>
      <div className="title-wrapper">
        <h3 className="title">Город</h3>
      </div>
      <Select value={city} onChange={handleChangeSelect} options={filteredOptions} />
      <div className={s.message}>
        <div className="title-wrapper">
          <h3 className="title">Сообщение</h3>
        </div>
        <Textarea className={s.textarea} placeholder="Количество символов не более 370" />
      </div>
      <div className="actions">
        <Button variant="outline">Назад</Button>
        <Button variant="primary">Далее</Button>
      </div>
    </Card>
  )
}
