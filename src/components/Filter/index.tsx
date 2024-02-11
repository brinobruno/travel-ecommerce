'use client'

import { Building, Home, Hotel, Star } from 'lucide-react'
import { useTheme } from 'styled-components'

import { Button, ButtonSize, ButtonType } from '../Button'
import {
  Amenities,
  CheckBox,
  Container,
  FilterItem,
  FilterItemWrap,
  Header,
  PriceRange,
  Progress,
  ProgressBar,
  PropertyTier,
  PropertyTypes,
  Review,
  ReviewScore,
  Separator,
} from './styles'

export function Filter() {
  const theme = useTheme()

  return (
    <Container>
      <Header>
        <h2>Filtro</h2>
        <span>Limpar todos os filtros</span>
      </Header>

      <Separator />

      <FilterItemWrap>
        <strong>Preço</strong>

        <PriceRange>
          <Button type={ButtonType.primary} size={ButtonSize.small}>
            R$ 10,00 - R$ 390,00
          </Button>
          <Button type={ButtonType.outline} size={ButtonSize.small}>
            R$ 10,00 - R$ 390,00
          </Button>
          <Button type={ButtonType.outline} size={ButtonSize.small}>
            R$ 10,00 - R$ 390,00
          </Button>
          <Button type={ButtonType.outline} size={ButtonSize.small}>
            R$ 10,00 - R$ 390,00
          </Button>
        </PriceRange>
      </FilterItemWrap>

      <Separator />

      <FilterItemWrap>
        <strong>Rate</strong>

        <PropertyTier>
          <button type="button">
            {Array(5).fill(
              <Star
                fill={theme.colors.support30}
                color={theme.colors.support30}
              />,
            )}
            <span>(134)</span>
          </button>
          <button type="button">
            {Array(4).fill(
              <Star
                fill={theme.colors.support30}
                color={theme.colors.support30}
              />,
            )}
            <span>(134)</span>
          </button>
          <button type="button">
            {Array(3).fill(
              <Star
                fill={theme.colors.support30}
                color={theme.colors.support30}
              />,
            )}
            <span>(72)</span>
          </button>
          <button type="button">
            {Array(2).fill(
              <Star
                fill={theme.colors.support30}
                color={theme.colors.support30}
              />,
            )}
            <span>(75)</span>
          </button>
          <button type="button">
            {Array(1).fill(
              <Star
                fill={theme.colors.support30}
                color={theme.colors.support30}
              />,
            )}
            <span>(7)</span>
          </button>
        </PropertyTier>
      </FilterItemWrap>

      <Separator />

      <FilterItem>
        <strong>Comodidades</strong>

        <Amenities>
          <CheckBox>
            <div></div>
            <span>Wi-fi</span>
          </CheckBox>

          <CheckBox>
            <div></div>
            <span>Cozinha</span>
          </CheckBox>

          <CheckBox>
            <div></div>
            <span>Máquina de lavar</span>
          </CheckBox>

          <CheckBox>
            <div></div>
            <span>Ar-condicionado</span>
          </CheckBox>

          <CheckBox>
            <div></div>
            <span>Secadora</span>
          </CheckBox>
        </Amenities>
      </FilterItem>

      <Separator />

      <PropertyTypes>
        <strong>Comodidades</strong>

        <div className="active">
          <Home size={18} />
          <span>Casa</span>
        </div>

        <div>
          <Building size={18} />
          <span>Apartamento</span>
        </div>

        <div>
          <Hotel size={18} />
          <span>Hotel</span>
        </div>
      </PropertyTypes>

      <Separator />

      <ReviewScore>
        <strong>Review Score</strong>

        <Review>
          <ProgressBar>
            <Progress percentage={90}>
              <span>9+</span>
            </Progress>
          </ProgressBar>

          <span>Excelente (543)</span>
        </Review>

        <Review>
          <ProgressBar>
            <Progress percentage={75}>
              <span>8+</span>
            </Progress>
          </ProgressBar>

          <span>Muito bom (543)</span>
        </Review>

        <Review>
          <ProgressBar>
            <Progress percentage={60}>
              <span>7+</span>
            </Progress>
          </ProgressBar>

          <span>Bom (543)</span>
        </Review>

        <Review>
          <ProgressBar>
            <Progress percentage={50}>
              <span>6+</span>
            </Progress>
          </ProgressBar>

          <span>Ruim (543)</span>
        </Review>

        <Review>
          <ProgressBar>
            <Progress percentage={10}>
              <span className="hidden">dummytext</span>
            </Progress>
          </ProgressBar>

          <span>Péssimo (14)</span>
        </Review>
      </ReviewScore>

      <Separator />
    </Container>
  )
}
