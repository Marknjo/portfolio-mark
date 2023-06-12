'use client'

import { useIsLoading } from '@hooks/is-loading'
import { DetailsPageProvider } from '@store/context/details-page-context'
import { IProjectDetailsTemplate, TPageTemplateContent } from '@data/types'
import UiLoaderHoneyComb from '@components/layouts/loaders/UiLoaderHoneyComb'

import DetailsPageRootIndex from './RootIndex'

function DetailsPage<T extends TPageTemplateContent>({
  pageData,
}: {
  pageData: IProjectDetailsTemplate<T>
}) {
  const isLoading = useIsLoading()

  return (
    <>
      {isLoading && <UiLoaderHoneyComb />}
      {!isLoading && (
        <DetailsPageProvider<T> pageData={pageData}>
          <DetailsPageRootIndex />
        </DetailsPageProvider>
      )}
    </>
  )
}

export default DetailsPage
