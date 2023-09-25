import { Dispatch, memo, SetStateAction, useEffect } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { SubmitHandler, useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'

import s from './namePhoneCard.module.scss'

import {
  Button,
  Card,
  ControlledInput,
  ControlledCheckbox,
  ProgressIndicator,
} from '@/components/ui'
import { LoaderIcon } from '@/components/ui/icons/loader-icon.tsx'
import { FormDataValues, formSchema, FormValues } from '@/lib/validation.ts'

interface NamePhoneCardProps {
  onSubmit: SubmitHandler<FormValues>
  isFetching?: boolean
  setProgress: Dispatch<SetStateAction<number>>
  countryCode?: string
  formDataValues: FormDataValues
  setFormDataValues: Dispatch<SetStateAction<FormDataValues>>
}
const getOnlyDigits = (str: string) => {
  return str.replace(/\D/g, '')
}

export const NamePhoneCard = memo(
  ({
    onSubmit,
    isFetching,
    setProgress,
    countryCode,
    formDataValues,
    setFormDataValues,
  }: NamePhoneCardProps) => {
    // const [phoneCode, setCountryCode] = useState<string>('')
    const RU = countryCode === 'RU'
    const BY = countryCode === 'BY'

    const {
      handleSubmit,
      control,
      formState: { errors },
      watch,
      register,
    } = useForm<FormValues>({
      mode: 'all',
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: formDataValues.name,
        phone: formDataValues.phone,
        privacy: formDataValues.privacy,
      },
    })

    const { phone, name, privacy } = watch()
    const disabledSubmitBtn =
      (RU && getOnlyDigits(phone).length < 11) ||
      (BY && getOnlyDigits(phone).length < 12) ||
      !privacy ||
      !name ||
      isFetching

    const placeholder = clsx(
      RU && '+7 (_ _ _) _ _ _-_ _-_ _',
      BY && '+375 (_ _) _ _ _ - _ _ - _ _',
      countryCode === '' && '+'
    )
    const mask = clsx(
      RU && '+7 (999) 999-99-99',
      BY && '+375 (99) 999-99-99',
      countryCode === '' && '+999999999999'
    )

    useEffect(() => {
      setTimeout(() => {
        setFormDataValues(prev => ({ ...prev, phone: getOnlyDigits(phone), name, privacy }))
      }, 200)
    }, [phone, name, privacy, setFormDataValues])

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
            disabled={isFetching}
          />
          <div className={s.phone}>
            <div className="title-wrapper">
              <h3 className="title">Телефон</h3>
              {errors.phone && <p className={s.errorMessage}>{errors.phone.message}</p>}
            </div>
            <InputMask
              className={s.inputMask}
              mask={mask}
              type="tel"
              placeholder={placeholder}
              {...register('phone')}
            />
          </div>
          <div className={s.checkbox}>
            <ControlledCheckbox
              label="Я согласен с политикой конфиденциальности"
              name="privacy"
              control={control}
            />{' '}
            {errors.privacy && <p className={s.errorPrivacy}>{errors.privacy.message}</p>}
          </div>
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
)
