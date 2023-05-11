import { ReactNode } from 'react'
import { StackingWrapperMode } from '../tech-stacks-types'
import { HStack, StackProps, VStack } from '@chakra-ui/react'

export const StackingWrapper = ({
  mode,
  children,
  stackProps,
}: {
  mode?: StackingWrapperMode
  children: ReactNode
  stackProps?: StackProps
}) => {
  return mode === StackingWrapperMode.H ? (
    <HStack {...stackProps}>{children}</HStack>
  ) : (
    <VStack {...stackProps}>{children}</VStack>
  )
}
