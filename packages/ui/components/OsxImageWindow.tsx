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
  const mainStyles: SystemStyleObject = {
    backgroundColor: 'orange.100',
    p: '6px',
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
  }

  const circlesStyles: SystemStyleObject = {
    width: '6',
    height: '6',
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

  const imageStyles: SystemStyleObject = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderBottomRadius: 'md',
    ...imageSxOverrides,
  }

  return (
    <Box sx={mainStyles}>
      <VStack alignItems="flex-start">
        <HStack gap="3" px="6" py="2">
          <Box sx={circleRedStyles}>&nbsp;</Box>
          <Box sx={circleYellowStyles}>&nbsp;</Box>
          <Box sx={circleGreenStyles}>&nbsp;</Box>
        </HStack>
        <Image src={url} sx={imageStyles} />
      </VStack>
    </Box>
  )
}
