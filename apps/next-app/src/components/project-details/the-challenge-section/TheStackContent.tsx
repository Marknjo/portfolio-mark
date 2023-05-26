import { GridItem, SystemStyleObject } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { sampContent } from '@data/sampleContent'
import { ContentGenerator } from 'ui'

const TheStackContent = () => {
  const mainStyles: SystemStyleObject = {
    gridRow: 'r6-start / r6-end',
    gridColumn: 'col-start 8 / content-end',
    alignSelf: 'center',
    borderLeft: '1px solid',
    borderLeftColor: 'orange.300',
    pl: sizes.lg,
  }

  return (
    <GridItem sx={mainStyles}>
      <ContentGenerator content={sampContent} />
    </GridItem>
  )
}
export default TheStackContent
