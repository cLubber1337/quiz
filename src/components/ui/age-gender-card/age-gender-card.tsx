import { ChangeEvent, useState } from 'react'

import s from './ageGenderCard.module.scss'

import { Card, RadioGroup, Slider } from '@/components/ui'

interface AgeGenderCardProps {}

export const AgeGenderCard = ({}: AgeGenderCardProps) => {
  const [rangeAge, setRangeAge] = useState(27)
  const [gender, setGender] = useState('')

  const handlePeriodChange = (val: string) => {
    setGender(val)
  }

  const onChangeRangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRangeAge(+e.target.value)
  }

  return (
    <Card className={s.ageGenderCard}>
      <Slider
        id="age-range"
        value={rangeAge}
        min={18}
        max={35}
        onChange={onChangeRangeHandler}
        label={'Возраст'}
      />
      <div className="title-wrapper">
        <h3 className="title">Пол</h3>
      </div>
      <RadioGroup
        name="Пол"
        selected={gender}
        onChange={handlePeriodChange}
        options={[
          { value: 'male', title: 'Мужской' },
          { value: 'female', title: 'Женский' },
        ]}
      />
    </Card>
  )
}
