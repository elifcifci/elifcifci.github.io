import React from "react";
import { Wrapper } from "./styles";

const Footer = () => {
  return (
    <Wrapper>
      <p>
        Created by{" "}
        <a
          href={"https://github.com/elifcifci"}
          title="Go her github"
          target="_blank"
        >
          {" "}
          Elif Çiftçi{" "}
        </a>
      </p>
    </Wrapper>
  );
};

export default Footer;
