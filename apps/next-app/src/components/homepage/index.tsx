'use client'

import React from 'react'

// Components
import { HomePageProvider } from '@store/context/homepage-context'
import UiLoaderHoneyComb from '@components/layouts/loaders/UiLoaderHoneyComb'

/// Local components
import { IHomePageTemplate, TPageTemplateContent } from '@data/types'
import { PageWrapper } from '@components/next-ui/PageWrapper'

import HomePageRootIndex from './RootIndex'

function HomePage<T extends TPageTemplateContent>({
  pageData,
}: {
  pageData: IHomePageTemplate<T>
}) {
  return (
    <HomePageProvider<T> pageData={pageData}>
      <UiLoaderHoneyComb />

      <PageWrapper>
        <HomePageRootIndex />
      </PageWrapper>
    </HomePageProvider>
  )
}

export default HomePage
