import { FormDataValues, FormValues } from '@/lib/validation.ts'

export const fetchFormData = (formData: FormValues, userData: FormDataValues): Promise<string> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (
        formData.name === '' ||
        !formData.privacy ||
        formData.phone === '' ||
        !userData.age ||
        userData.gender === ''
      ) {
        reject('Ошибка валидации формы перезагрузите страницу')
      }
      resolve('Всё хорошо')
    }, 2000)
  )
