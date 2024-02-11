import { ShoppingCart } from 'lucide-react'
import { useTheme } from 'styled-components'

import { CartAmount, Container } from './styles'

export function CartDrawer() {
  const theme = useTheme()

  return (
    <Container>
      <ShoppingCart color={theme.colors.white} fill={theme.colors.white} />

      <CartAmount>
        <span>0 </span>
      </CartAmount>
    </Container>
  )
}
