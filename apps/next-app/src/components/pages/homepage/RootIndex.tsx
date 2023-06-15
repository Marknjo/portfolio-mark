'use client'

import React, { Suspense, lazy } from 'react'

// eslint-disable-next-line import/no-unresolved
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'

// Components
import MainTopNav, { MenuMode } from '@components/layouts/navigation/MainTopNav'
import CtaSection from '@components/layouts/cta/CtaSection'
import Footer from '@components/layouts/footer/Footer'
import ToTop from '@components/layouts/to-top/ToTop'
import { useHomePageData } from '@store/context/homepage-context'
import { IHomePageContentV1 } from '@data/types'
import SectionHoneycombLoader from '@components/layouts/loaders/SectionHoneycombLoader'

/// Local components

import HomePageHero from './hero/HomePageHero'
// import AboutSection from './about/AboutSection'
// import ProjectsSection from './projects/ProjectsSection'
// import FavProjectSection from './fav-project/FavProjectSection'
// import SkillsSection from './skills-section/SkillsSection'
// import ContactSection from './contact-section/ContactSection'

const AboutSection = lazy(() => import('./about/AboutSection'))
const ProjectsSection = lazy(() => import('./projects/ProjectsSection'))
const FavProjectSection = lazy(() => import('./fav-project/FavProjectSection'))
const SkillsSection = lazy(() => import('./skills-section/SkillsSection'))
const ContactSection = lazy(() => import('./contact-section/ContactSection'))

const AnimationMain = chakra(motion.main, {
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
})

const HomePageRootIndex = () => {
  const {
    data: { navData },
    content: {
      about: { isShown: aboutSecIsShown },
      projects: { isShown: projectsSecIsShown },
      favProject: { isShown: favSecIsShown },
      skills: { isShown: skillsSecIsShown },
      contact: { isShown: contactSecIsShown },
    },
  } = useHomePageData<IHomePageContentV1>()

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
        {aboutSecIsShown && (
          <Suspense fallback={<SectionHoneycombLoader />}>
            <AboutSection />
          </Suspense>
        )}

        {/* Projects Section */}
        {projectsSecIsShown && (
          <Suspense fallback={<SectionHoneycombLoader />}>
            <ProjectsSection />
          </Suspense>
        )}

        {/* Favorite Project Section */}
        {favSecIsShown && (
          <Suspense fallback={<SectionHoneycombLoader />}>
            <FavProjectSection />
          </Suspense>
        )}

        {/* Skills Section */}
        {skillsSecIsShown && (
          <Suspense fallback={<SectionHoneycombLoader />}>
            <SkillsSection />
          </Suspense>
        )}

        {/* Contact Section */}
        {contactSecIsShown && (
          <Suspense fallback={<SectionHoneycombLoader />}>
            <ContactSection />
          </Suspense>
        )}

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
