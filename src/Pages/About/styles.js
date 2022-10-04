import styled from "styled-components";
import { colors, devices } from "../../styles/globalStyles";

export const StyledAboutPageContainer = styled.div`
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2d9d3;
  row-gap: 2rem;

  .about-heading {
    color: ${colors.secondary};
    font-family: "Dancing Script", cursive;
    font-size: 40px;
    margin-bottom: 20px;
    z-index: 1;
  }

  .about-page-imgs {
    display: none;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
  }
  .about-page_img {
    border-radius: 30px;
    object-fit: cover;
    filter: opacity(80%);
    position: absolute;
    width: 650px;
    height: 500px;
    left: 100px;
    top: 350px;
  }

  .about-me-texts {
    border: 3px solid ${colors.primary};
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: rgba(201, 132, 116, 0.4) 0px 3px 12px;
    text-align: center;
    padding: 30px;
    line-height: 30px;
    position: relative;
    width: 200px;
  }
  .about-me_text {
    padding: 0;
    color: ${colors.primary};
  }

  .about-page_link {
    text-decoration: none;
    width: 50px;
    box-sizing: border-box;
    padding: 7px;
    color: ${colors.primary} !important;
    fill: white;
  }
  .about-page-svg {
    width: 40px;
    filter: drop-shadow(1px 1px 1px rgba(201, 132, 116, 0.5));
  }
  path {
    stroke: ${colors.primary};
    stroke-linejoin: round;
    stroke-linecap: round;
  }
  @media${devices.mobileL} {
    .about-me-texts {
      width: 300px;
    }
  }

  @media${devices.tablet} {
    .about-heading {
      font-size: 60px;
      bottom: 50px;
    }

    .about-me-texts {
      width: 500px;
    }
  }

  @media${devices.laptop} {
    min-height: calc(100vh - 75px);
    position: relative;
    .about-page-imgs {
      display: flex;
      max-width: 1440px;
    }
    .about-page-svg {
      &:hover {
        scale: 1.2;
      }
    }

    .about-heading {
      position: relative;
      bottom: 100px;
    }

    .about-me-texts {
      position: relative;
      left: 150px;
      width: 450px;
    }

    .about-page-contacts {
      position: relative;
      left: 320px;
      top: 15px;
    }
  }

  @media${devices.laptopL} {
    .about-heading {
      font-size: 80px;
    }
    .about-me-texts {
      position: relative;
      left: 250px;
      width: 550px;
    }

    .about-page_img {
      border-radius: 30px;
      object-fit: cover;
      filter: opacity(80%);
      position: absolute;
      width: 650px;
      height: 550px;
      left: 150px;
      top: 350px;
    }

    .about-page-contacts {
      position: relative;
      top: 85px;
    }
  }
`;
