import { Trash } from 'lucide-react'
import Image from 'next/image'
import { toast, Toaster } from 'sonner'
import { useTheme } from 'styled-components'

import { removeItemFromCart } from '@/context/cart/actions'
import { useAppDispatch } from '@/context/store/storeHooks'
import type { CartItem } from '@/entities'
import { isValidUrl } from '@/utils/checkValidUrl'
import { convertToCurrency } from '@/utils/convertToCurrency'

import fallbackImage from './../../../public/assets/fallback-alt.svg'
import {
  Container,
  Header,
  ImageContainer,
  Info,
  InfoDetails,
  InfoWrapper,
} from './styles'

interface CartItemProps {
  cartItem: CartItem
}

export function CartItem({ cartItem }: CartItemProps) {
  const theme = useTheme()
  const dispatch = useAppDispatch()

  const handleRemoveFromCart = (itemId: string) => {
    dispatch(removeItemFromCart(itemId))
    toast.info('O ingresso foi removido do seu carrinho')
  }

  const hasImage = isValidUrl(cartItem.ticket.image as string)
  const calculatedItemSubtotal =
    cartItem.ticket.price.discount * cartItem.quantity

  const formattedItemSubtotal = convertToCurrency({
    locale: 'pt-BR',
    currency: 'BRL',
    amount: calculatedItemSubtotal,
  })

  const formattedItemPrice = convertToCurrency({
    locale: 'pt-BR',
    currency: 'BRL',
    amount: cartItem.ticket.price.discount,
  })

  return (
    <Container>
      <ImageContainer>
        <Image
          src={hasImage ? cartItem.ticket.image : fallbackImage}
          alt={cartItem.ticket.description}
          width={60}
          height={60}
        />
      </ImageContainer>

      <Info>
        <Header>
          <InfoDetails>
            <strong>{cartItem.ticket.name} - 15/09/2022</strong>
            <br />
            <span>
              {cartItem.quantity} Ingresso(s): {formattedItemPrice}
            </span>

            <div>
              <InfoWrapper>
                <span>Qtd {cartItem.quantity}</span>
                <span>{formattedItemSubtotal}</span>
              </InfoWrapper>
              <InfoWrapper>
                <strong>Subtotal: {formattedItemSubtotal}</strong>
              </InfoWrapper>
            </div>
          </InfoDetails>

          <div>
            <button
              type="button"
              onClick={() => handleRemoveFromCart(cartItem.ticket.id)}
            >
              <Trash color={theme.colors.brandSecondary} size={16} />
            </button>
          </div>
        </Header>
      </Info>

      <Toaster richColors />
    </Container>
  )
}
