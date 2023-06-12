import {
  As,
  GridItem,
  GridItemProps,
  Heading,
  StyleProps,
  SystemStyleObject,
} from '@chakra-ui/react'
import React, { ReactNode, useCallback } from 'react'

import { Variants, isValidMotionProp, motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

export enum BgVariant {
  Orange600to50 = 'orange600to50',
  Orange600to500 = 'orange600to500',
  Orange800to500 = 'orange800to500',
  Teal600to50 = 'teal600to50',
  Teal600to500 = 'teal600to50',
}

const BgBox = chakra(motion.div, {
  baseStyle: {
    perspective: '1500px',
    perspectiveOrigin: 'center',
  },
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
})

const xValue = 150
const titleVariant = (isFromRight: boolean, isBg: boolean): Variants => {
  const bgTransition = {
    type: 'tween',
    ease: 'easeOut',
    duration: 0.6,
    delay: 0.2,
  }

  const textTransition = {
    delay: 0.5,
    type: 'spring',
    bounce: 0.6,
    duration: 0.3,
  }

  return {
    offscreen: {
      x: isFromRight ? xValue : -xValue,
      originX: isFromRight ? 1 : 0,
      scaleX: 0.4,
    },
    onscreen: {
      x: 0,
      scaleX: 1,
      transition: isBg ? bgTransition : textTransition,
    },
  }
}

/**
 * Must be a grid to avoid negative margins
 */
export const SectionTitle = React.memo(
  ({
    children,
    headingGridSetting,
    bgGridSetting,
    type = 'h3',
    isRightAligned = false,
    headingOverrides = {},
    layerStyle = '',
  }: {
    children: ReactNode
    headingGridSetting: GridItemProps
    bgGridSetting: GridItemProps
    type?: As
    isRightAligned?: boolean
    headingOverrides?: SystemStyleObject
    layerStyle?: string
  }) => {
    const headingDefaults: SystemStyleObject = {
      textAlign: isRightAligned ? 'right' : 'left',
      color: 'orange.50',
      fontSize: ['md', 'lg', '2xl', '3xl'],
      ...headingOverrides,
    }

    return (
      <>
        <BgBox
          {...bgGridSetting}
          layerStyle={layerStyle}
          variants={titleVariant(isRightAligned, true)}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.1 }}
        >
          {' '}
        </BgBox>
        <BgBox
          {...headingGridSetting}
          variants={titleVariant(isRightAligned, true)}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.1 }}
        >
          <Heading as={type} sx={headingDefaults} textStyle="sec-title">
            {children}
          </Heading>
        </BgBox>
      </>
    )
  },
)
