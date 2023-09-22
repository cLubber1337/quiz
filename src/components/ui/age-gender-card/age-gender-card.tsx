import { ChangeEvent, useState } from 'react'

import s from './ageGenderCard.module.scss'

import { Card, Slider } from '@/components/ui'

interface AgeGenderCardProps {}

export const AgeGenderCard = ({}: AgeGenderCardProps) => {
  const [rangeAge, setRangeAge] = useState(27)

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
    </Card>
  )
}
