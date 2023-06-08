import { IProjectDetailsContentV1 } from '@data/types'

export const projectDetailPageContentV1: IProjectDetailsContentV1 = {
  hero: {
    isShown: true,
    stacksTitle: 'Tech Stack',
    stacksButtonText: 'View All Stacks',
    stacksButtonLink: '#stacks',
    introTextTitle: 'Introducing',
    introButtonText: 'View Live Project',
  },
  theChallenge: {
    isShown: true,
    headerTitleMain: 'The Challenge',
    headerTitleSub: 'Thought Process Walkthrough',
    goalsTitle: 'Project Goal',
    stacksTitle: 'Why The Stack',
  },
  gallery: {
    isShown: true,
    headerTitleMain: 'Gallery',
    headerTitleSub: 'A Collection Of The Project Sections Screenshots',
  },
  summary: {
    isShown: true,
    headerTitleMain: 'Project Summary',
    headerTitleSub: "Here Are The Project's Challenges And Lessons Learnt",
    challengesTitle: 'Projects Adversities',
    lessonsTitle: 'Lessons Learnt',
  },
  cta: {
    isShown: true,
    headerTitle: 'View Similar Projects',
    paginationPrevText: 'Prev',
    paginationNextText: 'Next',
  },
}
