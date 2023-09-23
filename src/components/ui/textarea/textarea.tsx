import { ForwardedRef, forwardRef, TextareaHTMLAttributes } from 'react'

import clsx from 'clsx'

import s from './textarea.module.scss'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
}

export const Textarea = forwardRef(
  ({ className = '', ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return <textarea className={clsx(s.textarea, className)} ref={ref} {...props} />
  }
)
