import { Variants } from 'framer-motion'

export const fromRight: Variants = {
  hidden: {
    x: 500,
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.4,
      duration: 0.8,
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
      duration: 0.6,
    },
  },
}

export const ctaReveal: Variants = {
  offscreen: {
    y: 80,
  },
  onscreen: {
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      // delay: 0.1,
      // bounce: 0.2,
      duration: 0.2,
    },
  },
}

export const lgImgReveal: Variants = {
  offscreen: {
    y: 50,
    scale: 0.4,
  },
  onscreen: {
    y: 0,
    scale: 1,
    transition: {
      type: 'tween',
      // bounce: 0.2,
      ease: 'easeInOut',
      duration: 0.6,
    },
  },
}
