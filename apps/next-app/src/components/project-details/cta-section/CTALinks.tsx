import {
  Box,
  Button,
  GridItem,
  HStack,
  SystemStyleObject,
  useBreakpoint,
} from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { SolidBtn } from 'ui'
import { IProjectDetailsContentV1 } from '@data/types'
import { useDetailsPageData } from '@store/context/details-page-context'
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
  const {
    content: {
      cta: { paginationNextText, paginationPrevText },
      hero: { introButtonText },
    },
  } = useDetailsPageData<IProjectDetailsContentV1>()
  const brkP = useBreakpoint()

  const { mainStyles, paginationStyles, btnWrapperStyles } = useStyles()

  return (
    <GridItem sx={mainStyles}>
      <HStack sx={btnWrapperStyles}>
        <SolidBtn
          text="Home"
          props={{
            as: NextLink,
            leftIcon: <FiArrowLeft />,
            rightIcon: <BiHome />,
            size: { base: 'sm', md: 'md' },
          }}
          href="/"
          sx={{
            border: '1px solid',
            borderColor: 'orange.50',
            letterSpacing: '1px',
            bgColor: 'orange.500',
            color: 'orange.100',
          }}
        />

        <SolidBtn
          text={brkP === 'base' || brkP === 'sm' ? 'Visit' : introButtonText}
          props={{
            as: NextLink,
            rightIcon: <FiArrowUpRight />,
            size: { base: 'sm', md: 'md' },
          }}
          href={projectUrl === 'coming soon' ? '/#' : projectUrl}
          sx={{
            border: '1px solid',
            borderColor: 'orange.400',
            bgColor: 'orange.100',
          }}
        />

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
            {paginationPrevText}
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
            {paginationNextText}
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
