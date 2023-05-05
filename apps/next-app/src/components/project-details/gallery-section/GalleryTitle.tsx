import { GridItem } from '@chakra-ui/react'
import { LargeTitle } from 'ui'

const GalleryTitle = () => (
  <GridItem gridColumn="content-start/content-end" zIndex="2">
    <LargeTitle
      title="Gallery"
      subTitle="A Collection Of the Project Sections Screenshots"
      subTitleConfig={{ color: 'orange.100' }}
      titleConfig={{ color: 'orange.50' }}
      alignTitle={{ alignItems: 'left' }}
    />
  </GridItem>
)

export default GalleryTitle
