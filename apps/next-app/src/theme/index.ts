import { ThemeOverride, extendTheme } from '@chakra-ui/react'
import { styles } from './styles'
import { textStyles, layerStyles } from './foundations'

const overrides: ThemeOverride = {
  styles,
  textStyles,
  layerStyles,
}

export default extendTheme(overrides)
