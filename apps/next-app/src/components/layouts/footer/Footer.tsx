import {
  Box,
  GridItem,
  GridProps,
  HStack,
  Link,
  SystemStyleObject,
  Text,
  VStack,
} from '@chakra-ui/react'
import { easeIn } from 'framer-motion'
import NextLink from 'next/link'
import { MainGrid } from 'ui'

const Footer = () => {
  const mainStyles: GridProps = {
    backgroundColor: 'orange.700',
    color: 'orange.50',
    pt: '4',
    pb: '3',
    borderBottom: '0.8rem solid',
    borderBottomColor: 'orange.900',
  }

  const linkStyles: SystemStyleObject = {
    py: '3',
    px: '2',
    textDecoration: 'none',
    color: 'orange.100',
    transition: `all .25s ${easeIn(2)}`,

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
          <Box
            href="/"
            as={NextLink}
            fontSize="4xl"
            fontWeight="bold"
            textTransform="uppercase"
            transition={`all .25s ${easeIn(2)}`}
            _hover={{
              color: 'teal.50',
              textDecoration: 'none',
            }}
          >
            Mark Njoroge
          </Box>

          <HStack
            gap="3"
            borderTop="1px solid"
            borderTopColor="blackAlpha.400"
            borderBottom="1px solid"
            borderBottomColor="blackAlpha.400"
          >
            <Link href="/#" as={NextLink} sx={linkStyles}>
              Terms Of Use
            </Link>
            <Link href="/#" as={NextLink} sx={linkStyles}>
              Privacy Policy
            </Link>
            <Link href="#contact-section" as={NextLink} sx={linkStyles}>
              Contact
            </Link>
          </HStack>

          <Text color="whiteAlpha.700">
            <Text as="small">
              Copyright <Text as="sup">&trade;</Text>
              {new Date().getFullYear()}, Mark Njoroge Profile
            </Text>
          </Text>
        </VStack>
      </GridItem>
    </MainGrid>
  )
}

export default Footer
