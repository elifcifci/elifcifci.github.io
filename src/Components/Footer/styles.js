import styled from "styled-components";
import { fontSizes, colors, devices } from "../../styles/globalStyles";

export const Wrapper = styled.footer`
  border-top: 3px solid ${colors.primary};
  height: 10vh;
  color: ${colors.textColor};
  box-sizing: border-box;
  padding-right: 50px;
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: ${fontSizes.xs};

  .footer-link {
    line-height: 50px;
    color: ${colors.secondary};
    padding: 10px;
    text-decoration: none;
    font-weight: bold;
    font-size: ${fontSizes.m};

    &:hover {
      cursor: pointer;
    }
  }

  @media${devices.laptopXL} {
    font-size: ${fontSizes.m};

    .footer-link {
      font-size: ${fontSizes.lm};
    }
  }
`;
