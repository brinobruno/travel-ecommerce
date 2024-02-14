'use client'

import { ShoppingCart } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'styled-components'

import { useAppSelector } from '@/context/store/storeHooks'

import { Button, ButtonSize, ButtonType } from '../Button'
import { CartItem } from '../CartItem'
import { Separator } from '../TicketDetails/styles'
import { CartAmount, CartWrapper, Container, Summary } from './styles'

export function CartDrawer() {
  const theme = useTheme()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const cartElement = useRef<HTMLDivElement>(null)

  const itemsInCart = useAppSelector((state) => state.cart.itemsInCart)

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
        <span>{itemsInCart.length}</span>
      </CartAmount>

      <div
        className="cart-modal"
        ref={cartElement}
        onClick={(e) => {
          e.stopPropagation() // Prevent cart closing if clicked inside
        }}
      >
        <CartWrapper>
          <strong>Ingressos:</strong>

          {itemsInCart.map((cartItem) => (
            <>
              <CartItem key={cartItem.ticket.id} cartItem={cartItem} />
              <Separator />
            </>
          ))}

          <Separator />

          <Summary>
            <div>
              <span>Valor total</span>
              <strong>1400</strong>
            </div>

            <Button size={ButtonSize.large} type={ButtonType.primary}>
              Ir para o checkout
            </Button>
          </Summary>
        </CartWrapper>
      </div>
    </Container>
  )
}
