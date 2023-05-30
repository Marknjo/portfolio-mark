'use client'

import { Box, Center, baseTheme, useBreakpoint } from '@chakra-ui/react'

import Footer from '@components/layouts/footer/Footer'
import MainTopNav, { MenuMode } from '@components/layouts/navigation/MainTopNav'
import ToTop from '@components/layouts/to-top/ToTop'
import TheChallengeSection from '@components/project-details/the-challenge-section/TheChallengeSection'
import ProjectDetailsCTA from '@components/project-details/cta-section/ProjectDetailCTA'
import GallerySection from '@components/project-details/gallery-section/GallerySection'
import SummarySection from '@components/project-details/summary-section/SummarySection'
import HeroSection from '@components/project-details/hero-section/HeroSection'
import { pDNavLinks } from '@data/navLinks'

import { useIsLoading } from '@hooks/is-loading'
import { useEffect } from 'react'

const DetailsPage = ({ pageDetails = {} }: { pageDetails?: any }) => {
  console.log(pageDetails)
  const brP = useBreakpoint()
  const isLoading = useIsLoading()

  useEffect(() => {
    const bodyEl = document.body as HTMLBodyElement

    if (brP === 'base') {
      bodyEl.classList.remove('no-scroll')
    }

    if (brP !== 'base' && !bodyEl.classList.contains('no-scroll')) {
      bodyEl.classList.add('no-scroll')
    }
  }, [brP])

  if (isLoading) {
    // @TODO: implement loading ui component
    return <Center>Loading...</Center>
  }

  return (
    <>
      {/* HomePage Navigation */}
      <MainTopNav navLinks={pDNavLinks} displayMode={MenuMode.HAMBURGER} />

      {/* Main Content */}
      <Box as="main" backgroundColor="orange.50">
        {/* Page Hero Section */}
        <HeroSection />

        {/* The Challenge Section */}
        {/* <TheChallengeSection /> */}

        {/* The Gallery Section */}
        {/* <GallerySection /> */}

        {/* Project Summary Section */}
        {/* <SummarySection /> */}

        {/* Project Links & related projects & Page CTA */}
        {/* <ProjectDetailsCTA /> */}
      </Box>

      {/* Footer */}
      {/* <Footer /> */}

      {/* to top component */}
      {/* <ToTop /> */}
    </>
  )
}

export default DetailsPage
