import { GridItem, SystemStyleObject } from '@chakra-ui/react'
import {
  StackNames,
  groupStacksByCategory,
  stacksSamp,
} from '@data/techStacksSample'
import { TechStacksCard, TitleStyles } from 'ui'

const stacks = groupStacksByCategory(
  [
    StackNames.REACT,
    StackNames.CHAKRA,
    StackNames.NEXT_JS,
    StackNames.POSTGRES,
  ],
  stacksSamp,
)

const IntroStackCards = () => {
  const mainStyles: SystemStyleObject = {
    gridRow: 'r6-start / r6-end',
    gridColumn: 'content-start / col-end 7',
  }

  return (
    <GridItem sx={mainStyles}>
      <TechStacksCard
        stacks={stacks}
        titleStyle={TitleStyles.SM}
        hasDivider={false}
      />
    </GridItem>
  )
}
export default IntroStackCards
