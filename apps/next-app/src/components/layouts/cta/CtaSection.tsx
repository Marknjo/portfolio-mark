import {
  Button,
  GridItem,
  GridProps,
  HStack,
  Heading,
  SystemStyleObject,
  Text,
  VStack,
} from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import NavLink from 'next/link'
import { ReactNode } from 'react'
import { MainGrid } from 'ui'

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
    gridColumn: 'col-start 2 / col-end 11',
    gridRow: ctaGridRow || 'r1-start/r2-end',
    py: '4',
    px: '12',
    borderRadius: 'md',
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
        <HStack justifyContent="center" gap="6" wrap={['wrap', 'nowrap']}>
          <Heading as="h2" fontWeight="medium" fontSize="2xl">
            Having a project?
          </Heading>

          <VStack
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            fontSize="small"
          >
            <Text>
              Let me help you build it and grow your company. Reach me from the
              contact form above.
            </Text>
            <Text>
              If from Kenya, call. I also don't mind to discuss the details of
              your project over a cup of coffee.
            </Text>
            <Text>I don't mind buying it 😜.</Text>
          </VStack>

          <Button
            as={NavLink}
            href="/#contact-section"
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
            Shoot Me 😃
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
