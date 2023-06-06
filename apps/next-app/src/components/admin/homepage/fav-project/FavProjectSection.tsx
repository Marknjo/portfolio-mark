import { SliderProvider } from '@store/context/slider'

import FavProjectRoot from './FavProjectRoot'

const FavProjectSection = () => (
  <SliderProvider>
    <FavProjectRoot />
  </SliderProvider>
)

export default FavProjectSection
