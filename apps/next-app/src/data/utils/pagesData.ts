import { dataAppPages } from '@data/generalData/dataAppPages'
import { dataAppTemplates } from '@data/generalData/dataAppTemplates'
import {
  EPagesTemplateTypes,
  IPage,
  ITemplate,
  TPageData,
  TPageTemplateContent,
} from '@data/types'
import { mapDataFieldAsKey } from './mapFilesIdAsKey'

const mappedAppPagesByName = mapDataFieldAsKey<IPage>(dataAppPages, 'pageName')
const mappedAppTemplatesByName = mapDataFieldAsKey<ITemplate>(
  dataAppTemplates,
  'id',
)

export function getTemplateContent<T extends TPageTemplateContent>(
  templateId: ITemplate['id'],
): T {
  return mappedAppTemplatesByName[templateId].templateContent as T
}

export const getPageTemplateContent = <T extends TPageTemplateContent>(
  pageTemplate: EPagesTemplateTypes,
): TPageData => {
  const foundPage = mappedAppPagesByName[pageTemplate]
  const content = mappedAppTemplatesByName[foundPage.templateId]
    .templateContent as T

  return {
    data: foundPage.data,
    meta: foundPage.meta,
    theme: foundPage.theme,
    content,
  }
}

// export function getProjectDetailsPageContent(
//   pageTemplate: EPagesTemplateTypes,
// ) {
//   const foundPage = mappedAppPagesByName[pageTemplate]

//   return {
//     data: foundPage.data,
//     meta: foundPage.meta,
//     theme: foundPage.theme,
//   }
// }
