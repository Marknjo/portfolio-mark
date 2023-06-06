'use client'

import React from 'react'

// Components
import { HomePageProvider } from '@store/context/homepage-context'
import { useIsLoading } from '@hooks/is-loading'
import UiLoader from '@components/layouts/loaders/UiLoader'

/// Local components
import { IPageHome } from '@data/types'
import HomePageRootIndex from './RootIndex'

const HomePage = ({ pageData }: { pageData: IPageHome }) => {
  const isLoading = useIsLoading()

  if (isLoading) {
    return <UiLoader />
  }

  return (
    <HomePageProvider pageData={pageData.templateContent}>
      <HomePageRootIndex />
    </HomePageProvider>
  )
}

export default HomePage
