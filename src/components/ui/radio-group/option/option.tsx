import { useEffect, useRef } from 'react'

import s from './option.module.scss'

import { RadioIcon, RadioCheckedIcon } from '@/components/ui/icons'

interface OptionProps {
  value: OptionType['value']
  title: OptionType['title']
  selected: OptionType['value']
  groupName: string
  onChange: (value: string) => void
}

export type OptionType = {
  value: string
  title: string
}

export const Option = ({ value, title, selected, groupName, onChange }: OptionProps) => {
  const optionRef = useRef<HTMLDivElement>(null)
  const handleChange = () => onChange(value)
  const isChecked = selected === value

  useEffect(() => {
    const option = optionRef.current

    if (!option) return

    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (document.activeElement === option && event.key === 'Enter') {
        onChange?.(value)
      }
    }

    option.addEventListener('keydown', handleEnterKeyDown)

    return () => {
      option.removeEventListener('keydown', handleEnterKeyDown)
    }
  }, [value, onChange])

  return (
    <div className={s.option} key={value} data-checked={isChecked} ref={optionRef} tabIndex={1}>
      <input
        className={s.input}
        type="radio"
        name={groupName}
        id={title}
        value={value}
        onChange={handleChange}
      />
      <label className={s.label} htmlFor={title}>
        <div className={s.icons}>
          {isChecked && <RadioCheckedIcon className={s.checked} />}
          <RadioIcon />
        </div>
        {title}
      </label>
    </div>
  )
}
