'use client'

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
    brandSecondary: '#646981',
    brandLabelPrimary: '#00919E',

    labelPrimary: '#0045F3',
    labelSecondary: '#3570BF',
    labelTerciary: '#D9D9D9',

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

  layout: {
    full: '100%',
    container: '1320px',
  },

  spacing: {
    xxs: '10px',
    xs: '20px',
    s: '30px',
    m: '60px',
    l: '80px',
    xl: '120px',
    xxl: '200px',

    dashboardGap: '24px',
  },

  boxShadow: {
    s: '0 2px 4px 0 rgba(11, 31, 77, 0.08)',
    m: '0 4px 8px 0 rgba(11, 31, 77, 0.1)',
    l: '0 8px 16px 0 rgba(11, 31, 77, 0.12)',
    xl: '0 12px 24px 0 rgba(11, 31, 77, 0.14)',
    xxl: '0 16px 32px 0 rgba(11, 31, 77, 0.16)',
  },

  fontFamily: {
    primary: `'CircularStd', sans-serif`,
  },

  fontSize: {
    header1: '40px',
    header2: '24px',
    header3: '22px',

    paragraph1: '20px',
    paragraph2: '16px',
    paragraph3: '14px',
    paragraph4: '12px',
  },

  fontWeight: {
    bold: '700',
    medium: '600',
    book: '500',
  },

  lineHeight: {
    header1: '45px',
    header2: '30px',
    header3: '28px',

    paragraph1: '26px',
    paragraph2: '22px',
    paragraph3: '18px',
    paragraph4: '16px',
  },

  letterSpacing: {
    header1: '-2px',
    header2: '-1px',
    header3: '0',

    paragraph: '0',
  },
}

export default theme
