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
