import { number, object, string } from 'yup'

export const schema = object({
  mortgageAmount: number()
    .transform((value, originalValue) =>
      originalValue === '' ? undefined : value
    )
    .required('This is required'),
  mortgageTerm: number()
    .transform((value, originalValue) =>
      originalValue === '' ? undefined : value
    )
    .required('This is required'),
  interestRate: number()
    .transform((value, originalValue) =>
      originalValue === '' ? undefined : value
    )
    .required('This is required'),
  mortgageType: string().required('This is required'),
})
