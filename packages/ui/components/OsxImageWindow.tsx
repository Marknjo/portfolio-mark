import { Box, HStack, Image, SystemStyleObject, VStack } from '@chakra-ui/react'
import { Variants, motion } from 'framer-motion'

const circleVariants: Variants = {
  hidden: {
    scale: 1,
    opacity: 0.8,
  },
  visible: {
    scale: 1.1,
    opacity: 1,
  },
}

export const OsxImageWindow = ({
  src,
  mainSxOverrides = {},
  imageSxOverrides = {},
  alt,
}: {
  src: string
  alt?: string
  mainSxOverrides?: SystemStyleObject
  imageSxOverrides?: SystemStyleObject
}) => {
  return (
    <Box sx={mainStyles(mainSxOverrides)}>
      <VStack alignItems="flex-start">
        <HStack
          gap={{ base: '1', md: '2', lg: '3' }}
          px={circlesBrP}
          py={{ base: '4px', sm: '6px', md: '2' }}
        >
          <Box
            as={motion.div}
            variants={circleVariants}
            initial="hidden"
            whileHover="visible"
            whileTap="visible"
            sx={circleRedStyles}
          >
            &nbsp;
          </Box>
          <Box
            as={motion.div}
            variants={circleVariants}
            initial="hidden"
            whileHover="visible"
            whileTap="visible"
            sx={circleYellowStyles}
          >
            &nbsp;
          </Box>
          <Box
            as={motion.div}
            variants={circleVariants}
            initial="hidden"
            whileHover="visible"
            whileTap="visible"
            sx={circleGreenStyles}
          >
            &nbsp;
          </Box>
        </HStack>
        <Image
          src={src}
          sx={imageStyles(imageSxOverrides)}
          alt={alt || 'OSX Image'}
        />
      </VStack>
    </Box>
  )
}

/* Styles */
const circlesBrP = {
  base: '3',
  md: '4',
  lg: '6',
}

const bordersBrP = {
  base: '2px',
  md: '3px',
  lg: '4px',
}

const mainStyles = (mainSxOverrides: SystemStyleObject): SystemStyleObject => ({
  backgroundColor: 'orange.100',
  p: bordersBrP,
  borderRadius: 'md',
  width: '100%',
  height: '100%',
  boxShadow: 'md',
  transition: 'all .25s ease-in',
  _hover: {
    transform: 'translateY(-3px)',
    boxShadow: 'lg',
  },

  ...mainSxOverrides,
})

const circlesStyles: SystemStyleObject = {
  width: circlesBrP,
  height: circlesBrP,
  borderRadius: 'full',
  boxShadow: 'base',
  transition: 'all .25s ease-in',
  cursor: 'crosshair',
  _hover: {
    boxShadow: 'sm',
  },
}

const circleRedStyles: SystemStyleObject = {
  ...circlesStyles,
  backgroundColor: 'red.400',
}

const circleYellowStyles: SystemStyleObject = {
  ...circlesStyles,
  backgroundColor: 'yellow.400',
}

const circleGreenStyles: SystemStyleObject = {
  ...circlesStyles,
  backgroundColor: 'green.400',
}

const imageStyles = (
  imageSxOverrides: SystemStyleObject,
): SystemStyleObject => ({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  borderBottomRadius: 'md',
  mt: '0 !important',
  ...imageSxOverrides,
})
