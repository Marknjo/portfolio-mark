import { getPageNav } from '@data/utils/pageNavs'
import { IFooterComponentData, ESiteNavNames } from '../../types'

export const footerComponent: IFooterComponentData = {
  data: {
    nav: getPageNav(ESiteNavNames.FOOTER_NAV),
  },
  theme: {
    colorTheme: 'orange',
    fontFamily: '',

    isProtected: false,
  },
  content: {
    logoText: 'Mark Njoroge',
    logoImg: '',
    copyrightText: 'Mark Njoroge Profile',
  },
}
