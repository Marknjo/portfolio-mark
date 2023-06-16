/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
import { ReactNode, memo } from 'react'
import {
  As,
  GridItemProps,
  Heading,
  SystemStyleObject,
  useBreakpoint,
  chakra,
  shouldForwardProp,
} from '@chakra-ui/react'

import { Variants, isValidMotionProp, motion } from 'framer-motion'

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

// const xValue = 250
const titleVariant = (
  isFromRight: boolean,
  isBg: boolean,
  xValue: number,
): Variants => {
  const bgTransition = {
    type: 'tween',
    ease: 'easeOut',
    duration: 0.4,
  }

  const textTransition = {
    delay: 0.2,
    type: 'spring',
    bounce: 0.4,
    duration: 0.3,
  }

  const bgVal = isFromRight ? xValue : -xValue
  const textVal = isFromRight ? xValue + 30 : -(xValue + 30)

  const xVl = isBg ? bgVal : textVal

  return {
    offscreen: {
      x: xVl,
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
export const SectionTitle = memo(
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
    const brkP = useBreakpoint()
    const animationXValue = {
      md: 250,
      lg: 380,
    }

    const isAnimationHidden = brkP === 'sm' || brkP === 'base'

    const headingDefaults: SystemStyleObject = {
      textAlign: isRightAligned ? 'right' : 'left',
      color: 'orange.50',
      fontSize: ['md', 'lg', '2xl', '3xl'],
      ...headingOverrides,
    }

    const xValue =
      brkP === 'md'
        ? animationXValue.md
        : !isAnimationHidden && brkP !== 'md'
        ? animationXValue.lg
        : 150

    const animateTitle = (isBg: boolean) => ({
      variants: titleVariant(isRightAligned, isBg, xValue),
      initial: 'offscreen',
      whileInView: 'onscreen',
      viewport: { amount: 0.1 },
    })

    return (
      <>
        <BgBox
          layerStyle={layerStyle}
          {...bgGridSetting}
          {...(isAnimationHidden ? {} : animateTitle(true))}
        >
          {' '}
        </BgBox>
        <BgBox
          {...headingGridSetting}
          {...(isAnimationHidden ? {} : animateTitle(false))}
        >
          <Heading as={type} sx={headingDefaults} textStyle="sec-title">
            {children}
          </Heading>
        </BgBox>
      </>
    )
  },
)
