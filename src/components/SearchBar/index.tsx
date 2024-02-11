'use client'

import { MapPin, Search } from 'lucide-react'
import { ChangeEvent, FormEvent } from 'react'
import { useTheme } from 'styled-components'

import { Container, Form, Input, SubmitButton } from './styles'

interface SearchBarProps {
  value?: string | number
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void
}

export function SearchBar({ value, onChange, onSubmit }: SearchBarProps) {
  const theme = useTheme()

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <MapPin color={theme.colors.brandBlue} />
        <Input
          name="search"
          value={value}
          placeholder="Busque por atração"
          onChange={onChange}
        />

        <SubmitButton type="submit">
          <Search color={theme.colors.gray20} />
        </SubmitButton>
      </Form>
    </Container>
  )
}
