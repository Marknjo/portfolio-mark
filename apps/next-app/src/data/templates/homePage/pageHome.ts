import { ESiteNavNames, EWorkAvailability, IHomePageData } from '@data/types'
import { aboutText, headerText, summaryText } from './dataHomepageText'
import { pickedProjects } from './dataPickedProjects'
import { favProject } from './dataFavProject'

export const homePageData: IHomePageData = {
  data: {
    pickedProjects,
    favProject,
    navData: [],
  },
  meta: {
    description:
      'Mark Profile page to show case his projects, skills, and share his experience in tech space',
    tagLine: 'Staying on track in tech space',
  },
  theme: {
    nav: ESiteNavNames.TOP_NAV,
  },
  content: {
    hero: {
      isShown: true,
      salutationText: 'Hello',
      headerTitleMain: "I'Am,",
      headerTitleSub: 'Mark Njoroge',
      headerText,
      moreButtonText: 'more about me',
      moreButtonLink: '#about-section',
    },
    about: {
      isShown: true,
      titleMain: 'About Me',
      titleSub: "Let's Start With My Background",
      subTitle: 'My Short Story',
      aboutText,
      contactButtonText: 'Reach Me For A Chat 😊!',
      contactButtonLink: '#contact-section',
      videoLink: 'https://www.youtube.com/embed/SREpK81HHJQ?controls=0',
      videoSplashImg: '',
      detailsTitle: 'Details',
      detailsNameTitle: 'Name',
      detailsNameText: 'Mark Njoroge',
      detailsWorkAvailabilityTitle: 'Work Availability',
      detailsWorkAvailabilityText: EWorkAvailability.AVAILABLE, // dropdown
      detailsLocationTitle: 'Location',
      detailsLocationText: 'Kenya',
      detailsSocialTitle: 'Social',
      // detailsSocialIcons: detailsSocialLinks, // dropdown
    },
    projects: {
      isShown: true,
      titleMain: 'Projects',
      titleSub: 'Here is my latest selection',
      subTitle: 'Top 3 Projects',
      mainImg: 'project-hero-img',
      mainImgAlt: 'Top Picked Projects Showcase',
      viewAllButtonText: 'Visit All Projects',
      viewAllButtonLink: '/projects',
    },
    favProject: {
      isShown: true,
      titleMain: 'I Build Expressive Websites, Awesome, And Catchy.',
      titleSub: "Here's Quick Peak Of My Favorite Project",
      summaryText,
      moreDetailsButtonText: 'Learn More',
      visitProjectButtonText: 'Visit Live Project',
    },
    skills: {
      isShown: true,
      titleMain: 'My Arsenal',
      titleSub: 'Programming Tools In My Toolbox',
      subTitle: 'Fullstack Engineer',
      progsLangTitle: 'General Programming Languages',
      frontendTitle: 'Frontend & UI/UX',
      backendTitle: 'Backend',
      toolsTitle: 'Tools & Other Skills',
      desktopMobileTitle: 'Mobile & Desktop',
      notesTitle: 'A Few Points To keep In Mind',
      notesActiveText: 'Represents I am actively using the skill.',
      notesPassiveText:
        " Represents the skill I've learned but I am not actively using it (Good to note if you may want me to get up to speed with it).",
      notesBottomText: '',
      notesListText: '',
    },
    contact: {
      isShown: true,
      titleMain: 'Contact Me',
      textTitle: ' Here is How To Reach Me',
      blogText: 'Visit My Blog here (coming soon)',
      blogLink: '',
      contactIcon: 'IoIosPhonePortrait',
      contactText: '+(254)727-366-216',
      contactNo:
        'You may also want to reach me and follow me on social media accounts.',
      socialIntoText: 'Below are the links.',
      favSocial: 'LinkedIn',
      socialText: 'Hint! <--fav--> is my favorite Hangout.',
      socialTitle: 'Follow Me',
      // socialIcons: socialLinks,
    },
  },
}
