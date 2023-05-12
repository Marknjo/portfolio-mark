import { GridItem, SystemStyleObject } from '@chakra-ui/react'
import { OsxImageWindow } from 'ui'

const HeroImg = () => {
  const mainStyles: SystemStyleObject = {
    gridRow: 'r2-start/r3-end',
    gridColumn: 'col-start 3/span 8',
    pt: '12',
  }

  return (
    <GridItem sx={mainStyles}>
      <OsxImageWindow
        mainSxOverrides={{ backgroundColor: 'orange.50' }}
        url="./images/project-hero-section-img.jpg"
      />
    </GridItem>
  )
}

export default HeroImg
