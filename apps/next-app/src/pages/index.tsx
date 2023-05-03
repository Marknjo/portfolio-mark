import React from 'react'

// eslint-disable-next-line import/no-unresolved
import Head from 'next/head'
import HomePageNav from '@components/navigation/HomePageNav'
import { Box } from '@chakra-ui/react'
import HomePageHero from '@components/hero/HomePageHero'
import AboutSection from '@components/about/AboutSection'
import ProjectsSection from '@components/projects/ProjectsSection'
import FavProjectSection from '@components/fav-project/FavProjectSection'
import SkillsSection from '@components/skills-section/SkillsSection'
import ContactSection from '@components/contact-section/ContactSection'
import CtaSection from '@components/cta/CtaSection'

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
      <CtaSection />
    </Box>
    {/* Footer */}
  </>
)

export default HomePage
