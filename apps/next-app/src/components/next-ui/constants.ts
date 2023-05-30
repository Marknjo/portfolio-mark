export const sizes = {
  xl: ['6', '8', '10', '12', '16'],
  'xl-sm': ['0', '10', '12', '16'],
  lg: ['4', '6', '8', '10', '12'],
  md: ['3', '4', '6', '8'],
  sm: ['3', '4', '6'],
  xs: { sm: '2', lg: '4' },
}

export const fontSizes = {
  lg: ['2xl', '4xl', '5xl', '6xl', '7xl'],
}

export const subHeadingsBr = {
  withBr: {
    text: {
      base: 'content-start / span 10',
      md: 'content-start / span 7',
      lg: 'content-start / span 6',
    },
    bg: {
      base: 'outer-left-start / outer-right-end',
      sm: 'outer-left-start / span 10',
      md: 'outer-left-start / span 8',
      lg: 'outer-left-start / span 7',
    },
  },
  noBr: {
    text: {
      base: 'content-start / span 10',
      md: 'content-start / span 7',
      lg: 'content-start / span 6',
    },
    bg: {
      base: 'outer-left-start / span 11',
      md: 'outer-left-start / span 8',
      lg: 'outer-left-start / span 7',
    },
  },
}
