interface IConvertToCurrency {
  locale: string
  currency?: string
  amount: number
}

export function convertToCurrency({
  locale, // pt-BR
  currency, // BRL
  amount,
}: IConvertToCurrency) {
  return new Intl.NumberFormat(locale, {
    style: currency ? 'currency' : 'decimal',
    currencyDisplay: 'narrowSymbol',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}
