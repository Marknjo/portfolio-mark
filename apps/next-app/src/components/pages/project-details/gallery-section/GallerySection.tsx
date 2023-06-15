import { SliderProvider } from '@store/context/slider'

import GalleryRoot from './GalleryRoot'

const GallerySection = () => (
  <SliderProvider>
    <GalleryRoot />
  </SliderProvider>
)

export default GallerySection
