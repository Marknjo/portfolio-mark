import { Box } from '@chakra-ui/react'
import Footer from '@components/layouts/footer/Footer'
import MainTopNav from '@components/layouts/navigation/MainTopNav'
import ToTop from '@components/layouts/to-top/ToTop'
import TheChallengeSection from '@components/project-details/the-challenge-section/TheChallengeSection'
import ProjectDetailsCTA from '@components/project-details/cta-section/ProjectDetailCTA'
import GallerySection from '@components/project-details/gallery-section/GallerySection'
import SummarySection from '@components/project-details/summary-section/SummarySection'
import { NextPage } from 'next'
import Head from 'next/head'
import HeroSection from '@components/project-details/hero-section/HeroSection'
import { pDNavLinks } from '@data/navLinks'

const ProjectDetailsPage: NextPage = () => (
  <>
    <Head>
      <title>Page Details</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* HomePage Navigation */}
    <MainTopNav navLinks={pDNavLinks} />

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

export default ProjectDetailsPage
