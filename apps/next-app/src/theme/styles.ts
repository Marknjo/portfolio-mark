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

export const styles = {
  global: {
    body: {
      bg: 'orange.50',
      overflowX: 'hidden',
      scrollBehavior: 'smooth',
    },
    '::-moz-selection': {
      color: 'orange.50',
      backgroundColor: 'orange.600',
    },
    '::selection': {
      color: 'orange.50',
      backgroundColor: 'orange.600',
    },

    // Scroll bars variations
    ...scrollBarsStyles('body', 'orange'),
    ...scrollBarsStyles('.scroll-accent', 'teal'),
    ...scrollBarsStyles('.scroll-primary', 'orange'),
  },
}
