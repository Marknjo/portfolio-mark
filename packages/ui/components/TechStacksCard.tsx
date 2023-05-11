import { HStack, StackProps, SystemStyleObject, VStack } from '@chakra-ui/react'
import { SubHeading } from './SubHeading'
import { ReactNode } from 'react'
import {
  AlignPosition,
  IStack,
  StackCategory,
  StackingWrapperMode,
  TitleStyles,
} from './tech-stacks/tech-stacks-types'
import { StacksCard } from './tech-stacks/stacking/StackCard'

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

const titleStyleOverrides = (
  titleStyleType: TitleStyles,
  titlePosition: AlignPosition,
) => {
  let titlePositionStyles: SystemStyleObject = {
    alignSelf: 'flex-start',
    textAlign: 'left',
  }

  switch (titlePosition) {
    case AlignPosition.CENTER:
      titlePositionStyles = {
        alignSelf: 'center',
        textAlign: 'center',
        mb: '2',
      }

      break

    case AlignPosition.RIGHT:
      titlePositionStyles = {
        alignSelf: 'flex-end',
        textAlign: 'right',
      }

      break
  }

  let styles: SystemStyleObject = {
    mb: '0',
    textTransform: 'capitalize',
    textAlign: 'left',
    alignSelf: 'flex-start',
    pb: '0',
    px: '2',
    ...titlePositionStyles,
  }

  const smTitle: SystemStyleObject = {
    fontSize: 'md',
  }

  const withBadge: SystemStyleObject = {
    backgroundColor: 'orange.100',
    borderRadius: 'md',
    borderBottom: '2px solid',
    borderBottomColor: 'orange.400',
  }

  switch (titleStyleType) {
    case TitleStyles.SM:
      styles = {
        ...styles,
        ...smTitle,
        border: 'none',
      }
      break

    case TitleStyles.SM_BADGE:
      styles = {
        ...styles,
        ...smTitle,
        ...withBadge,
        py: '1',
      }
      break

    case TitleStyles.NORMAL_BADGE:
      styles = {
        ...styles,
        ...withBadge,
        px: '3',
        py: '1',
      }
      break

    default:
      styles = {
        border: 'none',
        ...styles,
      }
  }

  return styles
}

const StackingWrapper = ({
  mode,
  children,
  stackProps,
}: {
  mode?: StackingWrapperMode
  children: ReactNode
  stackProps?: StackProps
}) => {
  return mode === StackingWrapperMode.H ? (
    <HStack {...stackProps}>{children}</HStack>
  ) : (
    <VStack {...stackProps}>{children}</VStack>
  )
}

const TechStack = ({
  categoryStacks,
  title,
  showBadge,
  hasDivider = true,
  titleStyle,
  titlePosition,
}: {
  categoryStacks: [IStack]
  title?: StackCategory
  showBadge?: boolean
  hasDivider?: boolean
  titleStyle: TitleStyles
  titlePosition: AlignPosition
}) => {
  const cardsWrapperStyles: StackProps = {
    gap: '4',
  }
  const dividerLeftStyles: StackProps = {
    borderLeft: '1px solid',
    borderLeftColor: 'orange.400',
  }

  const dividerRightStyles: StackProps = {
    borderRight: '1px solid',
    borderRightColor: 'orange.400',
  }

  const wrapperStylesWithTitle: StackProps = {
    ...(titlePosition === AlignPosition.RIGHT
      ? dividerRightStyles
      : dividerLeftStyles),
    py: '0',
    px: '2',
  }

  const wrapperStyles: StackProps = {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    ...(title && hasDivider ? wrapperStylesWithTitle : {}),
  }

  return (
    <StackingWrapper mode={StackingWrapperMode.V} stackProps={wrapperStyles}>
      {title && (
        <SubHeading
          as="h3"
          text={title}
          overrides={titleStyleOverrides(titleStyle, titlePosition)}
        />
      )}

      <StackingWrapper
        mode={StackingWrapperMode.H}
        stackProps={cardsWrapperStyles}
      >
        <StacksCard
          stacks={categoryStacks}
          showBadge={showBadge}
          stylesOverrides={{ p: '1' }}
        />
      </StackingWrapper>
    </StackingWrapper>
  )
}

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
    <CardsTwoColumn stacks={stacks as Map<StackCategory, [IStack]>} />
  ) : (
    <CardsSingleColumn
      titlePosition={titlePosition}
      titleStyle={titleStyle}
      stacks={stacks}
      wrapperAlign={wrapperAlign}
    />
  )
}

const CardsSingleColumn = ({
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

const CardsTwoColumn = ({
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
