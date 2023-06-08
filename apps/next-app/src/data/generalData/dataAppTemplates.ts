import { projectDetailPageContentV1 } from '@data/templates/detailsPage/projectDetailPageContentV1'
import { homePageContentV1 } from '@data/templates/homePage/homePageContentV1'
import { EPagesTemplateTypes, ITemplate } from '@data/types'

export const dataAppTemplates: Array<ITemplate> = [
  {
    id: 'pT1',
    templateType: EPagesTemplateTypes.HOME,
    templateContent: homePageContentV1,
  },
  {
    id: 'pT2',
    templateType: EPagesTemplateTypes.PROJECT_DETAILS_PAGE,
    templateContent: projectDetailPageContentV1,
  },
]
