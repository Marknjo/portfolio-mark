'use client'

import React from 'react'

// eslint-disable-next-line import/no-unresolved
import { Box, Center } from '@chakra-ui/react'

// Components
import MainTopNav, { MenuMode } from '@components/layouts/navigation/MainTopNav'
import HomePageHero from '@components/homepage/hero/HomePageHero'
import AboutSection from '@components/homepage/about/AboutSection'
import ProjectsSection from '@components/homepage/projects/ProjectsSection'
import FavProjectSection from '@components/homepage/fav-project/FavProjectSection'
import SkillsSection from '@components/homepage/skills-section/SkillsSection'
import ContactSection from '@components/homepage/contact-section/ContactSection'
import CtaSection from '@components/layouts/cta/CtaSection'
import Footer from '@components/layouts/footer/Footer'
import ToTop from '@components/layouts/to-top/ToTop'
import { homePageNavLinks } from '@data/navLinks'
import { useIsLoading } from '@hooks/is-loading'

const HomePage = () => {
  const isLoading = useIsLoading()

  if (isLoading) {
    // @TODO: implement loading ui component
    return <Center>Loading...</Center>
  }

  return (
    <>
      {/* HomePage Navigation */}
      <MainTopNav displayMode={MenuMode.NORMAL} navLinks={homePageNavLinks} />

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
      <Footer />

      {/* to top component */}
      <ToTop toUrl="/" />
    </>
  )
}

export default HomePage
