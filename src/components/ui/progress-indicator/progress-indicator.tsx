import clsx from 'clsx'

import s from './progress-indicator.module.scss'

interface ProgressIndicatorProps {
  current: number
  total: number
  className?: string
}

export const ProgressIndicator = ({ current, total, className = '' }: ProgressIndicatorProps) => {
  return (
    <div className={clsx(s.progressIndicator, className)}>
      <span className={s.current}>{current}</span>/{total}
    </div>
  )
}
