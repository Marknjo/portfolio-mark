import { projectsData } from '@data/generalData/dataProjects'
import {
  IProject,
  TCardSlimGalleryData,
  TPickedProjectsCard,
} from '@data/types'
import { imagePicker } from './galleryHelpers'
import { mapDataFieldAsKey } from './mapFilesIdAsKey'

const mappedProjectsBySlug = mapDataFieldAsKey(projectsData, 'slug')

export const findPickedProjects = (): Array<TPickedProjectsCard> => {
  const foundPickedProjects = projectsData.filter(project => project.isPicked)

  return foundPickedProjects.map(project => {
    const dataPrep: TPickedProjectsCard = {
      id: project.id,
      title: project.title,
      slug: project.slug,
      tags: project.tags,
      ...(imagePicker(
        project.cardImgId as string,
        true,
      ) as TCardSlimGalleryData),
    }

    return dataPrep
  })
}

export function getProjectBySlug(slug: string): IProject | undefined {
  return mappedProjectsBySlug[slug]
}
