import {
  Box,
  Button,
  GridItem,
  HStack,
  SystemStyleObject,
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
  /* Styles */
  const mainStyles: SystemStyleObject = {
    gridRow: 'r1-start/r1-end',
    gridColumn: 'content-start/content-end',
    pb: sizes.lg,
  }

  const projectLinkStyles: SystemStyleObject = {
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
  }

  const paginationStyles: SystemStyleObject = {
    color: 'teal.50',
    borderColor: 'teal.50',
    colorScheme: 'teal',
    transition: 'all .15s ease-in',

    _active: {
      color: 'teal.800',
      backgroundColor: 'teal.300',
    },
  }

  return (
    <GridItem sx={mainStyles}>
      <HStack justifyContent="space-between" width="100%" px={sizes.md}>
        <Button
          as={NextLink}
          href="/"
          leftIcon={<FiArrowLeft />}
          rightIcon={<BiHome />}
          variant="solid"
          colorScheme="teal"
        >
          Back To Home
        </Button>

        <Button
          as={NextLink}
          href={projectUrl}
          sx={projectLinkStyles}
          rightIcon={<FiArrowUpRight />}
          colorScheme="teal"
          variant="outline"
        >
          Visit Live Project
        </Button>

        {/* Pagination Links */}
        <HStack justify="flex-end" gap="2">
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
