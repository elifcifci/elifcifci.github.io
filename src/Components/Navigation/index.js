import React, { useState } from "react";

import { NavbarItem } from "../NavbarItem";
import { navbarConstants } from "../../Constants/navbarConstants";

import { NavbarItems, navbarItemsAnimationConfigs } from "./styles";

export const Navigation = ({ toggleOpenOpenBackDrop }) => {
  const [constant, setConstant] = useState([...navbarConstants]);

  const handleClick = (event) => {
    selectNavbarItem(event);
    toggleOpenOpenBackDrop();
  };

  const selectNavbarItem = (event) => {
    const copyConstant = [...constant];
    const selectedText = event.target.text;
    copyConstant.forEach((item) => {
      const isTextsMatched = item.navbarTitles === selectedText;
      item.selected = isTextsMatched;
    });

    setConstant([...copyConstant]);
  };

  return (
    <NavbarItems variants={navbarItemsAnimationConfigs}>
      {constant.map((constant) => (
        <NavbarItem
          key={constant.id}
          selected={constant.selected}
          onClick={handleClick}
          links={constant.navbarLinks}
          title={constant.navbarTitles}
          viewBox={constant.viewBox}
          icon={constant.icon}
        />
      ))}
    </NavbarItems>
  );
};
