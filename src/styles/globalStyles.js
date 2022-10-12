import { createGlobalStyle } from "styled-components";

export const devices = {
  mobileS: `(min-width: 320px)`,
  mobileM: `(min-width: 375px)`,
  mobileL: `(min-width: 425px)`,
  mobileXL: `(min-width: 580px)`,
  tablet: `(min-width: 768px)`,
  laptop: `(min-width: 1024px)`,
  laptopL: `(min-width: 1440px)`,
  laptopXL: `(min-width: 1940px)`,
  desktop: `(min-width: 2560px)`,
};
export const colors = {
  primary: "#f7e7e4",
  secondary: "#C98474",
  openedCardTextBackground: "#ab7265",
  darkTextColor: "#472D2D",
  brown: "#734a40",
  darkBrown: "#2d2626",
  textColor: "black",
<<<<<<< HEAD
  disabled: "#807c7c",
=======
>>>>>>> 7378fcb2148bb13e9114f439773ace9924b29e7c
};

export const fontSizes = {
  sizes0: "14px",
  sizes1: "16px",
  sizes2: "17px",
  sizes3: "18px",
  sizes4: "20px",
  sizes5: "25px",
  sizes6: "30px",
  sizes7: "40px",
  sizes8: "60px",
  sizes9: "80px",
  sizes10: "90px",
  sizes11: "100px",
};

export const directionColumnCenter = `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const directionRowCenter = `
display: flex;
justify-content: center;
align-items: center;
`;

const GlobalStyle = createGlobalStyle`
body {
  overflow-x: scroll;
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  background: ${colors.pageBackground};
  
  @media(min-width: 300px){
    width: 100%;
    overflow-x: visible ;
  }
}

.page-heading {
  font-family: "Dancing Script", cursive;
  text-align: center;
  margin: 0;
  font-size: ${fontSizes.sizes7};
  color: ${colors.darkTextColor};

  @media ${devices.tablet} {
      font-size: ${fontSizes.sizes8}; 
  }

  @media ${devices.laptopL} {
      font-size: ${fontSizes.sizes9};
  }
}

html {
scroll-behavior: smooth;
}

.container {
flex: 1 1 100%;
}

@media print{
  body {
    background-color: white;
    color: black;
  }
}

`;

export default GlobalStyle;
