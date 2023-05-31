import { GridItem } from '@chakra-ui/react'
import { LargeTitle } from 'ui'

const gridBreakPoints = {
  base: 'content-start/span 9', // 480px
  sm: 'content-start/span 7', // 992px
  lg: 'content-start/span 5', // 1280px
}

const GalleryTitle = () => (
  <GridItem gridColumn={gridBreakPoints} zIndex="2">
    <LargeTitle
      title="Gallery"
      subTitle="A Collection Of the Project Sections Screenshots"
      subTitleConfig={{ textAlign: 'left', lineHeight: 1.2 }}
      alignTitle={{ alignItems: 'left' }}
      titleConfig={{ pb: '0' }}
      isLighter
    />
  </GridItem>
)
export default GalleryTitle
