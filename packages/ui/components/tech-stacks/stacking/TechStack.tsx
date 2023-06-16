import { StackProps, SystemStyleObject } from '@chakra-ui/react'
import {
  AlignPosition,
  StackCategory,
  StackingWrapperMode,
  TitleStyles,
} from '../types/tech-stacks-types'
import { StackingWrapper } from './StackingWrapper'
import { SubHeading } from '../../SubHeading'
// eslint-disable-next-line import/no-cycle
import { StacksCard } from './StackCard'

const titleStyleOverrides = (
  titleStyleType: TitleStyles,
  titlePosition: AlignPosition,
) => {
  let titlePositionStyles: SystemStyleObject = {}

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

    default:
      titlePositionStyles = {
        alignSelf: 'flex-start',
        textAlign: 'left',
      }
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

export function TechStack<T extends { [key: string]: any }>({
  categoryStacks,
  title,
  showBadge,
  hasDivider,
  titleStyle,
  titlePosition,
  iconPicker,
}: {
  categoryStacks: [T]
  title?: StackCategory | string
  showBadge?: boolean
  hasDivider?: boolean
  titleStyle: TitleStyles
  titlePosition: AlignPosition
  iconPicker: (props: any) => JSX.Element
}) {
  const cardsWrapperStyles: StackProps = {
    gap: '4',
    flexWrap: 'wrap',
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
          iconPicker={iconPicker}
        />
      </StackingWrapper>
    </StackingWrapper>
  )
}
