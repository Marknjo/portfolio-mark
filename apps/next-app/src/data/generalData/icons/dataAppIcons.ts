import { IconType } from 'react-icons'
import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'

/// @TODO: Move this data to global setting
const socialIcons: { [key: string]: IconType } = {
  BsLinkedin,
  BsTwitter,
  BsGithub,
  BsYoutube,
}

export const appIcons = {
  socialIcons,
}
