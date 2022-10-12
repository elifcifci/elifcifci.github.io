import { motion } from "framer-motion";

//Styles
import styled from "styled-components";
import { colors, devices, directionRowCenter } from "../../styles/globalStyles";

export const sidebarAnimationConfigs = {
  open: (height = 100) => ({
    clipPath: `circle(${height * 8 + 100}px at 40px 400px)`,
    transition: {
      type: "spring",
      stiffness: 40,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Sidebar = styled(motion.div)`
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.92);
  position: fixed;

  @media ${devices.mobileXL} {
    max-width: 300px;
  }
  @media ${devices.tablet} {
    max-width: 350px;
  }
  @media ${devices.laptop} {
    background-color: ${colors.secondary};
    position: fixed;
    box-shadow: 0px 1px 2px ${colors.darkBrown};
    width: 100%;
    height: 65px;
    display: none;
  }
`;

export const Container = styled(motion.nav)`
  width: 100%;
  height: ${(props) => (props.isOpen ? "100%" : "0%")};
  margin: 0;
  ${directionRowCenter};
  position: fixed;
  z-index: 9999;

  @media ${devices.mobileXL} {
    max-width: 300px;
  }
  @media ${devices.tablet} {
    max-width: 350px;
  }

  @media ${devices.laptop} {
    max-width: 100%;
  }
`;
