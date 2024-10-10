import { InferType, number, object, string } from 'yup'

export const schema = object({
  mortgageAmount: number()
    .transform((value, originalValue) =>
      originalValue === '' ? undefined : value
    )
    .required('This field is required'),
  mortgageTerm: number()
    .transform((value, originalValue) =>
      originalValue === '' ? undefined : value
    )
    .required('This field is required'),
  interestRate: number()
    .transform((value, originalValue) =>
      originalValue === '' ? undefined : value
    )
    .required('This field is required'),
  mortgageType: string().required('This field is required'),
})

export type FormSchema = InferType<typeof schema>
