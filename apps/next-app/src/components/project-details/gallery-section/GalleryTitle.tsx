import { GridItem } from '@chakra-ui/react'
import { LargeTitle } from 'ui'

const GalleryTitle = () => {
  const gridBreakPoints = {
    sm: 'content-start/span 8', // 480px
    lg: 'content-start/span 6', // 992px
    xl: 'content-start/span 5', // 1280px
    '2xl': 'content-start/span 4', // 1536px
  }

  return (
    <GridItem gridColumn={gridBreakPoints} zIndex="2" gridRow="1/ span 1">
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
}

export default GalleryTitle
