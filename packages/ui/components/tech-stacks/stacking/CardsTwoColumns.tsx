import { HStack, VStack } from '@chakra-ui/react'
import {
  AlignPosition,
  StackCategory,
  TitleStyles,
} from '../types/tech-stacks-types'
// eslint-disable-next-line import/no-cycle
import { TechStack } from './TechStack'

export function CardsTwoColumns<T extends { [key: string]: any }>({
  stacks,
  hasDivider,
  iconPicker,
}: {
  stacks: T
  hasDivider?: boolean
  iconPicker: (props: any) => JSX.Element
}) {
  const showBadge = false
  const titlePosition = AlignPosition.LEFT
  const titleStyle = TitleStyles.SM_BADGE

  return (
    <HStack flexWrap="wrap" gap="5" justifyContent="center">
      <VStack alignItems="center" gap="5">
        {stacks[StackCategory.PROGRAMMING_LANGS] && (
          <TechStack
            title={StackCategory.PROGRAMMING_LANGS}
            categoryStacks={stacks[StackCategory.PROGRAMMING_LANGS]}
            showBadge={showBadge}
            titlePosition={titlePosition}
            titleStyle={titleStyle}
            hasDivider={hasDivider}
            iconPicker={iconPicker}
          />
        )}

        {stacks[StackCategory.MOBILE] && (
          <TechStack
            title={StackCategory.MOBILE}
            categoryStacks={stacks[StackCategory.MOBILE]}
            showBadge={showBadge && true}
            titlePosition={titlePosition}
            titleStyle={titleStyle}
            hasDivider={hasDivider}
            iconPicker={iconPicker}
          />
        )}

        {stacks[StackCategory.DESKTOP] && (
          <TechStack
            title={StackCategory.DESKTOP}
            categoryStacks={stacks[StackCategory.DESKTOP]}
            showBadge={showBadge && true}
            titlePosition={titlePosition}
            titleStyle={titleStyle}
            hasDivider={hasDivider}
            iconPicker={iconPicker}
          />
        )}
      </VStack>

      <VStack gap="5" alignItems="center">
        {stacks[StackCategory.FRONTEND] && (
          <TechStack
            titlePosition={titlePosition}
            title={StackCategory.FRONTEND}
            categoryStacks={stacks[StackCategory.FRONTEND]}
            showBadge={showBadge && true}
            titleStyle={titleStyle}
            hasDivider={hasDivider}
            iconPicker={iconPicker}
          />
        )}

        {stacks[StackCategory.BACKEND] && (
          <TechStack
            titlePosition={titlePosition}
            title={StackCategory.BACKEND}
            categoryStacks={stacks[StackCategory.BACKEND]}
            showBadge={showBadge && true}
            titleStyle={titleStyle}
            hasDivider={hasDivider}
            iconPicker={iconPicker}
          />
        )}

        {stacks[StackCategory.TOOLS] && (
          <TechStack
            titlePosition={titlePosition}
            title={StackCategory.TOOLS}
            categoryStacks={stacks[StackCategory.TOOLS]}
            showBadge={showBadge && true}
            titleStyle={titleStyle}
            hasDivider={hasDivider}
            iconPicker={iconPicker}
          />
        )}
      </VStack>
    </HStack>
  )
}
