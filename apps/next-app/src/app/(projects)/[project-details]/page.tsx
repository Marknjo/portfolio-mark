import React from 'react'
// import { Metadata, ResolvingMetadata } from 'next'
import { Metadata } from 'next'
import DetailsPage from '@components/pages/project-details'
import {
  EPagesTemplateTypes,
  IProjectDetailsContentV1,
  IProjectDetailsTemplate,
  IStack,
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

export async function generateMetadata({
  params,
}: MetaProps): // parent?: ResolvingMetadata,
Promise<Metadata> {
  // const previousImages = (parent && (await parent).openGraph?.images) || []
  const pageProject = getProjectBySlug(params['project-details'])

  if (!pageProject) return {}

  const { stacks, title, excerpt, introBgImg } = pageProject!

  const stacksCats = Object.keys(stacks).join(', ')

  let techs: Array<IStack> = []

  ;(Object.values(stacks) as Array<Array<IStack>>).forEach(
    (stackCats: Array<IStack>) => {
      techs = [...techs, ...stackCats]
    },
  )

  const stackNames = techs.map(stack => stack.name).join(', ')

  return {
    title: `Project - ${pageProject ? title : 'Not Found'}`,
    description: excerpt,
    keywords: `${stacksCats}, ${stackNames}`,
    twitter: {
      card: 'summary_large_image',
      site: '@marknjo',
      creator: '@marknjo',
      images: `/images/${introBgImg.fileName}.jpg`,
      creatorId: '@marknjo',
      title,
      description: excerpt,
    },
  } as Metadata
}

async function getData<T extends TPageTemplateContent>(slug: string) {
  const pageProject = getProjectBySlug(slug)

  /// throw 404 error
  if (!pageProject) return notFound()

  /// get related projects
  const relatedProjects = findRelatedProjects(
    slug,
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
