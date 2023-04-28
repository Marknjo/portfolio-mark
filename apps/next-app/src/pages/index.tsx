import React from 'react'

// eslint-disable-next-line import/no-unresolved
import Head from 'next/head'
import HomePageNav from '@src/components/navigation/HomePageNav'
import { Box } from '@chakra-ui/react'
import HomePageHero from '@src/components/hero/HomePageHero'
import AboutSection from '@src/components/about/AboutSection'
import ProjectsSection from '@src/components/projects/ProjectsSection'
import FavProjectSection from '@src/components/fav-project/FavProjectSection'
import SkillsSection from '@src/components/skills-section/SkillsSection'
import ContactSection from '@src/components/contact-section/ContactSection'

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
      <ProjectsSection />

      {/* Favorite Project Section */}
      <FavProjectSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Contact Section */}
      <ContactSection />
      {/* Page CTA */}
    </Box>
    {/* Footer */}
  </>
)

export default HomePage
