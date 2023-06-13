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
      duration: 1.5,
      bounce: 0.2,
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
    y: 80,
  },
  onscreen: {
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
      // bounce: 0.4,
      duration: 0.8,
    },
  },
}

export const lgImgReveal: Variants = {
  offscreen: {
    y: 80,
    scale: 0.4,
  },
  onscreen: {
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 0.8,
    },
  },
}
