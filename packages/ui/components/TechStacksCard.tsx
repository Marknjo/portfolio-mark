import {
  AlignPosition,
  CardsSingleColumn,
  CardsTwoColumns,
  IStack,
  StackCategory,
  TitleStyles,
} from './tech-stacks'

export const TechStacksCard = ({
  stacks,
  isCustom = false,
  showBadge = false,
  hasDivider = true,
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
  hasDivider?: boolean
}) => {
  return isCustom ? (
    <CardsTwoColumns
      hasDivider={hasDivider}
      stacks={stacks as Map<StackCategory, [IStack]>}
    />
  ) : (
    <CardsSingleColumn
      hasDivider={hasDivider}
      titlePosition={titlePosition}
      titleStyle={titleStyle}
      stacks={stacks}
      wrapperAlign={wrapperAlign}
    />
  )
}
