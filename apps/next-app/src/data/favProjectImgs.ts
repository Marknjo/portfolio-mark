import { IGalleryImageCard } from 'ui'

export type IFavGallery = Omit<IGalleryImageCard, 'asNavLink' | 'onClick'>

export type FavProjectGalleryImgs = Array<IFavGallery>

export const favProjectImgs: FavProjectGalleryImgs = [
  {
    id: 1,
    imgName: 'hero-section-img',
    alt: 'Favorite Project Hero image',
    title: 'Hero Section',
    largeImg: '',
  },
  {
    id: 2,
    imgName: 'hero-section-img',
    alt: 'Favorite Project Hero image',
    title: 'Favorite Project Section',
    largeImg: '',
  },
  {
    id: 3,
    imgName: 'hero-section-img',
    alt: 'Favorite Project Hero image',
    title: 'Project Contact Section',
    largeImg: '',
  },
  {
    id: 4,
    imgName: 'hero-section-img',
    alt: 'Favorite Project Hero image',
    title: 'Hero Section',
    largeImg: '',
  },
  {
    id: 5,
    imgName: 'hero-section-img',
    alt: 'Favorite Project Hero image',
    title: 'Section Contact Us',
    largeImg: '',
  },
  {
    id: 6,
    imgName: 'hero-section-img',
    alt: 'Favorite Project Hero image',
    title: 'Raw Drafts',
    largeImg: '',
  },
]
