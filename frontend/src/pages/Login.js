import React, { useState } from "react";
import { Layout } from "../layout";
// import LoginComponent from "../components/LoginComponent";
import { AnimatePresence, motion } from "framer-motion";
import { AllTech } from "../components/TechPartners";
const pageVariants = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-100vw",
  },
};
const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};
const Login = () => {
  return (
    <Layout>
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        // variants={pageTransition}
        variants={pageVariants}
        transition={pageTransition}
      >
        <AllTech />
      </motion.div>
    </Layout>
  );
};
export default Login;
