/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  ButtonProps,
  Icon,
  SystemStyleObject,
} from '@chakra-ui/react'
import { useCallback } from 'react'

function BtnIcon({
  bodyColor,
  hoverColor,
}: {
  bodyColor: string
  hoverColor: string
}) {
  const iconBtnStyles: SystemStyleObject = {
    color: bodyColor,
    transition: '0.2s',
    position: 'relative',
    width: '15px',
    transitionDelay: '0.2s',

    _groupHover: {
      transform: 'translateX(4px)',
      color: hoverColor,
    },
  }

  return (
    <Icon
      strokeWidth="4"
      stroke="currentcolor"
      viewBox="0 0 24 24"
      fill="none"
      sx={iconBtnStyles}
      width="6"
      height="6"
    >
      <path
        d="M14 5l7 7m0 0l-7 7m7-7H3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </Icon>
  )
}

export function IconLineBtn({
  href,
  text,
  props,
  sx,
  isInverted = false,
  colorScheme = 'orange',
  customColorScheme,
}: {
  text: string
  props?: ButtonProps
  sx?: SystemStyleObject
  href?: string
  isInverted?: boolean
  colorScheme?: string
  customColorScheme?: {
    primaryColor: string
    hoverColor: string
  }
}) {
  const buttonColors = useCallback(() => {
    if (isInverted) {
      return {
        primaryColor: `${colorScheme}.50`,
        hoverColor: `${colorScheme}.800`,
      }
    }

    if (customColorScheme) {
      return customColorScheme
    }

    return {
      primaryColor: `${colorScheme}.700`,
      hoverColor: `${colorScheme}.500`,
    }
  }, [isInverted, colorScheme, customColorScheme])

  const { primaryColor, hoverColor } = buttonColors()

  const buttonReset: SystemStyleObject = {
    padding: 0,
    margin: 0,
    border: 'none',
    background: 'none',
    height: 'auto',
    textDecoration: 'none',
    borderRadius: 'none',
  }

  const buttonStyles: SystemStyleObject = {
    ...buttonReset,

    position: 'relative',
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
    cursor: 'pointer',
    letterSpacing: '1px',
    fontSize: { base: 'lg' },
    fontWeight: 600,

    _hover: {
      ...buttonReset,
    },
    ...sx,
  }

  const textStyles: SystemStyleObject = {
    margin: 0,
    display: 'block',
    position: 'relative',
    color: primaryColor,

    _before: {
      position: 'absolute',
      content: `"${text}"`,

      width: 0,
      inset: 0,
      color: hoverColor,
      overflow: 'hidden',
      transition: '0.2s ease-in',

      _groupHover: {
        width: '100%',
      },
    },

    _after: {
      position: 'absolute',
      content: "''",
      width: '25%',
      left: 0,
      bottom: '-7px',
      background: hoverColor,
      height: '2px',
      transition: '0.2s ease-in',

      _groupHover: {
        width: '100%',
      },
    },
  }

  const { size } = props as ButtonProps

  return (
    <Button
      role="group"
      sx={buttonStyles}
      {...props}
      size={size || 'md'}
      {...(href ? { href } : {})}
    >
      <Box as="span" sx={textStyles}>
        {text}
      </Box>
      <BtnIcon bodyColor={primaryColor} hoverColor={hoverColor} />
    </Button>
  )
}
