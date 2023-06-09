import { ThemeOverride } from '@chakra-ui/react'

function scrollBarsStyles(selector: string, color: string) {
  return {
    [`${selector}::-webkit-scrollbar`]: {
      width: '10px',
    },

    [`${selector}::-webkit-scrollbar-track`]: {
      boxShadow: 'lg',
      borderRadius: '8px',
      bg: `${color}.200`,
      border: `2px solid ${color}.50`,
    },

    [`${selector}::-webkit-scrollbar-thumb`]: {
      borderRadius: '8px',
      bg: `${color}.500`,
    },
  }
}

export const styles: ThemeOverride['styles'] = {
  global: {
    html: {
      scrollBehavior: 'smooth',
    },
    body: {
      bg: 'orange.50',
    },
    '::-moz-selection': {
      color: 'orange.50',
      backgroundColor: 'orange.500',
    },
    '::selection': {
      color: 'orange.50',
      backgroundColor: 'orange.500',
    },

    // Scroll bars variations
    ...scrollBarsStyles('body', 'orange'),
    ...scrollBarsStyles('.scroll-accent', 'teal'),
    ...scrollBarsStyles('.scroll-primary', 'orange'),

    h1: {
      lineHeight: 'none',
    },
    h2: {
      lineHeight: 'none',
    },
    h3: {
      lineHeight: 'none',
    },
    h4: {
      lineHeight: 'none',
    },
    h5: {
      lineHeight: 'none',
    },

    '.no-scroll': {
      overflowX: 'hidden',
    },
  },
}
