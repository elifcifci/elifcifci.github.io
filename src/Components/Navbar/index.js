import React, { useRef } from "react";
import { Container, Sidebar, sidebarAnimationConfigs } from "./styles";

//Components
import { NavbarButton } from "../NavbarButton";
import { Navigation } from "../Navigation";

const Navbar = ({ isOpenBackDrop, toggleOpenOpenBackDrop }) => {
  const containerRef = useRef(null);

  return (
    <Container
      initial={false}
      animate={isOpenBackDrop ? "open" : "closed"}
      ref={containerRef}
    >
      <Sidebar variants={sidebarAnimationConfigs} />
      <NavbarButton toggleOpenOpenBackDrop={toggleOpenOpenBackDrop} />
      <Navigation toggleOpenOpenBackDrop={toggleOpenOpenBackDrop} />
    </Container>
  );
};

export default Navbar;
