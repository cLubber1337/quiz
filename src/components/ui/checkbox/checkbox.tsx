import { forwardRef, InputHTMLAttributes } from 'react'

import s from './checkbox.module.scss'

import { CheckboxCheckedIcon, CheckboxIcon } from '@/components/ui/icons'

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  disabled?: boolean
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, disabled, checked, onCheckedChange, ...rest }, ref) => {
    return (
      <div className={s.checkboxWrapper}>
        <input
          style={{ display: 'none' }}
          className={s.checkbox}
          ref={ref}
          type="checkbox"
          {...rest}
          disabled={disabled}
          checked={checked}
          id={rest.id}
          onChange={e => {
            onCheckedChange?.(e.target.checked)
          }}
        />
        <label htmlFor={rest.id} className={s.label} tabIndex={0}>
          <div className={s.icons}>
            {checked && <CheckboxCheckedIcon className={s.checked} />}
            <CheckboxIcon />
          </div>
          {label}
        </label>
      </div>
    )
  }
)
