'use client'

import { ShoppingCart } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'styled-components'

import { removeItemFromCart } from '@/context/cart/actions'
import { useAppDispatch, useAppSelector } from '@/context/store/storeHooks'

import { CartAmount, Container } from './styles'

export function CartDrawer() {
  const theme = useTheme()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const cartElement = useRef<HTMLDivElement>(null)

  const itemsInCart = useAppSelector((state) => state.cart.itemsInCart)
  const dispatch = useAppDispatch()

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

  const handleRemoveFromCart = (itemId: string) => {
    dispatch(removeItemFromCart(itemId))
  }

  return (
    <>
      <button onClick={() => handleRemoveFromCart('1')}>rm item</button>

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
          <span>Opened</span>
        </div>
      </Container>
    </>
  )
}
