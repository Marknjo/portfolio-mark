/* eslint-disable react/prop-types */
import {
  Button,
  ButtonProps,
  ChakraTheme,
  SystemStyleObject,
} from '@chakra-ui/react'
import { BsArrowDown } from 'react-icons/bs'

interface IBtnColors {
  btnTheme?: TColor
  textColor?: TColor
  rippleColor?: TColor
  hoverColor?: TColor
}

function SolidBtn({
  href,
  text,
  props,
  sx,
  btnColors,
}: {
  text: string
  props: ButtonProps
  sx?: SystemStyleObject
  href?: string
  btnColors?: IBtnColors
}) {
  const { size, rightIcon } = props

  const definedColors = btnColors
    ? [
        btnColors.btnTheme,
        btnColors.textColor,
        btnColors.rippleColor,
        btnColors.hoverColor,
      ]
    : []

  const { btnSolid } = useStyles(...definedColors)

  const styles: SystemStyleObject = {
    ...btnSolid,
    ...sx,
  }

  return (
    <Button
      sx={styles}
      {...props}
      size={size || 'md'}
      rightIcon={rightIcon || <BsArrowDown />}
      {...(href ? { href } : {})}
    >
      {text}
    </Button>
  )
}

export default SolidBtn

interface IStyles {
  btnSolid: SystemStyleObject
}

type TColor = string | ChakraTheme['colors']

const useStyles = (
  btnTheme?: TColor,
  textColor?: TColor,
  rippleColor?: TColor,
  hoverColor?: TColor,
): IStyles => {
  const beforeAfterStyles: SystemStyleObject = {
    transition: 'all 0.2s ease-in',
    left: 0,
    right: 0,
    opacity: 1,
    color: 'white',
  }

  let colorConfig: { tColor: TColor; rColor: TColor; tHover: TColor } = {
    tColor: 'orange.900',
    rColor: 'orange.400',
    tHover: 'white',
  }

  if (textColor) {
    colorConfig = {
      ...colorConfig,
      tColor: (textColor as string).includes('.')
        ? textColor
        : `${textColor}.900`,
    }
  }

  if (rippleColor) {
    colorConfig = {
      ...colorConfig,
      rColor: (rippleColor as string)?.includes('.')
        ? rippleColor
        : `${rippleColor}.400`,
    }
  }

  if (btnTheme || hoverColor) {
    colorConfig = {
      tColor: `${btnTheme}.900`,
      rColor: `${btnTheme}.400`,
      tHover: ((hoverColor as string)?.includes('.')
        ? hoverColor
        : 'white') as TColor,
    }
  }

  return {
    btnSolid: {
      letterSpacing: '1px',
      textTransform: 'capitalize',
      textDecoration: 'none',
      position: 'relative',
      boxShadow: 'base',
      color: colorConfig.tColor as string,
      transition: 'all 0.3s ease-in',
      zIndex: '1',
      overflow: 'hidden',
      cursor: 'pointer',

      _before: {
        transition: 'all 0.2s ease-in',
        position: 'absolute',
        top: 0,
        left: '50%',
        right: ' 50%',
        bottom: 0,
        opacity: 0,
        content: "''",
        backgroundColor: colorConfig.rColor as string,
        zIndex: '-1',
        _focus: {
          color: colorConfig.tHover as string,
        },
        _hover: {
          color: colorConfig.tHover as string,
        },
      },

      _hover: {
        color: colorConfig.tHover as string,
        textDecoration: 'none',
        transform: 'scale(1.1)',
        shadow: 'md',
        _before: {
          ...beforeAfterStyles,
        },
        _focus: {
          ...beforeAfterStyles,
        },
      },

      _active: {
        transform: 'scale(0.9)',
        shadow: 'sm',
        textDecoration: 'none',
      },
    },
  }
}
