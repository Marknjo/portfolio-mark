/* eslint-disable import/no-cycle */
import { useId } from 'react'
import { SystemStyleObject, VStack } from '@chakra-ui/react'
import {
  AlignPosition,
  StackCategory,
  TitleStyles,
} from '../types/tech-stacks-types'
import { TechStack } from './TechStack'

const alignCardItem = (flexAlignPosition: AlignPosition): SystemStyleObject => {
  let alignItemsStyles: SystemStyleObject = {}

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

    default:
      alignItemsStyles = {
        alignItems: 'flex-start',
      }
  }

  return alignItemsStyles
}

export function CardsSingleColumn<T extends any>({
  stacks,
  showBadge = false,
  titlePosition,
  titleStyle,
  wrapperAlign,
  hasDivider,
  iconPicker,
}: {
  stacks: T
  showBadge?: boolean
  titlePosition: AlignPosition
  titleStyle: TitleStyles
  wrapperAlign: AlignPosition
  hasDivider?: boolean
  iconPicker: (props: any) => JSX.Element
}) {
  const cpId = useId()
  const stackArrays = Array.isArray(stacks)
    ? (stacks as unknown as [[StackCategory, [T]]])
    : Object.entries(stacks as object)

  const mainStyles: SystemStyleObject = {
    gap: { base: '3', md: '5' },
    ...alignCardItem(wrapperAlign),
  }

  return (
    <VStack sx={mainStyles}>
      {stackArrays.map(stack => (
        <TechStack
          key={`${cpId}-${stack[0]}`}
          title={stack[0]}
          categoryStacks={stack[1]}
          showBadge={showBadge}
          titlePosition={titlePosition}
          titleStyle={titleStyle}
          hasDivider={hasDivider}
          iconPicker={iconPicker}
        />
      ))}
    </VStack>
  )
}
