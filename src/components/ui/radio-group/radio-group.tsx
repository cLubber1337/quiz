import { Option, OptionType } from './option/option.tsx'
import s from './radioGroup.module.scss'

interface RadioGroupProps {
  name: string
  options: OptionType[]
  selected: OptionType['value']
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
