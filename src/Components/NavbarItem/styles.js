import styled from "styled-components";
import { motion } from "framer-motion";
import { fontSizes, colors, devices } from "../../styles/globalStyles";
import { Link } from "react-router-dom";

export const NavbarLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: white;
  width: 100%;
  background-color: ${colors.primary};
  border-radius: 15px;
  height: 55px;
  line-height: 55px;
  transition: background-color 0s;

  ${(props) =>
    props.selected
      ? `scale:1.2;
    color: colors.secondary`
      : `color: white`} !important;

  @media ${devices.laptop} {
    color: ${colors.secondary} !important;
    padding: 20px;
    background-color: unset;
    border-radius: 0;
    height: 50px;
  }
`;

export const ItemContainer = styled(motion.li)`
  list-style-type: none;
  font-size: ${fontSizes.m};
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
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
    font-size: ${fontSizes.lm};
  }

  @media ${devices.laptop} {
    line-height: 25px;
    height: 75px;
    margin-bottom: 0px;
    border-radius: 0px;
    opacity: 1 !important;
    transform: unset !important;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 20px -10px;

    &::after {
      content: "";
      border-bottom: 2px solid #f2d9d3 !important;
      width: 100%;
      height: 3px;
      position: absolute;
      bottom: 0;
    }

    &:hover {
      &::after {
        border-bottom: 2px solid #c98474 !important;
      }
    }

    ${(props) => props.selected === true && `border: solid`}
  }
`;

export const NavbarIcon = styled(motion.svg)`
  border-radius: 50%;
  flex: 90px 0;
  padding: 3px;
  width: 60px;
  height: 60px;
  scale: 0.8;
  display: none;
  margin-right: 20px;
  background-color: ${colors.secondary};
  border: solid 3px ${colors.secondary};

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
  stroke: ${colors.primary};
  stroke-width: 35;
  stroke-linejoin: round;
  stroke-linecap: round;
`;
