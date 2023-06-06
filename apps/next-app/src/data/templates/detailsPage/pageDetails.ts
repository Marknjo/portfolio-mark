import {
  EDetailsPageImageThemes,
  ESiteNavNames,
  IProjectDetailsPageData,
} from '@data/types'

export const projectDetailsPageData: IProjectDetailsPageData = {
  meta: {
    description: 'This is project details page',
  },
  theme: {
    largeImageTheme: EDetailsPageImageThemes.OSX,
    nav: ESiteNavNames.PROJECT_DETAILS_NAV,
  },
  content: {
    hero: {
      stacksTitle: 'Tech Stack',
      stacksButtonText: 'View All Stacks',
      stacksButtonLink: '#stacks',
      introTextTitle: 'Introducing',
      introButtonText: 'View Live Project',
    },
    theChallenge: {
      headerTitleMain: 'The Challenge',
      headerTitleSub: 'Thought Process Walkthrough',
      goalsTitle: 'Project Goal',
      stacksTitle: 'Why The Stack',
    },
    gallery: {
      headerTitleMain: 'Gallery',
      headerTitleSub: 'A Collection Of The Project Sections Screenshots',
    },
    summary: {
      headerTitleMain: 'Project Summary',
      headerTitleSub: "Here Are The Project's Challenges And Lessons Learnt",
      challengesTitle: 'Projects Adversities',
      lessonsTitle: 'Lessons Learnt',
    },
    cta: {
      headerTitle: 'View Similar Projects',
      paginationPrevText: 'Prev',
      paginationNextText: 'Next',
    },
  },
}
