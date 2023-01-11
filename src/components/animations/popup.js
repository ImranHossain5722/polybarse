import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

export default function Popup({ children, className }) {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="initial"
      variants={popup}
      className={classNames("absolute -z-10", className)}
    >
      {children}
    </motion.div>
  );
}

const popup = {
  initial: {
    scale: 0,
    transition: {
      duration: 0.3,
    },
  },
  enter: {
    scale: 1,
    transition: {
      type: "spring",
      damping: 10,
      mass: 0.75,
      stiffness: 100,
      duration: 0.3,
    },
  },
};
