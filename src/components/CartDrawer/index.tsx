'use client'

import { ShoppingCart } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'styled-components'

import { CartAmount, Container } from './styles'

export function CartDrawer() {
  const theme = useTheme()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const cartElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkIfClickedOutside = (e: Event) => {
      if (
        cartElement.current &&
        !cartElement.current.contains(e.target as Node)
      ) {
        setIsCartOpen(false)
      }
    }

    document.addEventListener('click', checkIfClickedOutside)
    return () => {
      document.removeEventListener('click', checkIfClickedOutside)
    }
  }, [isCartOpen])

  const handleContainerClick = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <Container onClick={handleContainerClick} isOpen={isCartOpen}>
      <ShoppingCart color={theme.colors.white} fill={theme.colors.white} />

      <CartAmount>
        <span>0 </span>
      </CartAmount>

      <div
        className="cart-modal"
        ref={cartElement}
        onClick={(e) => {
          e.stopPropagation() // Prevent cart closing if clicked inside
        }}
      >
        <span>Opened</span>
      </div>
    </Container>
  )
}
