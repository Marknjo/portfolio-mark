'use client'

import { Box, useBreakpoint } from '@chakra-ui/react'
import { Suspense, lazy, useEffect } from 'react'

import Footer from '@components/layouts/footer/Footer'
import MainTopNav, { MenuMode } from '@components/layouts/navigation/MainTopNav'
import ToTop from '@components/layouts/to-top/ToTop'

import { useDetailsPageData } from '@store/context/details-page-context'
import { IProjectDetailsContentV1 } from '@data/types'

import HeroSection from '@components/project-details/hero-section/HeroSection'
import SectionHoneycombLoader from '@components/layouts/loaders/SectionHoneycombLoader'
/// lazy load these
// import TheChallengeSection from '@components/project-details/the-challenge-section/TheChallengeSection'
// import ProjectDetailsCTA from '@components/project-details/cta-section/ProjectDetailCTA'
// import GallerySection from '@components/project-details/gallery-section/GallerySection'
// import SummarySection from '@components/project-details/summary-section/SummarySection'

const TheChallengeSection = lazy(
  () =>
    import(
      '@components/project-details/the-challenge-section/TheChallengeSection'
    ),
)
const ProjectDetailsCTA = lazy(
  () => import('@components/project-details/cta-section/ProjectDetailCTA'),
)
const GallerySection = lazy(
  () => import('@components/project-details/gallery-section/GallerySection'),
)
const SummarySection = lazy(
  () => import('@components/project-details/summary-section/SummarySection'),
)

const DetailsPageRootIndex = () => {
  const {
    data: { navData },
    content: {
      hero: { isShown: heroIsShown },
      theChallenge: { isShown: theChallengeIsShown },
      gallery: { isShown: galleryIsShown },
      summary: { isShown: summaryIsShown },
      cta: { isShown: ctaIsShown },
    },
  } = useDetailsPageData<IProjectDetailsContentV1>()

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
        {heroIsShown && (
          <Suspense fallback={<SectionHoneycombLoader />}>
            <HeroSection />
          </Suspense>
        )}

        {/* The Challenge Section */}
        {theChallengeIsShown && (
          <Suspense fallback={<SectionHoneycombLoader />}>
            <TheChallengeSection />
          </Suspense>
        )}

        {/* The Gallery Section */}
        {galleryIsShown && (
          <Suspense fallback={<SectionHoneycombLoader />}>
            <GallerySection />
          </Suspense>
        )}

        {/* Project Summary Section */}
        {summaryIsShown && (
          <Suspense fallback={<SectionHoneycombLoader />}>
            <SummarySection />
          </Suspense>
        )}

        {/* Project Links & related projects & Page CTA */}
        {ctaIsShown && (
          <Suspense fallback={<SectionHoneycombLoader />}>
            <ProjectDetailsCTA />
          </Suspense>
        )}
      </Box>

      {/* Footer */}
      <Footer />

      {/* to top component */}
      <ToTop />
    </>
  )
}

export default DetailsPageRootIndex
