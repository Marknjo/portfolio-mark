import { projectsData } from '@data/generalData/dataProjects'
import { TCardSlimGalleryData, TPickedProjectsCard } from '@data/types'
import { imagePicker } from './galleryHelpers'

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
