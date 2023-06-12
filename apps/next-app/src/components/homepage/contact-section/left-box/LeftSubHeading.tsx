import { GridItem, SystemStyleObject } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { IHomePageContentV1 } from '@data/types'
import { useHomePageData } from '@store/context/homepage-context'
import { SubHeading } from 'ui'

const LeftSubHeading = () => {
  const {
    content: {
      contact: { textTitle },
    },
  } = useHomePageData<IHomePageContentV1>()

  const topHeadingStyles: SystemStyleObject = {
    borderColor: 'orange.200',
    color: 'orange.900',
  }

  return (
    <GridItem gridColumn="1 / span 5" mr={sizes.xs}>
      <SubHeading text={textTitle} overrides={topHeadingStyles} />
    </GridItem>
  )
}

export default LeftSubHeading
