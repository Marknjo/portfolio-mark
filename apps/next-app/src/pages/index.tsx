import React from 'react'

// eslint-disable-next-line import/no-unresolved
import Head from 'next/head'
import { CoolInterface } from 'server/src/lib/CoolInterface'
import HomePageNav from '@src/components/navigation/HomePageNav'
import { GridItem } from '@chakra-ui/react'
import { MainGrid } from 'ui/components/MainGrid'
import HomePageHero from '@src/components/hero/HomePageHero'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const coolKid: CoolInterface = {
  amICool: false,
}

const HomePage = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* HomePage Navigation */}
    <HomePageNav />

    <HomePageHero />

    <MainGrid as="main">
      <GridItem gridColumn="col-start 1 / span 1">Item 1</GridItem>
      <GridItem gridColumn="col-start 2 / span 1">Item 2</GridItem>
      <GridItem gridColumn="col-start 3 / span 1">Item 3</GridItem>
      <GridItem gridColumn="col-start 4 / span 1">Item 4</GridItem>
      <GridItem gridColumn="col-start 5 / span 1">Item 5</GridItem>
      <GridItem gridColumn="col-start 6 / span 1">Item 6</GridItem>
      <GridItem gridColumn="col-start 7 / span 1">Item 7</GridItem>
      <GridItem gridColumn="col-start 8 / span 1">Item 8</GridItem>
      <GridItem gridColumn="col-start 9 / span 1">Item 9</GridItem>
      <GridItem gridColumn="col-start 10 / span 1">Item 10</GridItem>
      <GridItem gridColumn="col-start 11 / span 1">Item 11</GridItem>
      <GridItem gridColumn="col-start 12 / content-end">Item 12</GridItem>
    </MainGrid>
  </>
)

export default HomePage
