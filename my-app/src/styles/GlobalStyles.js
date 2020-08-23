import { createGlobalStyle, ThemeProvider } from "styled-components";
import square from "../assets/square.png";
import squareDark from "../assets/square-dark.png";
const darkTheme = {
  text: "grey",
  background: `${squareDark}`,
  color1: "#140f07",
  color2: "#102243",
  color3: "#095ca8",
  color4: "#089eff",
  color5: "#08ecff",
  textColorSvg: "lime !important",
};

const lightTheme = {
  text: "#000",
  background: `${square}`,
  color1: "#091e35",
  color2: "#12405e",
  color3: "#1d6b8e",
  color4: "#29a1c3",
  color5: "#2bc8c8",
  textColorSvg: "black !important",
};

const GlobalStyle = createGlobalStyle`

:root {
  --color1-main: ${(props) => props.theme.color1};
  --color2-main: ${(props) => props.theme.color2};
  --color3-main: ${(props) => props.theme.color3};
  --color4-main: ${(props) => props.theme.color4};
  --color5-main: ${(props) => props.theme.color5};
  --color1-secondary: #140f07;
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
  color: ${(props) => props.theme.text};
  height: 100vh;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Noto Sans", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url( ${(props) => props.theme.background});
}`;

export { GlobalStyle, darkTheme, lightTheme };
