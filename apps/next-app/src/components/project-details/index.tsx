'use client'

import { useIsLoading } from '@hooks/is-loading'
import { DetailsPageProvider } from '@store/context/details-page-context'
import { IProjectDetailsTemplate, TPageTemplateContent } from '@data/types'
import UiLoader from '@components/layouts/loaders/UiLoader'
import DetailsPageRootIndex from './RootIndex'

// @TODO: Implement the details page context to share page data
// interface DetailsPageProps {
//   pageDetails?: any
// }

function DetailsPage<T extends TPageTemplateContent>({
  pageData,
}: {
  pageData: IProjectDetailsTemplate<T>
}) {
  const isLoading = useIsLoading()

  if (isLoading) {
    return <UiLoader />
  }

  return (
    <DetailsPageProvider<T> pageData={pageData}>
      <DetailsPageRootIndex />
    </DetailsPageProvider>
  )
}

export default DetailsPage
