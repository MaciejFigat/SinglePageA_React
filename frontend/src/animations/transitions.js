const pageVariants = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: '-100vw',
  },
}
const pageVariantsLogo = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
  },
}
const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
}
const pageTransitionLogo = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.9,
}

export { pageTransitionLogo, pageTransition, pageVariantsLogo, pageVariants }
