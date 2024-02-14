import { ArrowRight, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'styled-components'

import { Price, Rating } from '@/entities'
import { convertToCurrency } from '@/utils/convertToCurrency'

import {
  Container,
  Content,
  ImageContainer,
  LocationWrapper,
  PriceWrapper,
  ReviewWrapper,
  // Separator,
} from './styles'

interface TicketListItemProps {
  name: string
  image?: string
  location: string
  price: Price
  rating: Rating
}

export function TicketListItem({
  name,
  image,
  location,
  price,
  rating,
}: TicketListItemProps) {
  const theme = useTheme()

  return (
    <Container>
      <ImageContainer>
        <Image
          src={image ?? '/fallback.svg'}
          alt={name}
          width={213}
          height={232}
          fetchPriority="high"
        />
      </ImageContainer>

      <Content>
        <div>
          <h3>{name}</h3>
          <LocationWrapper>
            <MapPin size={14} color={theme.colors.brandBlue} />
            <p>{location}</p>
          </LocationWrapper>

          <ReviewWrapper>
            <div>
              <span>{rating.value}</span>
            </div>
            <strong>Excellent</strong>
            <span>({rating.reviewsCount} Reviews)</span>
          </ReviewWrapper>
        </div>

        {/* <Separator /> */}

        <PriceWrapper>
          <p>
            de{' '}
            {convertToCurrency({
              locale: 'pt-BR',
              currency: 'BRL',
              amount: price.full,
            })}{' '}
            por
          </p>
          <span>
            R${' '}
            <h2>
              {convertToCurrency({
                locale: 'pt-BR',
                amount: price.discount,
              })}
            </h2>
          </span>

          <Link href="/">
            Saber mais <ArrowRight size={10} color={theme.colors.white} />
          </Link>
        </PriceWrapper>
      </Content>
    </Container>
  )
}
