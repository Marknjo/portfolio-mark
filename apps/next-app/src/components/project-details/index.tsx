'use client'

import { useIsLoading } from '@hooks/is-loading'
import { DetailsPageProvider } from '@store/context/details-page-context'
import { IProjectDetailsTemplate, TPageTemplateContent } from '@data/types'
import UiLoaderBoxWipe from '@components/layouts/loaders/UiLoaderBoxWipe'
import DetailsPageRootIndex from './RootIndex'

function DetailsPage<T extends TPageTemplateContent>({
  pageData,
}: {
  pageData: IProjectDetailsTemplate<T>
}) {
  const isLoading = useIsLoading()

  if (isLoading) {
    return <UiLoaderBoxWipe />
  }

  return (
    <DetailsPageProvider<T> pageData={pageData}>
      <DetailsPageRootIndex />
    </DetailsPageProvider>
  )
}

export default DetailsPage
