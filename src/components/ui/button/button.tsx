import { ButtonHTMLAttributes, ReactNode } from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'outline'
  className?: string
}

export const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...otherProps
}: ButtonProps) => {
  return (
    <button className={clsx(s.button, s[variant], className)} {...otherProps}>
      {children}
    </button>
  )
}
