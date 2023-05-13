import { GridItem, SystemStyleObject } from '@chakra-ui/react'
import { sampContent } from '@data/sampleContent'
import { ContentGenerator } from 'ui'

const TheStackContent = () => {
  const mainStyles: SystemStyleObject = {
    gridRow: 'r6-start / r6-end',
    gridColumn: 'col-start 8 / content-end',
    alignSelf: 'center',
    borderLeft: '1px solid',
    borderLeftColor: 'orange.300',
    pl: '12',
  }

  return (
    <GridItem sx={mainStyles}>
      <ContentGenerator content={sampContent} />
    </GridItem>
  )
}
export default TheStackContent
