import { GridItem } from '@chakra-ui/react'
import { LargeTitle } from 'ui'

const SummaryTitle = () => (
  <GridItem
    gridColumn="content-start/content-end"
    gridRow="r1-start/r1-end"
    zIndex="1"
  >
    <LargeTitle
      title="Project Summary"
      subTitle="Here are the project's challenges and lessons learnt"
      subTitleConfig={{ color: 'orange.800' }}
      titleConfig={{ color: 'orange.900' }}
    />
  </GridItem>
)

export default SummaryTitle
