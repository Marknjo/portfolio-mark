import { EDetailsPageImageThemes, ESiteNavNames, TPageData } from '@data/types'
import { getPageNav } from '@data/utils/pageNavs'

export const projectDetailsPageData: TPageData = {
  data: {
    navData: getPageNav(ESiteNavNames.PROJECT_DETAILS_NAV),
    projectData: null,
    relatedProjects: null,
  },
  meta: {
    description: 'This is project details page',
  },
  theme: {
    largeImageTheme: EDetailsPageImageThemes.OSX,
    nav: ESiteNavNames.PROJECT_DETAILS_NAV,
    colorTheme: 'orange',
  },
  content: {},
}
