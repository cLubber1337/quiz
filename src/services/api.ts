import { FormValues } from '@/lib/validation.ts'

export const fetchFormData = (formData: FormValues): Promise<string> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (formData.name === '' || !formData.privacy || formData.phone === '') {
        reject('Ошибка валидации формы перезагрузите страницу')
      }
      resolve('Всё хорошо')
    }, 2000)
  )
