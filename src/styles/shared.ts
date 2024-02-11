import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  align-items: center;
`

export const FlexCenter = styled(Flex)`
  justify-content: center;
`

export const FlexBetween = styled(Flex)`
  flex-direction: space-between;
  align-items: flex-start;
`

export const Card = styled(Flex)`
  flex-direction: column;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.s};
`
