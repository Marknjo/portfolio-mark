import { appFiles } from '@data/generalData/dataFiles'
import { IAppSetting } from '@data/types'

/// @TODO: Fill in the details appropriately
export const appSettings: IAppSetting = {
  theme: {
    accentThemeColor: '',
    fontFamily: '',
    primaryThemeColor: '',
    siteTitle: '',
    darkThemeColor: '',
  },
  content: {
    profile: {
      name: 'Mark Njoroge',
      profileImg: appFiles[0],
      bio: 'My bio',
      cv: appFiles[0],
      cvUrl: '',
      tagLine: '',
    },
    google: {
      googleId: '',
      googleTagsId: '',
      searchConsoleConfig: '',
    },
  },
}
