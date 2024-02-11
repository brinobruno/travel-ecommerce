'use client'

import { MessageCircleQuestion, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { CartDrawer } from '@/components/CartDrawer'
import { convertExchangeRate } from '@/utils/convertExchangeRate'

import {
  Container,
  Control,
  Divider,
  ExchangeRate,
  Nav,
  SignIn,
  UserArea,
} from './styles'

export function Header() {
  return (
    <Container>
      <Nav>
        <Image src="/assets/logo.svg" alt="logoipsum" width={136} height={30} />

        <Control>
          <ExchangeRate>
            <span>Cotação do dólar hoje: {convertExchangeRate()}</span>

            <Image
              src="/assets/flag-br.svg"
              alt="Bandeira nacional brasileira"
              width={30}
              height={21}
            />

            <Link href={'#'}>
              <MessageCircleQuestion />
            </Link>
          </ExchangeRate>

          <Divider />

          <UserArea>
            <SignIn>
              <User />
              <span>Entrar</span>
            </SignIn>

            <CartDrawer />
          </UserArea>
        </Control>
      </Nav>
    </Container>
  )
}
