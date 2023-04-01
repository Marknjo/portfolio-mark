import React from 'react'

// eslint-disable-next-line import/no-unresolved
import Head from 'next/head'
import HomePageNav from '@src/components/navigation/HomePageNav'
import { Box } from '@chakra-ui/react'
import HomePageHero from '@src/components/hero/HomePageHero'
import AboutSection from '@src/components/about/AboutSection'

const HomePage = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* HomePage Navigation */}
    <HomePageNav />

    {/* Page Hero Section */}
    <HomePageHero />

    {/* Main Content */}
    <Box as="main">
      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}

      {/* Favorite Project Section */}

      {/* Skills Section */}

      {/* Contact Section */}

      {/* Page CTA */}
    </Box>
    {/* Footer */}
  </>
)

export default HomePage
