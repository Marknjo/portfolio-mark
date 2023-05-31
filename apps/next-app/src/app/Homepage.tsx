'use client'

import React from 'react'

// eslint-disable-next-line import/no-unresolved
import { useIsLoading } from '@hooks/is-loading'
import HomePageV1 from '@components/homepage'
import UiLoader from '@components/layouts/loaders/UiLoader'

// Components

const HomePage = () => {
  const isLoading = useIsLoading()

  if (isLoading) {
    // @TODO: implement loading ui component
    return <UiLoader />
  }

  return <HomePageV1 />
}

export default HomePage
