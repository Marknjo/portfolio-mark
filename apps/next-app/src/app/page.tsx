import React from 'react'
import { Metadata } from 'next'
import HomePage from '@components/pages/homepage'
import { getPageTemplateContent } from '@data/utils/pagesData'
import {
  EPagesTemplateTypes,
  IHomePageContentV1,
  TPageData,
  IHomePageTemplate,
  TPageTemplateContent,
} from '@data/types'
import { getPageNav } from '@data/utils/pageNavs'

export const metadata: Metadata = {
  title: 'Mark Njoroge',
  description:
    "This is Mark Njoroge's Profile Website to showcase his projects and share his thoughts in the space of technology, especially on JavaScript and it's ecosystem of Frontend and Backend tools",
}

async function getData<T extends TPageTemplateContent>(): Promise<
  IHomePageTemplate<T>
> {
  /// 'id' | 'templateId' | 'pageName'

  const pageData = getPageTemplateContent<IHomePageTemplate<T>>(
    EPagesTemplateTypes.HOME,
  )

  const { nav } = pageData.theme
  const homePageNav = getPageNav(nav)

  /// remove un-required  data

  const homePageData: TPageData = {
    ...pageData,
    data: {
      ...pageData.data,
      navData: homePageNav,
    },
  }

  return Promise.resolve(homePageData as IHomePageTemplate<T>)
}

const IndexPage = async () => {
  const pageData = await getData<IHomePageContentV1>()

  return (
    <>
      {/*  */}
      <HomePage<IHomePageContentV1> pageData={pageData} />
    </>
  )
}

export default IndexPage
