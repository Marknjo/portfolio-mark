import { GridItem, SystemStyleObject } from '@chakra-ui/react'
import { OsxImageWindow } from 'ui'

const SummaryImage = () => {
  const mainStyles: SystemStyleObject = {
    gridRow: 'r5-start/r5-end',
    gridColumn: 'col-start 2/span 10',
    pt: '16',
  }

  return (
    <GridItem sx={mainStyles}>
      <OsxImageWindow url="./images/project-summary-img.jpg" />
    </GridItem>
  )
}

export default SummaryImage
