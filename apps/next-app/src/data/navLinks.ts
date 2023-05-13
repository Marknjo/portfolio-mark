import { IconType } from 'react-icons/lib'

export interface INavLink {
  title: string
  link: string
  icon?: IconType
}

export const homePageNavLinks: Array<INavLink> = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '#about-section',
  },
  {
    title: 'Projects',
    link: '#projects-section',
  },
  {
    title: 'Fav',
    link: '#fav-section',
  },
  {
    title: 'Skills',
    link: '#skills-section',
  },
  {
    title: 'Contact',
    link: '#contact-section',
  },
]

export const pDNavLinks: Array<INavLink> = [
  {
    title: 'Home',
    link: '/',
  },
]
