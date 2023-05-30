import { GridItem, SystemStyleObject } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { OsxImageWindow } from 'ui'

const HeroImg = () => {
  const mainStyles: SystemStyleObject = {
    gridRow: 'r2-start/r3-end',
    gridColumn: { base: 'col-start 2/span 10', md: 'col-start 3/span 8' },
    pt: sizes.lg,
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
