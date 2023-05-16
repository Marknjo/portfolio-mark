'use client'

import { Box } from '@chakra-ui/react'

import Footer from '@components/layouts/footer/Footer'
import MainTopNav, { MenuMode } from '@components/layouts/navigation/MainTopNav'
import ToTop from '@components/layouts/to-top/ToTop'
import TheChallengeSection from '@components/project-details/the-challenge-section/TheChallengeSection'
import ProjectDetailsCTA from '@components/project-details/cta-section/ProjectDetailCTA'
import GallerySection from '@components/project-details/gallery-section/GallerySection'
import SummarySection from '@components/project-details/summary-section/SummarySection'
import HeroSection from '@components/project-details/hero-section/HeroSection'
import { pDNavLinks } from '@data/navLinks'

const DetailsPage = ({ pageDetails = {} }: { pageDetails?: any }) => {
  console.log(pageDetails)

  return (
    <>
      {/* HomePage Navigation */}
      <MainTopNav navLinks={pDNavLinks} displayMode={MenuMode.HAMBURGER} />

      {/* Main Content */}
      <Box as="main" backgroundColor="orange.50">
        {/* Page Hero Section */}
        <HeroSection />

        {/* The Challenge Section */}
        <TheChallengeSection />

        {/* The Gallery Section */}
        <GallerySection />

        {/* Project Summary Section */}
        <SummarySection />

        {/* Project Links & related projects & Page CTA */}
        <ProjectDetailsCTA />
      </Box>

      {/* Footer */}
      <Footer />

      {/* to top component */}
      <ToTop toUrl="/project-details" />
    </>
  )
}

export default DetailsPage
