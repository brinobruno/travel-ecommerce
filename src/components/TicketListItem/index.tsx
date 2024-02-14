import { ArrowRight, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'styled-components'

import { RatingDisplay } from '@/components/RatingDisplay'
import { Price, Rating } from '@/entities'
import { isValidUrl } from '@/utils/checkValidUrl'
import { convertToCurrency } from '@/utils/convertToCurrency'

import fallbackImage from './../../../public/assets/fallback-alt.svg'
import {
  Container,
  Content,
  ImageContainer,
  LocationWrapper,
  PriceWrapper,
} from './styles'

interface TicketListItemProps {
  id: string
  name: string
  image?: string
  location: string
  price: Price
  rating: Rating
}

export function TicketListItem({
  id,
  name,
  image,
  location,
  price,
  rating,
}: TicketListItemProps) {
  const theme = useTheme()

  const hasImage = isValidUrl(image as string)

  return (
    <Container>
      <ImageContainer>
        <Image
          src={hasImage ? image : fallbackImage}
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

          <RatingDisplay
            value={rating.value}
            reviewsCount={rating.reviewsCount}
          />
        </div>

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

          <Link href={`/ticket/${id}`}>
            Saber mais <ArrowRight size={10} color={theme.colors.white} />
          </Link>
        </PriceWrapper>
      </Content>
    </Container>
  )
}
