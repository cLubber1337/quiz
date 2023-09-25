import { Option } from './option/option.tsx'
import s from './radioGroup.module.scss'

import { RadioOption } from '@/lib/data.ts'

interface RadioGroupProps {
  name: string
  options: RadioOption[]
  selected: RadioOption['value']
  onChange: (value: string) => void
}

export const RadioGroup = ({ name, options, selected, onChange }: RadioGroupProps) => {
  return (
    <div className={s.radioGroup}>
      <div className={s.radioWrapper}>
        {options.map(({ value, title }) => (
          <Option
            key={value}
            groupName={name}
            value={value}
            title={title}
            selected={selected}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  )
}
