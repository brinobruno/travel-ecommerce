export function calculateDiscountedValue(
  amount: number,
  discountPercentage: number,
) {
  const discountValue = (amount * discountPercentage) / 100
  return Math.abs(discountValue)
}
