import { projectDetailsPageData } from '@data/templates/detailsPage/pageDetails'
import { homePageData } from '@data/templates/homePage/pageHome'
import { EPagesTemplateTypes, IPage } from '@data/types'

export const appPages: Array<IPage> = [
  {
    id: 'p1',
    templateType: EPagesTemplateTypes.HOME,
    templateContent: homePageData,
  },
  {
    id: 'p2',
    templateType: EPagesTemplateTypes.PROJECT_DETAILS_PAGE,
    templateContent: projectDetailsPageData,
  },
]
