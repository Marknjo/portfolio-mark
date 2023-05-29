'use client'

import React from 'react'

// eslint-disable-next-line import/no-unresolved
import { Center } from '@chakra-ui/react'
import { useIsLoading } from '@hooks/is-loading'
import HomePageV1 from '@components/homepage'

// Components

const HomePage = () => {
  const isLoading = useIsLoading()

  if (isLoading) {
    // @TODO: implement loading ui component
    return <Center>Loading...</Center>
  }

  return <HomePageV1 />
}

export default HomePage
