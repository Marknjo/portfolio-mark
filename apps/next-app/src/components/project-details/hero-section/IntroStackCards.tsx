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

const IntroStackCards = () => (
  <TechStacksCard
    stacks={stacks}
    titleStyle={TitleStyles.SM}
    hasDivider={false}
  />
)
export default IntroStackCards
