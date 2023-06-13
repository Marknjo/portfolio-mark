'use client'

import { DetailsPageProvider } from '@store/context/details-page-context'
import { IProjectDetailsTemplate, TPageTemplateContent } from '@data/types'
import UiLoaderHoneyComb from '@components/layouts/loaders/UiLoaderHoneyComb'
import { PageWrapper } from '@components/next-ui/PageWrapper'

import DetailsPageRootIndex from './RootIndex'

function DetailsPage<T extends TPageTemplateContent>({
  pageData,
}: {
  pageData: IProjectDetailsTemplate<T>
}) {
  return (
    <>
      <UiLoaderHoneyComb />
      <PageWrapper>
        <DetailsPageProvider<T> pageData={pageData}>
          <DetailsPageRootIndex />
        </DetailsPageProvider>
      </PageWrapper>
    </>
  )
}

export default DetailsPage
