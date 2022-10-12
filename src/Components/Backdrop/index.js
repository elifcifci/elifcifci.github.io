import React from "react";
import {
<<<<<<< HEAD
  StyledForNavbarBackdropContainer,
  StyledBackdropForProjectPageContainer,
  BackdropConfig,
=======
  StyledBackdropContainer,
  BackDropProjectConfig,
  BackDropAppConfig,
>>>>>>> 7378fcb2148bb13e9114f439773ace9924b29e7c
} from "./styles";

const BackDrop = ({
  isOpenBackDrop,
  toggleOpenOpenBackDrop,
  isForProjectPage,
}) => {
<<<<<<< HEAD
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
=======
  return (
    <StyledBackdropContainer
      isForProjectPage={isForProjectPage}
      variants={isForProjectPage ? BackDropProjectConfig : BackDropAppConfig}
      animate={isOpenBackDrop ? "open" : ["closed", "colorChange"]}
      onClick={toggleOpenOpenBackDrop}
    ></StyledBackdropContainer>
>>>>>>> 7378fcb2148bb13e9114f439773ace9924b29e7c
  );
};

export default BackDrop;
