import { GridItem, SystemStyleObject } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { useDetailsPageData } from '@store/context/details-page-context'
import { OsxImageWindow } from 'ui'

const HeroImg = () => {
  const {
    data: { projectData },
  } = useDetailsPageData()
  const { introLgImg } = projectData!

  const mainStyles: SystemStyleObject = {
    gridRow: 'r2-start/r3-end',
    gridColumn: { base: 'col-start 2/span 10', md: 'col-start 3/span 8' },
    pt: sizes.lg,
  }

  return (
    <GridItem sx={mainStyles}>
      <OsxImageWindow
        mainSxOverrides={{ backgroundColor: 'orange.50' }}
        src={`./images/${introLgImg.fileName}.jpg`}
        alt={introLgImg.alt}
      />
    </GridItem>
  )
}

export default HeroImg
