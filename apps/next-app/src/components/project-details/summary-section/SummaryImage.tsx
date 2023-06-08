import { GridItem, SystemStyleObject } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { useDetailsPageData } from '@store/context/details-page-context'
import { OsxImageWindow } from 'ui'

const SummaryImage = () => {
  const {
    data: { projectData },
  } = useDetailsPageData()

  const { footerLgImg } = projectData!

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
      <OsxImageWindow
        src={`./images/${footerLgImg.fileName}.jpg`}
        alt={footerLgImg.alt}
      />
    </GridItem>
  )
}

export default SummaryImage
