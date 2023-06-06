import { GridItem, SystemStyleObject } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { sampContent } from '@data/sampleContent'
import { ParagraphGenerator } from 'ui'

const TheStackContent = () => {
  const mainStyles: SystemStyleObject = {
    gridRow: { base: 'r7-start / r7-end', md: 'r6-start / r6-end' },
    gridColumn: {
      base: 'content-start / content-end',
      md: 'col-start 8 / content-end',
    },
    alignSelf: 'center',
    borderLeft: { base: 'none', md: '1px solid' },
    borderLeftColor: { base: 'none', md: 'orange.300' },
    pl: { base: '0', md: sizes.lg },
  }

  return (
    <GridItem sx={mainStyles}>
      <ParagraphGenerator content={sampContent} />
    </GridItem>
  )
}
export default TheStackContent
