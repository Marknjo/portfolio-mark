import { IconType } from 'react-icons'
import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'
import { IoIosPhonePortrait } from 'react-icons/io'

/// @TODO: Move this data to global setting
const socialIcons: { [key: string]: IconType } = {
  BsLinkedin,
  BsTwitter,
  BsGithub,
  BsYoutube,
}

const displayIcons: { [key: string]: IconType } = {
  IoIosPhonePortrait,
}

const listIcons: { [key: string]: IconType } = {}

export const appIcons = {
  socialIcons,
  displayIcons,
  listIcons,
}
