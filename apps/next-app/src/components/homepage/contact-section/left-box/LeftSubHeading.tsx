import { GridItem, SystemStyleObject } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { useHomePageData } from '@store/context/homepage-context'
import { SubHeading } from 'ui'

const LeftSubHeading = () => {
  const {
    content: {
      contact: { textTitle },
    },
  } = useHomePageData()

  const topHeadingStyles: SystemStyleObject = {
    borderColor: 'teal.200',
    color: 'teal.900',
  }

  return (
    <GridItem gridColumn="1 / span 5" mr={sizes.xs}>
      <SubHeading text={textTitle} overrides={topHeadingStyles} />
    </GridItem>
  )
}

export default LeftSubHeading
