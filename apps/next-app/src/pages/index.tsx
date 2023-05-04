import React from 'react'

// eslint-disable-next-line import/no-unresolved
import Head from 'next/head'
import { Box } from '@chakra-ui/react'

// Components
import HomePageNav from '@components/layouts/navigation/HomePageNav'
import HomePageHero from '@components/homepage/hero/HomePageHero'
import AboutSection from '@components/homepage/about/AboutSection'
import ProjectsSection from '@components/homepage/projects/ProjectsSection'
import FavProjectSection from '@components/homepage/fav-project/FavProjectSection'
import SkillsSection from '@components/homepage/skills-section/SkillsSection'
import ContactSection from '@components/homepage/contact-section/ContactSection'
import CtaSection from '@components/layouts/cta/CtaSection'
import Footer from '@components/layouts/footer/Footer'
import ToTop from '@components/layouts/to-top/ToTop'

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
    <Footer />

    {/* to top component */}
    <ToTop toUrl="/" />
  </>
)

export default HomePage
