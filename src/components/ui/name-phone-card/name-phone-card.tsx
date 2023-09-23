import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { SubmitHandler, useForm } from 'react-hook-form'

import s from './namePhoneCard.module.scss'

import { Button, Card, ControlledInput, ControlledCheckbox } from '@/components/ui'
import { formSchema, FormValues } from '@/lib/validation.ts'

interface NamePhoneCardProps {
  onSubmit: SubmitHandler<FormValues>
  disabled?: boolean
}

export const NamePhoneCard = ({ onSubmit, disabled }: NamePhoneCardProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      privacy: true,
    },
  })

  return (
    <Card className={s.namePhoneCard}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="title-wrapper">
          <h3 className="title">Имя</h3>
          {errors.name && <p className={s.errorMessage}>{errors.name.message}</p>}
        </div>
        <ControlledInput
          className={clsx(errors.name && s.errorInput)}
          type="text"
          disabled={disabled}
          name="name"
          control={control}
        />
        <div className={s.phone}>
          <div className="title-wrapper">
            <h3 className="title">Телефон</h3>
            {errors.phone && <p className={s.errorMessage}>{errors.phone.message}</p>}
          </div>
          <ControlledInput
            className={clsx(errors.phone && s.errorInput)}
            type="tel"
            disabled={disabled}
            name="phone"
            control={control}
          />
        </div>
        <ControlledCheckbox
          label="Я согласен с политикой конфиденциальности"
          name="privacy"
          control={control}
        />
        <div className="actions">
          <Button type="submit" variant="outline">
            Назад
          </Button>
          <Button variant="primary" type="submit">
            Отправить заявку
          </Button>
        </div>
      </form>
    </Card>
  )
}
