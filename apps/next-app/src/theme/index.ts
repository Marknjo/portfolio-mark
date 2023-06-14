import { ThemeOverride, extendTheme } from '@chakra-ui/react'
import { styles } from './styles'
import { textStyles, layerStyles, colors, fonts } from './foundations'

const overrides: ThemeOverride = {
  styles,
  textStyles,
  layerStyles,
  colors,
  fonts,
}

export default extendTheme(overrides)
