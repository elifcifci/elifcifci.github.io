//Styles
import styled from "styled-components";
import {
  colors,
  devices,
  fontSizes,
  directionColumnCenter,
} from "../../styles/globalStyles";

export const StyledAboutPageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  ${directionColumnCenter};
  background-color: ${colors.primary};
  row-gap: 2rem;
  padding: 10px 30px;
  scroll-snap-align: start;

  .about-page-imgs {
    display: none;
    max-width: 1100px;
  }
  .about-page_opposite-flower-img {
    display: none;
  }

  .about-me-texts {
    display: flex;
    align-items: center;
    border: 3px solid ${colors.secondary};
    border-radius: 30px;
    background-color: white;
    box-shadow: rgba(201, 132, 116, 0.4) 0px 3px 12px;
    text-align: center;
    padding: 30px;
    line-height: 30px;
    position: relative;
    width: 100%;
    max-width: 600px;
    box-sizing: border-box;
    z-index: 1;
  }
  .about-me_text {
    padding: 0;
    margin: 0;
    color: ${colors.secondary};

    a {
      color: ${colors.secondary};
      font-weight: bold
    }
  }

  .about-page_link {
    text-decoration: none;
    width: 50px;
    box-sizing: border-box;
    padding: 7px;
    color: ${colors.secondary} !important;
    fill: white;
  }
  .about-page-svg {
    width: 40px;
    filter: drop-shadow(1px 1px 1px rgba(201, 132, 116, 0.5));
  }
  path {
    stroke: ${colors.secondary};
    stroke-linejoin: round;
    stroke-linecap: round;
  }
  @media${devices.mobileL} {
    padding: 10px 50px;
  }

  @media${devices.tablet} {
    padding: 10px 100px;
    row-gap: 3rem;

    .about-me-texts {
      height: 300px;
    }
    .about-me_text {
      font-size: ${fontSizes.sizes3};
    }
  }

  @media${devices.laptop} {
    position: relative;
    padding: 75px 250px 10px 250px;

    .about-page-imgs {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      position: absolute;
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
    }
    .about-page_img {
      border-radius: 20px;
      object-fit: cover;
      filter: opacity(85%);
      width: 450px;
      height: 250px;
      position: relative;
      z-index: 0;
    }
    .about-page_flower-img {
      width: 430px;
      height: 250px;
      top: 35px;
    }

    .about-page_profile-img {
      filter: sepia(15%);
      width: 280px;
      height: 320px;
    }
    .about-me-texts {
      height: auto;
      padding: 20px;
    }
    .about-me_text {
      font-size: ${fontSizes.sizes4};
    }
    .about-page-contacts {
      position: relative;
      z-index: 1;
      top: 80px;
    }
    .about-page-svg {
      &:hover {
        scale: 1.2;
      }
    }
  }

  @media${devices.laptopL} {
    row-gap: 8rem;

    .about-page-imgs {
      padding: 0px;
      align-items: center;
    }
    .about-page_profile-img {
      order: 1;
      height: 300px;
      width: 258px;
      margin-left: 50px;
    }
    .about-page_flower-img {
      display: none;
    }
    .about-page_opposite-flower-img {
      order: 2;
      top: 20px;
      left: 0;
      display: initial;
      width: 540px;
      height: 380px;
    }

    .about-page-contacts {
      top: 70px;
    }
  }

  @media${devices.laptopXL} {
    row-gap: 10rem;

    .about-me-texts {
      max-width: 700px;
      height: 280px;
    }

    .about-page-imgs {
      max-width: 1400px;
    }
    .about-page_profile-img {
      height: 400px;
      width: 360px;
      margin: 0;
      margin-left: 50px;
    }
    .about-page_opposite-flower-img {
      top: 20px;
      width: 680px;
      height: 480px;
    }
  }
`;
