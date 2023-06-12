import { Link } from '@chakra-ui/next-js'
import {
  Box,
  GridItem,
  GridProps,
  HStack,
  SystemStyleObject,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react'
import { useAppSettings } from '@store/context/app-settings-context'
import { easeIn } from 'framer-motion'
import NextLink from 'next/link'
import { MainGrid } from 'ui'

const Footer = () => {
  const {
    data: {
      footerConfig: {
        theme: { colorTheme },
        data: { nav },
        content: { copyrightText, logoText },
      },
    },
  } = useAppSettings()

  const mainStyles: GridProps = {
    backgroundColor: 'orange.700',
    color: 'orange.50',
    py: { base: '2', md: '4' },
    borderBottom: '0.8rem solid',
    borderBottomColor: 'orange.900',
    overflow: 'hidden',
  }

  const linkStyles: SystemStyleObject = {
    py: { base: '2', md: '3' },
    px: '2',
    textDecoration: 'none',
    color: 'orange.100',
    transition: `all .25s ${easeIn(2)}`,
    fontSize: { base: 'small', sm: 'md' },

    _hover: {
      color: 'teal.50',
      textDecoration: 'none',
      transform: 'skew(2deg) scale(1.02) rotate(-5deg)',
    },
  }

  return (
    <MainGrid options={mainStyles} as="footer">
      <GridItem gridColumn="content-start/content-end">
        <VStack gap="2">
          {/* @TODO: Implement image logo */}
          <Box
            href="/"
            as={NextLink}
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            fontWeight="bold"
            textTransform="uppercase"
            transition={`all .25s ${easeIn(2)}`}
            _hover={{
              color: 'teal.50',
              textDecoration: 'none',
            }}
          >
            {logoText}
          </Box>

          <HStack
            gap={{ base: '2', sm: '3' }}
            borderTop="1px solid"
            borderTopColor="whiteAlpha.400"
            borderBottom="1px solid"
            borderBottomColor="whiteAlpha.400"
          >
            {nav.map(navItem => (
              <Tooltip
                key={navItem.id}
                hasArrow
                bgColor={`${colorTheme}.100`}
                color={`${colorTheme}.800`}
                placeContent="auto"
                isDisabled={!navItem.description}
                id={navItem.id}
                label={navItem.description}
              >
                <Link href={navItem.link} sx={linkStyles}>
                  {navItem.title}
                </Link>
              </Tooltip>
            ))}
          </HStack>

          <Text color="whiteAlpha.700">
            <Text as="small">
              <Text as="sup">&copy;</Text>Copyright {new Date().getFullYear()},{' '}
              <Link href="/" fontSize="small" color="orange.100">
                {copyrightText}
              </Link>
              <Text as="sup">&trade;</Text>
            </Text>
          </Text>
        </VStack>
      </GridItem>
    </MainGrid>
  )
}

export default Footer
