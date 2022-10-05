//Styles
import styled from "styled-components";
import { fontSizes, colors, devices } from "../../styles/globalStyles";

export const Wrapper = styled.footer`
  border-top: 3px solid rgba(201, 132, 116, 0.7);
  height: 10vh;
  color: ${colors.textColor};
  box-sizing: border-box;
  padding-right: 50px;
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: ${fontSizes.sizes1};

  .footer-link {
    line-height: 50px;
    color: ${colors.darkTextColor};
    padding: 10px;
    text-decoration: none;
    font-weight: bold;
    font-size: ${fontSizes.sizes3};

    &:hover {
      cursor: pointer;
    }
  }

  @media${devices.laptopXL} {
    font-size: ${fontSizes.sizes3};

    .footer-link {
      font-size: ${fontSizes.sizes4};
    }
  }
`;
