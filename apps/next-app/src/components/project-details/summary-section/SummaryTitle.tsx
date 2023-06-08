import { GridItem } from '@chakra-ui/react'
import { useDetailsPageData } from '@store/context/details-page-context'
import { LargeTitle } from 'ui'

const SummaryTitle = () => {
  const {
    content: {
      summary: { headerTitleMain, headerTitleSub },
    },
  } = useDetailsPageData()

  return (
    <GridItem
      gridColumn="content-start/content-end"
      gridRow={{
        base: '1/span 1',
        md: 'r1-start/r1-end',
      }}
      zIndex="1"
    >
      <LargeTitle title={headerTitleMain} subTitle={headerTitleSub} />
    </GridItem>
  )
}

export default SummaryTitle
