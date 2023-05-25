import { ThemeOverride } from '@chakra-ui/react'

const tittleStyles = (
  size: string,
  color: string = 'orange',
  isDark: boolean = false,
) => {
  const styleMode = isDark ? ['-light', 50, 100] : ['', 900, 800]

  return {
    [`${size}-lg${styleMode[0]}`]: {
      color: `${color}.${styleMode[1]}`,
    },
    [`${size}-sub${styleMode[0]}`]: {
      color: `${color}.${styleMode[2]}`,
    },
  }
}
export const layerStyles: ThemeOverride['layerStyles'] = {
  /* Orange Title */
  ...tittleStyles('h1'),
  ...tittleStyles('h1', 'orange', true),
  ...tittleStyles('h2'),
  ...tittleStyles('h2', 'orange', true),

  /* Teal Title */
  ...tittleStyles('h1-teal', 'teal'),
  ...tittleStyles('h1-teal', 'teal', true),
  ...tittleStyles('h2-teal', 'teal'),
  ...tittleStyles('h2-teal', 'teal', true),
}
