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
      isLighter
    />
  </GridItem>
)

export default ProjectTitle
