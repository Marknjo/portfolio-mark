export enum LargeBorderRadiusSize {
  XL = 12,
  LG = 7,
  MD = 5,
  SM = 3,
  XSM = 1.5,
}

export const sizes = {
  xl: ['6', '8', '10', '12', '16'],
  'xl-sm': ['0', '10', '12', '16'],
  lg: ['4', '6', '8', '10', '12'],
  md: ['3', '4', '6', '8'],
  sm: ['3', '4', '6'],
  xs: { sm: '2', lg: '4' },
  xl_TB: [`${24}px`, `${32}px`, `${40 + 48}px`, `${48 + 56}px`, `${64 + 58}px`], // suitable for hero section that neighbors TopNav but on small screen goes below another component
  xl_TT: [
    `${24 + 40}px`,
    `${32 + 36}px`,
    `${40 + 48}px`,
    `${48 + 56}px`,
    `${64 + 58}px`,
  ], // suitable for hero section that neighbors TopNav but on small screen still remains on top of the screen - XL - x-tra-large, TT - top
  nav_pd: ['40px', '36px', '48px', '56px', '58px'], // fixes top nav padding top
}

export const fontSizes = {
  lg: ['2xl', '4xl', '5xl', '6xl', '7xl'],
  md: { base: 'xl', md: '2xl', xl: '3xl' },
}

export const subHeadingsBr = {
  withBr: {
    text: {
      base: 'content-start / span 10',
      md: 'content-start / span 7',
      lg: 'content-start / span 6',
    },
    bg: {
      base: 'outer-left-start / span 11',
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

export const largeBorderBrP = {
  base: `${LargeBorderRadiusSize.SM}rem`,
  lg: `${LargeBorderRadiusSize.MD}rem`,
}
