import { GridItem, SystemStyleObject } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { useHomePageData } from '@store/context/homepage-context'
import { LargeTitle } from 'ui'

export const favRowBreakpoint = {
  base: 'col-start 1 / content-end',
  sm: 'col-start 2 / content-end',
  md: 'col-start 5 / content-end',
}

const gridStyles: SystemStyleObject = {
  gridColumn: favRowBreakpoint,
  gridRow: 'r1-start / r1-end',
  zIndex: 2,
  bgColor: { base: 'orange.50', md: 'transparent' },
  my: { base: '6', sm: '8', md: '0' },
  px: { base: '4', md: '0' },
  borderRadius: { base: 'md', md: '0' },
  boxShadow: { base: 'sm', md: 'none' },
}
const FavTitle = () => {
  const {
    content: {
      favProject: { titleMain, titleSub },
    },
  } = useHomePageData()

  return (
    <GridItem sx={gridStyles}>
      <LargeTitle
        title={titleMain}
        subTitle={titleSub}
        subTitleConfig={{ textAlign: 'left' }}
        alignTitle={{ alignItems: 'left', pl: sizes['xl-sm'] }}
      />
    </GridItem>
  )
}

export default FavTitle
