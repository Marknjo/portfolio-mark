import React from 'react'
import { Box, GridItem, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const LogoText = () => (
  <GridItem gridColumn="content-start/col-end 4">
    <Box fontSize="3xl" fontWeight="bold" color="teal.50" marginY="2">
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
        Mark Njoroge
      </Link>
    </Box>
  </GridItem>
)

export default LogoText
