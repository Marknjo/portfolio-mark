import React from 'react'
import { Metadata } from 'next'
import HomePage from './Homepage'

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

const IndexPage = () => (
  <>
    {/*  */}
    <HomePage />
  </>
)

export default IndexPage
