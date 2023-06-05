import { EStackFullNames } from '@data/types'
import {
  getGroupedStacksByName,
  mapStacksByCategory,
} from '@data/utils/stacksHelpers'

/// filter tech stacks for AfriHickr project
const afriHickerIntroMappedStacks = getGroupedStacksByName([
  EStackFullNames.REACT,
  EStackFullNames.CHAKRA,
  EStackFullNames.NEXT_JS,
  EStackFullNames.POSTGRES,
])

const afriHickerAllMappedStacks = [
  ...afriHickerIntroMappedStacks,
  ...getGroupedStacksByName([
    EStackFullNames.JAVASCRIPT,
    EStackFullNames.NODE_JS,
    EStackFullNames.POSTGRES,
    EStackFullNames.DOCKER,
  ]),
]

const afriHicker = {
  intro: mapStacksByCategory(afriHickerIntroMappedStacks),
  allStacks: mapStacksByCategory(afriHickerAllMappedStacks),
}

/// @TODO: Below points
///  - filter tech stacks for OptiPlanner project
///  - filter tech stacks for FitHustle project
///  - filter tech stacks for PesaSync project
///  - filter tech stacks for markProfile project

export const projectStacks = {
  afriHicker,
  optiPlanner: afriHicker,
  fitHustle: afriHicker,
  pesaSync: afriHicker,
  markProfile: afriHicker,
}
