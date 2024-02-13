'use client'

import Link from 'next/link'

interface PaginationProps {
  pages: number
  active?: number
}

export default function Pagination({ pages, active }: PaginationProps) {
  const pageNumbers = Array.from({ length: pages }, (_, index) => index + 1)

  return (
    <div>
      {pageNumbers.map((pageNumber) => (
        <Link
          style={{ color: pageNumber === active ? 'red' : '' }}
          key={pageNumber}
          href={`/${pageNumber}`}
        >
          {pageNumber}
        </Link>
      ))}
    </div>
  )
}
