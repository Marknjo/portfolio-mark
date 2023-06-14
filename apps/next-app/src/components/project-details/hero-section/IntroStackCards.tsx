import { useBreakpoint } from '@chakra-ui/react'
import { stackIconPicker } from '@data/generalData/icons/stackIconPicker'
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
      iconPicker={stackIconPicker as unknown as (props: any) => JSX.Element}
    />
  )
}
export default IntroStackCards
