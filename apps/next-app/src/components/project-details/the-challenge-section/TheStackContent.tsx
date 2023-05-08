import { GridItem, SystemStyleObject } from '@chakra-ui/react'
import { sampContent } from '@data/sampleContent'
import { ContentGenerator } from 'ui'

const TheStackContent = () => {
  const mainStyles: SystemStyleObject = {
    gridRow: 'r6-start / r6-end',
    gridColumn: 'col-start 7 / content-end',
  }

  return (
    <GridItem sx={mainStyles}>
      <ContentGenerator content={sampContent} />
    </GridItem>
  )
}
export default TheStackContent
