import { SliderProvider } from '@store/context/slider'
import { IGalleryImg } from '@data/gridImages'

import GalleryRoot from './GalleryRoot'

const GallerySection = () => (
  <SliderProvider<IGalleryImg>>
    <GalleryRoot />
  </SliderProvider>
)

export default GallerySection
