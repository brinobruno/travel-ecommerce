'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { Container, NavNumbers } from './styles'

interface PaginationProps {
  pages: number
  active?: number
  totalItems: number
}

export default function Pagination({
  pages,
  active,
  totalItems,
}: PaginationProps) {
  const pageNumbers = Array.from({ length: pages }, (_, index) => index + 1)

  const hasPrevious = active && active !== 1
  const hasNext = active && active !== pages

  return (
    <Container>
      <span>{totalItems} resultados</span>

      <Link
        href={hasPrevious ? `/${active - 1}` : ''}
        className={!hasPrevious ? 'disabled' : ''}
      >
        <ChevronLeft size={14} />
      </Link>

      <NavNumbers>
        {pageNumbers.map((pageNumber) => (
          <Link
            className={pageNumber === active ? 'active' : ''}
            key={pageNumber}
            href={`/${pageNumber}`}
          >
            {pageNumber}
          </Link>
        ))}
      </NavNumbers>

      <Link
        href={hasNext ? `/${active + 1}` : ''}
        className={!hasNext ? 'disabled' : ''}
      >
        <ChevronRight size={14} />
      </Link>
    </Container>
  )
}
