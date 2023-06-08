import { projectDetailsPageData } from '@data/templates/detailsPage/pageDetails'
import { homePageData } from '@data/templates/homePage/pageHome'
import { EPagesTemplateTypes, IPage } from '@data/types'

export const dataAppPages: Array<IPage> = [
  {
    id: 'p1',
    pageName: EPagesTemplateTypes.HOME,
    templateId: 'pT1',
    ...homePageData,
  },
  {
    id: 'p2',
    pageName: EPagesTemplateTypes.PROJECT_DETAILS_PAGE,
    templateId: 'pT2',
    ...projectDetailsPageData,
  },
]
