export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 32
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      delay
    }
  })
};

export const fadeIn = {
  hidden: {
    opacity: 0
  },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      delay
    }
  })
};

export const slideLeft = {
  hidden: {
    opacity: 0,
    x: -24
  },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay
    }
  })
};
