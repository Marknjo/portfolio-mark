'use client'

import React from 'react'
import {
  GridItem,
  SystemStyleObject,
  useBreakpointValue,
  useBreakpoint,
  chakra,
  shouldForwardProp,
} from '@chakra-ui/react'
import { DotsBottomLeft, DotsBottomRight, DotsTopRight } from 'ui'
import { sizes } from '@components/next-ui'
import { useHomePageData } from '@store/context/homepage-context'
import { IHomePageContentV1 } from '@data/types'
import { Image } from '@chakra-ui/next-js'
import { isValidMotionProp, motion } from 'framer-motion'
import { fromRight } from '@components/next-ui/animations/slideIn'

const brand = 'orange'

const AnimationBox = chakra(motion.div, {
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
})

const rightStyles: SystemStyleObject = {
  backgroundColor: `${brand}.600`,
  pb: ['8', '12', '16'],
}

const imageCommonStyles: SystemStyleObject = {
  borderRadius: ['4px', '8px'],
  border: ['3px solid', '4px solid'],
  borderColor: { base: `${brand}.100`, sm: `${brand}.100` },
}
// #TODO:  Image @TODO: Animate Image:hover & border rotate
const HeroRightGrid = () => {
  const {
    content: {
      hero: { profileImage },
    },
  } = useHomePageData<IHomePageContentV1>()

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

  const imgHeight = () => {
    if (breakpoint === 'base') {
      return 300
    }

    if (breakpoint === 'sm') {
      return 380
    }

    if (breakpoint === 'md') {
      return 300
    }

    return 420
  }

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
        <AnimationBox
          sx={{
            display: 'flex',
            pt: sizes.xl_TT,
            pb: ['8', '12', '16'],
            ...imgContainerBreakpoint,
          }}
          variants={fromRight}
          initial="hidden"
          animate="visible"
          layout
        >
          <AnimationBox
            maxW={{ base: '70%', sm: '60%', xl: '80' }}
            cursor={`
              url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>💖</text></svg>")
              16 0, auto
            `}
            whileHover={{
              scale: [1.04, 1, 1.04, 1],
            }}
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
              sx={{
                zIndex: '4',
                position: 'relative',
                boxShadow: 'lg',
                objectFit: 'cover',
                objectPosition: 'left',
                ...imageCommonStyles,
              }}
              src={`/images/${profileImage}.jpg`}
              alt="Mark Njoroge Profile Image"
              sizes="100vw"
              width="360"
              height={imgHeight()}
              quality={75}
              priority
            />
          </AnimationBox>
        </AnimationBox>
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
