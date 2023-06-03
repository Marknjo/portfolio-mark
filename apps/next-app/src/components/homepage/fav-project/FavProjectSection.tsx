import { IFavGallery } from '@data/favProjectImgs'
import { SliderProvider } from '@store/context/slider'

import FavProjectRoot from './FavProjectRoot'

const FavProjectSection = () => (
  <SliderProvider<IFavGallery>>
    <FavProjectRoot />
  </SliderProvider>
)

export default FavProjectSection
