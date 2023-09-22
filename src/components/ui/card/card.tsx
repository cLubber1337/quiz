import { ReactNode } from 'react'

import clsx from 'clsx'

import s from './card.module.scss'

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card = ({ children, className = '' }: CardProps) => {
  return <section className={clsx(s.card, className)}>{children}</section>
}
