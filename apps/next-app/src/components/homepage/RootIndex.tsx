'use client'

import React from 'react'

// eslint-disable-next-line import/no-unresolved
import { Box } from '@chakra-ui/react'

// Components
import MainTopNav, { MenuMode } from '@components/layouts/navigation/MainTopNav'
import CtaSection from '@components/layouts/cta/CtaSection'
import Footer from '@components/layouts/footer/Footer'
import ToTop from '@components/layouts/to-top/ToTop'
import { homePageNavLinks } from '@data/navLinks'

/// Local components

import HomePageHero from './hero/HomePageHero'
import AboutSection from './about/AboutSection'
import ProjectsSection from './projects/ProjectsSection'
import FavProjectSection from './fav-project/FavProjectSection'
import SkillsSection from './skills-section/SkillsSection'
import ContactSection from './contact-section/ContactSection'

const HomePageRootIndex = () => (
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
    <ToTop />
  </>
)

export default HomePageRootIndex
