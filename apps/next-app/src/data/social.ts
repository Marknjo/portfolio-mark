import { IconType } from 'react-icons'
import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'

export interface ISocialLinks {
  icon: IconType
  title: string
  link: string
  isHidden: boolean
}

export type SocialWithPick = (pick: number) => Array<ISocialLinks>

export const socials: Array<ISocialLinks> = [
  {
    title: 'LinkedIn',
    link: 'https://linkedin.com/in/mark-njoroge/',
    icon: BsLinkedin,
    isHidden: false,
  },
  {
    title: 'Twitter',
    link: 'https://twitter.com/marknjo7',
    icon: BsTwitter,
    isHidden: false,
  },

  {
    title: 'Github',
    link: 'https://github.com/Marknjo',
    icon: BsGithub,
    isHidden: false,
  },

  {
    title: 'https://youtube.com/@thetalkingdev',
    link: 'YouTube',
    icon: BsYoutube,
    isHidden: false,
  },
]

export const socialWithPick: SocialWithPick = (pick: number) =>
  socials.slice(0, pick)
