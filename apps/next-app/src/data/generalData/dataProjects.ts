import { IProject, TCardSlimGalleryData } from '@data/types'

import {
  favProjectsGalleryImgsPicker,
  imagePicker,
} from '@data/utils/galleryHelpers'
import { projectCategories } from './projects/projectCategories'
import {
  afriHickr,
  lukuFiti,
  markProfile,
  optiPlanner,
  pesaSync,
} from './projects/textData'

import { galleryImgs } from './projects/projectGalleries'
import { projectStacks } from './projects/projectStacks'

const favProject = favProjectsGalleryImgsPicker([
  'g7',
  'g7',
  'g7',
  'g7',
  'g7',
  'g7',
])

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
    introSummaryText: {
      text: afriHickr.introSummaryText,
      type: 'paragraph',
    },
    goalsText: {
      text: afriHickr.goalsText,
      type: 'paragraph',
    },
    textStacksText: {
      text: afriHickr.textStacksText,
      type: 'mixed',
      delimiter: '<--l-->',
    },
    challengesText: {
      text: afriHickr.challengesText,
      type: 'mixed',
      delimiter: '<--l-->',
    },
    lessonsText: {
      text: afriHickr.lessonsText as [[[key: string], string]],
      type: 'mixed',
    },
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
    introSummaryText: {
      text: optiPlanner.introSummaryText as string,
      type: 'paragraph',
    },
    goalsText: {
      text: optiPlanner.goalsText as string,
      type: 'paragraph',
    },
    textStacksText: {
      text: optiPlanner.textStacksText as string,
      type: 'mixed',
      delimiter: '<--l-->',
    },
    challengesText: {
      text: optiPlanner.challengesText as string,
      type: 'mixed',
      delimiter: '<--l-->',
    },
    lessonsText: {
      text: optiPlanner.lessonsText as [[[key: string], string]],
      type: 'mixed',
    },

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
    isFavorite: true,

    /// Text content
    excerpt: lukuFiti.excerpt,
    introSummaryText: {
      text: lukuFiti.introSummaryText as string,
      type: 'paragraph',
    },
    goalsText: {
      text: lukuFiti.goalsText as string,
      type: 'paragraph',
    },
    textStacksText: {
      text: lukuFiti.textStacksText as string,
      type: 'mixed',
      delimiter: '<--l-->',
    },
    challengesText: {
      text: lukuFiti.challengesText as string,
      type: 'mixed',
      delimiter: '<--l-->',
    },
    lessonsText: {
      text: lukuFiti.lessonsText as [[[key: string], string]],
      type: 'mixed',
    },
    favGalleryText: {
      text: lukuFiti.favGalleryText as string,
      type: 'paragraph',
    },

    /// Images
    cardImgId: 'g2',
    introLgImg: imagePicker('g11', true) as TCardSlimGalleryData,
    footerLgImg: imagePicker('g14', true) as TCardSlimGalleryData,

    /// Relations to other data types
    introStacks: projectStacks.fitHustle.intro,
    tags: projectStacks.fitHustle.tags,
    stacks: projectStacks.fitHustle.allStacks,
    gallery: galleryImgs.fitHustle,
    favGallery: favProject,
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
    introSummaryText: {
      text: pesaSync.introSummaryText as string,
      type: 'paragraph',
    },
    goalsText: {
      text: pesaSync.goalsText as string,
      type: 'paragraph',
    },
    textStacksText: {
      text: pesaSync.textStacksText as string,
      type: 'mixed',
      delimiter: '<--l-->',
    },
    challengesText: {
      text: pesaSync.challengesText as string,
      type: 'mixed',
      delimiter: '<--l-->',
    },
    lessonsText: {
      text: pesaSync.lessonsText as [[[key: string], string]],
      type: 'mixed',
    },

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
    introSummaryText: {
      text: markProfile.introSummaryText as string,
      type: 'paragraph',
    },
    goalsText: {
      text: markProfile.goalsText as string,
      type: 'paragraph',
    },
    textStacksText: {
      text: markProfile.textStacksText as string,
      type: 'mixed',
      delimiter: '<--l-->',
    },
    challengesText: {
      text: markProfile.challengesText as string,
      type: 'mixed',
      delimiter: '<--l-->',
    },
    lessonsText: {
      text: markProfile.lessonsText as [[[key: string], string]],
      type: 'mixed',
    },

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
