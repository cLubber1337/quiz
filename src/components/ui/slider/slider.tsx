import { ChangeEvent, memo, useEffect, useRef } from 'react'

import s from './slider.module.scss'

import { useMediaQuery } from '@/lib/hooks.ts'

interface SliderProps {
  max: number
  min: number
  value: number
  id: string
  step?: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  label: string
}

export const Slider = memo(({ max, min, value, id, step = 1, onChange, label }: SliderProps) => {
  const isMobile = useMediaQuery('(max-width: 640px)')
  const rangeRef = useRef<HTMLInputElement>(null)
  const valueRef = useRef<HTMLDivElement>(null)

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e)
  }

  useEffect(() => {
    const val = rangeRef.current?.value
    const min = rangeRef.current?.min ? +rangeRef.current?.min : 0
    const max = rangeRef.current?.max ? +rangeRef.current?.max : 100
    const newVal = ((+val! - min) * 100) / (max - min)

    if (isMobile) {
      valueRef.current!.style.left = `calc(${newVal}% + (${12 - newVal * 0.25}px))`
    } else {
      valueRef!.current!.style.left = `calc(${newVal}% + (${19.7 - newVal * 0.43}px))`
    }
  }, [value, max, min, isMobile])

  return (
    <div className={s.slider}>
      <span className={s.label}>{label}</span>

      <input
        className={s.range}
        type="range"
        step={step}
        min={min}
        max={max}
        value={value}
        id={id}
        onInput={handleSliderChange}
        ref={rangeRef}
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
})
