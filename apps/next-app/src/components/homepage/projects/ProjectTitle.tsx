import { GridItem } from '@chakra-ui/react'
import { LargeTitle } from 'ui'

const ProjectTitle = () => (
  <GridItem
    gridColumn="content-start/content-end"
    gridRow="title-start/title-end"
    zIndex="1"
  >
    <LargeTitle
      title="Projects"
      subTitle="Here is MY Latest Selection"
      subTitleConfig={{ color: 'orange.100' }}
      titleConfig={{ color: 'orange.50' }}
    />
  </GridItem>
)

export default ProjectTitle
