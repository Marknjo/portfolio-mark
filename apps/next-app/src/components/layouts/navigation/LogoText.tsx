import React from 'react'
import { Box, GridItem, SystemStyleObject, keyframes } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
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
    mt: { base: '16', md: 'auto' },
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
        color="orange.50"
        marginY="2"
      >
        <Box
          display="inline-block"
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <Link
            href="/"
            // as={motion.a}
            colorScheme="orange"
            transition="all 150ms ease"
            _hover={{
              color: 'white',
              transform: 'scaleX(1.05)',
            }}
          >
            {logoText}
          </Link>
        </Box>
      </Box>
    </GridItem>
  )
}

export default LogoText
