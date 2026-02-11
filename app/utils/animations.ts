/** Variantes e transições reutilizáveis para Framer Motion */

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer = {
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const staggerContainerFast = {
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
};

export const defaultTransition = {
  duration: 0.5,
  ease: [0.25, 0.46, 0.45, 0.94],
};

export const viewportOnce = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -60px 0px",
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};
