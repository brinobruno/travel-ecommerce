import { constants } from '../utils/constants'

export interface ExchangeRates {
  [currencyCode: string]: number
}

interface IFetchCurrencyExchangeRate {
  currency: string
}

export async function fetchCurrencyExchangeRate({
  currency = 'BRL',
}: IFetchCurrencyExchangeRate): Promise<number> {
  try {
    const response = await fetch(`https://open.er-api.com/v6/latest/USD`, {
      method: 'GET',
      next: {
        revalidate: constants.REVALIDATE_FREQUENCY,
      },
    })
    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`,
      )
    }

    const { rates }: { rates: ExchangeRates } = await response.json()
    if (!rates[currency]) {
      throw new Error(`Exchange rate for ${currency} not found`)
    }

    return rates[currency]
  } catch (error) {
    console.error('Error fetching the dollar exchange rate:', error)
    if (error instanceof Error && error.message.includes('not found')) {
      return 0 // Default rate when currency is not found
    }
    throw error
  }
}
