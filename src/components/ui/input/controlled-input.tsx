import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { Input, InputProps } from './input.tsx'

export type ControlledTextFieldProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>
  control: Control<TFieldValues>
} & InputProps

export const ControlledInput = <TFieldValues extends FieldValues>(
  props: ControlledTextFieldProps<TFieldValues>
) => {
  const { field } = useController({
    name: props.name,
    control: props.control,
  })

  return <Input {...props} {...field} id={props.name} />
}
