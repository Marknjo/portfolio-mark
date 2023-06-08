import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import DetailsPage from '@components/project-details'
import {
  EPagesTemplateTypes,
  IProjectDetailsContentV1,
  IProjectDetailsTemplate,
  TPageData,
  TPageTemplateContent,
} from '@data/types'

import {
  getProjectBySlug,
  findRelatedProjects,
} from '@data/utils/projectsHelpers'
import { notFound } from 'next/navigation'
import { getPageTemplateContent } from '@data/utils/pagesData'

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

async function getData<T extends TPageTemplateContent>(slug: string) {
  const pageProject = getProjectBySlug(slug)

  /// throw 404 error
  if (!pageProject) return notFound()

  /// get related projects
  const relatedProjects = findRelatedProjects(
    pageProject.isPicked,
    pageProject.category,
  )

  /// ui data
  const detailsPageData = getPageTemplateContent(
    EPagesTemplateTypes.PROJECT_DETAILS_PAGE,
  )

  // configure page data
  const pageDataWithProjectInfo: TPageData = {
    ...detailsPageData,
    data: {
      ...detailsPageData.data,
      projectData: pageProject,
      relatedProjects,
    },
  }

  // project details data
  return Promise.resolve(pageDataWithProjectInfo as IProjectDetailsTemplate<T>)
}

const ProjectDetailsPage = async ({ params }: PageProps) => {
  const pageData = await getData<IProjectDetailsContentV1>(
    params['project-details'],
  )

  return <DetailsPage<IProjectDetailsContentV1> pageData={pageData} />
}

export default ProjectDetailsPage
