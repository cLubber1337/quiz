export type SelectOption = {
  value: number
  title: string
}
export type RadioOption = {
  value: string
  title: string
}

export const selectOptions: SelectOption[] = [
  {
    value: 1,
    title: 'Mинск',
  },
  {
    value: 2,
    title: 'Гродно',
  },
  {
    value: 3,
    title: 'Могилев',
  },
  {
    value: 4,
    title: 'Витебск',
  },
  {
    value: 5,
    title: 'Гомель',
  },
  {
    value: 6,
    title: 'Брест',
  },
]

export const radioOptions: RadioOption[] = [
  { value: 'male', title: 'Мужской' },
  { value: 'female', title: 'Женский' },
]
