import styled from "styled-components";
import {
  fontSizes,
  colors,
  devices,
  directionColumnCenter,
} from "../../styles/globalStyles";

export const StyledMainContainer = styled.div`
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  .main-banner {
    width: 100%;
    height: 200px;
    object-fit: cover;
    filter: opacity(80%);
    position: absolute;
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
    ${directionColumnCenter}
    position: absolute;
  }

  .main-heading {
    font-size: ${fontSizes.xxl};
    ${directionColumnCenter}
    line-height: 55px;
    font-family: "Dancing Script", cursive;
    color: ${colors.secondary};
    margin: 20px 0 0 0;
  }

  .main-description {
    color: ${colors.primary};
    font-size: ${fontSizes.lm};
    margin: 3px;
    font-style: italic;
    margin-top: 0px;
    font-weight: 200;
    padding-top: 5px;
  }

  @media ${devices.mobileS} {
    .main-description {
      font-size: ${fontSizes.l};
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
      height: 280px;
    }
    .profile-img {
      width: 200px;
      height: 200px;
      top: 150px;
      right: 30px;
    }
    .main-heading {
      font-size: 60px;
      line-height: 65px;
    }
    .main-text-container {
      height: calc(100vh - 75px);
      margin-top: 75px;
    }
  }

  @media ${devices.laptop} {
    .main-banner {
      top: 75px;
    }
    .inner-container {
      top: 0px;
    }
    .profile-img {
      top: 225px;
    }
    .main-heading {
      font-size: 80px;
      line-height: 6rem;
    }
  }

  @media ${devices.laptop} {
    .main-heading {
      font-size: 80px;
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
      height: calc(100vh - 185px);
      margin-top: 185px;
    }
    .main-heading {
      font-size: 90px;
      line-height: 6rem;
    }
    .main-description {
      font-size: 30px;
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
      font-size: 100px;
      line-height: 7rem;
    }
    .main-description {
      font-size: 40px;
      padding-top: 15px;
    }
  }
`;
