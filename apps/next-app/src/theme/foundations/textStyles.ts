import { ThemeOverride } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'

export const textStyles: ThemeOverride['textStyles'] = {
  'h-lg': {
    pt: sizes.lg,
    pb: sizes.lg,
  },
  'h1-lg': {
    fontSize: ['xl', '2xl', '4xl', '5xl', '7xl'],
    textTransform: 'uppercase',
    letterSpacing: ['2px', '4px'],
  },
  'h1-sub': {
    fontSize: ['lg', 'xl', '2xl', '3xl', '4xl'],
    textTransform: 'uppercase',
    fontWeight: 'light',
    letterSpacing: ['4px', '8px'],
    textAlign: 'center',
  },
  'h2-lg': {
    fontSize: ['xl', '2xl', '3xl', '4xl', '5xl'],
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  'h2-sub': {
    fontSize: ['md', 'lg', 'xl', '2xl'],
    textTransform: 'uppercase',
    fontWeight: 'light',
    letterSpacing: ['1px', '2px', '4px'],
    textAlign: 'center',
  },
  'h3-underlined': {
    fontSize: '',
  },
  'h4-sm': {
    fontSize: ['lg', 'xl', '2xl'],
  },
  'para-default': {
    fontSize: ['md', 'lg'],
  },
  caption: {},
}
