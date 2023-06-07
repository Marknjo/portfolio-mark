import { GridItem, HStack, SystemStyleObject } from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { EStackCategories, IStack } from '@data/types'
import { useHomePageData } from '@store/context/homepage-context'
import { TechCard, SubHeading } from 'ui'

interface IProps {
  category: EStackCategories
  headingText: string
  mainStylesOverrides?: SystemStyleObject
  headingStylesOverrides?: SystemStyleObject
  cardsWrapperOverrides?: SystemStyleObject
}

/**
 * Card for programming languages I have worked with
 */
const SkillsCategoryContainer = ({
  headingText,
  category,
  mainStylesOverrides = {},
  headingStylesOverrides = {},
  cardsWrapperOverrides = {},
}: IProps) => {
  const {
    data: { techStacks },
  } = useHomePageData()

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
    pt: sizes.md,
    px: '2',
    borderRadius: 'md',
    backgroundColor: 'orange.50',
    zIndex: '1',
    // Overrides
    ...mainStylesOverrides,
  }
  const h4HeadingStyles: SystemStyleObject = {
    borderColor: 'orange.200',
    width: '100%',
    textAlign: 'center',
    color: 'orange.900',
    mb: '4',

    // Overrides
    ...headingStylesOverrides,
  }

  return (
    <GridItem sx={mainStyles}>
      <SubHeading as="h4" overrides={h4HeadingStyles} text={headingText} />

      <HStack gap="4" flexWrap="wrap" mb={sizes.sm} sx={cardsWrapperOverrides}>
        {techStacks.map(
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
