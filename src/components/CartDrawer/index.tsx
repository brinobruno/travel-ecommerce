'use client'

import { ShoppingCart } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'styled-components'

import { addItemToCart, removeItemFromCart } from '@/context/cart/actions'
import { useAppDispatch, useAppSelector } from '@/context/store/storeHooks'
import { CartItem } from '@/entities'

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

  const ticketToAdd: CartItem = {
    ticket: {
      id: '1',
      name: 'Test',
      description: 'a',
      image: '',
      rating: {
        value: 5,
        reviewsCount: 10,
      },
      location: '',
      updatedAt: new Date(),
      createdAt: new Date(),
      price: {
        full: 2000,
        discount: 1900,
      },
    },
    quantity: 2,
    subTotal: 2000,
  }

  const handleAddToCart = () => {
    dispatch(addItemToCart(ticketToAdd))
  }

  const handleRemoveFromCart = (itemId: string) => {
    dispatch(removeItemFromCart(itemId))
  }

  return (
    <>
      <button onClick={() => handleAddToCart()}>add item</button>
      <button onClick={() => handleRemoveFromCart('1')}>rm item</button>

      <p>{itemsInCart.length}</p>

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
    </>
  )
}
