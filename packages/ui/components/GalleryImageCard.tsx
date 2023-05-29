import {
  As,
  Box,
  GridItem,
  Heading,
  Icon,
  Image,
  Link,
  SystemStyleObject,
} from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'

export interface GalleryImageCardInterface {
  id: number
  imgName: string
  alt: string
  title: string
  largeImg?: string // @TODO: link to the main gallery image
  asNavLink: As
}

export const GalleryImageCard = ({
  imgName,
  alt,
  title,
  asNavLink,
}: Omit<GalleryImageCardInterface, 'id'>) => {
  const sharedStyles: SystemStyleObject = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    transition: 'all .3s ease',
    transform: 'scale(0) translate(-50%, 0)',

    _groupHover: {
      top: '50%',
      left: '50%',
      transform: 'scale(1) translate(-50%, -50%)',
      backgroundColor: 'blackAlpha.500',
    },
  }

  const cardOverlayStyles: SystemStyleObject = {
    ...sharedStyles,
    content: "' '",
    display: 'block',
    backgroundColor: 'blackAlpha.600',
    zIndex: 4,
  }

  const cardStyles: SystemStyleObject = {
    _after: { afterContentStyles: cardOverlayStyles },
    position: 'relative',
    borderRadius: 'md',
    overflow: 'clip',
    zIndex: 3,
    boxShadow: 'md',
    border: '1px solid',
    borderColor: 'orange.50',
    transition: 'all .3s ease',
    _hover: { transform: 'scale(1.02) translateY(-3px)' },
    cursor: 'pointer',
  }

  const expandImageStyles: SystemStyleObject = {
    position: 'absolute',
    top: 2,
    right: 2,
    color: 'teal.100',
  }

  const iconStyles: SystemStyleObject = {
    transition: 'all 150ms ease-in',
    _hover: {
      color: 'teal.50',
      transform: 'translateY(-3px)',
    },
  }

  const imageDetailsStyles: SystemStyleObject = {
    ...sharedStyles,
    zIndex: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const headingStyles: SystemStyleObject = {
    fontSize: 'lg',
    fontWeight: 'bold',
    color: 'teal.100',
    textShadow: 'base',
    mt: '8',
    backgroundColor: 'blackAlpha.200',
    py: '1',
    px: '3',
    cursor: 'default',
  }

  return (
    <GridItem justifySelf="center" as="article" role="group" sx={cardStyles}>
      <Image src={`./images/${imgName}.jpg`} alt={alt} objectFit="cover" />
      <Box sx={imageDetailsStyles}>
        {/* @TODO: Implement Gallery */}
        <Link
          href="/#fav-gallery"
          as={asNavLink}
          sx={expandImageStyles}
          role="group"
        >
          <Icon as={FiArrowUpRight} width={5} height={5} sx={iconStyles} />
        </Link>
        <Heading as="h3" sx={headingStyles}>
          {title}
        </Heading>
      </Box>
    </GridItem>
  )
}
