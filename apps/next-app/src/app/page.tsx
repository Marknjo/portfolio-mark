import React from 'react'
import { Metadata } from 'next'

import HomePage from '@components/homepage'
import { getPageTemplateContent } from '@data/utils/pagesData'
import { EPagesTemplateTypes, IHomePageData } from '@data/types'

/* 
    <Head>
      <title></title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
*/

export const metadata: Metadata = {
  title: 'Mark Njoroge',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

const IndexPage = () => {
  const pageData = getPageTemplateContent<IHomePageData>(
    EPagesTemplateTypes.HOME,
  )

  return (
    <>
      {/*  */}
      <HomePage pageData={pageData} />
    </>
  )
}

export default IndexPage
