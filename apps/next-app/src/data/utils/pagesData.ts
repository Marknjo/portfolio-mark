import { appPages } from '@data/generalData/dataPages'
import { EPagesTemplateTypes } from '@data/types'
import { mapDataFieldAsKey } from './mapFilesIdAsKey'

const mappedPagesByName = mapDataFieldAsKey(appPages, 'templateType')

export const getPageTemplateContent = <T extends object>(
  pageTemplate: EPagesTemplateTypes,
): { id: string; templateType: EPagesTemplateTypes; templateContent: T } => {
  const data = mappedPagesByName[pageTemplate]

  return {
    id: data.id,
    templateType: data.templateType as EPagesTemplateTypes,
    templateContent: data.templateContent as T,
  }
}
