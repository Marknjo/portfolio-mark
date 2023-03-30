import React from 'react'
import { GridItem, HStack, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

import { MainGrid } from 'ui'
import LogoText from './LogoText'

const HomePageNav = () => (
  <MainGrid
    options={{
      backgroundColor: 'orange.600',
    }}
  >
    <LogoText />
    <GridItem as="nav" gridColumn="col-start 5/content-end">
      <HStack as="ul">
        <Link href="/" as={NextLink}>
          Home
        </Link>

        <Link href="/" as={NextLink}>
          Home
        </Link>
      </HStack>
    </GridItem>
  </MainGrid>
)

export default HomePageNav
