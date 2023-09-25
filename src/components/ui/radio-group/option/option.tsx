import { useEffect, useRef } from 'react'

import s from './option.module.scss'

import { RadioIcon, RadioCheckedIcon } from '@/components/ui/icons'
import { RadioOption } from '@/lib/data.ts'

interface OptionProps {
  value: RadioOption['value']
  title: RadioOption['title']
  selected: RadioOption['value']
  groupName: string
  onChange: (value: string) => void
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
    <div className={s.option} data-checked={isChecked} ref={optionRef}>
      <label className={s.label} htmlFor={title}>
        <div className={s.icons}>
          <input
            className={s.input}
            type="radio"
            name={groupName}
            id={title}
            value={value}
            onChange={handleChange}
            tabIndex={0}
          />
          {isChecked && <RadioCheckedIcon className={s.checked} />}
          <RadioIcon />
        </div>
        {title}
      </label>
    </div>
  )
}
