import { Box, ChakraTheme } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { sizes } from './constants'

export enum SpacerPosition {
  L = 'pl',
  R = 'pr',
  T = 'pt',
  B = 'pb',
  Y = 'py',
  X = 'px',

  LEFT = 'pl',
  RIGHT = 'pr',
  TOP = 'pt',
  BOTTOM = 'pb',
  VERTICAL = 'py',
  HORIZONTAL = 'px',

  full = 'p',
}

export const Spacer = ({
  opt,
  children,
}: {
  children?: ReactNode
  opt?: { pos: SpacerPosition; size: ChakraTheme['sizes'] }
}) => {
  const pos = opt?.pos || SpacerPosition.B
  const size = opt?.pos || sizes.xl

  return <Box sx={{ [pos]: size }}>{children}</Box>
}
