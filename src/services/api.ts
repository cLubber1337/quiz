import { FormDataValues } from '@/lib/validation.ts'

export const fetchFormData = (userData: FormDataValues): Promise<string> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (
        userData.name === '' ||
        !userData.privacy ||
        userData.phone === '' ||
        !userData.age ||
        userData.gender === ''
      ) {
        reject('Ошибка валидации формы перезагрузите страницу')
      }
      resolve('Всё хорошо')
    }, 2000)
  )
