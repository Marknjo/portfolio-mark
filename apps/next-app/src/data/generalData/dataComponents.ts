import { appSettings } from '@data/templates/components/componentAppSettings'
import { ctaComponent } from '@data/templates/components/componentCta'
import { footerComponent } from '@data/templates/components/componentFooter'
import { navComponent } from '@data/templates/components/componentNav'
import { EGeneralComponents, IComponent } from '@data/types'

export const componentsData: Array<IComponent> = [
  {
    id: 'c1',
    templateType: EGeneralComponents.CTA,
    templateContent: ctaComponent,
  },
  {
    id: 'c2',
    templateType: EGeneralComponents.NAV,
    templateContent: navComponent,
  },
  {
    id: 'c3',
    templateType: EGeneralComponents.FOOTER,
    templateContent: footerComponent,
  },
  {
    id: 'c4',
    templateType: EGeneralComponents.APP_SETTINGS,
    templateContent: appSettings,
  },
]
