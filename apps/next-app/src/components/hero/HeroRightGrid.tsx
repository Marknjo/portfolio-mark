import React from 'react'
import { GridItem, SystemStyleObject, Image, Box } from '@chakra-ui/react'
import { DotsBottomRight, DotsTopRight } from 'ui'

const rightStyles: SystemStyleObject = {
  backgroundColor: 'orange.600',
}

const imageCommonStyles: SystemStyleObject = {
  borderRadius: '8px',
  border: '4px solid',
  borderColor: 'orange.50',
}
// #TODO:  Image @TODO: Animate Image:hover & border rotate
const HeroRightGrid = () => (
  <>
    {/* Image container */}
    <GridItem
      gridColumn="col-start 7/content-end"
      gridRow="1 / 3"
      zIndex="1"
      position="relative"
      alignSelf="center"
    >
      <Box paddingBottom="20" paddingTop="16">
        <Box
          maxW="80"
          _after={{
            content: '""',
            display: 'block',
            width: '100%',
            height: '100%',
            shadow: 'md',
            position: 'absolute',
            top: '6',
            left: '6',
            zIndex: '2',
            ...imageCommonStyles,
          }}
          position="relative"
        >
          <Image
            src="/images/profile-image.jpg"
            alt="Mark Njoroge Profile Image"
            objectFit="fill"
            zIndex="3"
            position="relative"
            boxShadow="lg"
            sx={imageCommonStyles}
          />
        </Box>
      </Box>
    </GridItem>

    {/* Right Background */}
    <GridItem
      gridColumn="col-start 8/outer-right-end"
      gridRow="1 / 3"
      sx={rightStyles}
      position="relative"
    >
      <DotsBottomRight />
      <DotsTopRight />
    </GridItem>
  </>
)

export default HeroRightGrid
