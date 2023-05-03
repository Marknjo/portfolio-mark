import { GridItem, SystemStyleObject } from '@chakra-ui/react'
import { SubHeading } from 'ui'

const LeftSubHeading = () => {
  const topHeadingStyles: SystemStyleObject = {
    borderColor: 'teal.200',
    color: 'teal.900',
  }

  return (
    <GridItem gridColumn="1 / span 5" mr="4">
      <SubHeading text="Here is How To Reach Me" overrides={topHeadingStyles} />
    </GridItem>
  )
}

export default LeftSubHeading
