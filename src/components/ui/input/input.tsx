import { ChangeEvent, forwardRef, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'

import clsx from 'clsx'

import s from './input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'disabled'>

export type InputProps = {
  type?: HTMLInputTypeAttribute
  className?: string
  disabled?: boolean
  value?: string
  name?: string
  onChange?: (e: string) => void
} & HTMLInputProps
export const Input = forwardRef<Omit<HTMLInputElement, 'onChange'>, InputProps>(
  ({ type = 'text', disabled, className = '', onChange, name, value, ...rest }, ref) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value)
    }
    const formatNumber = (e: ChangeEvent<HTMLInputElement>) => {
      let phoneNumber = e.target.value.replace(/\D/g, '')

      if (!phoneNumber) {
        return (phoneNumber = '')
      }
      if (['7', '8', '9'].includes(phoneNumber[0])) {
        phoneNumber = '7' + phoneNumber
      }
    }

    return (
      <div className={s.inputWrapper}>
        <input
          className={clsx(s.input, className)}
          ref={ref}
          name={name}
          value={value}
          onChange={type === 'tel' ? formatNumber : onChangeHandler}
          disabled={disabled}
          type={type}
          {...rest}
        />
      </div>
    )
  }
)
