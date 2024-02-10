declare module 'styled-components' {
  export type Theme = typeof theme
  export interface DefaultTheme extends Theme {}
}

const theme = {
  colors: {
    background: '#F6F6F6',

    brandBlue: '#4070F4',
    brandGreen: '#2BD67B',
    brandBlack: '#0A2156',

    white: '#FFFFFF',
    gray10: '#E7E9ED',
    gray20: '#CED2DB',
    gray30: '#B6BCC9',
    gray40: '#9EA5B8',
    gray50: '#858FA6',
    gray60: '#6D7994',
    gray70: '#556282',
    gray80: '#3C4C70',
    gray90: '#24365E',
    gray100: '#0B1F4D',

    support10: '#4070F4',
    support20: '#0BB07B',
    support30: '#FFAD0D',
    support40: '#F03D3D',
    support50: '#3C4C70',
  },

  spacing: {
    xxs: '10px',
    xs: '20px',
    s: '30px',
    m: '60px',
    l: '80px',
    xl: '120px',
    xxl: '200px',
  },

  boxShadow: {
    s: '0 2px 4px 0 rgba(11, 31, 77, 0.08)',
    m: '0 4px 8px 0 rgba(11, 31, 77, 0.1)',
    l: '0 8px 16px 0 rgba(11, 31, 77, 0.12)',
    xl: '0 12px 24px 0 rgba(11, 31, 77, 0.14)',
    xxl: '0 16px 32px 0 rgba(11, 31, 77, 0.16)',
  },

  fontFamily: {
    circular: 'CircularStd',
  },

  fontSize: {
    header1: '40px',
  },
}

export default theme
