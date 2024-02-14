'use client'

import { ShoppingCart } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'styled-components'

import { CartItem } from '@/components/CartItem'
import { Separator } from '@/components/TicketDetails/styles'
import { useAppSelector } from '@/context/store/storeHooks'
import { calculateDiscountedValue } from '@/utils/calculateDiscount'
import { constants } from '@/utils/constants'
import { convertToCurrency } from '@/utils/convertToCurrency'

import { Button, ButtonSize, ButtonType } from '../Button'
import { CartAmount, CartWrapper, Container, Summary, Values } from './styles'

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

  const calculatedSubtotal = itemsInCart.reduce(
    (accumulator, cartItem) => accumulator + cartItem.subTotal,
    0,
  )
  const calculatedSubtotalWithDiscount = calculateDiscountedValue(
    calculatedSubtotal,
    constants.DISCOUNT_PERCENTAGE,
  )

  const formattedSubtotal = convertToCurrency({
    locale: 'pt-BR',
    currency: 'BRL',
    amount: calculatedSubtotal,
  })
  const formattedSubtotalWithDiscount = convertToCurrency({
    locale: 'pt-BR',
    currency: 'BRL',
    amount: calculatedSubtotalWithDiscount,
  })

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
          {itemsInCart.length > 0 ? (
            <>
              <strong>Ingressos:</strong>

              {itemsInCart.map((cartItem) => (
                <>
                  <CartItem key={cartItem.ticket.id} cartItem={cartItem} />
                  <Separator />
                </>
              ))}

              <Summary>
                <Values>
                  <div>
                    <span>Ingressos</span>
                    <span>{formattedSubtotal}</span>
                  </div>

                  <div>
                    <strong>Subtotal</strong>
                    <strong>{formattedSubtotal}</strong>
                  </div>

                  <div>
                    <p>
                      1X de {formattedSubtotal} com desconto de
                      <span className="discount"> (7%)</span>
                    </p>
                    <strong className="discount">{`-${formattedSubtotalWithDiscount}`}</strong>
                  </div>

                  <div>
                    <span>10X Sem juros de {formattedSubtotal}</span>
                    <span>{formattedSubtotal}</span>
                  </div>
                </Values>

                <Separator />

                <Values>
                  <div>
                    <span>Valor total</span>
                    <span className="highlight">{formattedSubtotal}</span>
                  </div>
                </Values>

                <Button size={ButtonSize.large} type={ButtonType.primary}>
                  Ir para o checkout
                </Button>
              </Summary>
            </>
          ) : (
            <div>
              <h3>Você não possui ingressos no seu carrinho.</h3>
              <span>Adicione um ingresso para visualiza-lo aqui</span>
            </div>
          )}
        </CartWrapper>
      </div>
    </Container>
  )
}
