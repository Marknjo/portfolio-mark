import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import DetailsPage from '@components/project-details'

interface MetaProps {
  params: { ['project-details']: string }
}
interface PageProps {
  params: { ['project-details']: string }
}

export async function generateMetadata(
  { params }: MetaProps,
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  const previousImages = (parent && (await parent).openGraph?.images) || []

  return {
    title: `Project - ${params['project-details']}`,
    openGraph: {
      images: [...previousImages],
    },
  }
}

const ProjectDetailsPage = ({ params }: PageProps) => {
  /* This page */
  const pageDetails = { title: params['project-details'] }

  return (
    <>
      {/*  */}
      <DetailsPage pageDetails={pageDetails} />
    </>
  )
}

export default ProjectDetailsPage
