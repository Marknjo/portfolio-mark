import { INavLink, IPageNav, ESiteNavNames } from '../types'

const footerNavLinks: Array<INavLink> = [
  {
    id: 'f1',
    title: 'Home',
    link: '/',
  },
  {
    id: 'f2',
    title: 'Terms',
    link: '#',
    description: 'Coming Soon',
  },
  {
    id: 'f3',
    title: 'Privacy',
    link: '#',
    description: 'Coming Soon',
  },
  {
    id: 'f4',
    title: 'Projects',
    link: '#',
    description: 'Coming Soon',
  },
  {
    id: 'f5',
    title: 'Contact',
    link: '#contact-section',
  },
]

const detailsPageNavLinks: Array<INavLink> = [
  {
    id: 'l1',
    title: 'Home',
    link: '/',
  },
  {
    id: 'l2',
    title: 'Intro',
    link: '#hero-section',
  },
  {
    id: 'l3',
    title: 'The Challenge',
    link: '#the-challenge-section',
  },
  {
    id: 'l4',
    title: 'Gallery',
    link: '#gallery-section',
  },
  {
    id: 'l5',
    title: 'Project Summary',
    link: '#summary-section',
  },
  {
    id: 'l6',
    title: 'Similar Projects',
    link: '#cta-section',
  },
]

export const topNavLinks: Array<INavLink> = [
  {
    id: 'l1',
    title: 'Home',
    link: '/',
  },
  {
    id: 'l2',
    title: 'About',
    link: '#about-section',
  },
  {
    id: 'l3',
    title: 'Projects',
    link: '#projects-section',
  },
  {
    id: 'l4',
    title: 'Fav',
    link: '#fav-section',
  },
  {
    id: 'l5',
    title: 'Skills',
    link: '#skills-section',
  },
  {
    id: 'l6',
    title: 'Contact',
    link: '#contact-section',
  },
]

export const siteNav: Array<IPageNav> = [
  {
    id: 'p1',
    name: ESiteNavNames.FOOTER_NAV,
    navLinksRef: footerNavLinks,
  },
  {
    id: 'p1',
    name: ESiteNavNames.PROJECT_DETAILS_NAV,
    navLinksRef: detailsPageNavLinks,
  },
  {
    id: 'p1',
    name: ESiteNavNames.TOP_NAV,
    navLinksRef: topNavLinks,
  },
]
