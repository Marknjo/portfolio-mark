import { SystemStyleObject, VStack } from '@chakra-ui/react'
import {
  AlignPosition,
  IStack,
  StackCategory,
  TitleStyles,
} from '../types/tech-stacks-types'
import { TechStack } from './TechStack'

const alignCardItem = (flexAlignPosition: AlignPosition): SystemStyleObject => {
  let alignItemsStyles: SystemStyleObject = {
    alignItems: 'flex-start',
  }

  switch (flexAlignPosition) {
    case AlignPosition.CENTER:
      alignItemsStyles = {
        textAlign: 'center',
      }

      break

    case AlignPosition.RIGHT:
      alignItemsStyles = {
        alignSelf: 'flex-end',
      }

      break
  }

  return alignItemsStyles
}

export const CardsSingleColumn = ({
  stacks,
  showBadge = false,
  titlePosition,
  titleStyle,
  wrapperAlign,
  hasDivider,
}: {
  stacks: Map<StackCategory, [IStack]> | [[StackCategory, [IStack]]]
  showBadge?: boolean
  titlePosition: AlignPosition
  titleStyle: TitleStyles
  wrapperAlign: AlignPosition
  hasDivider?: boolean
}) => {
  const stackArrays = Array.isArray(stacks)
    ? (stacks as unknown as [[StackCategory, [IStack]]])
    : [...stacks.entries()]

  const mainStyles: SystemStyleObject = {
    gap: { base: '3', md: '5' },
    ...alignCardItem(wrapperAlign),
  }

  return (
    <VStack sx={mainStyles}>
      {stackArrays.map(stack => (
        <TechStack
          key={stack[0]}
          title={stack[0]}
          categoryStacks={stack[1]}
          showBadge={showBadge}
          titlePosition={titlePosition}
          titleStyle={titleStyle}
          hasDivider={hasDivider}
        />
      ))}
    </VStack>
  )
}
