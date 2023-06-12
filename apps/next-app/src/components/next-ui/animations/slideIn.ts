import { Variants } from 'framer-motion'

export const fromRight = {
  hidden: {
    x: '100vw',
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.8,
      duration: 0.8,
      bounce: 0.3,
    },
  },
}

export const fromLeft = {
  hidden: {
    x: '-100vw',
  },
  visible: fromRight.visible,
}

export const sectionsReveal: Variants = {
  offscreen: {
    y: 150,
  },
  onscreen: {
    y: 50,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}
