import React from 'react'
import {
  GridItem,
  SystemStyleObject,
  Image,
  Box,
  Flex,
  useBreakpointValue,
  useBreakpoint,
} from '@chakra-ui/react'
import { DotsBottomLeft, DotsBottomRight, DotsTopRight } from 'ui'
import { sizes } from '@components/next-ui'

const rightStyles: SystemStyleObject = {
  backgroundColor: 'orange.600',
  pb: '16',
}

const imageCommonStyles: SystemStyleObject = {
  borderRadius: ['4px', '8px'],
  border: ['3px solid', '4px solid'],
  borderColor: 'orange.200',
}
// #TODO:  Image @TODO: Animate Image:hover & border rotate
const HeroRightGrid = () => {
  const breakpoint = useBreakpoint()
  const imgContainerBreakpoint = useBreakpointValue(
    {
      md: undefined,
      base: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    {
      fallback: 'md',
    },
  )

  const dotSizesBreakpoint = useBreakpointValue(
    { base: 40, sm: 28, md: 45 },
    { fallback: 'md' },
  )

  return (
    <>
      {/* Image container */}
      <GridItem
        gridColumn={{
          base: 'content-start/content-end',
          md: 'col-start 7/content-end',
        }}
        gridRow={{
          base: '1 / 1',
          md: '1 / 3',
        }}
        zIndex="2"
        position="relative"
        alignSelf="center"
      >
        {/* '6', '8', '10', '12', '16' */}
        <Flex pt={sizes.xl} pb={['8', '12', '16']} sx={imgContainerBreakpoint}>
          <Box
            maxW={{ base: '70%', sm: '60%', xl: '80' }}
            _after={{
              content: '""',
              display: 'block',
              width: '100%',
              height: '100%',
              shadow: 'md',
              position: 'absolute',
              top: ['2', '4', '6'],
              left: ['2', '4', '6'],
              zIndex: '3',
              ...imageCommonStyles,
            }}
            position="relative"
          >
            <Image
              src="/images/profile-image.jpg"
              alt="Mark Njoroge Profile Image"
              objectFit="fill"
              zIndex="4"
              position="relative"
              boxShadow="lg"
              sx={imageCommonStyles}
            />
          </Box>
        </Flex>
      </GridItem>

      {/* Right Background */}
      <GridItem
        gridColumn={{
          base: '1/-1',
          md: 'col-start 8/outer-right-end',
        }}
        gridRow={{
          base: '1/1',
          md: '1 / 3',
        }}
        sx={rightStyles}
        position="relative"
      >
        {['sm', 'base'].includes(breakpoint) || (
          <DotsBottomRight width={dotSizesBreakpoint} />
        )}

        <DotsTopRight width={dotSizesBreakpoint} />

        {['sm', 'base'].includes(breakpoint) && (
          <DotsBottomLeft width={dotSizesBreakpoint} />
        )}
      </GridItem>
    </>
  )
}

export default HeroRightGrid
