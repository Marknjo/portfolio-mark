import { ISocialLink } from '@data/types'
import { socialLinks } from '@data/generalData/dataSocialLinks'
import {
  filterMappedDataByFields,
  mapDataFieldAsKey,
} from '../../utils/mapFilesIdAsKey'

const mappedSocialIconsById = mapDataFieldAsKey(socialLinks, 'id')

export const aboutSocialIcons = filterMappedDataByFields<ISocialLink>(
  ['sl1', 'sl2', 'sl3'],
  mappedSocialIconsById,
)

export const contactSocialIcons = filterMappedDataByFields<ISocialLink>(
  ['sl1', 'sl2', 'sl3', 'sl4'],
  mappedSocialIconsById,
)
