import React from "react";
import { motion } from "framer-motion";
import { StyledMainContainer } from "./styles";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
    },
  },
};

const Main = () => {
  return (
    <StyledMainContainer id="main-page">
      <div className="img-container">
        <img className="main-banner" src="/img/banner.png" />
      </div>
      <img className="profile-img" src="./img/profile-img.jpg" />
      <div className="main-text-container">
        <h1 className="main-heading">
          Welcome! <span>I am Elif Çiftçi</span>
        </h1>

        <motion.p
          variants={variants}
          className="main-description"
          initial="hidden"
          animate="visible"
        >
          a front-end developer
        </motion.p>
      </div>
    </StyledMainContainer>
  );
};

export default Main;
