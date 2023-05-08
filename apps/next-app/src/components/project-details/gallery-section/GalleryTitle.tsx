import { GridItem } from '@chakra-ui/react'
import { LargeTitle } from 'ui'

const GalleryTitle = () => (
  <GridItem gridColumn="content-start/span 4" zIndex="2">
    <LargeTitle
      title="Gallery"
      subTitle="A Collection Of the Project Sections Screenshots"
      subTitleConfig={{ color: 'orange.100', lineHeight: 1.2 }}
      titleConfig={{ color: 'orange.50', mb: '0' }}
      alignTitle={{ alignItems: 'left' }}
    />
  </GridItem>
)

export default GalleryTitle
