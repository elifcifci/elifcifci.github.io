import { motion } from "framer-motion";

//Styles
import styled from "styled-components";
import { devices } from "../../styles/globalStyles";

export const StyledBackdropForProjectPageContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 3;
`;

export const StyledForNavbarBackdropContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 3;

  @media${devices.laptop} {
    display: none;
    position: initial;
  }
`;

export const BackdropConfig = {
  openedNavbar: {
    background: "rgba(0,0,0,.5)",
    display: "initial",
    transition: {
      type: "spring",
      damping: 30,
      delay: 0.2,
    },
  },

  openedProject: {
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
