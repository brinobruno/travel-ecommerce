'use client'

import { fetchCurrencyExchangeRate } from '../services/currencyExchangeRate'
import { convertToCurrency } from './convertToCurrency'

export const convertExchangeRate = async () => {
  const rate = await fetchCurrencyExchangeRate({ currency: 'BRL' })

  return convertToCurrency({
    locale: 'pt-BR',
    currency: 'BRL',
    amount: rate,
  })
}
