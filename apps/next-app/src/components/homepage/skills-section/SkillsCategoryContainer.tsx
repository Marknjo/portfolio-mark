import { GridItem, HStack, Heading, SystemStyleObject } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { getStacks, stacksSamp } from '@data/techStacksSample'
import { StackCategory, TechCard, IStack } from 'ui'

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
    gap: sizes.xs,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    // Visual
    border: '1px solid',
    borderColor: 'blackAlpha.100',
    boxShadow: 'base',
    py: sizes.md,
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
    mb: sizes.xs,

    // Overrides
    ...headingStylesOverrides,
  }

  return (
    <GridItem sx={mainStyles}>
      <Heading as="h4" sx={h4HeadingStyles}>
        {headingText}
      </Heading>

      <HStack gap={sizes.xs} flexWrap="wrap">
        {progLangs.map(
          lang =>
            !lang.isHidden &&
            lang.category === category && (
              <TechCard<IStack>
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
