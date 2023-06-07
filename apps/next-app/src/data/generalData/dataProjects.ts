import { IProject, TCardSlimGalleryData } from '@data/types'

import { imagePicker } from '@data/utils/galleryHelpers'
import { projectCategories } from './projects/projectCategories'
import {
  afriHickr,
  fitHustle,
  markProfile,
  optiPlanner,
  pesaSync,
} from './projects/textData'

import { galleryImgs } from './projects/projectGalleries'
import { projectStacks } from './projects/projectStacks'

export const projectsData: Array<IProject> = [
  {
    id: 'p1',
    slug: 'afri-hiqar',
    title: 'AfriHiqar',
    category: projectCategories[0],
    liveLink: 'coming soon',
    isPicked: true,

    /// Text content
    excerpt: afriHickr.excerpt,
    introSummaryText: afriHickr.introSummaryText,
    goalsText: afriHickr.goalsText,
    textStacksText: afriHickr.textStacksText,
    challengesText: afriHickr.challengesText,
    lessonsText: afriHickr.lessonsText,

    /// Images
    cardImgId: 'g2',
    introLgImg: imagePicker('g11', true) as TCardSlimGalleryData,
    footerLgImg: imagePicker('g14', true) as TCardSlimGalleryData,

    /// Relations to other data types
    introStacks: projectStacks.afriHicker.intro,
    tags: projectStacks.afriHicker.tags,
    stacks: projectStacks.afriHicker.allStacks,
    gallery: galleryImgs.afriHicker,
  },
  {
    id: 'p2',
    slug: 'opti-planner',
    title: 'OptiPlanner',
    category: projectCategories[3],
    liveLink: 'coming soon',
    isPicked: true,

    /// Text content
    excerpt: optiPlanner.excerpt,
    introSummaryText: optiPlanner.introSummaryText,
    goalsText: optiPlanner.goalsText,
    textStacksText: optiPlanner.textStacksText,
    challengesText: optiPlanner.challengesText,
    lessonsText: optiPlanner.lessonsText as [[[key: string], string]],

    /// Images
    cardImgId: 'g2',
    introLgImg: imagePicker('g11', true) as TCardSlimGalleryData,
    footerLgImg: imagePicker('g14', true) as TCardSlimGalleryData,

    /// Relations to other data types
    introStacks: projectStacks.optiPlanner.intro,
    tags: projectStacks.optiPlanner.tags,
    stacks: projectStacks.optiPlanner.allStacks,
    gallery: galleryImgs.optiPlanner,
  },
  {
    id: 'p3',
    slug: 'luku-fiti',
    title: 'LukuFiti',
    category: projectCategories[2],
    liveLink: 'coming soon',

    /// Text content
    excerpt: fitHustle.excerpt,
    introSummaryText: fitHustle.introSummaryText,
    goalsText: fitHustle.goalsText,
    textStacksText: fitHustle.textStacksText,
    challengesText: fitHustle.challengesText,
    lessonsText: fitHustle.lessonsText as [[[key: string], string]],

    /// Images
    cardImgId: 'g2',
    introLgImg: imagePicker('g11', true) as TCardSlimGalleryData,
    footerLgImg: imagePicker('g14', true) as TCardSlimGalleryData,

    /// Relations to other data types
    introStacks: projectStacks.fitHustle.intro,
    tags: projectStacks.fitHustle.tags,
    stacks: projectStacks.fitHustle.allStacks,
    gallery: galleryImgs.fitHustle,
  },
  {
    id: 'p4',
    slug: 'pesa-sync',
    title: 'PesaSync',
    category: projectCategories[1],
    liveLink: 'coming soon',
    isPicked: true,

    /// Text content
    excerpt: pesaSync.excerpt,
    introSummaryText: pesaSync.introSummaryText,
    goalsText: pesaSync.goalsText,
    textStacksText: pesaSync.textStacksText,
    challengesText: pesaSync.challengesText,
    lessonsText: pesaSync.lessonsText as [[[key: string], string]],

    /// Images
    cardImgId: 'g2',
    introLgImg: imagePicker('g11', true) as TCardSlimGalleryData,
    footerLgImg: imagePicker('g14', true) as TCardSlimGalleryData,

    /// Relations to other data types
    introStacks: projectStacks.pesaSync.intro,
    stacks: projectStacks.pesaSync.allStacks,
    tags: projectStacks.pesaSync.tags,
    gallery: galleryImgs.pesaSync,
  },
  {
    id: 'p5',
    // slug: 'mark-njoroge-profile',
    slug: 'project-details',
    title: 'Dev Profile',
    category: projectCategories[5],
    liveLink: 'coming soon',

    /// Text content
    excerpt: markProfile.excerpt,
    introSummaryText: markProfile.introSummaryText,
    goalsText: markProfile.goalsText,
    textStacksText: markProfile.textStacksText,
    challengesText: markProfile.challengesText,
    lessonsText: markProfile.lessonsText as [[[key: string], string]],

    /// Images
    cardImgId: 'g2',
    introLgImg: imagePicker('g11', true) as TCardSlimGalleryData,
    footerLgImg: imagePicker('g14', true) as TCardSlimGalleryData,

    /// Relations to other data types
    introStacks: projectStacks.markProfile.intro,
    tags: projectStacks.markProfile.tags,
    stacks: projectStacks.markProfile.allStacks,
    gallery: galleryImgs.markProfile,
  },
]
