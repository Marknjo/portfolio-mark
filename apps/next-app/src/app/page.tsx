import React from 'react'
import { Metadata } from 'next'
import HomePage from '@components/homepage'
import { getPageTemplateContent } from '@data/utils/pagesData'
import { EPagesTemplateTypes, IHomePageData, IPageHome } from '@data/types'
import { getPageNav } from '@data/utils/pageNavs'

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

async function getData(): Promise<IPageHome> {
  const data = getPageTemplateContent<IHomePageData>(EPagesTemplateTypes.HOME)
  const { nav } = data.templateContent.theme
  const homePageNav = getPageNav(nav)

  const homePageData: IPageHome = {
    ...data,
    templateContent: {
      ...data.templateContent,
      data: {
        ...data.templateContent.data,
        navData: homePageNav,
      },
    },
  }

  return Promise.resolve(homePageData)
}

const IndexPage = async () => {
  const pageData = await getData()

  return (
    <>
      {/*  */}
      <HomePage pageData={pageData} />
    </>
  )
}

export default IndexPage
