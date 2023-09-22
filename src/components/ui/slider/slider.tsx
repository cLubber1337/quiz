import { ChangeEvent, useRef } from 'react'

import s from './slider.module.scss'

interface SliderProps {
  max: number
  min: number
  value: number
  id: string
  step?: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  label: string
}

export const Slider = ({ max, min, value, id, step = 1, onChange, label }: SliderProps) => {
  const valueRef = useRef<HTMLDivElement>(null)

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e)
  }

  return (
    <div className={s.slider}>
      <h3 className="label">{label}</h3>

      <input
        className={s.range}
        type="range"
        step={step}
        min={min}
        max={max}
        value={value}
        id={id}
        onInput={handleSliderChange}
      />

      <div ref={valueRef} className={s.rangeValue}>
        {value}
      </div>

      <div className={s.minMaxRange}>
        <span className={s.minMaxValue}>{min} лет</span>
        <span className={s.minMaxValue}>{max} лет</span>
      </div>
    </div>
  )
}
