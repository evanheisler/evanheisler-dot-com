export const ease = [0.29, 0.12, 0.42, 0.99];

export const staggerWithChildren = ({ delayChildren = null } = {}) => ({
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren,
    },
  },
});

export const fadeIn = ({ y = -100 } = {}) => ({
  initial: {
    y,
    opacity: 0,
    transition: { duration: 0.6, ease },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease,
    },
  },
});
