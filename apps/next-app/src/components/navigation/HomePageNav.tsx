import React from 'react'
import { Box, GridItem, Text } from '@chakra-ui/react'
import { MainGrid } from 'ui'

const HomePageNav = () => (
  <MainGrid>
    <GridItem gridColumn="content-start/col-end 4">
      <Box>Mark Njoroge</Box>
    </GridItem>
    <GridItem as="nav" gridColumn="col-start 5/content-end">
      <Text>Navigation</Text>
    </GridItem>
  </MainGrid>
)

export default HomePageNav
