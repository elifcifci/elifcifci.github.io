import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, devices } from "../../styles/globalStyles";

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
  padding: 0;
  position: absolute;
  top: 150px;
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

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

export const NavbarLink = styled.a`
  text-decoration: none;
  display: inline-block;
  color: white;
  width: 100%;
  background-color: ${colors.secondary};
  border-radius: 15px;
  height: 55px;
  line-height: 55px;

  @media ${devices.laptop} {
    padding: 20px;
    background-color: unset;
    border-radius: 0;
  }
`;
