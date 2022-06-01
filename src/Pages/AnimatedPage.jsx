import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};
const fadeAnimations = {
  initial: { opacity: 0},
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
const AnimatedPage = ({ children,xAnimation }) => {
  return (
    <motion.div
 
      transition={{ duration: 0.5 }}
      variants={xAnimation?animations:fadeAnimations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
