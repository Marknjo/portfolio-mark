import { Portal, SystemStyleObject } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { BgWithICons } from 'ui'
import WithoutPortal from './WithoutPortal'

const commonStyles: SystemStyleObject = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  zIndex: 'tooltip',
  bgColor: 'whiteAlpha.700',
}

export default function WithPortal({ children }: { children: ReactNode }) {
  return (
    <Portal appendToParentPortal>
      <BgWithICons sx={commonStyles} />
      <WithoutPortal>{children}</WithoutPortal>
    </Portal>
  )
}
