import React from "react";
import {
  StyledBackdropContainer,
  BackDropProjectConfig,
  BackDropAppConfig,
} from "./styles";

const BackDrop = ({
  isOpenBackDrop,
  toggleOpenOpenBackDrop,
  isForProjectPage,
}) => {
  return (
    <StyledBackdropContainer
      isForProjectPage={isForProjectPage}
      variants={isForProjectPage ? BackDropProjectConfig : BackDropAppConfig}
      animate={isOpenBackDrop ? "open" : ["closed", "colorChange"]}
      onClick={toggleOpenOpenBackDrop}
    ></StyledBackdropContainer>
  );
};

export default BackDrop;
