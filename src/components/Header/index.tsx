'use client'

import { MessageCircleQuestion, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { CartDrawer } from '@/components/CartDrawer'

import { convertExchangeRate } from '../../utils/convertExchangeRate'
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
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    convertExchangeRate().then((data) => {
      setData(data)
      setLoading(false)
    })
  }, [])

  return (
    <Container>
      <Nav>
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="logoipsum"
            width={136}
            height={30}
          />
        </Link>

        <Control>
          <ExchangeRate>
            <span>Cotação do dólar hoje: {loading ? '...' : data}</span>

            <Image
              src="/assets/flag-br.svg"
              alt="Bandeira nacional brasileira"
              width={30}
              height={21}
            />

            <Link href="/">
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
