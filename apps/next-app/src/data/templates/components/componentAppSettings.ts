import { appFiles } from '@data/generalData/dataFiles'
import { IAppSetting } from '@data/types'
import { ctaComponent } from './componentCta'
import { footerComponent } from './componentFooter'
import { navComponent } from './componentNav'

const cvConfig = {
  preview: {
    tooltipText: 'View My CV on Google Drive',
    link: 'https://drive.google.com/file/d/15RAZR6r-7k-GOu1vSLyZ3_lVzVvykL0b/view?usp=sharing',
    btnText: 'View',
    icon: 'HiExternalLink',
  },
  download: {
    tooltipText: 'Download My CV From Google Drive',
    link: 'https://drive.google.com/uc?id=15RAZR6r-7k-GOu1vSLyZ3_lVzVvykL0b&export=download',
    btnText: 'CV',
    icon: 'FaCloudDownloadAlt',
  },
  theme: {
    isProtected: false,
  },
}

/// @TODO: Fill in the details appropriately
export const appSettings: IAppSetting = {
  data: {
    ctaConfig: ctaComponent,
    footerConfig: footerComponent,
    mainNavConfig: navComponent,
    cvConfig,
  },
  theme: {
    accentThemeColor: 'teal',
    fontFamily: '',
    primaryThemeColor: 'orange',
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
