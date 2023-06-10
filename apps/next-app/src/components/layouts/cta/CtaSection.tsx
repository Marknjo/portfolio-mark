import {
  Link,
  GridItem,
  GridProps,
  HStack,
  Heading,
  SystemStyleObject,
  VStack,
  useConst,
} from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { appIcons } from '@data/generalData/icons/dataAppIcons'
import { useAppSettings } from '@store/context/app-settings-context'
import { ReactNode } from 'react'
import { MainGrid, TextContentGenerator, SolidBtn } from 'ui'

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

  const textOptions = useConst({
    ...ctaText,
    listOptions: {
      ...(ctaText?.listOptions?.icon
        ? { icon: appIcons.listIcons[ctaText.listOptions.icon] }
        : {}),
    },
  })

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
          gap={{ base: '4', lg: '3', xl: '8' }}
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
            <TextContentGenerator {...textOptions} />
          </VStack>

          <SolidBtn
            text={contactButtonText}
            props={{
              as: Link,
            }}
            href={`/${contactButtonLink}`}
            sx={{
              border: '1px solid',
              borderColor: 'orange.400',
              textTransform: 'capitalize',
              letterSpacing: '1px',
              bgColor: 'orange.100',
            }}
          />
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
