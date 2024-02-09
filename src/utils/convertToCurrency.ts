interface IConvertToCurrency {
  locale: string
  currency: string
  amount: number
}

export function convertToCurrency({
  locale,
  currency,
  amount,
}: IConvertToCurrency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currencyDisplay: 'narrowSymbol',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
    .format(amount)
    .split('\u00A0') // Remove space between currency sign and amount
}
