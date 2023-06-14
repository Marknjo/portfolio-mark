import { ThemeOverride, extendTheme } from '@chakra-ui/react'
import { styles } from './styles'
import { textStyles, layerStyles, colors } from './foundations'

const overrides: ThemeOverride = {
  styles,
  textStyles,
  layerStyles,
  colors,
}

export default extendTheme(overrides)
