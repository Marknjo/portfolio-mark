import { ESiteNavNames, TPageData } from '@data/types'
import {
  findFavoriteProject,
  findPickedProjects,
} from '@data/utils/projectsHelpers'
import { getStacks } from '@data/utils/stacksHelpers'
import { aboutSocialIcons, contactSocialIcons } from './dataSocialIcons'

export const homePageData: TPageData = {
  data: {
    pickedProjects: findPickedProjects(),
    favProject: findFavoriteProject(),
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
