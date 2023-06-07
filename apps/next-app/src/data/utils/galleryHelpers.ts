import { appFiles } from '@data/generalData/dataFiles'
import { IGallery, TCardSlimGalleryData } from '@data/types'
import { mapDataFieldAsKey } from './mapFilesIdAsKey'

const mappedImgsData = mapDataFieldAsKey(appFiles, 'id')

export const imagePicker = (
  imgId: string,
  isSlimImgData: boolean = false,
): IGallery | TCardSlimGalleryData => {
  const fullImgData = mappedImgsData[imgId]

  if (isSlimImgData) {
    return {
      alt: fullImgData.alt,
      fileName: fullImgData.fileName,
    }
  }

  return fullImgData
}

export const favProjectsGalleryImgsPicker = (imgIds: Array<string>) =>
  imgIds.map(id => imagePicker(id)) as Array<IGallery>
