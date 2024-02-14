import '@testing-library/jest-dom'

import { screen } from '@testing-library/react'

import { render } from '@/config/test-utils'
import theme from '@/styles/theme'

import { Button, ButtonSize, ButtonType } from '.'

describe('Button', () => {
  it('should render component with correct size and type modifiers', () => {
    render(
      <Button type={ButtonType.primary} size={ButtonSize.large}>
        Test Text
      </Button>,
      null,
    )

    const sut = screen.getByRole('button')

    const stylesReceived = window.getComputedStyle(sut)
    const expectedBackground = theme.colors.brandBlue
    const expectedHeight = '58px'

    expect(stylesReceived.backgroundColor).toBe(expectedBackground)
    expect(stylesReceived.height).toBe(expectedHeight)
  })

  it('should call onClick handler when clicked', () => {
    const mockOnClick = vi.fn()

    render(
      <Button
        type={ButtonType.primary}
        size={ButtonSize.large}
        onClick={mockOnClick}
      >
        Test Text
      </Button>,
      null,
    )

    const sut = screen.getByRole('button')

    sut.click()
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
