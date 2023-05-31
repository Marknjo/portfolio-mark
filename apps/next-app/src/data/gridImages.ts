import { ICardDetailsGallery } from 'ui'

export type GalleryImgInterface = Pick<
  ICardDetailsGallery,
  'imgName' | 'alt' | 'id'
>

export const gridImages: Array<GalleryImgInterface> = [
  {
    id: 1,
    imgName: 'gallery-skills-section',
    alt: 'A screenshot of project a gallery section',
  },
  {
    id: 2,
    imgName: 'gallery-contact-section',
    alt: 'A screenshot of project contact section',
  },
  {
    id: 3,
    imgName: 'gallery-projects-section',
    alt: 'A screenshot of projects section design',
  },
  {
    id: 4,
    imgName: 'gallery-fav-section',
    alt: 'A screenshot of project favorite section design',
  },
]
