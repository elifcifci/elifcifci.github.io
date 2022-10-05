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
  // pageBackground: "linear-gradient(to bottom, #232526, #3a3d40)",
  // primary: "#01411C",
  // secondary: "#6B8E23",
  // tertiary: "#2d2626",
  // textColor: "#fff",
  // borderColor: "#fff",
  // mobileNavbarBackground: "#fff",
  // gray: "#303841",
  // darkGray: "#2e2727",
  // lightGray: "#808080",
  // cardTitle: "rgb(45, 38, 38)",
  // cardDetail: "#131215",
  // openedCardBackground: "rgba(0, 0, 0, 0.8)",

  pageBackground: "white",
  primary: "#C98474",
  secondary: "#472D2D",
  tertiary: "#2d2626",
  textColor: "black",
  borderColor: "#C98474",
  mobileNavbarBackground: "#fff",
  gray: "#303841",
  darkGray: "#2e2727",
  lightGray: "#808080",
  cardTitle: "rgb(45, 38, 38)",
  cardDetail: "#131215",
  openedCardBackground: "rgba(0, 0, 0, 0.8)",
};

export const fontSizes = {
  xs: "16px",
  s: "17px",
  m: "18px",
  lm: "20px",
  l: "25px",
  xl: "30px",
  xxl: "40px",
  xxxl: "100px",
};

export const directionColumnCenter = `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  font-size: 40px;
  color: ${colors.secondary};

  @media ${devices.tablet} {
      font-size: 60px; 
  }

  @media ${devices.laptopL} {
      font-size: 80px;
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