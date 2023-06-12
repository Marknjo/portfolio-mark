'use client'

import React from 'react'

// eslint-disable-next-line import/no-unresolved
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'

// Components
import MainTopNav, { MenuMode } from '@components/layouts/navigation/MainTopNav'
import CtaSection from '@components/layouts/cta/CtaSection'
import Footer from '@components/layouts/footer/Footer'
import ToTop from '@components/layouts/to-top/ToTop'
import { useHomePageData } from '@store/context/homepage-context'

/// Local components

import HomePageHero from './hero/HomePageHero'
import AboutSection from './about/AboutSection'
import ProjectsSection from './projects/ProjectsSection'
import FavProjectSection from './fav-project/FavProjectSection'
import SkillsSection from './skills-section/SkillsSection'
import ContactSection from './contact-section/ContactSection'

const AnimationMain = chakra(motion.main, {
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
})

const HomePageRootIndex = () => {
  const {
    data: { navData },
  } = useHomePageData()

  return (
    <>
      {/* HomePage Navigation */}
      <MainTopNav displayMode={MenuMode.NORMAL} navLinks={navData} />

      {/* Page Hero Section */}
      <HomePageHero />

      {/* Main Content */}
      <AnimationMain
        // as="main"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        overflow="hidden"
      >
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
      </AnimationMain>

      {/* Footer */}
      <Footer />

      {/* to top component */}
      <ToTop />
    </>
  )
}

export default HomePageRootIndex
