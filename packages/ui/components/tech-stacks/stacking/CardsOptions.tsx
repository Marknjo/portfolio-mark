import { HStack, SystemStyleObject, VStack } from '@chakra-ui/react'
import {
  AlignPosition,
  IStack,
  StackCategory,
  TitleStyles,
} from '../tech-stacks-types'
import { TechStack } from './TechStack'

const alignCardItem = (flexAlignPosition: AlignPosition) => {
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
}: {
  stacks: Map<StackCategory, [IStack]> | [[StackCategory, [IStack]]]
  showBadge?: boolean
  titlePosition: AlignPosition
  titleStyle: TitleStyles
  wrapperAlign: AlignPosition
}) => {
  const stackArrays = Array.isArray(stacks)
    ? (stacks as unknown as [[StackCategory, [IStack]]])
    : [...stacks.entries()]

  const mainStyles: SystemStyleObject = {
    gap: '5',
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
        />
      ))}
    </VStack>
  )
}

export const CardsTwoColumns = ({
  stacks,
}: {
  stacks: Map<StackCategory, [IStack]>
}) => {
  const showBadge = false
  const titlePosition = AlignPosition.LEFT
  const titleStyle = TitleStyles.SM_BADGE

  return (
    <HStack flexWrap="wrap" gap="5" justifyContent="center">
      <VStack alignItems="center" gap="5">
        {stacks.has(StackCategory.PROGRAMMING_LANGS) && (
          <TechStack
            title={StackCategory.PROGRAMMING_LANGS}
            categoryStacks={stacks.get(StackCategory.PROGRAMMING_LANGS)!}
            showBadge={showBadge}
            titlePosition={titlePosition}
            titleStyle={titleStyle}
          />
        )}

        {stacks.has(StackCategory.MOBILE) && (
          <TechStack
            title={StackCategory.MOBILE}
            categoryStacks={stacks.get(StackCategory.MOBILE)!}
            showBadge={showBadge && true}
            titlePosition={titlePosition}
            titleStyle={titleStyle}
          />
        )}

        {stacks.has(StackCategory.DESKTOP) && (
          <TechStack
            title={StackCategory.DESKTOP}
            categoryStacks={stacks.get(StackCategory.DESKTOP)!}
            showBadge={showBadge && true}
            titlePosition={titlePosition}
            titleStyle={titleStyle}
          />
        )}
      </VStack>

      <VStack gap="5" alignItems="center">
        {stacks.has(StackCategory.FRONTEND) && (
          <TechStack
            titlePosition={titlePosition}
            title={StackCategory.FRONTEND}
            categoryStacks={stacks.get(StackCategory.FRONTEND)!}
            showBadge={showBadge && true}
            titleStyle={titleStyle}
          />
        )}

        {stacks.has(StackCategory.BACKEND) && (
          <TechStack
            titlePosition={titlePosition}
            title={StackCategory.BACKEND}
            categoryStacks={stacks.get(StackCategory.BACKEND)!}
            showBadge={showBadge && true}
            titleStyle={titleStyle}
          />
        )}

        {stacks.has(StackCategory.TOOLS) && (
          <TechStack
            titlePosition={titlePosition}
            title={StackCategory.TOOLS}
            categoryStacks={stacks.get(StackCategory.TOOLS)!}
            showBadge={showBadge && true}
            titleStyle={titleStyle}
          />
        )}
      </VStack>
    </HStack>
  )
}
