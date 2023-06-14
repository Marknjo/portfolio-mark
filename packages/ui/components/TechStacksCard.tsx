import {
  AlignPosition,
  CardsSingleColumn,
  CardsTwoColumns,
  TitleStyles,
} from './tech-stacks'

export function TechStacksCard<T extends { [key: string]: any }>({
  stacks,
  isCustom = false,
  showBadge = false,
  hasDivider = true,
  titlePosition = AlignPosition.LEFT,
  titleStyle = TitleStyles.SM_BADGE,
  wrapperAlign = AlignPosition.LEFT,
  iconPicker,
}: {
  stacks: T
  showBadge?: boolean
  titlePosition?: AlignPosition
  titleStyle?: TitleStyles
  wrapperAlign?: AlignPosition
  isCustom?: boolean
  hasDivider?: boolean
  iconPicker: (props: any) => JSX.Element
}) {
  return isCustom ? (
    <CardsTwoColumns
      iconPicker={iconPicker}
      hasDivider={hasDivider}
      stacks={stacks}
    />
  ) : (
    <CardsSingleColumn
      hasDivider={hasDivider}
      titlePosition={titlePosition}
      titleStyle={titleStyle}
      stacks={stacks}
      wrapperAlign={wrapperAlign}
      iconPicker={iconPicker}
    />
  )
}
