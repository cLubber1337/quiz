import { Dispatch, SetStateAction, useEffect, useState } from 'react'

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
  countryCode?: string
}

export const NamePhoneCard = ({
  onSubmit,
  isFetching,
  setProgress,
  countryCode,
}: NamePhoneCardProps) => {
  const [phoneCode, setCountryCode] = useState<string>('')

  const placeholder =
    phoneCode === 'RU' ? '+7 (_ _ _) _ _ _-_ _-_ _' : '+375 (_ _) _ _ _ - _ _ - _ _'

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      privacy: true,
    },
  })

  const formValues = watch()
  const disabledSubmitBtn =
    !formValues.privacy || !formValues.name || !formValues.phone || isFetching

  useEffect(() => {
    if (countryCode === 'RU') {
      setCountryCode('RU')
    } else {
      setCountryCode('BY')
    }
  }, [countryCode])

  return (
    <Card className={s.namePhoneCard}>
      <ProgressIndicator current={3} total={3} className="progress-indicator" />
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className="title-wrapper">
          <h3 className="title">Имя</h3>
          {errors.name && <p className={s.errorMessage}>{errors.name.message}</p>}
        </div>
        <ControlledInput
          autoFocus
          className={clsx(errors.name && s.errorInput)}
          type="text"
          name="name"
          control={control}
          disabled={isFetching}
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
            maxLength={countryCode === 'RU' ? 18 : 19}
            control={control}
            disabled={isFetching}
            placeholder={placeholder}
            id={'phone'}
          />
        </div>
        <ControlledCheckbox
          label="Я согласен с политикой конфиденциальности"
          name="privacy"
          control={control}
        />{' '}
        {errors.privacy && <p className={s.errorMessage}>{errors.privacy.message}</p>}
        <div className="actions">
          <Button variant="outline" type="button" onClick={() => setProgress(prev => prev - 1)}>
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
