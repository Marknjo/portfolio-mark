import { appFiles } from '@data/generalData/dataFiles'
import { EWorkAvailability, IHomePageContentV1 } from '@data/types'
import { aboutText, headerText } from './dataHomepageText'

export const homePageContentV1: IHomePageContentV1 = {
  hero: {
    isShown: true,
    salutationText: 'Hello',
    headerTitleMain: "I'Am,",
    headerTitleSub: 'Mark Njoroge',
    headerText: {
      text: headerText,
      type: 'paragraph',
      paraOptions: {
        isStyled: false,
      },
    },
    moreButtonText: 'more about me',
    moreButtonLink: '#about-section',
    profileImage: appFiles[0].fileName,
  },
  about: {
    isShown: true,
    titleMain: 'About Me',
    titleSub: "Let's Start With My Background",
    subTitle: 'My Short Story',
    aboutText: {
      text: aboutText,
      type: 'paragraph',
    },
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
    titleSub: "Here's A Quick Peak Of My Favorite Project",
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
    blogText: 'Visit My Blog here',
    blogLink: '',
    contactIcon: 'IoIosPhonePortrait',
    contactText: 'If you prefer Calling, here is my number.',
    contactNo: '+(254)727-366-216',
    socialIntoText: 'Below are the links.',
    favSocial: 'LinkedIn',
    socialText:
      'You may also want to reach me and follow me on social media accounts',
    socialHintText: 'Hint! <--fav--> is my favorite Hangout.',
    socialTitle: 'Follow Me',
    // socialIcons: socialLinks,
  },
}
