import { GridItem, SystemStyleObject } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { OsxImageWindow } from 'ui'

const SummaryImage = () => {
  const mainStyles: SystemStyleObject = {
    gridRow: {
      base: '7/span 1',
      md: 'r5-start/r5-end',
    },
    gridColumn: 'col-start 2/span 10',
    pt: sizes.xl,
  }

  return (
    <GridItem sx={mainStyles}>
      <OsxImageWindow url="./images/project-summary-img.jpg" />
    </GridItem>
  )
}

export default SummaryImage
