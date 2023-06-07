'use client'

import { Box, useBreakpoint } from '@chakra-ui/react'

import Footer from '@components/layouts/footer/Footer'
import MainTopNav, { MenuMode } from '@components/layouts/navigation/MainTopNav'
import ToTop from '@components/layouts/to-top/ToTop'
import TheChallengeSection from '@components/project-details/the-challenge-section/TheChallengeSection'
import ProjectDetailsCTA from '@components/project-details/cta-section/ProjectDetailCTA'
import GallerySection from '@components/project-details/gallery-section/GallerySection'
import SummarySection from '@components/project-details/summary-section/SummarySection'
import HeroSection from '@components/project-details/hero-section/HeroSection'

import { useEffect } from 'react'
import { useDetailsPageData } from '@store/context/details-page-context'

// @TODO: Implement the details page context to share page data
// interface DetailsPageProps {
//   pageDetails?: any
// }

const DetailsPageRootIndex = () => {
  const {
    data: { navData },
  } = useDetailsPageData()

  const brP = useBreakpoint()

  useEffect(() => {
    const bodyEl = document.body as HTMLBodyElement

    if (brP === 'base') {
      bodyEl.classList.remove('no-scroll')
    }

    if (brP !== 'base' && !bodyEl.classList.contains('no-scroll')) {
      bodyEl.classList.add('no-scroll')
    }
  }, [brP])

  return (
    <>
      {/* HomePage Navigation */}
      <MainTopNav navLinks={navData} displayMode={MenuMode.HAMBURGER} />

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
      <ToTop />
    </>
  )
}

export default DetailsPageRootIndex
