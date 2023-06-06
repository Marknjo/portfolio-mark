import { ESiteNavNames, INavLink } from '@data/types'
import { siteNav } from '../generalData/dataSiteNav'

export const getPageNav = (navName: ESiteNavNames) => {
  const foundNav = siteNav.find(navItem => navItem.name === navName)

  if (!foundNav) return []

  return foundNav.navLinksRef as Array<INavLink>
}
