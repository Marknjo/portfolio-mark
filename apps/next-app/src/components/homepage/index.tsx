'use client'

import React from 'react'

// Components
import { HomePageProvider } from '@store/context/homepage-context'
import { useIsLoading } from '@hooks/is-loading'
import UiLoaderHoneyComb from '@components/layouts/loaders/UiLoaderHoneyComb'

/// Local components
import { IHomePageTemplate, TPageTemplateContent } from '@data/types'

import HomePageRootIndex from './RootIndex'

function HomePage<T extends TPageTemplateContent>({
  pageData,
}: {
  pageData: IHomePageTemplate<T>
}) {
  const isLoading = useIsLoading()

  return (
    <>
      {isLoading && <UiLoaderHoneyComb />}
      {!isLoading && (
        <HomePageProvider<T> pageData={pageData}>
          <HomePageRootIndex />
        </HomePageProvider>
      )}
    </>
  )
}

export default HomePage
