import { projectsData } from '@data/generalData/dataProjects'
import {
  IProject,
  IProjectsCategory,
  TCardSlimGalleryData,
  TPickedProjectsCard,
} from '@data/types'
import { imagePicker } from './galleryHelpers'
import { mapDataFieldAsKey } from './mapFilesIdAsKey'

const mappedProjectsBySlug = mapDataFieldAsKey(projectsData, 'slug')

export const findPickedProjects = (
  filterCriteria?: (data: IProject) => boolean,
  maxPick: number = 3,
): Array<TPickedProjectsCard> => {
  let foundPickedProjects = projectsData.filter(
    project => filterCriteria || project.isPicked,
  )

  if (foundPickedProjects.length > maxPick) {
    foundPickedProjects = foundPickedProjects.slice(0, maxPick)
  }

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

export function findRelatedProjects(
  isPicked: boolean | undefined,
  category: IProjectsCategory,
  maxPick: number = 3,
): Array<TPickedProjectsCard> {
  let filterCriteria: undefined | ((data: IProject) => boolean)

  if (isPicked) {
    filterCriteria = undefined
  } else {
    filterCriteria = (projectData: IProject) =>
      projectData.category.name === category.name
  }

  return findPickedProjects(filterCriteria, maxPick)
}
