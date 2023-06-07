import { useBreakpoint } from '@chakra-ui/react'
import { useDetailsPageData } from '@store/context/details-page-context'
import { AlignPosition, TechStacksCard, TitleStyles } from 'ui'

const IntroStackCards = () => {
  const {
    data: { projectData },
  } = useDetailsPageData()

  const { introStacks } = projectData!

  const brP = useBreakpoint()

  const calBrp =
    brP !== 'md' && brP !== 'sm' && brP !== 'base'
      ? undefined
      : AlignPosition.CENTER
  return (
    <TechStacksCard
      stacks={introStacks}
      titleStyle={TitleStyles.SM}
      hasDivider={false}
      titlePosition={calBrp}
    />
  )
}
export default IntroStackCards
