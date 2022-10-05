import { motion } from "framer-motion";

//Styles
import styled from "styled-components";
import { devices } from "../../styles/globalStyles";

export const StyledBackdropContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 3;

  ${(props) =>
    props.isForProjectPage === false &&
    `
  @media${devices.laptop} {
    display: none;
    position: initial;
  }
  `}
`;

export const BackDropAppConfig = {
  open: {
    background: "rgba(0,0,0,.5)",
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

export const BackDropProjectConfig = {
  open: {
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
