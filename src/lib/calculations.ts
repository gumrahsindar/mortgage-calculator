export const calculateRepaymentMortgage = (
  amount: number,
  rate: number,
  term: number
): number => {
  const monthlyRate = rate / 100 / 12
  const numberOfPayments = term * 12
  return (
    (amount * (monthlyRate * (1 + monthlyRate) ** numberOfPayments)) /
    ((1 + monthlyRate) ** numberOfPayments - 1)
  )
}

export const calculateInterestOnlyMortgage = (
  amount: number,
  rate: number
): number => {
  const monthlyRate = rate / 100 / 12
  return amount * monthlyRate
}
