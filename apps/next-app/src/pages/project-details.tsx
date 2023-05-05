import { Box } from '@chakra-ui/react'
import HomePageHero from '@components/homepage/hero/HomePageHero'
import Footer from '@components/layouts/footer/Footer'
import HomePageNav from '@components/layouts/navigation/HomePageNav'
import ToTop from '@components/layouts/to-top/ToTop'
import ProjectDetailsCTA from '@components/project-details/cta-section/ProjectDetailCTA'
import SummarySection from '@components/project-details/summary-section/SummarySection'
import { NextPage } from 'next'
import Head from 'next/head'

const ProjectDetailsPage: NextPage = () => (
  <>
    <Head>
      <title>Page Details</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* HomePage Navigation */}
    <HomePageNav />

    {/* Page Hero Section */}
    <HomePageHero />

    {/* Main Content */}
    <Box as="main" backgroundColor="orange.50">
      {/* The Challenge Section */}

      {/* The Gallery Section */}

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
