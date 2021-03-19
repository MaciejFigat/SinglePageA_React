import { createGlobalStyle } from 'styled-components'

const darkTheme = {
  text: '#CFD8DC',
  background: '#334e68',
  color1: '#102a43',
  color2: '#243b53',
  color3: '#334e68',
  color4: '#486581',
  color5: '#627d98',
  color6: '#2e67bd',
  colorHoverLink: '#06acf1',
  textColorSvg: '#CFD8DC !important',
  colorShadow1: '#03e9f4',
  colorShadow2: '#486581',
  colorShadow3: '#236677',
  colorShadow4: '#1bb9ac',
  colorShadow5: '#88b4b4',
}

const lightTheme = {
  text: '#000',

  background: '#ECEFF1',

  // .color3 {color: #123f75;}
  // .color4 {color: #126a79;}
  // .color5 {color: #17a090;}
  color1: '#CFD8DC',
  color2: '#B0BEC5',
  color3: '#90A4AE',
  color4: '#90A4AE',
  color5: '#90A4AE',
  color6: '#4a86e0',
  colorHoverLink: '#62A2ED',
  textColorSvg: '#1A1A1A !important',
  colorShadow1: '#1d6b8e',
  colorShadow2: '#1d6b8e',
  colorShadow3: '#236677',
  colorShadow4: '#1bb9ac',
  colorShadow5: '#88b4b4',
}
// color1: "#efce6e",
//   color2: "#e8cd7f",
//   color3: "#1d5886",
//   color4: "126a79",
//   color5: "#17a090",
//   colorHoverLink: "#62A2ED",
//   textColorSvg: "#1A1A1A !important",
//   colorShadow1: "#1d6b8e",
//   colorShadow2: "#1d6b8e",
// "#BAD6E5"#FECA1E "#1d6b8e"#29a1c3#2bc8c8 #62A2ED #bb7629
// min-height: 100vh - HTML // min-height: 100vh; - body

// display: grid;
// grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
const GlobalStyle = createGlobalStyle`
html {font-size: 100%;
   
  } 
body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

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
  --color6-main: ${(props) => props.theme.color6};
  --color1-secondary: ${(props) => props.theme.colorHoverLink};
  --color2-secondary: ${(props) => props.theme.textColorSvg};
  --color3-secondary: #2e67bd;
  --color4-secondary: #089eff;
  --color5-secondary: #08ecff;
  --color1-shadow: ${(props) => props.theme.colorShadow3};
  --color2-shadow: ${(props) => props.theme.colorShadow4};
  --color3-shadow: ${(props) => props.theme.colorShadow1};
  --color4-shadow: ${(props) => props.theme.colorShadow2};
  --color5-shadow: ${(props) => props.theme.colorShadow5};
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
  
  
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Noto Sans", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  background:  ${(props) => props.theme.background};
}`
// background-image: url( ${(props) => props.theme.background});
export { GlobalStyle, darkTheme, lightTheme }
