'use client'

declare module 'styled-components' {
  export type Theme = typeof theme
  export interface DefaultTheme extends Theme {}
}

const theme = {
  colors: {
    background: 'rgb(246, 246, 246)',

    brandBlue: 'rgb(64, 112, 244)',
    brandGreen: 'rgb(43, 214, 123)',
    brandBlack: 'rgb(10, 33, 86)',
    brandSecondary: 'rgb(100, 105, 129)',
    brandLabelPrimary: 'rgb(0, 145, 158)',

    labelPrimary: 'rgb(0, 69, 243)',
    labelSecondary: 'rgb(53, 112, 191)',
    labelTerciary: 'rgb(217, 217, 217)',

    white: 'rgb(255, 255, 255)',

    gray10: 'rgb(231, 233, 237)',
    gray20: 'rgb(206, 210, 219)',
    gray30: 'rgb(182, 188, 201)',
    gray40: 'rgb(158, 165, 184)',
    gray50: 'rgb(133, 143, 166)',
    gray60: 'rgb(109, 121, 148)',
    gray70: 'rgb(85, 98, 130)',
    gray80: 'rgb(60, 76, 112)',
    gray90: 'rgb(36, 54, 94)',
    gray100: 'rgb(11, 31, 77)',

    support10: 'rgb(64, 112, 244)',
    support20: 'rgb(11, 176, 123)',
    support30: 'rgb(255, 173, 13)',
    support40: 'rgb(240, 61, 61)',
    support50: 'rgb(60, 76, 112)',
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
