import { ESiteNavNames, TPageData } from '@data/types'
import { findPickedProjects } from '@data/utils/projectsHelpers'
import { favProjectsGalleryImgsPicker } from '@data/utils/galleryHelpers'
import { getStacks } from '@data/utils/stacksHelpers'
import { aboutSocialIcons, contactSocialIcons } from './dataSocialIcons'

const favProject = favProjectsGalleryImgsPicker([
  'g7',
  'g7',
  'g7',
  'g7',
  'g7',
  'g7',
])

export const homePageData: TPageData = {
  data: {
    pickedProjects: findPickedProjects(),
    favProject,
    navData: [],
    aboutSocialIcons,
    contactSocialIcons,
    techStacks: getStacks(),
  },
  meta: {
    description:
      'Mark Profile page to show case his projects, skills, and share his experience in tech space',
    tagLine: 'Staying on track in tech space',
  },
  theme: {
    nav: ESiteNavNames.TOP_NAV,
  },
  content: {},
}
