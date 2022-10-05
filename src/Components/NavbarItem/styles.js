import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

//Styles
import styled from "styled-components";
import {
  fontSizes,
  colors,
  devices,
  directionRowCenter,
} from "../../styles/globalStyles";

export const NavbarLink = styled(HashLink)`
  text-decoration: none;
  display: inline-block;
  color: white;
  width: 100%;
  background-color: ${colors.secondary};
  border-radius: 15px;
  height: 55px;
  line-height: 55px;
  transition: background-color 0s;

  @media ${devices.laptop} {
    box-sizing: border-box;
    height: 100%;
    color: ${colors.darkTextColor} !important;
    padding: 20px;
    background-color: unset;
    border-radius: 0;
  }
`;
export const ItemContainer = styled(motion.li)`
  list-style-type: none;
  font-size: ${fontSizes.sizes3};
  margin-bottom: 20px;
  ${directionRowCenter};
  cursor: pointer;
  border-radius: 15px;
  width: 80%;
  height: 50px;
  text-align: center;
  flex: 1;
  list-style: none;
  font-weight: bold;
  box-sizing: border-box;
  padding: 0px;
  @media ${devices.mobileS} {
    font-size: ${fontSizes.sizes4};
  }

  @media ${devices.laptop} {
    flex-direction: column;
    width: 100%;
    height: 100%;
    line-height: 25px;
    margin-bottom: 0px;
    border-radius: 0px;
    opacity: 1 !important;
    transform: unset !important;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 20px -10px;

    &:after {
      content: "";
      border-bottom: 3px solid ${colors.primary} !important;

      width: 100%;
      height: 100%;

      position: relative;
      bottom: 0;
    }

    &:hover {
      &:after {
        border-bottom: 3px solid rgba(201, 132, 116, 0.7) !important;
        width: 100%;
        height: 100%;
        position: relative;
        box-sizing: border-box;
        bottom: 0;
      }
    }

    ${(props) =>
      props.selected &&
      `&:after {
        border-bottom: 3px solid rgba(201, 132, 116, 0.7) !important;
        width: 100%;
        height: 100%;
        position: relative;
        box-sizing: border-box;
        bottom: 0;
    }`}
  }
`;

export const NavbarIcon = styled(motion.svg)`
  border-radius: 50%;
  flex: 90px 0;
  padding: 3px;
  width: 60px;
  height: 60px;
  scale: 0.9;
  display: none;
  margin-right: 20px;
  background-color: ${colors.secondary};

  @media ${devices.mobileL} {
    display: flex;
    justify-content: center;
  }

  @media ${devices.laptop} {
    display: none;
  }
`;

export const Paths = styled(motion.path)`
  width: 56%;
  overflow: visible;
  stroke: ${colors.secondary};
  stroke-width: 35;
  stroke-linejoin: round;
  stroke-linecap: round;
`;
