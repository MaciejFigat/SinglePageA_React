import { createGlobalStyle, ThemeProvider } from "styled-components";
// import square from "../assets/square.png";
// import squareDark from "../assets/square-dark.png";
const darkTheme = {
  text: "#1E2A2D",
  // background: `${squareDark}`,
  background: "#1A1A1A",
  color1: "#1A5E25",
  color2: "#102243",
  color3: "#095ca8",
  color4: "#089eff",
  color5: "#08ecff",
  colorHoverLink: "#bad6e5",
  textColorSvg: "#1E2A2D !important",
};
// #140f07 #091e35 #0D355A
const lightTheme = {
  text: "#000",
  // background: `${square}`,
  background: "#BAD6E5",
  color1: "#FECA1E",
  color2: "#12405e",
  color3: "#1d6b8e",
  color4: "#29a1c3",
  color5: "#2bc8c8",
  colorHoverLink: "#62A2ED",
  textColorSvg: "#1A1A1A !important",
};

const GlobalStyle = createGlobalStyle`
html {font-size: 100%;} 

h1, h2, h3, h4, h5 {
  margin: 2.75rem 0 1.05rem;
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
  line-height: 1.15;
}

h1 {
  
  font-size: 3.052em;
}

h2 {font-size: 2.441em;}

h3 {font-size: 1.953em;}

h4 {font-size: 1.563em;}

h5 {font-size: 1.25em;}
:root {
  --color1-main: ${(props) => props.theme.color1};
  --color2-main: ${(props) => props.theme.color2};
  --color3-main: ${(props) => props.theme.color3};
  --color4-main: ${(props) => props.theme.color4};
  --color5-main: ${(props) => props.theme.color5};
  --color1-secondary: ${(props) => props.theme.colorHoverLink};
  --color2-secondary: #102243;
  --color3-secondary: #095ca8;
  --color4-secondary: #089eff;
  --color5-secondary: #08ecff;
  a, a:link, a:visited{
    text-decoration: none;
    color: ${(props) => props.theme.text};
  }
  .svgPath {
    fill: ${(props) => props.theme.textColorSvg};
    
  }
  .svgPathLogo{
    stroke: ${(props) => props.theme.textColorSvg};
  }
 
}
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
body {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.65;
  color: ${(props) => props.theme.text};
  height: 100vh;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Noto Sans", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  background:  ${(props) => props.theme.background};
}`;
// background-image: url( ${(props) => props.theme.background});
export { GlobalStyle, darkTheme, lightTheme };
