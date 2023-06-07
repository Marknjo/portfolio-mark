import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import DetailsPage from '@components/project-details'
import { IProjectDetailsPageData } from '@data/types'
import { getDetailsUIData } from '@data/utils/detailsPageHelpers'
import { getProjectBySlug } from '@data/utils/projectsHelpers'
import { notFound } from 'next/navigation'

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
  const pageProject = getProjectBySlug(params['project-details'])

  return {
    title: `Project - ${pageProject ? pageProject.title : 'Not Found'}`,
    openGraph: {
      images: [...previousImages],
    },
  }
}

async function pageData(slug: string) {
  const pageProject = getProjectBySlug(slug)

  /// throw 404 error
  if (!pageProject) return notFound()

  /// ui data
  const detailsPageData = getDetailsUIData()

  // configure page data
  const pageDataWithProjectInfo: IProjectDetailsPageData = {
    ...detailsPageData,
    data: {
      ...detailsPageData.data,
      projectData: pageProject,
    },
  }

  // project details data

  return Promise.resolve(pageDataWithProjectInfo)
}

const ProjectDetailsPage = async ({ params }: PageProps) => {
  /* This page */
  const data = await pageData(params['project-details'])

  return <DetailsPage pageData={data!} />
}

export default ProjectDetailsPage
