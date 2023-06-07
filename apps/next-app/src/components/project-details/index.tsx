'use client'

import { useIsLoading } from '@hooks/is-loading'
import { DetailsPageProvider } from '@store/context/details-page-context'
import { IProjectDetailsPageData } from '@data/types'
import UiLoader from '@components/layouts/loaders/UiLoader'
import DetailsPageRootIndex from './RootIndex'

// @TODO: Implement the details page context to share page data
// interface DetailsPageProps {
//   pageDetails?: any
// }

const DetailsPage = ({ pageData }: { pageData: IProjectDetailsPageData }) => {
  const isLoading = useIsLoading()

  if (isLoading) {
    return <UiLoader />
  }

  return (
    <DetailsPageProvider data={pageData}>
      <DetailsPageRootIndex />
    </DetailsPageProvider>
  )
}

export default DetailsPage
