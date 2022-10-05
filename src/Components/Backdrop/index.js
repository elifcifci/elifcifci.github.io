import React from "react";
import {
  StyledForNavbarBackdropContainer,
  StyledBackdropForProjectPageContainer,
  BackdropConfig,
} from "./styles";

const BackDrop = ({
  isOpenBackDrop,
  toggleOpenOpenBackDrop,
  isForProjectPage,
}) => {
  return isForProjectPage ? (
    <StyledBackdropForProjectPageContainer
      variants={BackdropConfig}
      animate={isOpenBackDrop ? "openedProject" : ["closed", "colorChange"]}
      onClick={toggleOpenOpenBackDrop}
    ></StyledBackdropForProjectPageContainer>
  ) : (
    <StyledForNavbarBackdropContainer
      variants={BackdropConfig}
      animate={isOpenBackDrop ? "openedNavbar" : ["closed", "colorChange"]}
      onClick={toggleOpenOpenBackDrop}
    ></StyledForNavbarBackdropContainer>
  );
};

export default BackDrop;
