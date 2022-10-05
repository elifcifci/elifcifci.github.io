//Styles
import styled from "styled-components";
import {
  fontSizes,
  colors,
  devices,
  directionColumnCenter,
} from "../../styles/globalStyles";

export const StyledMainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;

  .main-banner {
    width: 100%;
    height: 200px;
    object-fit: cover;
    filter: opacity(80%);
    position: relative;
    top: 0;
  }

  .profile-img {
    filter: sepia(15%);
    width: 120px;
    height: 120px;
    object-fit: cover;
    position: absolute;
    top: 120px;
    right: 10px;
    border-radius: 50%;
  }

  .main-text-container {
    width: 100%;
    height: 100%;
    height: calc(100vh - 200px);
    padding: 100px 0;
    box-sizing: border-box;
    ${directionColumnCenter};
  }

  .main-heading {
    font-size: ${fontSizes.sizes7};
    ${directionColumnCenter};
    line-height: 55px;
    font-family: "Dancing Script", cursive;
    color: ${colors.darkTextColor};
    margin: 0;
  }

  .main-description {
    color: ${colors.secondary};
    font-size: ${fontSizes.sizes4};
    margin: 3px;
    font-style: italic;
    margin-top: 0px;
    font-weight: 200;
    padding-top: 5px;
  }

  @media ${devices.mobileS} {
    .main-description {
      font-size: ${fontSizes.sizes5};
    }
    .profile-img {
      width: 150px;
      height: 150px;
      top: 100px;
      right: 10px;
    }
  }

  @media ${devices.tablet} {
    .main-banner {
      height: 250px;
    }
    .profile-img {
      width: 180px;
      height: 180px;
      top: 130px;
      right: 30px;
    }
    .main-heading {
      font-size: ${fontSizes.sizes8};
      line-height: 65px;
    }
    .main-text-container {
      height: calc(100vh - 255px);
    }
  }

  @media ${devices.laptop} {
    .main-banner {
      top: 75px;
      height: 180px;
    }
    .inner-container {
      top: 0px;
    }
    .profile-img {
      display: none;
    }

    .main-text-container {
      height: calc(100vh - 255px);
    }
    .main-heading {
      font-size: ${fontSizes.sizes9};
      line-height: 6rem;
    }
  }

  @media ${devices.laptop} {
    .main-heading {
      font-size: ${fontSizes.sizes9};
      line-height: 6rem;
    }
  }

  @media ${devices.laptopL} {
    .main-banner {
      height: 320px;
    }
    .profile-img {
      width: 250px;
      height: 250px;
      right: 50px;
      top: 230px;
    }

    .main-text-container {
      height: calc(100vh - 395px);
    }
    .main-heading {
      font-size: ${fontSizes.sizes10};
      line-height: 6rem;
    }
    .main-description {
      font-size: ${fontSizes.sizes6};
      padding-top: 10px;
    }
  }

  @media ${devices.laptopXL} {
    .main-banner {
      height: 360px;
    }
    .profile-img {
      width: 300px;
      height: 300px;
      right: 90px;
      top: 235px;
    }

    .main-heading {
      font-size: ${fontSizes.sizes11};
      line-height: 7rem;
    }
    .main-description {
      font-size: ${fontSizes.sizes7};
      padding-top: 15px;
    }
  }
`;
