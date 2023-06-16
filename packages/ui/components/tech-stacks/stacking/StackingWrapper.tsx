import { ReactNode } from 'react'
import { HStack, StackProps, VStack } from '@chakra-ui/react'
import { StackingWrapperMode } from '../types/tech-stacks-types'

export const StackingWrapper = ({
  mode,
  children,
  stackProps,
}: {
  mode?: StackingWrapperMode
  children: ReactNode
  stackProps?: StackProps
}) =>
  mode === StackingWrapperMode.H ? (
    <HStack {...stackProps}>{children}</HStack>
  ) : (
    <VStack {...stackProps}>{children}</VStack>
  )
