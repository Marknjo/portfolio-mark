import {
  Box,
  Button,
  GridItem,
  HStack,
  SystemStyleObject,
  useBreakpoint,
} from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import NextLink from 'next/link'
import { BiHome } from 'react-icons/bi'
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi'

const CTALinks = ({
  projectUrl = '#',
  nextProjectUrl = '#',
  prevProjectUrl = '#',
}: {
  projectUrl?: string
  nextProjectUrl?: string
  prevProjectUrl?: string
}) => {
  const brkP = useBreakpoint()
  /* Styles */

  const { mainStyles, paginationStyles, projectLinkStyles, btnWrapperStyles } =
    useStyles()

  return (
    <GridItem sx={mainStyles}>
      <HStack sx={btnWrapperStyles}>
        <Button
          as={NextLink}
          href="/"
          leftIcon={<FiArrowLeft />}
          rightIcon={<BiHome />}
          variant="solid"
          colorScheme="teal"
          size={{ base: 'sm', md: 'md' }}
        >
          {brkP === 'base' || brkP === 'sm' ? 'Home' : 'Back To Home'}
        </Button>

        <Button
          as={NextLink}
          href={projectUrl}
          sx={projectLinkStyles}
          rightIcon={<FiArrowUpRight />}
          colorScheme="teal"
          variant="outline"
          size={{ base: 'sm', md: 'md' }}
        >
          {brkP === 'base' || brkP === 'sm' ? 'Visit' : 'Visit Live Project'}
        </Button>

        {/* Pagination Links */}
        <HStack
          width={{ base: '100%', sm: 'auto' }}
          justifyContent={{ base: 'center', sm: 'auto' }}
          gap={{ base: '4', sm: '2' }}
        >
          <Button
            as={NextLink}
            href={prevProjectUrl}
            sx={paginationStyles}
            leftIcon={<FiArrowLeft />}
            colorScheme="whiteAlpha.50"
            variant="link"
            _hover={{
              color: 'teal.100',
              transform: 'translateX(-3px) scale(1.05)',
            }}
          >
            Prev
          </Button>
          <Box width="2px" bgColor="whiteAlpha.400">
            &nbsp;
          </Box>
          <Button
            as={NextLink}
            href={nextProjectUrl}
            sx={paginationStyles}
            rightIcon={<FiArrowRight />}
            colorScheme="whiteAlpha.50"
            variant="link"
            _hover={{
              color: 'teal.100',
              transform: 'translateX(3px) scale(1.05)',
            }}
          >
            Next
          </Button>
        </HStack>
      </HStack>
    </GridItem>
  )
}
export default CTALinks

interface Styles {
  mainStyles: SystemStyleObject
  projectLinkStyles: SystemStyleObject
  paginationStyles: SystemStyleObject
  btnWrapperStyles: SystemStyleObject
}

const useStyles = (): Styles => ({
  mainStyles: {
    gridRow: 'r1-start/r1-end',
    gridColumn: 'content-start/content-end',
    pb: sizes.lg,
  },
  projectLinkStyles: {
    color: 'teal.100',
    borderColor: 'teal.100',
    colorScheme: 'teal',
    _active: {
      color: 'teal.800',
      backgroundColor: 'teal.300',
    },
    _hover: {
      color: 'teal.50',
    },
  },
  btnWrapperStyles: {
    justifyContent: { base: 'space-between' },
    alignContent: { base: 'center', md: 'space-between' },
    width: '100%',
    px: { base: '4', sm: '6' },
    flexWrap: { base: 'wrap', sm: 'nowrap' },
    gap: '4',
  },
  paginationStyles: {
    color: 'teal.50',
    borderColor: 'teal.50',
    colorScheme: 'teal',
    transition: 'all .15s ease-in',

    _active: {
      color: 'teal.800',
      backgroundColor: 'teal.300',
    },
  },
})
