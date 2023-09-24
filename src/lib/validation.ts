import { z } from 'zod'

import { SelectOption } from '@/lib/data.ts'

export const formSchema = z.object({
  name: z.string().nonempty('Введите имя'),
  phone: z.string().nonempty('Введите номер телефона'),
  privacy: z
    .boolean()
    .default(true)
    .refine(value => value === true, {
      message: 'Необходимо согласие с политикой конфиденциальности',
      path: ['privacy'],
    }),
})

export type FormValues = z.infer<typeof formSchema>

export type FormDataValues = {
  age: number
  gender: string
  city: SelectOption
  message: string
}
