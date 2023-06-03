import { Flex, SystemStyleObject } from '@chakra-ui/react'
import { CSSProperties, ReactNode } from 'react'

const SlideItem = ({
  children,
  style,
}: {
  children: ReactNode
  style: CSSProperties
}) => {
  const styles = useStyles()
  return (
    <Flex sx={styles.itemWrapper} style={style}>
      {children}
    </Flex>
  )
}

export default SlideItem

/* Styles */
interface Styles {
  itemWrapper: SystemStyleObject
}
const useStyles = (): Styles => ({
  itemWrapper: {
    position: 'absolute',
    top: '0',
    width: '100%',
    borderRadius: 'md',

    alignItems: 'center',
    justifyContent: 'center',

    /* THIS creates the animation! */
    transition: 'transform .5s',
  },
})
