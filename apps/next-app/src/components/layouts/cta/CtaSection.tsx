import {
  Button,
  GridItem,
  GridProps,
  HStack,
  Heading,
  SystemStyleObject,
  VStack,
} from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { useAppSettings } from '@store/context/app-settings-context'
import NavLink from 'next/link'
import { ReactNode } from 'react'
import { MainGrid, ParagraphGenerator } from 'ui'

const CtaSection = ({
  children,
  gridOptions = {},
  ctaGridRow,
  footerGridRow,
  ctaStylesOverrides = {},
}: {
  children?: ReactNode
  gridOptions?: GridProps
  ctaGridRow?: string
  footerGridRow?: string
  ctaStylesOverrides?: GridProps
}) => {
  const {
    data: {
      ctaConfig: {
        content: { contactButtonLink, contactButtonText, ctaText, title },
      },
    },
  } = useAppSettings()

  const mainStyles: GridProps = {
    color: 'orange.50',
    backgroundColor: 'orange.500',
    gridTemplateRows: `[r1-start]
      auto [r1-end r2-start]
      auto [r2-end r3-start]
      2rem [r3-end]
    `,
    pt: sizes.xl,
    zIndex: 0,
    ...gridOptions,
  }

  const ctaStyles: SystemStyleObject = {
    backgroundColor: 'orange.900',
    gridColumn: {
      base: 'content-start / content-end',
      sm: 'col-start 2 / col-end 11',
      lg: 'content-start / content-end',
      xl: 'col-start 2 / col-end 11',
    },
    gridRow: ctaGridRow || 'r1-start/r2-end',
    py: { base: '6', lg: '4' },
    px: sizes.lg,
    borderRadius: { base: 'md', lg: 'lg' },
    zIndex: 2,
    boxShadow: 'md',
    transition: 'all .1s ease-in',

    _hover: {
      boxShadow: 'lg',
      transform: 'translateY(-3px)',
    },

    ...ctaStylesOverrides,
  }

  return (
    <MainGrid as="section" options={mainStyles}>
      {/* Optional Content - Mainly Project Details */}
      {children && children}

      {/* CTA */}
      <GridItem sx={ctaStyles}>
        <HStack
          justifyContent={{ base: 'center', lg: 'space-between', xl: 'center' }}
          gap={{ base: '4', lg: '3', xl: '4' }}
          wrap={{ base: 'wrap', lg: 'nowrap' }}
        >
          <Heading
            as="h2"
            fontWeight="medium"
            fontSize={{ base: '2xl', lg: 'lg', xl: '2xl' }}
          >
            {title}
          </Heading>

          <VStack
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            fontSize="small"
            gap="1"
          >
            <ParagraphGenerator content={ctaText} isStyled={false} />
          </VStack>

          <Button
            as={NavLink}
            href={`/${contactButtonLink}`}
            variant="outline"
            color="teal.100"
            borderColor="teal.100"
            colorScheme="teal"
            _active={{
              color: 'teal.800',
              backgroundColor: 'teal.300',
            }}
            _hover={{
              color: 'teal.50',
            }}
          >
            {contactButtonText}
          </Button>
        </HStack>
      </GridItem>
      <GridItem
        gridColumn="outer-left-start/outer-right-end"
        gridRow={footerGridRow || 'r2-start/r3-end'}
        backgroundColor="orange.700"
        height="100%"
        zIndex="1"
      >
        {' '}
      </GridItem>
    </MainGrid>
  )
}

export default CtaSection
