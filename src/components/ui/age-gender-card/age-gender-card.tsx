import { ChangeEvent, Dispatch, SetStateAction } from 'react'

import s from './ageGenderCard.module.scss'

import { Button, Card, ProgressIndicator, RadioGroup, Slider } from '@/components/ui'
import { radioOptions } from '@/lib/data.ts'
import { FormDataValues } from '@/lib/validation.ts'

interface AgeGenderCardProps {
  setProgress: Dispatch<SetStateAction<number>>
  formDataValues: FormDataValues
  setFormDataValues: Dispatch<SetStateAction<FormDataValues>>
}

export const AgeGenderCard = ({
  setProgress,
  formDataValues,
  setFormDataValues,
}: AgeGenderCardProps) => {
  return (
    <Card className={s.ageGenderCard}>
      <ProgressIndicator current={1} total={3} className="progress-indicator" />
      <Slider
        id="age-range"
        value={formDataValues.age}
        min={18}
        max={35}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFormDataValues(prev => ({ ...prev, age: +e.target.value }))
        }
        label={'Возраст'}
      />
      <div className="title-wrapper">
        <h3 className="title">Пол</h3>
      </div>
      <RadioGroup
        name="gender"
        selected={formDataValues.gender}
        onChange={e => setFormDataValues(prev => ({ ...prev, gender: e }))}
        options={radioOptions}
      />
      <div className={s.nextBtn}>
        <Button
          variant={'primary'}
          disabled={formDataValues.gender === ''}
          onClick={() => setProgress(prev => prev + 1)}
        >
          Далее
        </Button>
      </div>
    </Card>
  )
}
