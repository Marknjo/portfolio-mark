import {
  AlignPosition,
  IStack,
  StackCategory,
  TitleStyles,
} from './tech-stacks/tech-stacks-types'
import {
  CardsSingleColumn,
  CardsTwoColumns,
} from './tech-stacks/stacking/CardsOptions'

export const TechStacksCard = ({
  stacks,
  isCustom = false,
  showBadge = false,
  titlePosition = AlignPosition.LEFT,
  titleStyle = TitleStyles.SM_BADGE,
  wrapperAlign = AlignPosition.LEFT,
}: {
  stacks: Map<StackCategory, [IStack]> | [[StackCategory, [IStack]]]
  showBadge?: boolean
  titlePosition?: AlignPosition
  titleStyle?: TitleStyles
  wrapperAlign?: AlignPosition
  isCustom?: boolean
}) => {
  return isCustom ? (
    <CardsTwoColumns stacks={stacks as Map<StackCategory, [IStack]>} />
  ) : (
    <CardsSingleColumn
      titlePosition={titlePosition}
      titleStyle={titleStyle}
      stacks={stacks}
      wrapperAlign={wrapperAlign}
    />
  )
}
