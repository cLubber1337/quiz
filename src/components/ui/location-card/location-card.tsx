import { Dispatch, SetStateAction } from 'react'

import s from './locationCard.module.scss'

import { Button, Card, ProgressIndicator, Select, Textarea } from '@/components/ui'
import { SelectOption, selectOptions } from '@/lib/data.ts'
import { FormDataValues } from '@/lib/validation.ts'

interface LocationCardProps {
  setProgress: Dispatch<SetStateAction<number>>
  formDataValues: FormDataValues
  setFormDataValues: Dispatch<SetStateAction<FormDataValues>>
}

export const LocationCard = ({
  setProgress,
  formDataValues,
  setFormDataValues,
}: LocationCardProps) => {
  const filteredOptions = selectOptions.filter(option => option.title !== formDataValues.city.title)

  return (
    <Card className={s.locationCard}>
      <ProgressIndicator current={2} total={3} className="progress-indicator" />
      <div className="title-wrapper">
        <h3 className="title">Город</h3>
      </div>
      <Select
        value={formDataValues.city}
        onChange={(e: SelectOption) => setFormDataValues(prev => ({ ...prev, city: e }))}
        options={filteredOptions}
      />
      <div className={s.message}>
        <div className="title-wrapper">
          <h3 className="title">Сообщение</h3>
        </div>
        <Textarea
          value={formDataValues.message}
          onChange={e => setFormDataValues(prev => ({ ...prev, message: e.target.value }))}
          className={s.textarea}
          placeholder="Количество символов не более 370"
          maxLength={370}
        />
      </div>
      <div className="actions">
        <Button variant="outline" onClick={() => setProgress(prev => prev - 1)}>
          Назад
        </Button>
        <Button
          variant="primary"
          disabled={!formDataValues.message}
          onClick={() => setProgress(prev => prev + 1)}
        >
          Далее
        </Button>
      </div>
    </Card>
  )
}
