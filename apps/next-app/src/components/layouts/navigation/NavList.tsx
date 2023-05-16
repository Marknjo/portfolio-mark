import { Flex, SystemStyleObject, keyframes } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { INavLink } from '@data/navLinks'
import NavLink from './NavLink'

const animationKeyframes = keyframes`
  0% {
    transform: scale(0) translateX(1000px);
    opacity: 0;
    bottom: 0;
  }
  100%{
  transform: scale(1) translateX(0);
  opacity: 1;
  }
`

const NavList = ({
  navLinks,
  asHamburger,
}: {
  navLinks: Array<INavLink>
  asHamburger: boolean
}) => {
  const navAnimation = `${animationKeyframes} .2s .4s ease-in backwards`
  const hamburgerListStyles: SystemStyleObject = {
    flexDirection: 'column',
    borderTop: '2px solid ',
    borderTopColor: 'blackAlpha.100',
    animation: navAnimation,
  }

  const listStyles: SystemStyleObject = {
    height: '100%',
    justifyContent: 'end',
    columnGap: '2.5',
    flexDirection: 'row',
    listStyle: 'none',
    ...(asHamburger ? hamburgerListStyles : {}),
  }

  return (
    <Flex as={motion.ul} sx={listStyles}>
      {navLinks.map(item => (
        <NavLink
          key={item.title}
          title={item.title}
          link={item.link}
          asHamburgerMenu={asHamburger}
        />
      ))}
    </Flex>
  )
}
export default NavList
