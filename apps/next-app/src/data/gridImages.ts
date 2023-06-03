import { ICardDetailsGallery } from 'ui'

export type IGalleryImg = Pick<
  ICardDetailsGallery,
  'imgName' | 'alt' | 'id' | 'title'
>

export const gridImages: Array<IGalleryImg> = [
  {
    id: 1,
    imgName: 'gallery-profile-lg-img',
    alt: 'A screenshot of project profile section design',
    title: 'Profile section design',
  },
  {
    id: 2,
    imgName: 'gallery-skills-section',
    alt: 'A screenshot of project a gallery section',
    title: 'Project a gallery section',
  },
  {
    id: 3,
    imgName: 'gallery-contact-section',
    alt: 'A screenshot of project contact section',
    title: 'Project contact section',
  },
  {
    id: 4,
    imgName: 'gallery-projects-section',
    alt: 'A screenshot of projects section design',
    title: 'Projects section design',
  },
  {
    id: 5,
    imgName: 'gallery-fav-section',
    alt: 'A screenshot of project favorite section design',
    title: 'Project favorite section design',
  },
]
