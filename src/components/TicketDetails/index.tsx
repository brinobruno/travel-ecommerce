import {
  Calendar,
  ChevronDown,
  Coffee,
  Home,
  MapPin,
  Ticket as TicketIcon,
  Undo2,
  User,
  Wifi,
} from 'lucide-react'
import Link from 'next/link'
import { toast, Toaster } from 'sonner'
import { useTheme } from 'styled-components'

import { addItemToCart } from '@/context/cart/actions'
import { useAppDispatch } from '@/context/store/storeHooks'
import { Ticket } from '@/entities'
import { isValidUrl } from '@/utils/checkValidUrl'
import { convertToCurrency } from '@/utils/convertToCurrency'

import { Button, ButtonSize, ButtonType } from '../Button'
import { RatingDisplay } from '../RatingDisplay'
import fallbackImage from './../../../public/assets/fallback-alt.svg'
import {
  Amenities,
  Container,
  Content,
  Details,
  Gallery,
  Header,
  HeaderWrapper,
  Info,
  Location,
  Pricing,
  PricingItem,
  Separator,
  Summary,
  Total,
} from './styles'

export function TicketDetails({
  id,
  name,
  location,
  image,
  description,
  price,
  rating,
  createdAt,
  updatedAt,
}: Ticket) {
  const theme = useTheme()
  const dispatch = useAppDispatch()

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        ticket: {
          id,
          name,
          location,
          image,
          description,
          price,
          rating,
          createdAt,
          updatedAt,
        },
        quantity: 1,
        subTotal: price.discount,
      }),
    )

    toast.success('O ingresso foi adicionado ao carrinho')
  }

  const hasImage = isValidUrl(image ?? '')

  return (
    <Container>
      <Header>
        <Link href="/">
          <Undo2 color="#323232" size={16} />
        </Link>

        <HeaderWrapper>
          <h2>{name}</h2>
          <div>
            <MapPin color={theme.colors.brandBlue} size={16} />{' '}
            <span>{location}</span>
          </div>
        </HeaderWrapper>
      </Header>

      <Gallery
        style={{
          backgroundImage: `url(${hasImage ? image : fallbackImage.src})`,
        }}
      >
        <Button size={ButtonSize.medium} type={ButtonType.secondary}>
          Visualizar mais fotos
        </Button>
      </Gallery>

      <Content>
        <Details>
          <RatingDisplay
            value={rating.value}
            reviewsCount={rating.reviewsCount}
          />

          <Amenities>
            <div>
              <TicketIcon size={18} />
              <span>Passagem Aérea</span>
            </div>

            <div>
              <Wifi size={18} />
              <span>Wi-fi</span>
            </div>

            <div>
              <Coffee size={18} />
              <span>Café de manhã</span>
            </div>

            <div>
              <Home size={18} />
              <span>Quarto</span>
            </div>
          </Amenities>

          <Info>
            <h3>Sobre o ingresso selecionado:</h3>
            <p>{description}</p>
          </Info>

          <Location>
            <h3>Localização</h3>

            <iframe
              title={`Map directions for ${location}`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.14245968247!2d-122.43759999999999!3d37.75769999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbr!4v1707917358133!5m2!1sen!2sbr"
              width="900"
              height="340"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Location>
        </Details>

        <Pricing>
          <PricingItem>
            <div>
              <Calendar size={18} color={theme.colors.brandBlue} />
              <div>
                <strong>Data do ingresso</strong>
                <span>22/12/2022</span>
              </div>
            </div>
            <ChevronDown size={14} />
          </PricingItem>

          <Separator />

          <PricingItem>
            <div>
              <User size={18} color={theme.colors.brandBlue} />
              <div>
                <strong>Ingressos</strong>
                <span>01 Ingressos</span>
              </div>
            </div>
            <ChevronDown size={14} />
          </PricingItem>

          <Separator />

          <Summary>
            <span>01 ingresso</span>
            <span>
              {convertToCurrency({
                locale: 'pt-BR',
                currency: 'BRL',
                amount: price.discount,
              })}
            </span>
          </Summary>

          <Separator />

          <Total>
            <div>
              <span>Valor total</span>
              <h2>
                {' '}
                {convertToCurrency({
                  locale: 'pt-BR',
                  currency: 'BRL',
                  amount: price.discount,
                })}
              </h2>
            </div>

            <Button
              size={ButtonSize.medium}
              type={ButtonType.primary}
              onClick={() => handleAddToCart()}
            >
              Comprar Ingresso
            </Button>
          </Total>
        </Pricing>
      </Content>

      <Toaster richColors />
    </Container>
  )
}
