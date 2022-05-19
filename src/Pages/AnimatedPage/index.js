import React from "react";
import { motion } from "framer-motion";
const AnimatedPage = ({ children }) => {
  const animate = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  };

  return (
    <motion.div
      variants={animate}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
