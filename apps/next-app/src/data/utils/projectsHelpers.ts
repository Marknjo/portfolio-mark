import { projectsData } from '@data/generalData/dataProjects'
import {
  IFavGalleryData,
  IGallery,
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
  let foundPickedProjects = projectsData.filter(project => {
    if (filterCriteria) {
      return filterCriteria(project)
    }

    return project.isPicked && !project.isFavorite
  })

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
  pageSlug: string,
  isPicked: boolean | undefined,
  category: IProjectsCategory,
  maxPick: number = 3,
): Array<TPickedProjectsCard> {
  let filterCriteria: undefined | ((data: IProject) => boolean)

  if (isPicked) {
    filterCriteria = projectData =>
      projectData.slug !== pageSlug && !!projectData.isPicked
  } else {
    filterCriteria = (projectData: IProject) =>
      projectData.category.name === category.name
  }

  return findPickedProjects(filterCriteria, maxPick)
}

export function findFavoriteProject(): IFavGalleryData | [] {
  const foundProject = projectsData.find(project => project.isFavorite)

  if (!foundProject) return [] // not found project

  return {
    link: foundProject.slug,
    favGalleryText: foundProject.favGalleryText!,
    gallery: foundProject.favGallery as IGallery[],
  }
}

export function getProjectNames(): Array<string> {
  return projectsData.map(project => project.slug)
}
