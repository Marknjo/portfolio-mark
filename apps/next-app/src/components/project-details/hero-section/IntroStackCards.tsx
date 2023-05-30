import { useBreakpoint } from '@chakra-ui/react'
import {
  StackNames,
  groupStacksByCategory,
  stacksSamp,
} from '@data/techStacksSample'
import { AlignPosition, TechStacksCard, TitleStyles } from 'ui'

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
  const brP = useBreakpoint()

  const calBrp =
    brP !== 'md' && brP !== 'sm' && brP !== 'base'
      ? undefined
      : AlignPosition.CENTER
  return (
    <TechStacksCard
      stacks={stacks}
      titleStyle={TitleStyles.SM}
      hasDivider={false}
      titlePosition={calBrp}
    />
  )
}
export default IntroStackCards
