'use client'

import { MapPin, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { useTheme } from 'styled-components'

import { Container, Form, Input, SubmitButton } from './styles'

export function SearchBar() {
  const theme = useTheme()

  const router = useRouter()
  const initialRender = useRef(true)

  const [text, setText] = useState('')

  const replaceValueUrl = `/1?search=${text}`

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!text) {
      router.replace('/1')
    } else {
      router.replace(replaceValueUrl)
      location.reload()
    }
  }

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
      return
    }

    if (!text) {
      router.replace('/1')
    } else {
      router.replace(replaceValueUrl)
    }
  }, [router])

  return (
    <Container>
      <Form onSubmit={handleSearchSubmit}>
        <MapPin color={theme.colors.brandBlue} />
        <Input
          name="search"
          placeholder="Busque por atração"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <SubmitButton type="submit">
          <Search color={theme.colors.gray20} />
        </SubmitButton>
      </Form>
    </Container>
  )
}
