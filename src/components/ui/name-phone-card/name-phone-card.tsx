import { Dispatch, SetStateAction } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { SubmitHandler, useForm } from 'react-hook-form'

import s from './namePhoneCard.module.scss'

import {
  Button,
  Card,
  ControlledInput,
  ControlledCheckbox,
  ProgressIndicator,
} from '@/components/ui'
import { LoaderIcon } from '@/components/ui/icons/loader-icon.tsx'
import { formSchema, FormValues } from '@/lib/validation.ts'

interface NamePhoneCardProps {
  onSubmit: SubmitHandler<FormValues>
  isFetching?: boolean
  setProgress: Dispatch<SetStateAction<number>>
}

export const NamePhoneCard = ({ onSubmit, isFetching, setProgress }: NamePhoneCardProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      privacy: true,
    },
  })
  const formValues = watch()
  const disabledSubmitBtn = !formValues.privacy || !formValues.name || !formValues.phone

  return (
    <Card className={s.namePhoneCard}>
      <ProgressIndicator current={3} total={3} className="progress-indicator" />
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className="title-wrapper">
          <h3 className="title">Имя</h3>
          {errors.name && <p className={s.errorMessage}>{errors.name.message}</p>}
        </div>
        <ControlledInput
          className={clsx(errors.name && s.errorInput)}
          type="text"
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
            name="phone"
            control={control}
          />
        </div>
        <ControlledCheckbox
          label="Я согласен с политикой конфиденциальности"
          name="privacy"
          control={control}
        />{' '}
        {errors.privacy && <p className={s.errorMessage}>{errors.privacy.message}</p>}
        <div className="actions">
          <Button variant="outline" onClick={() => setProgress(prev => prev - 1)}>
            Назад
          </Button>
          <Button variant="primary" type="submit" disabled={disabledSubmitBtn}>
            {isFetching && <LoaderIcon className={s.loaderIcon} />}
            Отправить заявку
          </Button>
        </div>
      </form>
    </Card>
  )
}
