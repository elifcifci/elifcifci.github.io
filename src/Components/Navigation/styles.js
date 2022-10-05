import styled from "styled-components";
import { motion } from "framer-motion";
import { devices } from "../../styles/globalStyles";

export const navbarItemsAnimationConfigs = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    x: [0, 0],
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    x: [0, 0, -1, -700],
  },
};

export const NavbarItems = styled(motion.ul)`
  margin: 0;
  padding: 0 50px;
  position: absolute;
  top: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  box-sizing: border-box;

  @media ${devices.mobileXL} {
    padding: 0;
  }

  @media ${devices.laptop} {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    max-width: 100%;
    top: 0px;
    padding: 0px;
    height: 75px;
    transform: unset !important;
    background-color: white;
  }
`;
