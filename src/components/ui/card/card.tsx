import s from './card.module.scss'

interface CardProps {
  children: React.ReactNode
}

export const Card = ({ children }: CardProps) => {
  return <div className={s.card}>{children}</div>
}
