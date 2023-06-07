import { GridItem, SystemStyleObject } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { useDetailsPageData } from '@store/context/details-page-context'
import { TextContentGenerator } from 'ui'

const TheStackContent = () => {
  const {
    data: { projectData },
  } = useDetailsPageData()
  const { challengesText } = projectData!

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
      <TextContentGenerator
        text={challengesText}
        delimiter="<--l-->"
        type="paragraph"
      />
    </GridItem>
  )
}
export default TheStackContent
