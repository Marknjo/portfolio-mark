import React from 'react'
import {
  Box,
  GridItem,
  Link,
  SystemStyleObject,
  keyframes,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { motion } from 'framer-motion'
import { fontSizes } from '@components/next-ui'
import { useAppSettings } from '@store/context/app-settings-context'

const animationKeyFrames = keyframes`
  0% {
    transform: translateX(-100vw);
    opacity: 0;
  }
  80% {
    transform: translateX(100px);
    opacity: .6;
  }
  90% {
    transform: translateX(-50px);
    opacity: .8;
  }

  99% {
    transform: translateX(20px);
    opacity: .9;
  }
  100%{
  transform: translateX(0);
  opacity: 1;
  }
`

/// @TODO: Make logo text dynamic
const LogoText = ({
  sxOverrides = {},
  asHamburger = false,
}: {
  sxOverrides?: SystemStyleObject
  asHamburger: boolean
}) => {
  const {
    data: {
      mainNavConfig: {
        content: { logoText },
      },
    },
  } = useAppSettings()

  const animation = `${animationKeyFrames} .45s .1s ease-out backwards`

  /* Logo Styles */
  const logoStylesWithHamburger: SystemStyleObject = {
    gridColumn: 'content-start/content-end',
    gridRow: 'icon-start/icon-end',
    alignSelf: 'center',
  }
  const logoTextStyles: SystemStyleObject = {
    gridColumn: { base: 'content-start/span 8', md: 'content-start/col-end 4' },
    ...(asHamburger ? logoStylesWithHamburger : {}),
    ...sxOverrides,
  }

  return (
    <GridItem sx={logoTextStyles}>
      <Box
        as={motion.div}
        animation={asHamburger ? animation : undefined}
        fontSize={fontSizes.md}
        fontWeight="bold"
        color="teal.50"
        marginY="2"
      >
        <Link
          as={NextLink}
          href="/"
          colorScheme="teal"
          transition="all 150ms ease"
          _hover={{
            color: 'teal.100',
            transform: 'scaleX(1.05)',
          }}
        >
          {logoText}
        </Link>
      </Box>
    </GridItem>
  )
}

export default LogoText
