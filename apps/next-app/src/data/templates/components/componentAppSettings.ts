import { appFiles } from '@data/generalData/dataFiles'
import { IAppSetting } from '@data/types'
import { ctaComponent } from './componentCta'
import { footerComponent } from './componentFooter'
import { navComponent } from './componentNav'

/// @TODO: Fill in the details appropriately
export const appSettings: IAppSetting = {
  data: {
    ctaConfig: ctaComponent,
    footerConfig: footerComponent,
    mainNavConfig: navComponent,
  },
  theme: {
    accentThemeColor: 'teal',
    fontFamily: '',
    primaryThemeColor: 'teal',
    darkThemeColor: '',
  },
  content: {
    generalSettings: {
      isProtected: true,
      adminEmail: 'admin@markmarknjoroge.com',
      siteTitle: 'Mark Njoroge',
      tagLine: 'Commit, Consistency, & Care',
      blogBio: '',
      projectsBio: '',
    },
    profile: {
      isProtected: true,
      name: 'Mark Njoroge',
      profileImg: appFiles[0],
      bio: 'My bio',
      cv: appFiles[0],
      cvUrl: '',
      tagLine: '',
    },
    google: {
      isProtected: false,
      googleId: '',
      googleTagsId: '',
      searchConsoleConfig: '',
    },
  },
}
