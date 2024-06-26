import { motion } from "framer-motion";

//Styles
import styled from "styled-components";
import {
  fontSizes,
  colors,
  devices,
  directionColumnCenter,
  directionRowCenter,
} from "../../styles/globalStyles";

export const Container = styled.div`
  ${directionColumnCenter};
  box-sizing: border-box;
  padding: 100px 20px 50px 20px;
  min-height: 100vh;
  width: 100%;
  position: relative;

  .card-container {
    ${directionRowCenter};
    flex-wrap: wrap;
    width: 100%;
    max-width: 1100px;
    padding: 0;
    margin-top: 50px;
    box-sizing: border-box;
    gap: 1.4rem 0.7rem;
  }

  @media ${devices.mobileL} {
    padding: 25px;
  }

  @media ${devices.mobileXL} {
    padding: 70px;
  }

  @media${devices.laptop} {
    padding-top: 140px;

    .card-title {
      font-size: ${fontSizes.sizes4};
    }

    .link-items {
      font-size: ${fontSizes.sizes3};

      &:hover {
        font-size: ${fontSizes.sizes4};
      }
    }
  }

  @media ${devices.desktop} {
    .card-container {
      max-width: 1700px;
      gap: 1.5rem;
    }
  }
`;

export const CardItem = styled(motion.div)`
  position: relative;
  height: 430px;
  flex: 1 0 100%;
  max-width: 600px;
  min-width: 260px;
  list-style: none;
  overflow: hidden;
  padding: 10px 0;
  margin: 0 auto;
  border-radius: 20px;
  box-sizing: border-box;
  border: solid 3px ${colors.secondary};

  .title-container {
    position: absolute;
    top: 320px;
    left: 0;
    width: 100%;
    background-color: ${colors.primary};
    height: 56px;
  }
  .card_title {
    color: ${colors.darkTextColor};
    font-size: ${fontSizes.sizes3};
    background-color: ${colors.primary};
    text-align: center;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    margin: -10px 0 0 0;
    padding: 10px;
    line-height: 38px;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: solid 3px rgba(201, 132, 116, 0.1);
    box-shadow: rgba(0, 0, 0, 0.03) 0px 1px 2px 0px inset;
  }

  .card-image-container {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    height: 420px;
    width: 100%;
  }
  .card_img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .project-links {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    height: 55px;
    position: relative;
    top: 365px;
    background-color: ${colors.primary};
  }

  .detail-option {
    background-color: ${colors.primary};
    color: ${colors.darkTextColor};
    text-decoration: none;
    font-weight: bold;
    text-align: center;
    font-size: ${fontSizes.sizes1};
    line-height: 50px;
    height: 100%;
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
      font-size: ${fontSizes.sizes3};
    }
  }

  @media${devices.laptop} {
    flex: 0 0 35%;

    &:nth-child(4n + 1) {
      flex: 1 0 60%;
    }

    &:nth-child(4n + 4) {
      flex: 1 0 60%;
    }

    .card-title {
      font-size: ${fontSizes.sizes4};
    }

    .detail-option {
      font-size: ${fontSizes.sizes3};

      &:hover {
        font-size: ${fontSizes.sizes4};
      }
    }
  }

  @media${devices.desktop} {
    margin: unset;
  }
`;

export const LinkItems = styled.a`
  background-color: ${colors.primary};
  color: ${colors.darkTextColor};
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  font-size: ${fontSizes.sizes1};
  line-height: 50px;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    font-size: ${fontSizes.sizes3};
  }

  .preview-link-option {
    border-bottom-left-radius: 10px;
  }
  .detail-link-option {
    border-bottom-right-radius: 10px;
  }

  ${(props) =>
    props.isClickable === false &&
    `
    color: ${colors.disabled};
    opacity: 0.5;
    pointer-events: none;
    
    &:hover {
      font-size: ${fontSizes.sizes1};
    }
  

`}

  @media${devices.laptop} {
    font-size: ${fontSizes.sizes3};

    &:hover {
      font-size: ${fontSizes.sizes4};
    }
  }
`;

export const OpenedCardContainer = styled(CardItem)`
  width: 90%;
  max-width: 500px;
  height: auto;
  padding: 0;
  position: fixed;
  top: 100px;
  z-index: 4;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.5);

  .opened-card_img {
    width: 100%;
    height: auto;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  .opened-card-title-container {
    margin: 10;
    background: linear-gradient(
      90deg,
      rgba(255, 249, 245, 1) 0%,
      rgba(255, 236, 221, 1) 100%
    );
    z-index: 5;
    margin-top: -6px;
    width: 100%;
    padding: 10px;
    border-bottom: solid 1px rgba(115, 74, 64, 0.1);
  }
  .opened-card_title {
    font-size: ${fontSizes.sizes1};
    color: ${colors.darkTextColor};
    margin: 0;
    text-align: center;
  }

  .opened-card-detail-container {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 249, 245, 1) 0%,
      rgba(255, 236, 221, 1) 100%
    );
    padding: 10px;
    margin: 0;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 0.7rem;
  }
  .opened_description {
    margin: 0;
    text-align: center;
    font-size: 14px;
    color: ${colors.darkTextColor};
    font-weight: bold;
  }

  @media ${devices.tablet} {
    max-width: 640px;
    top: 80px;

    .opened-card_img {
      height: 400px;
    }
    .opened-card-title-container {
      padding: 12px;
    }
    .opened-card_title {
      font-size: ${fontSizes.sizes4};
    }
    .opened-card-detail-container {
      padding: 16px;
    }
    .opened_description {
      font-size: ${fontSizes.sizes1};
    }
  }

  @media ${devices.laptop} {
    top: 100px;

    .opened-card-title-container {
    }
  }
  @media ${devices.laptopL} {
    top: 120px;

    .opened-card_img {
      height: 440px;
    }

    .opened-card_title {
      font-size: 22px;
    }
    .opened_description {
      font-size: ${fontSizes.sizes1};
    }
  }

  @media ${devices.desktop} {
    max-width: 800px;
  }
`;
