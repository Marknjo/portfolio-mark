import { IGallery } from '@data/types'
import {
  filterMappedDataByFields,
  mapDataFieldAsKey,
} from '@data/utils/mapFilesIdAsKey'
import { appFiles } from '../dataFiles'

/// Filter images for AfriHickr project
const mappedAfriHickerFiles = mapDataFieldAsKey<IGallery>(appFiles, 'id')
const groupAfriHickerFilesByIds = filterMappedDataByFields<IGallery>(
  ['g8', 'g6', 'g3', 'g5', 'g4'],
  mappedAfriHickerFiles,
)

/// @TODO: add images for optiPlanner,fitHustle,pesaSync, & markProfile

/// Overall export
export const galleryImgs = {
  afriHicker: groupAfriHickerFilesByIds,
  optiPlanner: groupAfriHickerFilesByIds,
  fitHustle: groupAfriHickerFilesByIds,
  pesaSync: groupAfriHickerFilesByIds,
  markProfile: groupAfriHickerFilesByIds,
}
