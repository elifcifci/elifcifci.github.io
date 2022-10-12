import { motion } from "framer-motion";

//Styles
import styled from "styled-components";
import { devices } from "../../styles/globalStyles";

<<<<<<< HEAD
export const StyledBackdropForProjectPageContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 3;
`;

export const StyledForNavbarBackdropContainer = styled(motion.div)`
=======
export const StyledBackdropContainer = styled(motion.div)`
>>>>>>> 7378fcb2148bb13e9114f439773ace9924b29e7c
  width: 100vw;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 3;

<<<<<<< HEAD
=======
  ${(props) =>
    props.isForProjectPage === false &&
    `
>>>>>>> 7378fcb2148bb13e9114f439773ace9924b29e7c
  @media${devices.laptop} {
    display: none;
    position: initial;
  }
<<<<<<< HEAD
`;

export const BackdropConfig = {
  openedNavbar: {
=======
  `}
`;

export const BackDropAppConfig = {
  open: {
>>>>>>> 7378fcb2148bb13e9114f439773ace9924b29e7c
    background: "rgba(0,0,0,.5)",
    display: "initial",
    transition: {
      type: "spring",
      damping: 30,
      delay: 0.2,
    },
  },
<<<<<<< HEAD

  openedProject: {
=======
  colorChange: {
    opacity: 0,
    background: "rgb(0, 0, 0, 0)",

    transition: {
      type: "tween",
      damping: 30,
      delay: 0.4,
    },
  },

  closed: {
    display: "none",
    transition: {
      delay: 1,
    },
  },
};

export const BackDropProjectConfig = {
  open: {
>>>>>>> 7378fcb2148bb13e9114f439773ace9924b29e7c
    background: "rgba(0,0,0,.8)",
    display: "initial",
    transition: {
      type: "spring",
      damping: 30,
      delay: 0.2,
    },
  },
  colorChange: {
    opacity: 0,
    background: "rgb(0, 0, 0, 0)",

    transition: {
      type: "tween",
      damping: 30,
      delay: 0.4,
    },
  },

  closed: {
    display: "none",
    transition: {
      delay: 1,
    },
  },
};
