import { z } from 'zod'

export const formSchema = z.object({
  name: z.string().nonempty('Введите имя'),
  phone: z.string().nonempty('Введите номер телефона'),
  privacy: z
    .boolean()
    .default(true)
    .refine(value => value === true, {
      message: 'Вы должны согласиться с политикой конфиденциальности',
      path: ['privacy'],
    }),
})

export type FormValues = z.infer<typeof formSchema>
