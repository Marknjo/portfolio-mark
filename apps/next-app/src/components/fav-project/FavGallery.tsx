import NextLink from 'next/link'

import {
  Box,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Link,
  SystemStyleObject,
} from '@chakra-ui/react'

import { FiArrowUpRight } from 'react-icons/fi'
import { transform } from 'framer-motion'

interface FavGalleryImgInterface {
  id: number
  imgName: string
  alt: string
  title: string
}

const gridImages: Array<FavGalleryImgInterface> = [
  {
    id: 1,
    imgName: 'hero-section-img',
    alt: 'Favorite Project Hero image',
    title: 'Hero Section',
  },
  {
    id: 2,
    imgName: 'hero-section-img',
    alt: 'Favorite Project Hero image',
    title: 'Hero Section',
  },
  {
    id: 3,
    imgName: 'hero-section-img',
    alt: 'Favorite Project Hero image',
    title: 'Hero Section',
  },
  {
    id: 4,
    imgName: 'hero-section-img',
    alt: 'Favorite Project Hero image',
    title: 'Hero Section',
  },
  {
    id: 5,
    imgName: 'hero-section-img',
    alt: 'Favorite Project Hero image',
    title: 'Hero Section',
  },
  {
    id: 6,
    imgName: 'hero-section-img',
    alt: 'Favorite Project Hero image',
    title: 'Hero Section',
  },
]

const FavGalleryCard = ({
  imgName,
  alt,
  title,
}: Omit<FavGalleryImgInterface, 'id'>) => {
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

  const afterContentStyles: SystemStyleObject = {
    ...sharedStyles,
    content: "' '",
    display: 'block',
    backgroundColor: 'blackAlpha.600',
    zIndex: 4,
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
    <GridItem
      as="article"
      _after={afterContentStyles}
      position="relative"
      borderRadius="md"
      overflow="clip"
      zIndex={3}
      role="group"
      boxShadow="md"
      border="1px solid"
      borderColor="orange.50"
      transition="all .3s ease"
      _hover={{ transform: 'scale(1.02) translateY(-3px)' }}
      cursor="pointer"
    >
      <Image src={`./images/${imgName}.jpg`} alt={alt} />
      <Box sx={imageDetailsStyles}>
        {/* @TODO: Implement Gallery */}
        <Link
          href="/#fav-gallery"
          as={NextLink}
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

const FavGallery = () => {
  const gridColumnDef = {
    sm: 'repeat(auto-fit, minmax(18rem, 1fr))',
  }

  return (
    <GridItem
      gridColumn="col-start 4 / content-end"
      gridRow="r3-start/r4-end"
      zIndex="2"
      id="fav-gallery"
    >
      <Grid gridTemplateColumns={gridColumnDef} gap="3">
        {gridImages.map(img => (
          <FavGalleryCard
            key={img.id}
            imgName={img.imgName}
            title={img.title}
            alt={img.alt}
          />
        ))}
      </Grid>
    </GridItem>
  )
}
export default FavGallery
