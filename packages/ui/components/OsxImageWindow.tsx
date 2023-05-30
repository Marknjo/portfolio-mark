import { Box, HStack, Image, SystemStyleObject, VStack } from '@chakra-ui/react'

export const OsxImageWindow = ({
  url,
  mainSxOverrides = {},
  imageSxOverrides = {},
}: {
  url: string
  mainSxOverrides?: SystemStyleObject
  imageSxOverrides?: SystemStyleObject
}) => {
  return (
    <Box sx={mainStyles(mainSxOverrides)}>
      <VStack alignItems="flex-start">
        <HStack
          gap={{ base: '1', md: '2', lg: '3' }}
          px={circlesBrP}
          py={{ base: '1', md: '2' }}
        >
          <Box sx={circleRedStyles}>&nbsp;</Box>
          <Box sx={circleYellowStyles}>&nbsp;</Box>
          <Box sx={circleGreenStyles}>&nbsp;</Box>
        </HStack>
        <Image src={url} sx={imageStyles(imageSxOverrides)} />
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
  ...imageSxOverrides,
})
