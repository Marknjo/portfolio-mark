import { Portal } from '@chakra-ui/react'
import { ReactNode } from 'react'
import WithoutPortal from './WithoutPortal'

export default function WithPortal({ children }: { children: ReactNode }) {
  return (
    <Portal appendToParentPortal>
      <WithoutPortal>{children}</WithoutPortal>
    </Portal>
  )
}
