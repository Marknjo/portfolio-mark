import { IProject } from '@data/types'
import { projectCategories } from './projects/projectCategories'
import {
  afriHickr,
  fitHustle,
  markProfile,
  optiPlanner,
  pesaSync,
} from './projects/textData'
import { appFiles } from './dataFiles'
import { galleryImgs } from './projects/projectGalleries'
import { projectStacks } from './projects/projectStacks'

export const projectsData: Array<IProject> = [
  {
    id: 'p1',
    slug: 'afri-hickr',
    title: 'AfriHickr',
    category: projectCategories[0].id,
    liveLink: 'coming soon',

    /// Text content
    excerpt: afriHickr.excerpt,
    introSummaryText: afriHickr.introSummaryText,
    goalsText: afriHickr.goalsText,
    textStacksText: afriHickr.textStacksText,
    challengesText: afriHickr.challengesText,
    lessonsText: afriHickr.lessonsText,

    /// Images
    introLgImg: appFiles[10].id, // relationship
    footerLgImg: appFiles[13].id, // relationship

    /// Relations to other data types
    introStacks: projectStacks.afriHicker.intro, // dropdown - ref to stacks
    stacks: projectStacks.afriHicker.allStacks, // dropdown - ref to stacks
    gallery: galleryImgs.afriHicker, // dropdown - ref to stacks
  },
  {
    id: 'p2',
    slug: 'opti-planner',
    title: 'OptiPlanner',
    category: projectCategories[3].id,
    liveLink: 'coming soon',

    /// Text content
    excerpt: optiPlanner.excerpt,
    introSummaryText: optiPlanner.introSummaryText,
    goalsText: optiPlanner.goalsText,
    textStacksText: optiPlanner.textStacksText,
    challengesText: optiPlanner.challengesText,
    lessonsText: optiPlanner.lessonsText,

    /// Images
    introLgImg: appFiles[10].id, // relationship
    footerLgImg: appFiles[13].id, // relationship

    /// Relations to other data types
    introStacks: projectStacks.optiPlanner.intro, // dropdown - ref to stacks
    stacks: projectStacks.optiPlanner.allStacks, // dropdown - ref to stacks
    gallery: galleryImgs.optiPlanner, // dropdown - ref to stacks
  },
  {
    id: 'p3',
    slug: 'fit-hustle',
    title: 'fitHustle',
    category: projectCategories[2].id,
    liveLink: 'coming soon',

    /// Text content
    excerpt: fitHustle.excerpt,
    introSummaryText: fitHustle.introSummaryText,
    goalsText: fitHustle.goalsText,
    textStacksText: fitHustle.textStacksText,
    challengesText: fitHustle.challengesText,
    lessonsText: fitHustle.lessonsText,

    /// Images
    introLgImg: appFiles[10].id, // relationship
    footerLgImg: appFiles[13].id, // relationship

    /// Relations to other data types
    introStacks: projectStacks.fitHustle.intro, // dropdown - ref to stacks
    stacks: projectStacks.fitHustle.allStacks, // dropdown - ref to stacks
    gallery: galleryImgs.fitHustle, // dropdown - ref to stacks
  },
  {
    id: 'p4',
    slug: 'pesa-sync',
    title: 'PesaSync',
    category: projectCategories[1].id,
    liveLink: 'coming soon',

    /// Text content
    excerpt: pesaSync.excerpt,
    introSummaryText: pesaSync.introSummaryText,
    goalsText: pesaSync.goalsText,
    textStacksText: pesaSync.textStacksText,
    challengesText: pesaSync.challengesText,
    lessonsText: pesaSync.lessonsText,

    /// Images
    introLgImg: appFiles[10].id, // relationship
    footerLgImg: appFiles[13].id, // relationship

    /// Relations to other data types
    introStacks: projectStacks.pesaSync.intro, // dropdown - ref to stacks
    stacks: projectStacks.pesaSync.allStacks, // dropdown - ref to stacks
    gallery: galleryImgs.pesaSync, // dropdown - ref to stacks
  },
  {
    id: 'p5',
    slug: 'mark-njoroge-profile',
    title: 'Dev Profile',
    category: projectCategories[5].id,
    liveLink: 'coming soon',

    /// Text content
    excerpt: markProfile.excerpt,
    introSummaryText: markProfile.introSummaryText,
    goalsText: markProfile.goalsText,
    textStacksText: markProfile.textStacksText,
    challengesText: markProfile.challengesText,
    lessonsText: markProfile.lessonsText,

    /// Images
    introLgImg: appFiles[10].id, // relationship
    footerLgImg: appFiles[13].id, // relationship

    /// Relations to other data types
    introStacks: projectStacks.markProfile.intro, // dropdown - ref to stacks
    stacks: projectStacks.markProfile.allStacks, // dropdown - ref to stacks
    gallery: galleryImgs.markProfile, // dropdown - ref to stacks
  },
]
