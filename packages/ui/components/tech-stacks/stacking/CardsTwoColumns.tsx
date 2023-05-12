import { HStack, SystemStyleObject, VStack } from '@chakra-ui/react'
import {
  AlignPosition,
  IStack,
  StackCategory,
  TitleStyles,
} from '../tech-stacks-types'
import { TechStack } from './TechStack'

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
