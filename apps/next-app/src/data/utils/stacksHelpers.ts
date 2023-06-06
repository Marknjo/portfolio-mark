import { stacks } from '@data/generalData/dataStacks'
import {
  EStackCategories,
  EStackFullNames,
  IProjectTag,
  IStack,
} from '@data/types'
import { filterMappedDataByFields, mapDataFieldAsKey } from './mapFilesIdAsKey'

/// @NOTE: Extract  this func to a generic if there is similar data patterns
export const mapStacksByCategory = (stackData: Array<IStack> = getStacks()) => {
  const stacksCatCollection: { [key: string]: Array<IStack> } = {}

  stackData.forEach(stack => {
    const category = stack.category as string
    const foundAddedStack = stacksCatCollection[category]

    if (foundAddedStack && foundAddedStack.length > 0) {
      stacksCatCollection[category] = [stack, ...foundAddedStack]
    } else {
      stacksCatCollection[category] = [stack]
    }
  })

  return stacksCatCollection
}

export const getStacks = () => stacks
export const mappedStacksByIds = mapDataFieldAsKey<IStack>(stacks, 'id')
export const mappedStacksByCategories = mapStacksByCategory()

export const mappedStacksByNames = mapDataFieldAsKey<IStack>(
  stacks,
  'name',
) as { [key: string]: IStack }

export const getStackTags = (
  fields: Array<EStackFullNames>,
): Array<IProjectTag> => {
  const filteredStacks = filterMappedDataByFields<IStack>(
    fields,
    mappedStacksByNames,
  )

  return filteredStacks.map(stack => ({
    id: stack.id,
    tagName: stack.tagName,
    colorTheme: stack.tagColorTheme,
  }))
}

export const getGroupedStacksByName = (stackNames: Array<EStackFullNames>) =>
  filterMappedDataByFields<IStack>(stackNames, mappedStacksByNames)

/// @NOTE: Extract this func to a generic if there is similar data patterns
export const getGroupedStacksByCategories = (
  stackCategories: Array<EStackCategories>,
) =>
  stackCategories.map(category => {
    const foundCategories = mappedStacksByCategories[category]

    if (foundCategories) {
      return {
        [category]: foundCategories,
      }
    }

    return {
      [category]: [],
    }
  })

export const getCategoryStacks = (stackCategory: EStackCategories) =>
  mappedStacksByCategories[stackCategory]

export const getStacksNames = () => Object.keys(mappedStacksByNames)
