import { GridItem, HStack, Heading, SystemStyleObject } from '@chakra-ui/react'
import {
  IStack,
  StackCategory,
  getStacks,
  stacksSamp,
} from '@data/techStacksSample'
import { SkillsCard } from 'ui'

const progLangs = getStacks(stacksSamp)

interface IProps {
  category: StackCategory
  headingText: string
  mainStylesOverrides?: SystemStyleObject
  headingStylesOverrides?: SystemStyleObject
}

/**
 * Card for programming languages I have worked with
 */
const SkillsCategoryContainer = ({
  headingText,
  category,
  mainStylesOverrides = {},
  headingStylesOverrides = {},
}: IProps) => {
  const mainStyles: SystemStyleObject = {
    gridRow: 'r3-start/r3-end',
    gridColumn: 'content-start/content-end',
    justifyContent: 'start',
    gap: '4',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    // Visual
    border: '1px solid',
    borderColor: 'blackAlpha.100',
    boxShadow: 'base',
    py: '8',
    px: '2',
    borderRadius: 'md',
    backgroundColor: 'orange.50',
    zIndex: '1',
    // Overrides
    ...mainStylesOverrides,
  }
  const h4HeadingStyles: SystemStyleObject = {
    // Visual
    borderBottom: '2px solid',
    borderColor: 'orange.200',
    pb: '2',
    width: '100%',
    textAlign: 'center',
    fontSize: '2xl',
    color: 'orange.900',
    mb: '4',

    // Overrides
    ...headingStylesOverrides,
  }

  return (
    <GridItem sx={mainStyles}>
      <Heading as="h4" sx={h4HeadingStyles}>
        {headingText}
      </Heading>

      <HStack gap="4" flexWrap="wrap">
        {progLangs.map(
          lang =>
            !lang.isHidden &&
            lang.category === category && (
              <SkillsCard<IStack>
                key={lang.name}
                skill={lang as IStack}
                showBadge
              />
            ),
        )}
      </HStack>
    </GridItem>
  )
}

export default SkillsCategoryContainer
